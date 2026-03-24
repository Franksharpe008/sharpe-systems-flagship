#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import subprocess
from pathlib import Path

import ChatTTS
import numpy as np
import soundfile as sf

RATE = 24000
PROJECT_ROOT = Path(__file__).resolve().parents[1]
WORKSPACE_ROOT = PROJECT_ROOT.parent
PROFILE_PATH = WORKSPACE_ROOT / "output" / "magnus-max-voice-demo" / "speaker_profiles.json"
OUTPUT_DIR = PROJECT_ROOT / "public" / "media"
MANIFEST_PATH = OUTPUT_DIR / "voice-manifest-v4.json"
VOICE_STACK_DIR = Path.home() / "SharpeAI" / "OpenClawVoice"

LINES = [
    {
        "speaker": "magnus",
        "slug": "operator-brief-v4",
        "display_text": (
            "Sharpe Systems does not build thin brochure pages. [uv_break] "
            "It builds business fronts that feel clear, expensive, and ready to move a qualified buyer."
        ),
    },
    {
        "speaker": "max",
        "slug": "operator-systems-v4",
        "display_text": (
            "Every route should carry the same pressure. [uv_break] "
            "Sharper proof. Cleaner motion. Stronger trust. A next move that already makes sense."
        ),
    },
]

SPEAKER_SETTINGS = {
    "magnus": {"prompt": "[oral_2][speed_4][break_6]", "temperature": 0.19},
    "max": {"prompt": "[oral_2][speed_4][break_7]", "temperature": 0.22},
}


def to_mono_float32(wav: np.ndarray) -> np.ndarray:
    array = np.asarray(wav, dtype=np.float32)
    if array.ndim == 2:
        if array.shape[0] == 1:
            array = array[0]
        elif array.shape[1] == 1:
            array = array[:, 0]
        else:
            array = array.mean(axis=1)
    return np.ascontiguousarray(array)


def build_infer_params(chat: ChatTTS.Chat, speaker_embedding: str, speaker: str) -> ChatTTS.Chat.InferCodeParams:
    settings = SPEAKER_SETTINGS[speaker]
    return ChatTTS.Chat.InferCodeParams(
        spk_emb=speaker_embedding,
        prompt=settings["prompt"],
        temperature=settings["temperature"],
        top_P=0.7,
        top_K=20,
        show_tqdm=False,
    )


def export_mp3(input_wav: Path, output_mp3: Path) -> None:
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(input_wav),
            "-codec:a",
            "libmp3lame",
            "-q:a",
            "2",
            str(output_mp3),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    profiles = json.loads(PROFILE_PATH.read_text())

    VOICE_STACK_DIR.mkdir(parents=True, exist_ok=True)
    os.chdir(VOICE_STACK_DIR)
    chat = ChatTTS.Chat()
    chat.load(compile=False)

    manifest: list[dict[str, str | float]] = []
    refine_params = ChatTTS.Chat.RefineTextParams(show_tqdm=False)

    for line in LINES:
      speaker = line["speaker"]
      profile = profiles[speaker]
      infer_params = build_infer_params(chat, str(profile["embedding"]), speaker)
      wav = chat.infer(
          [line["display_text"]],
          stream=False,
          split_text=False,
          skip_refine_text=True,
          params_infer_code=infer_params,
          params_refine_text=refine_params,
      )[0]
      audio = to_mono_float32(wav)
      wav_path = OUTPUT_DIR / f"{line['slug']}.wav"
      mp3_path = OUTPUT_DIR / f"{line['slug']}.mp3"
      sf.write(wav_path, audio, RATE)
      export_mp3(wav_path, mp3_path)
      manifest.append(
          {
              "speaker": speaker,
              "slug": line["slug"],
              "wav": str(wav_path),
              "mp3": str(mp3_path),
              "duration_seconds": round(len(audio) / RATE, 2),
              "median_pitch_hz": float(profile["median_pitch_hz"]),
          }
      )

    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2))
    print(json.dumps({"ok": True, "manifest": str(MANIFEST_PATH), "files": manifest}, indent=2))


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
from __future__ import annotations

import subprocess
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
MEDIA_ROOT = PROJECT_ROOT / "public" / "media"
DERIVED_ROOT = MEDIA_ROOT / "derived"
STOCK_ROOT = MEDIA_ROOT / "stock"
FUSION_ROOT = MEDIA_ROOT / "fusion"


def run_ffmpeg(args: list[str]) -> None:
    subprocess.run(["ffmpeg", "-y", *args], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def main() -> None:
    DERIVED_ROOT.mkdir(parents=True, exist_ok=True)

    run_ffmpeg(
        [
            "-stream_loop",
            "1",
            "-i",
            str(STOCK_ROOT / "boardroom-meeting.mp4"),
            "-t",
            "12",
            "-vf",
            "fps=24,eq=saturation=1.1:contrast=1.06:brightness=-0.04,scale=1440:810,crop=1280:720,curves=preset=lighter,vignette",
            "-an",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            str(DERIVED_ROOT / "command-grid.mp4"),
        ]
    )

    run_ffmpeg(
        [
            "-stream_loop",
            "1",
            "-i",
            str(STOCK_ROOT / "laptop-focus.mp4"),
            "-t",
            "12",
            "-vf",
            "fps=24,eq=saturation=1.05:contrast=1.08:brightness=-0.05,scale=1440:810,crop=1280:720,tblend=all_mode='average':all_opacity=0.18,vignette",
            "-an",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            str(DERIVED_ROOT / "proof-cascade.mp4"),
        ]
    )

    run_ffmpeg(
        [
            "-stream_loop",
            "1",
            "-i",
            str(STOCK_ROOT / "tunnel-motion.mp4"),
            "-t",
            "10",
            "-vf",
            "fps=24,setpts=1.12*PTS,eq=saturation=1.18:contrast=1.12:brightness=-0.02,colorbalance=bs=0.05:rs=-0.03,scale=1440:810,crop=1280:720",
            "-an",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            str(DERIVED_ROOT / "signal-pulse.mp4"),
        ]
    )

    run_ffmpeg(
        [
            "-loop",
            "1",
            "-i",
            str(FUSION_ROOT / "signal-portrait.png"),
            "-t",
            "10",
            "-vf",
            "scale=1600:900,zoompan=z='min(zoom+0.0007,1.14)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=240:s=1280x720,eq=saturation=1.06:contrast=1.05,format=yuv420p",
            "-an",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            str(DERIVED_ROOT / "portrait-sweep.mp4"),
        ]
    )

    run_ffmpeg(
        [
            "-loop",
            "1",
            "-i",
            str(FUSION_ROOT / "authority-bridge.png"),
            "-t",
            "11",
            "-vf",
            "scale=1660:934,zoompan=z='min(zoom+0.0006,1.18)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=264:s=1280x720,eq=saturation=1.08:contrast=1.12:brightness=-0.04,colorbalance=bs=0.03:gs=-0.01,format=yuv420p",
            "-an",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            str(DERIVED_ROOT / "authority-orbit.mp4"),
        ]
    )

    run_ffmpeg(
        [
            "-loop",
            "1",
            "-i",
            str(FUSION_ROOT / "boardroom-night.png"),
            "-t",
            "12",
            "-vf",
            "scale=1680:945,zoompan=z='if(lte(on,144),1+on*0.00055,1.08-(on-144)*0.00024)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=288:s=1280x720,eq=saturation=1.03:contrast=1.1:brightness=-0.05,vignette,format=yuv420p",
            "-an",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            str(DERIVED_ROOT / "boardroom-nocturne.mp4"),
        ]
    )

    run_ffmpeg(
        [
            "-loop",
            "1",
            "-i",
            str(FUSION_ROOT / "command-floor.png"),
            "-t",
            "10",
            "-vf",
            "scale=1600:900,zoompan=z='min(zoom+0.00075,1.15)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=240:s=1280x720,eq=saturation=1.1:contrast=1.08:brightness=-0.03,curves=preset=color_negative,negate,curves=preset=lighter,format=yuv420p",
            "-an",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            str(DERIVED_ROOT / "command-floor-loop.mp4"),
        ]
    )

    print("Rendered section media to", DERIVED_ROOT)


if __name__ == "__main__":
    main()

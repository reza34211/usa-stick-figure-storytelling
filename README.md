# USA Stick Figure Storytelling (Remotion)

Visual-first 2D stick figure animation. **প্রথমে শুধু Animation**; Voiceover (MP3) ও Subtitle (SRT) পরে যুক্ত হবে।
Video: 1920×1080, 16:9, 30 FPS, MP4.

## Android ফোন থেকে কাজের উপায়

**ক) Preview/Final Video তৈরি (সবচেয়ে সহজ)**
1. GitHub app/Chrome-এ Repository খুলুন → **Actions** → **Render Video** → **Run workflow**
2. `preview` (দ্রুত) অথবা `final` (Full HD) বেছে নিন
3. শেষ হলে Run-এর নিচে **Artifacts** থেকে MP4 (zip) ডাউনলোড করুন

**খ) Codespaces-এ Live Preview**
1. Repository → **Code** → **Codespaces** → **Create codespace** (Chrome-এ "Desktop site" চালু করুন)
2. Terminal-এ: `npm start` → Port 3000 খুলবে (Remotion Studio)

## ফোল্ডার
- `src/scenes/registry.ts` – Scene তালিকা (duration, camera, transition)
- `src/scenes/*.tsx` – প্রতিটি Scene-এর Component (Sample: `TemplateScene.tsx`, সরিয়ে আসল Scene দিন)
- `src/components/StickFigure.tsx` – Character (expression, walk, arm pose)
- `src/components/Backgrounds.tsx` – Street, Room, Office
- `src/components/Camera.tsx` – Zoom, Pan, Shake
- `src/components/VoiceoverAudio.tsx` + `src/config.ts` – Audio প্রস্তুত
- `src/components/Subtitles.tsx` + `src/config.ts` – SRT Subtitle প্রস্তুত

## Phase 2: Voiceover ও Subtitle
1. MP3 → `public/audio/voiceover.mp3`, SRT → `public/subtitles/captions.srt` (GitHub-এ Add file → Upload files)
2. `src/config.ts`-এ `AUDIO.voiceover = "audio/voiceover.mp3"` এবং `SUBTITLES.srtFile = "subtitles/captions.srt"`
3. Scene-এর `durationSec` Audio-র সঙ্গে মিলিয়ে Adjust করে আবার Render করুন

## Commands
`npm start` · `npm run typecheck` · `npm run preview` · `npm run render`

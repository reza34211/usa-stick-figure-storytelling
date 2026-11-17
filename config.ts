// =====================================================================
// config.ts - Global settings. Change audio/subtitle paths HERE only.
// =====================================================================
export const VIDEO = {
  fps: 30,
  width: 1920, // 9:16 হলে width 1080, height 1920
  height: 1080,
  background: "#FAF7F0",
};

// ---- PHASE 2: Voiceover (first render: keep null) ----
export const AUDIO = {
  voiceover: null as string | null, // e.g. "audio/voiceover.mp3" (file in public/audio/)
  voiceoverOffsetSec: 0, // push audio later/earlier if needed
  volume: 1,
};

// ---- PHASE 2: Subtitles (first render: keep null) ----
export const SUBTITLES = {
  srtFile: null as string | null, // e.g. "subtitles/captions.srt" (file in public/subtitles/)
  fontSize: 64,
  color: "#FFFFFF",
  background: "rgba(0,0,0,0.65)",
  position: "bottom" as "top" | "center" | "bottom",
  bottomOffsetPx: 90,
  maxWidthPct: 86,
  timeOffsetSec: 0,
};

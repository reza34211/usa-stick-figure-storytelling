import {VIDEO} from "./config";
import {scenes} from "./scenes/registry";

export const toFrames = (sec: number) => Math.max(1, Math.round(sec * VIDEO.fps));

export const transitionFramesFor = (index: number): number => {
  if (index >= scenes.length - 1) return 0;
  const t = scenes[index].transition;
  if (!t || t.type === "cut") return 0;
  return toFrames(t.durationSec ?? 0.5);
};

// Scene N starts at the sum of previous durationSec, so audio sync never drifts.
export const sequenceFrames = (index: number) =>
  toFrames(scenes[index].durationSec) + transitionFramesFor(index);

export const sceneStartFrame = (index: number) =>
  scenes.slice(0, index).reduce((s, sc) => s + toFrames(sc.durationSec), 0);

export const totalFrames = () => scenes.reduce((s, sc) => s + toFrames(sc.durationSec), 0);

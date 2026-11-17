import React from "react";
import {AbsoluteFill} from "remotion";
import {TransitionSeries, linearTiming} from "@remotion/transitions";
import {fade} from "@remotion/transitions/fade";
import {slide} from "@remotion/transitions/slide";
import {wipe} from "@remotion/transitions/wipe";
import {VIDEO} from "./config";
import {scenes} from "./scenes/registry";
import type {TransitionType} from "./scenes/registry";
import {Camera} from "./components/Camera";
import {VoiceoverAudio} from "./components/VoiceoverAudio";
import {Subtitles} from "./components/Subtitles";
import {sequenceFrames, transitionFramesFor} from "./timing";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const presentationFor = (t: TransitionType): any => {
  if (t === "slide-left") return slide({direction: "from-right"});
  if (t === "slide-right") return slide({direction: "from-left"});
  if (t === "wipe") return wipe({direction: "from-left"});
  return fade();
};

export const MainVideo: React.FC = () => {
  const items: React.ReactNode[] = [];
  scenes.forEach((s, i) => {
    const Comp = s.component;
    items.push(
      <TransitionSeries.Sequence key={`s-${s.id}`} durationInFrames={sequenceFrames(i)}>
        <Camera {...(s.camera ?? {type: "none"})}>
          <Comp />
        </Camera>
      </TransitionSeries.Sequence>
    );
    const tf = transitionFramesFor(i);
    if (tf > 0 && s.transition) {
      items.push(
        <TransitionSeries.Transition
          key={`t-${s.id}`}
          presentation={presentationFor(s.transition.type)}
          timing={linearTiming({durationInFrames: tf})}
        />
      );
    }
  });

  return (
    <AbsoluteFill style={{backgroundColor: VIDEO.background}}>
      <TransitionSeries>{items}</TransitionSeries>
      <VoiceoverAudio />
      <Subtitles />
    </AbsoluteFill>
  );
};

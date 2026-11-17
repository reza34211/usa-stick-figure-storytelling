import React from "react";
import {Composition} from "remotion";
import {MainVideo} from "./Video";
import {VIDEO} from "./config";
import {totalFrames} from "./timing";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Main"
    component={MainVideo}
    durationInFrames={totalFrames()}
    fps={VIDEO.fps}
    width={VIDEO.width}
    height={VIDEO.height}
  />
);

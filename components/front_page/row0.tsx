import type { NextPage } from "next";

import { TwitchPlayer } from "react-twitch-embed";

import { Button } from "@/components/ui/button";
import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  Paragraph,
} from "@/components/typography";

const Row1: NextPage = () => {
  return (
    <div className="grid grid-cols-1 border-t bg-primary lg:grid-cols-2 border-stone-400 dark:border-stone-600">
      <div className="px-2 py-6 border-b group md:p-2 lg:p-4 border-stone-400 dark:border-stone-600 md:border-b-0 md:border-r hover:bg-scanlines hover:bg-accent">
        <div className="px-1 py-4 pl-2 ml-20 md:p-4 lg:p-4 lg:pl-0">
          <HeadingH2 className="text-base group-hover:text-background group-hover:font-bold">
            Highlighted Twitch Clips
          </HeadingH2>
          <div className="twitch-player-container">
            <TwitchPlayer
              // channel="unelectableairwaves"
              collection="Fx6m6WjAdhfwig"
              autoplay={false}
              muted
              width={540}
              height={480}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-0">
        <img
          src="/screenshots-vertical/Twitch-unelectable-text-600x720_vertical.png"
          alt="UnelectableAirwaves Alien"
        />
      </div>
    </div>
  );
};

export default Row1;

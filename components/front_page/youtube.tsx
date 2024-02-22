import type { NextPage } from "next";

import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  Paragraph,
} from "@/components/typography";

const Row1: NextPage = () => {
  const router = useRouter();
  const yt = useRef(null); // Initialize the ref
  const channelID = "UC7u4D4F6H1itVNM9wHe6PCw";
  var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

  async function getYTJson() {
    try {
      const reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
      const channelID = "UC7u4D4F6H1itVNM9wHe6PCw";
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          reqURL + channelID
        )}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseJson = await response.json();
      console.log("Response JSON:", responseJson); // Debug: Log the response JSON

      if (responseJson.items && responseJson.items.length > 0) {
        const link = responseJson.items[0].link;
        const id = link.substr(link.indexOf("=") + 1);
        console.log("Video ID:", id); // Debug: Log the video ID

        if (yt.current) {
          yt.current.src = `https://youtube.com/embed/${id}?controls=0&showinfo=0&rel=0`;
        }
      } else {
        console.error("No items found in the response");
      }
    } catch (error) {
      console.error("getYTJson error:", error);
    }
  }

  // Call getYTJson when the component mounts
  useEffect(() => {
    getYTJson();
  }, []);

  return (
    <iframe
      ref={yt} // Assign the ref to the iframe
      id="youtube_video"
      width="600"
      height="340"
      frameBorder="0"
      allowFullScreen
      title="Unelectable Latest YouTube Video"
    ></iframe>
  );
};

export default Row1;

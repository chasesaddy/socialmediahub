import type { NextApiRequest, NextApiResponse } from "next";

import { Client, GatewayIntentBits } from "discord.js";
import { getStrapi } from "@/lib/getStrapi";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { channel_id } = await getStrapi("/social-media-discord");

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  client.once("ready", async () => {
    const channel = await client.channels.fetch(channel_id);
    const messages = await channel.messages.fetch({ limit: 25 });
    res.status(200).json(messages);
    // res.status(200).json(messages.map((message) => message));
    client.destroy();
  });

  client.login(process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN);
}

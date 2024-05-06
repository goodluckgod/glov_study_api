import OpenAI from "openai";
import { HttpFunction } from "@google-cloud/functions-framework";

import { TModuleExport } from "../../common/types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chat: HttpFunction = async (req, res) => {
  const message = req.body.message;

  if (!message) {
    res.status(400);
    res.json({ error: "Message is required", status: 400 });
    return;
  }

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "user", content: message },
      { role: "system", content: "You are a chatbot for clothes shopping" },
    ],
    model: "gpt-3.5-turbo",
  });

  res.json({ message: chatCompletion.choices[0].message.content });
};

export default {
  chat,
} as TModuleExport;

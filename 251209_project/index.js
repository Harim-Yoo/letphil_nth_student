import "dotenv/config";
import { OpenRouter } from "@openrouter/sdk";
import readline from "readline/promises";

const API_KEY = process.env.OPENROUTER_API_KEY;

const openrouter = new OpenRouter({
    apiKey: API_KEY
});

async function startChat() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal:false
    });

    console.log("We start the chat for learning Javascript. Try 'exit' or 'quit' to finish")

    while (true) {
        const userInput = await rl.question("\n Your Chat: ");
        if (userInput.toLowerCase() === "exit" || userInput.toLowerCase() === "quit") {
            console.log("Good Bye");
            rl.close();
            break;
        }
        try {
            process.stdout.write("AI : ");
            const stream = await openrouter.chat.send({
                model: "arcee-ai/trinity-mini:free",
                messages: [
                    {
                        role: "system",
                        content: "You are Javascript Expert. Teach the user onto which pseudo-code would help build what user asks."
                    },
                    {
                        role: "user",
                        content: userInput
                    }
                ],
                stream: true
            });

            for await (const chunk of stream) {
                const content = chunk.choices[0]?.delta?.content;
                if (content) {
                    process.stdout.write(content)
                }
            }
            process.stdout.write("\n");
        } catch(error) {
            console.error(`\n Error: ${error.message}`);
        }
    }
}

startChat();
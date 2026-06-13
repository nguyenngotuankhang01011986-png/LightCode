import type { Command } from "./types";
export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a New Conversation",
    value: "/new",
  },
  {
    name: "exit",
    description: "Quit The Application",
    value: "/exit",
    action: (ctx) => {
      ctx.exit();
    },
  },
];
import type { Command } from "./types";
export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a New Conversation",
    value: "/new",
    action: (ctx) => {
      ctx.toast.show({ message: "Starting new Conversation..."});
    },
  },
  {
    name: "agents",
    description: "Switch agents",
    value: "/agents",
  },
  {
    name: "models",
    description: "Select All Models for Generation",
    value: "/models",
  },
  {
    name: "sessions",
    description: "Browse past sessions",
    value: "/sessions",
  },
  {
    name: "themes",
    description: "Change Color Themes",
    value: "/themes",
  },
  {
    name: "login",
    description: "Log In",
    value: "/login",
  },
  {
    name: "logout",
    description: "Log Out",
    value: "/logout",
  },
  {
    name: "upgrade",
    description: "Buy More Credit",
    value: "/upgrade",
  },
  {
    name: "usage",
    description: "Open billing portal In your Browser",
    value: "/usage",
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

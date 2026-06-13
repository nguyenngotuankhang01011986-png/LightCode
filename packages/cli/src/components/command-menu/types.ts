export type CommandContext = {
  exit: [] => void;
};

export type Command = {
  type: string;
  description: string;
  value: string;
  action?: (ctx: CommandContext) => void | Promise<void>;
};
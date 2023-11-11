import pino, { Logger } from "pino";

const logLevel = {
  "*": "silent",
  home: "info",
};

const logLevels = new Map<string, string>(Object.entries(logLevel));

export function getLogLevel(logger: string): string {
  return logLevels.get(logger) || logLevels.get("*") || "info";
}

export function getLogger(name: string): Logger {
  return pino({ name, level: getLogLevel(name) });
}

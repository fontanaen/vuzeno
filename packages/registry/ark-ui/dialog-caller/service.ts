import type { DialogCallerService } from "./types";

let hostService: DialogCallerService | null = null;

export function bindDialogCallerHostService(service: DialogCallerService | null) {
  hostService = service;
}

export function getDialogCallerHostService() {
  return hostService;
}

export function requireDialogCallerHostService() {
  if (!hostService) {
    throw new Error("[DialogCaller] DialogCaller.Host is not mounted. Add <DialogCaller.Host /> to your app root.");
  }

  return hostService;
}

import { useSyncExternalStore } from "react";
import { invitation } from "@/data/invitation";

export type Wish = { from: string; message: string; ts?: number };

const STORAGE_KEY = "invitation:wishes:v1";

function readStored(): Wish[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

let stored: Wish[] = readStored();
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot(): Wish[] {
  return stored;
}

function getServerSnapshot(): Wish[] {
  return [];
}

export function addWish(w: Wish) {
  stored = [{ ...w, ts: Date.now() }, ...stored];
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    /* ignore */
  }
  emit();
}

/** Combines seed wishes from the data file with user-submitted ones. */
export function useWishes(): Wish[] {
  const user = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [...user, ...invitation.wishes];
}
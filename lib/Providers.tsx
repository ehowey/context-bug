"use client";

import { AppProvider } from "./AppContext";

import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return <AppProvider>{children}</AppProvider>;
}

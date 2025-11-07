// types/next-themes.d.ts
// Put this file in your project (e.g. ./types/next-themes.d.ts)

declare module "next-themes" {
  import * as React from "react";

  export interface ThemeProviderProps {
    children?: React.ReactNode;
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
    storageKey?: string;
    value?: Record<string, unknown>;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;

  export type UseThemeResult = {
    theme?: string | null;
    setTheme: (theme?: string | null) => void;
    systemTheme?: string | null;
    resolvedTheme?: string | null;
  };

  export function useTheme(): UseThemeResult;
  export function useThemeValue(): UseThemeResult;
}

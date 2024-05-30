"use client";
import React from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const SwitchTheme = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="absolute bottom-4 right-12 rounded space-x-1 border bg-background">
      <Button
        onClick={() => setTheme("light")}
        variant={theme === "light" ? "secondary" : "ghost"}
        size={"sm"}
        className="rounded h-8 space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <p>light</p>
      </Button>
      <Button
        onClick={() => setTheme("dark")}
        variant={theme === "dark" ? "secondary" : "ghost"}
        size={"sm"}
        className={"rounded h-8 space-x-1"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
        <p>dark</p>
      </Button>
    </div>
  );
};

export default SwitchTheme;

"use client";

import React from "react";
import Link from "next/link";
import { badgeVariants } from "./ui/badge";

export const SocialCard = () => {
  return (
    <div className="py-1">
      <div className="space-x-2">
        <Link
          href={"https://github.com/adii1203"}
          className={badgeVariants({
            variant: "custom_green",
            className: "flex items-center gap-1",
          })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span>github</span>
        </Link>
        <Link
          href={"mailto:aditya32ft@gmail.com"}
          className={badgeVariants({
            variant: "custom_gray",
            className: "flex items-center justify-center gap-1",
          })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>mail</span>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/aditya1203"}
          className={badgeVariants({
            variant: "custom_yellow",
            className: "flex items-center justify-center gap-1",
          })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <p>linkedin</p>
        </Link>
        <Link
          href={"https://twitter.com/adiidev12"}
          className={badgeVariants({
            variant: "custom_red",
            className: "flex items-center justify-center gap-1",
          })}>
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="14"
            height="14">
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
          </svg>
          <p>twitter</p>
        </Link>
      </div>
    </div>
  );
};

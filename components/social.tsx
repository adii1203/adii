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
            variant: "custom_gray",
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
            variant: "custom_red",
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
            variant: "custom_blue",
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
            variant: "custom_gray",
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
        <Link
          target="_blank"
          href={"https://peerlist.io/adiii"}
          className={badgeVariants({
            variant: "custom_green",
            className: "flex items-center justify-center gap-1",
          })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 0C2.667 0 0 2.667 0 12s2.673 12 12 12s12-2.667 12-12S21.327 0 12 0m8.892 20.894c-1.57 1.569-4.247 2.249-8.892 2.249s-7.322-.68-8.892-2.25C1.735 19.522 1.041 17.3.89 13.654A40 40 0 0 1 .857 12c0-1.162.043-2.201.13-3.13c.177-1.859.537-3.278 1.106-4.366c.284-.544.62-1.006 1.013-1.398s.854-.729 1.398-1.013C5.592 1.524 7.01 1.164 8.87.988C9.799.9 10.838.858 12 .858c4.645 0 7.322.68 8.892 2.248s2.25 4.246 2.25 8.894s-.681 7.325-2.25 8.894M20.538 3.46C19.064 1.986 16.51 1.357 12 1.357c-4.513 0-7.067.629-8.54 2.103C1.986 4.933 1.357 7.487 1.357 12c0 4.511.63 7.065 2.105 8.54C4.936 22.014 7.49 22.643 12 22.643s7.064-.629 8.538-2.103s2.105-4.029 2.105-8.54s-.63-7.065-2.105-8.54M14.25 16.49a6.1 6.1 0 0 1-2.442.59v2.706H10.45v.357H6.429V5.57h.357V4.214h5.676c3.565 0 6.467 2.81 6.467 6.262c0 2.852-1.981 5.26-4.68 6.013zm-1.788-8.728H10.45v5.428h2.011c1.532 0 2.802-1.2 2.802-2.714s-1.27-2.714-2.802-2.714zm.901 4.351c.117-.239.186-.502.186-.78c0-1.01-.855-1.857-1.945-1.857h-.296V8.62h1.154c1.09 0 1.945.847 1.945 1.857c0 .705-.422 1.323-1.044 1.637zm4.104 1.493q.064-.096.123-.194a5.7 5.7 0 0 0 .526-1.103a6 6 0 0 0 .11-.362q.032-.113.06-.227a6 6 0 0 0 .073-.41c.01-.068.025-.134.032-.203q.037-.31.038-.63c0-3.198-2.687-5.763-5.967-5.763H7.286v14.572h4.022v-3.048h1.154c1.43 0 2.747-.488 3.778-1.303a6 6 0 0 0 .46-.406l.1-.105q.16-.163.308-.337q.064-.08.126-.162q.123-.156.233-.319m-5.005 1.775H10.45v3.048H8.143V5.57h4.319c2.837 0 5.11 2.211 5.11 4.905s-2.273 4.905-5.11 4.905z"></path>
          </svg>

          <p>peerlist</p>
        </Link>
      </div>
    </div>
  );
};

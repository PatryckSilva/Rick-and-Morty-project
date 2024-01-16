"use client";

import * as React from "react";

import { useTheme } from "next-themes";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const dropdownData = [
    {
      label: "Light",
      onClick: () => setTheme("light"),
    },
    {
      label: "Dark",
      onClick: () => setTheme("dark"),
    },
    {
      label: "System",
      onClick: () => setTheme("system"),
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={`border-transparent border-rick_blue hover:border-rick_blue/50 dark:bg-rick_blue dark:hover:bg-rick_blue/50 `}
      >
        <Button variant="outline" size="icon">
          <BsCloudSunFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-rick_blue dark:text-white" />
          <BsCloudMoonFill className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`box_shadow_blue py-2 select-none dark:!shadow-none dark:!border-rick_blue`}
        align="end"
      >
        {dropdownData.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className={`focus:bg-rick_blue/25 `}
            onClick={item.onClick}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

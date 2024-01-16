"use client";

import * as React from "react";

import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Favorites Characters",
    href: "/",
    description: "A list of characters that the user has marked as favorites.",
  },
  {
    title: "Favorites Locations",
    href: "/",
    description: "A list of locations that the user has marked as favorites.",
  },
  {
    title: "Favorites Episodes",
    href: "/",
    description: "A list of episodes that the user has marked as favorites.",
  },
];

export function NavigationHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`!border-rick_blue !border`}>
            Favorites
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[350px] gap-3 p-4 overflow-y-auto max-h-screen">
              {components.map(component => (
                <ListItem
                  className={`dark:hover:!bg-rick_blue/10 hover:!bg-rick_blue/25`}
                  onClick={e => console.log(e)}
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport className="dark:!border-rick_blue -left-[50%] dark:!shadow-none box_shadow_blue" />
    </NavigationMenu>
  );
}

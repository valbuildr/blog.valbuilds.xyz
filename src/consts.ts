import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Valentine's Blog",
  DESCRIPTION: "A blog that I might use. Probably not.",
  EMAIL: "hi@valbuilds.xyz",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A blog that I might use. Probably not.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Posts from my rotted brain.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "What I've been up to.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Bluesky",
    HREF: "https://bsky.app/profile/valbuilds.xyz",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/valbuildr",
  },
  {
    NAME: "Website",
    HREF: "https://valbuilds.xyz",
  },
];

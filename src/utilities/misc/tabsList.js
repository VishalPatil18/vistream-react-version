import { icons } from "./icons";

const tabsList = [
  {
    id: 0,
    title: "home",
    icon: icons.home,
    isPrivate: false,
    to: "/",
  },
  {
    id: 1,
    title: "explore",
    icon: icons.explore,
    isPrivate: false,
    to: "/explore",
  },
  {
    id: 2,
    title: "playlist",
    icon: icons.playlist,
    isPrivate: true,
    to: "/playlist",
  },
  {
    id: 3,
    title: "watchlater",
    icon: icons.bookmarked,
    isPrivate: true,
    to: "/watchlater",
  },
  {
    id: 4,
    title: "liked",
    icon: icons.liked,
    isPrivate: true,
    to: "/liked",
  },
  {
    id: 5,
    title: "history",
    icon: icons.history,
    isPrivate: true,
    to: "/history",
  },
  {
    id: 6,
    title: "settings",
    icon: icons.settings,
    isPrivate: true,
    to: "/settings",
  },
];

export { tabsList };

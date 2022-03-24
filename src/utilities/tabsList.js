import { icons } from "../utilities";

const tabsList = [
  {
    id: 0,
    title: "Home",
    icon: icons.home,
    isPrivate: false,
    to: "/",
  },
  {
    id: 1,
    title: "Explore",
    icon: icons.explore,
    isPrivate: false,
    to: "/explore",
  },
  {
    id: 2,
    title: "Playlists",
    icon: icons.playlist,
    isPrivate: true,
    to: "/playlist",
  },
  {
    id: 3,
    title: "Watch Later",
    icon: icons.bookmarked,
    isPrivate: true,
    to: "/watchlater",
  },
  {
    id: 4,
    title: "Liked",
    icon: icons.liked,
    isPrivate: true,
    to: "/liked",
  },
  {
    id: 5,
    title: "History",
    icon: icons.history,
    isPrivate: true,
    to: "/history",
  },
  {
    id: 6,
    title: "Settings",
    icon: icons.settings,
    isPrivate: true,
    to: "/settings",
  },
];

export { tabsList };

import { icons } from "../utilities";

const tabsList = [
  {
    id: 0,
    title: "Home",
    icon: icons.home,
    to: "/",
  },
  {
    id: 1,
    title: "Explore",
    icon: icons.explore,
    to: "/explore",
  },
  {
    id: 2,
    title: "Playlists",
    icon: icons.playlist,
    to: "/playlist",
  },
  {
    id: 3,
    title: "Watch Later",
    icon: icons.bookmarked,
    to: "/watchlater",
  },
  {
    id: 4,
    title: "Liked",
    icon: icons.liked,
    to: "/liked",
  },
  {
    id: 5,
    title: "History",
    icon: icons.history,
    to: "/history",
  },
  {
    id: 6,
    title: "Settings",
    icon: icons.settings,
    to: "/settings",
  },
];

export { tabsList };

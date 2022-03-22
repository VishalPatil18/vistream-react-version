import { icons } from "../utilities";

const tabsList = [
  {
    id: 0,
    title: "Home",
    icon: icons.home,
    active: true,
    to: "/",
  },
  {
    id: 1,
    title: "Explore",
    icon: icons.explore,
    active: false,
    to: "/explore",
  },
  {
    id: 2,
    title: "Playlists",
    icon: icons.playlist,
    active: false,
    to: "/playlist",
  },
  {
    id: 3,
    title: "Watch Later",
    icon: icons.bookmarked,
    active: false,
    to: "/watchlater",
  },
  {
    id: 4,
    title: "Liked",
    icon: icons.liked,
    active: false,
    to: "/liked",
  },
  {
    id: 5,
    title: "History",
    icon: icons.history,
    active: false,
    to: "/history",
  },
  {
    id: 6,
    title: "Settings",
    icon: icons.settings,
    active: false,
    to: "/settings",
  },
];

export { tabsList };

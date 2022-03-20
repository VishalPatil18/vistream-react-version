import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: uuid(),
    email: "bablutailor@gmail.com",
    password: "babluTailor123",
    username: "Bablu",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    email: "buntyzingawala@gmail.com",
    password: "buntyZingawala123",
    username: "Bunty",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    email: "lallanyadav@gmail.com",
    password: "lallanYadav123",
    username: "Lallan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

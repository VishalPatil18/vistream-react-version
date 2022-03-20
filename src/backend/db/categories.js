import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "action",
    imageSrc: "https://staticg.sportskeeda.com/editor/2019/03/cedbb-15534102082658-800.jpg",
    likes: "12",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique error sit ipsam natus explicabo recusandae accusamus temporibus quod impedit.",
  },
  {
    _id: uuid(),
    categoryName: "adventure",
    imageSrc: "https://www.gamingscan.com/wp-content/uploads/2020/09/Best-Games-Like-Tomb-Raider-1200x900.jpg",
    likes: "7",
    description:
      "Alias tempore eius mollitia animi quasi! Neque voluptatem deserunt porro tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    _id: uuid(),
    categoryName: "arcade-and-puzzle",
    imageSrc: "https://i.pinimg.com/originals/da/fb/bc/dafbbca71a06d6b5877364f5942fa320.png",
    likes: "8",
    description:
      "Similique error sit ipsam natus explicabo recusandae accusamus temporibus quod impedit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    _id: uuid(),
    categoryName: "racing",
    imageSrc: "https://static.digit.in/default/a264b186e1890ec0e41a1b9770ee62343110deaa.jpeg?tr=w-1200",
    likes: "22",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempore eius mollitia animi quasi! Neque voluptatem deserunt porro tenetur.",
  },
  {
    _id: uuid(),
    categoryName: "simulation",
    imageSrc: "https://staticg.sportskeeda.com/editor/2019/03/cedbb-15534102082658-800.jpg",
    likes: "4.2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempore eius mollitia animi quasi! Neque voluptatem deserunt porro tenetur.",
  },
  {
    _id: uuid(),
    categoryName: "sports",
    imageSrc: "https://media.pocketgamer.com/artwork/ra-86030-1615817872/pgcom-highlight-25best-sports-games-switch-1010x505.jpg",
    likes: "18.9",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempore eius mollitia animi quasi! Neque voluptatem deserunt porro tenetur.",
  },
];

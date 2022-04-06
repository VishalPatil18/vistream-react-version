const FILTER_TAGS = [
  {
    title: "All",
    type: "CLEAR",
    payloadValue: "",
    payloadKey: "",
  },
  {
    title: "Latest",
    type: "SORT_BY",
    payloadValue: "newest",
    payloadKey: "sortBy",
  },
  {
    title: "Oldest",
    type: "SORT_BY",
    payloadValue: "oldest",
    payloadKey: "sortBy",
  },
  {
    title: "Most Viewed",
    type: "SORT_BY",
    payloadValue: "views",
    payloadKey: "sortBy",
  },
  {
    title: "Most Liked",
    type: "SORT_BY",
    payloadValue: "likes",
    payloadKey: "sortBy",
  },
  {
    title: "Under 4 minutes",
    type: "DURATION",
    payloadValue: "400",
    payloadKey: "duration",
  },
  {
    title: "4-20 minutes",
    type: "DURATION",
    payloadValue: "400-2000",
    payloadKey: "duration",
  },
  {
    title: "Over 20 minutes",
    type: "DURATION",
    payloadValue: "2000",
    payloadKey: "duration",
  },
];

export { FILTER_TAGS };

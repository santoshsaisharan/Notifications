import markWebber from "./images/avatar-mark-webber.webp";
import angelaGray from "./images/avatar-angela-gray.webp";
import jacobThompson from "./images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "./images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "./images/avatar-kimberly-smith.webp";
import nathanPeterson from "./images/avatar-nathan-peterson.webp";
import annaKim from "./images/avatar-anna-kim.webp";
import chess from "./images/image-chess.webp";

export const people = [
  {
    id: 1,
    fname: "mark",
    lname: "webber",
    avatar: markWebber,
    activity: "reacted to your recent post",
    post: "My first tournament today!",
    read: false,
    time: "1m ago",
    image: false,
    imagePath: "",
  },
  {
    id: 2,
    fname: "angela",
    lname: "gray",
    avatar: angelaGray,
    activity: "followed you",
    post: "",
    read: false,
    time: "5m ago",
    image: false,
    imagePath: "",
  },
  {
    id: 3,
    fname: "jacob",
    lname: "thompson",
    avatar: jacobThompson,
    activity: "has joined your group",
    post: "Chess Club",
    read: false,
    time: "1 day ago",
    image: false,
    imagePath: "",
  },
  {
    id: 4,
    fname: "rizky",
    lname: "hasanuddin",
    avatar: rizkyHasanuddin,
    activity: "sent you a private message",
    post: "",
    comment:
      "Hello, thanks for setting up the Chess Club. I've been a memeber for a few weeks now and I'm already having lots of fun and improving my game.",
    read: true,
    time: "5 days ago",
    image: false,
    imagePath: "",
  },
  {
    id: 5,
    fname: "kimberly",
    lname: "smith",
    avatar: kimberlySmith,
    activity: "commented on your picture",
    post: "",
    read: true,
    time: "1 week ago",
    image: true,
    imagePath: chess,
  },
  {
    id: 6,
    fname: "nathan",
    lname: "peterson",
    avatar: nathanPeterson,
    activity: "reacted to your recent post",
    post: "5 end-game startegies to increase your win rate",
    read: true,
    time: "2 weeks ago",
    image: false,
    imagePath: "",
  },
  {
    id: 7,
    fname: "anna",
    lname: "kim",
    avatar: annaKim,
    activity: "left the group",
    post: "Chess Club",
    read: true,
    time: "2 weeks ago",
    image: false,
    imagePath: "",
  },
];

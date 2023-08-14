import Main1 from "../../assets/projects/wolfminute/main.png";
import Main2 from "../../assets/projects/friendzone/main.png";
import Main3 from "../../assets/projects/retailing/main.png";
import Main4 from "../../assets/projects/watchlist/main.png";
import Main5 from "../../assets/projects/product-cards/main.png";
import Main6 from "../../assets/projects/word-game/main.png";
import Sub1 from "../../assets/projects/wolfminute/sub.png";
import Sub2 from "../../assets/projects/friendzone/sub.png";
import Sub3 from "../../assets/projects/retailing/main.png";
import Sub4 from "../../assets/projects/watchlist/sub.png";
import Sub5 from "../../assets/projects/product-cards/main.png";
import Sub6 from "../../assets/projects/word-game/sub.png";

export const projectsData = [
  {
    id: 1,
    title: "Wolf Minute",
    image: {
      main: "v1691980407/Portfolio/WolfMinute/main-5_apknbu.jpg",
      sub: "v1691980418/Portfolio/WolfMinute/sub-2_ztciqd.jpg",
    },
    category: "rails",
    description:
      "A meeting scheduler web app that analyzes optimal meeting times based on team members' availability. It also records the meeting and gives you a summary and key points of the meeting.",
    source: "https://github.com/jukemori/wolf-minute",
    tags: [
      "devicon-html5-plain",
      "devicon-sass-original",
      "devicon-bootstrap-plain",
      "devicon-javascript-plain",
      "devicon-ruby-plain",
      "devicon-rails-plain",
      "devicon-postgresql-plain",
    ],
  },
  {
    id: 2,
    title: "FriendZone",
    image: { main: Main2, sub: Sub2 },
    category: "rails",
    description:
      "An innovative app that allows users to book friend for a specified duration, providing personalized experiences and connections. Whether for social events or casual outings, it offers a safe and convenient platform to select and hire a friend-like companion.",
    source: "https://github.com/jukemori/FriendZone",
    tags: [
      "devicon-html5-plain",
      "devicon-sass-original",
      "devicon-bootstrap-plain",
      "devicon-javascript-plain",
      "devicon-ruby-plain",
      "devicon-rails-plain",
      "devicon-postgresql-plain",
    ],
  },
  {
    id: 3,
    title: "Retail App",
    image: { main: Main3, sub: Sub3 },
    category: "react",
    description: "Mockup dynamic retail app made by react and typescript",
    source: "https://github.com/jukemori/react-retailing-app",
    tags: ["devicon-typescript-plain", "devicon-react-original"],
  },
  {
    id: 4,
    title: "Movie Watchlist",
    image: { main: Main4, sub: Sub4 },
    category: "rails",
    description:
      "An entertainment app which allows user to get infomation about the movies and create their own watchlist.",
    source: "https://github.com/jukemori/rails-watch-list",
    tags: [
      "devicon-html5-plain",
      "devicon-sass-original",
      "devicon-bootstrap-plain",
      "devicon-javascript-plain",
      "devicon-ruby-plain",
      "devicon-rails-plain",
      "devicon-postgresql-plain",
    ],
    url: "https://jap-watchlist.herokuapp.com/",
  },
  {
    id: 5,
    title: "Product Cards",
    image: { main: Main5, sub: Sub5 },
    category: "react",
    description:
      "A dynamic product page that lists various products and allows users to vote for their favorite products.",
    source: "https://github.com/jukemori/react-product-cards",
    tags: ["devicon-typescript-plain", "devicon-react-original"],
  },
  {
    id: 6,
    title: "Longest word game",
    image: { main: Main6, sub: Sub6 },
    category: "rails",
    description:
      "Longest Word Game is a challenging and educational word game where players are tasked with finding valid English words from a set of given letters. The game tests players' vocabulary skills and ability to form words using the provided letters.",
    source: "https://github.com/jukemori/rails-longest-word-game",
    tags: ["devicon-rails-plain", "devicon-postgresql-plain"],
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "react",
  },
  {
    name: "rails",
  },
];

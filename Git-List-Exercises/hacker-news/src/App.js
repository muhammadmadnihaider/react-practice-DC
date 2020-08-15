import React from "react";
import Navbar from "./components/Navabar";
import List from "./components/List";

const listItems = [
  {
    id: 1,
    title: "Mozilla's Uncertain Future",
    siteAddress: "(civilityandtruth.com)",
    articleDetails: {
      points: 63,
      author: "jonathankoren",
      time: "2 hours",
      comments: 40,
    },
  },
  {
    id: 1,
    title: "Mozilla's Uncertain Future",
    siteAddress: "(civilityandtruth.com)",
    articleDetails: {
      points: 63,
      author: "jonathankoren",
      time: "2 hours",
      comments: 40,
    },
  },
  {
    id: 1,
    title: "Mozilla's Uncertain Future",
    siteAddress: "(civilityandtruth.com)",
    articleDetails: {
      points: 63,
      author: "jonathankoren",
      time: "2 hours",
      comments: 40,
    },
  },
  {
    id: 1,
    title: "Mozilla's Uncertain Future",
    siteAddress: "(civilityandtruth.com)",
    articleDetails: {
      points: 63,
      author: "jonathankoren",
      time: "2 hours",
      comments: 40,
    },
  },
  {
    id: 1,
    title: "Mozilla's Uncertain Future",
    siteAddress: "(civilityandtruth.com)",
    articleDetails: {
      points: 63,
      author: "jonathankoren",
      time: "2 hours",
      comments: 40,
    },
  },
];

const App = () => {
  return (
    <div className="container-fluid width">
      <Navbar />
      <List list={listItems} />
    </div>
  );
};

export default App;

import { useState } from "react";
import Story from "./components/Story";
import stories from "./data/stories";

function App() {
  const mappedStories = stories.map((element) => {
    return <Story key={element.uid} {...element}></Story>;
  });

  return <div className="w-10/12 p-2 m-auto text-center bg-gray-200">{mappedStories}</div>;
}

export default App;

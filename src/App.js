import { useState, useEffect } from "react";
import StoryAdder from "./components/StoryAdder";
import Story from "./components/Story";
import stories from "./data/stories";

function App() {
  const [myStories, setMyStories] = useState(stories);
  const [newStory, setNewStory] = useState({
    uid: Date.now(),
    priority: myStories.length + 1,
    as: "",
    want: "",
    complexity: 3,
    po: "unseen",
    status: "future",
  });
  function handleChange(event) {
    setMyStories((prevState) => {
      const newState = [...prevState];
      newState[event.target.parentNode.id - 1][event.target.name] = event.target.value;
      return newState;
    });
  }

  function handleStoryAdderSubmit(event) {
    event.preventDefault();
    setMyStories((prevState) => {
      const newState = [...prevState];
      newState.splice(parseInt(newStory.priority) - 1, 0, newStory);
      setNewStory({
        uid: Date.now(),
        priority: myStories.length + 1,
        as: "",
        want: "",
        complexity: 3,
        po: "unseen",
        status: "future",
      });
      return newState;
    });
  }

  function handleStoryAdderChange(event) {
    setNewStory((prevState) => {
      return { ...prevState, [event.target.id]: event.target.value };
    });
  }

  const mappedMyStories = myStories.map((element) => {
    return <Story key={element.uid} {...element} onChange={handleChange}></Story>;
  });

  return (
    <main className="w-10/12 p-2 m-auto text-center">
      <StoryAdder
        newStory={newStory}
        onSubmit={handleStoryAdderSubmit}
        onChange={handleStoryAdderChange}
      />
      {mappedMyStories}
    </main>
  );
}

export default App;

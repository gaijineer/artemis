import {
  getMockElement,
  mockFib,
  mockPOComments,
  mockScrumStatus,
  mockScrumStoryRoles,
  mockWords,
} from "./components/mockData";
import { useState, useEffect } from "react";
import { getFromDB, postToDB, putToDB, delFromDB } from "./components/apiReq";
import StoryAdder from "./components/StoryAdder";
import StoryForm from "./components/StoryForm";

function App() {
  const [stories, setStories] = useState([{}]);
  const [newStory, setNewStory] = useState({
    as: getMockElement(mockScrumStoryRoles).join(),
    complexity: getMockElement(mockFib)[0],
    po: getMockElement(mockPOComments).join(""),
    priority: Math.floor(Math.random() * 10 + 1),
    status: getMockElement(mockScrumStatus).join(""),
    want: getMockElement(mockWords, 5).join(" "),
    dev: getMockElement(mockWords, 100).join(" "),
  });

  function handleNewStoryChange(event) {
    setNewStory((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function handleChange(event) {
    setStories((prevState) => {
      return prevState.map((element) => {
        return event.target.parentNode.id != element._id
          ? element
          : { ...element, [event.target.name]: event.target.value };
      });
    });
  }

  function handleClick(storyID) {
    delFromDB(storyID)
      .then(() => {
        return getFromDB(stories);
      })
      .then((stories) => {
        setStories(stories);
      });
  }

  function handleNewStorySubmit() {
    postToDB(newStory)
      .then(() => {
        setNewStory({
          as: getMockElement(mockScrumStoryRoles).join(),
          complexity: getMockElement(mockFib)[0],
          po: getMockElement(mockPOComments).join(""),
          priority: Math.floor(Math.random() * 10 + 1),
          status: getMockElement(mockScrumStatus).join(""),
          want: getMockElement(mockWords, 5).join(" "),
        });
      })
      .then(() => {
        return getFromDB(stories);
      })
      .then((stories) => {
        setStories(stories);
      });
  }

  function handleSubmit(storyID) {
    const storyToPut = stories.filter((element) => {
      return element._id == storyID;
    });
    putToDB(storyToPut[0])
      .then(() => {
        return getFromDB(stories);
      })
      .then((stories) => setStories(stories));
  }

  // api on component mount
  useEffect(() => {
    getFromDB(stories).then((stories) => {
      setStories(stories);
    });
  }, []);

  const mappedStories = stories.map((element, i) => {
    const bgColorClassNames = ["bg-red-100", "bg-orange-100", "bg-purple-100", "bg-emerald-100"];
    return (
      <StoryForm
        key={element._id}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
        {...element}
        bgColor={bgColorClassNames[i % 4]}
      />
    );
  });

  return (
    <main className="w-10/12 p-2 m-auto text-center">
      <StoryAdder
        newStory={newStory}
        onChange={handleNewStoryChange}
        onSubmit={handleNewStorySubmit}
      />
      {mappedStories}
    </main>
  );
}
export default App;

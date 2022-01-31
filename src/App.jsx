import { useState, useEffect } from "react";

import StoryAdder from "./components/StoryAdder";
import StoryForm from "./components/StoryForm";

// Firebase
import { db } from "./config/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

const colRef = collection(db, "stories");
const defaultNewStory = {
  devDetail: "",
  poStat: "unseen",
  priority: 0,
  role: "",
  storyStat: "new",
  title: "",
  complexity: 0,
};
function App() {
  // States
  const [stories, setStories] = useState([]);

  const [newStory, setNewStory] = useState({
    devDetail: "",
    poStat: "unseen",
    priority: 0,
    role: "",
    storyStat: "new",
    title: "",
    complexity: 0,
    defaultNewStory,
  });

  // Side effects
  useEffect(() => {
    const q = query(colRef, orderBy("priority"));

    //TODO Unsubscribe
    const unsub = onSnapshot(q, (snapshot) => {
      const storiesFromDB = [];
      snapshot.docs.forEach((element) => {
        storiesFromDB.push({ id: element.id, ...element.data() });
      });
      setStories(storiesFromDB);
    });
    return () => {
      unsub();
    };
  }, []);

  // Handlers for StoryAdder

  function handleNewStoryChange(event) {
    setNewStory((prevState) => {
      if (event.target.name == "priority") {
        return { ...prevState, priority: parseInt(event.target.value) };
      } else {
        return { ...prevState, [event.target.name]: event.target.value };
      }
    });
  }

  function addStory() {
    addDoc(colRef, newStory)
      .then(() => {
        setNewStory(defaultNewStory);
      })
      .catch((err) => {
        alert(err);
      });
  }

  // Handlers for existing stories
  function handleChange(event) {
    console.log(event.target.name);
    setStories((prevState) => {
      let storyID =
        event.target.name != "devDetail"
          ? event.target.parentNode.parentNode.id
          : event.target.parentNode.id;
      console.log(storyID);
      return prevState.map((element) => {
        if (storyID != element.id) {
          return element;
        } else if (event.target.name == "priority") {
          return { ...element, priority: parseInt(event.target.value) };
        } else {
          return { ...element, [event.target.name]: event.target.value };
        }
      });
    });
  }

  function updateStory(id) {
    const docRef = doc(db, "stories", id);
    let storyToUpdate;
    for (const i of stories) {
      if (i.id == id) {
        storyToUpdate = i;
        break;
      }
    }
    updateDoc(docRef, storyToUpdate);
  }

  function delStory(id) {
    const docRef = doc(db, "stories", id);
    deleteDoc(docRef);
  }

  // Map

  const mappedStories = stories.map((element, i) => {
    const bgColorClassNames = ["bg-red-100", "bg-orange-100", "bg-purple-100", "bg-emerald-100"];
    return (
      <StoryForm
        isStoryAdder={false}
        key={element.id}
        onChange={handleChange}
        onSubmit={updateStory}
        onClick={delStory}
        bgColor={bgColorClassNames[i % 4]}
        {...element}
      />
    );
  });

  return (
    <main className="w-10/12 p-2 m-auto text-center">
      <StoryAdder newStory={newStory} onChange={handleNewStoryChange} onSubmit={addStory} />
      {mappedStories}
    </main>
  );
}
export default App;

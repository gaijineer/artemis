function apiHandlers(event) {
  console.log("apiHandlers received event:", event);

  switch (event.type) {
    case "click":
      handleStoryDEL();
      break;
    case "submit":
      handleStoryPOST();
      break;
    case "change":
      handleStoryPUT();
      break;
    default:
      handleStoryGET();
      break;
  }

  function handleStoryGET() {
    console.log("GET:");
    //TODO get, setState
  }

  function handleStoryPOST() {
    console.log("POST:", event.target.id);
    //TODO post entire state, get, setState
  }

  function handleStoryPUT() {
    console.log("PUT:", event.target.id);
    //    setStories((prevState) => {
    //      return { ...prevState, [event.target.id]: event.target.value };
    //    });
    //    const filteredStory = stories.filter((element) => element._id == event.target.parentNode.id);
    //    if (filteredStory.length == 1) {
    //      putToDB(filteredStory[0]);
    //    } else {
    //      throw new Error("The system selected multiple stories with the same ID");
    //    }
  }

  function handleStoryDEL() {
    console.log("DEL:", event.target.parentNode.id);
    //TODO send id to del, get, setState
  }
}
export default apiHandlers;

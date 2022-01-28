const API_EP = "https://krat.es/02b86a57d8fdd1ca0f38";

function getFromDB() {
  return fetch(API_EP, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((unsortedStories) => {
      return unsortedStories.sort((a, b) => {
        return a.priority - b.priority;
      });
    })
    .catch((err) => {
      alert(err.message);
    });
}

function postToDB(newStory) {
  console.log("new story:", newStory);
  return fetch(API_EP, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newStory),
  }).catch((err) => {
    alert(err.message);
  });
}
function putToDB(story) {
  return fetch(API_EP + "/" + story._id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...story }),
  });
}

function delFromDB(storyID) {
  alert(storyID + " will be delted!");
  return fetch(API_EP + "/record/" + storyID, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then(() => {
    return "something";
  });
}

export { getFromDB, postToDB, putToDB, delFromDB };

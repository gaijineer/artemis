import StoryForm from "./StoryForm";

function StoryAdder(props) {
  return (
    <div>
      <StoryForm
        isStoryAdder={true}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        onClick={() => {}}
        {...props.newStory}
      />
    </div>
  );
}

export default StoryAdder;

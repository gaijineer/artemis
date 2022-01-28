import StoryForm from "./StoryForm";

function StoryAdder(props) {
  return (
    <StoryForm
      onChange={props.onChange}
      onSubmit={props.onSubmit}
      onClick={() => {}}
      {...props.newStory}
    />
  );
}

export default StoryAdder;

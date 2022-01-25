import { BiAddToQueue } from "react-icons/bi";

function StoryAdder(props) {
  return (
    <form className="flex flex-nowrap">
      <label className="flex-auto" htmlFor="as">
        As a...
      </label>
      <input
        className="flex-auto"
        id="as"
        name="as"
        type="text"
        placeholder="enter role"
        value={props.newStory.as}
        onChange={props.onChange}
      />
      <label className="flex-auto" htmlFor="priority">
        Priority
      </label>
      <input
        className="flex-auto"
        id="priority"
        name="priority"
        type="text"
        value={props.newStory.priority}
        onChange={props.onChange}
      />
      <label className="flex-auto" htmlFor="want">
        Want to...
      </label>
      <input
        className="flex-auto"
        id="want"
        name="want"
        type="text"
        value={props.newStory.want}
        onChange={props.onChange}
      />
      <label className="flex-auto" htmlFor="complexity">
        Complexity
      </label>
      <input
        className="flex-auto"
        id="complexity"
        name="complexity"
        type="text"
        value={props.newStory.complexity}
        onChange={props.onChange}
      />
      <BiAddToQueue onClick={props.onSubmit} />
    </form>
  );
}

export default StoryAdder;

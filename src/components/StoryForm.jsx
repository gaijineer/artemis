import { FaPlus, FaTrash, FaSave } from "react-icons/fa";

function StoryForm(props) {
  const id = props.id;
  return (
    <form
      className={"rounded-t-3xl mx-auto my-5 p-2 " + props.bgColor}
      key={props.id}
      id={props.id}
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(props.id);
      }}
    >
      <div className="flex items-center justify-around w-full p-2 m-2 border-black border-solid">
        <input
          type="number"
          placeholder="Priority"
          name="priority"
          className="min-w-0 p-2 grow-0 shrink basis-1/12"
          onChange={props.onChange}
          value={props.priority}
        />
        <input
          type="text"
          placeholder="As a..."
          name="role"
          className="min-w-0 p-2 grow-0 shrink basis-1/6"
          onChange={props.onChange}
          value={props.role}
        />
        <input
          required
          placeholder="I want to..."
          className="min-w-0 p-2 grow-0 shrink basis-1/3"
          name="title"
          type="text"
          onChange={props.onChange}
          value={props.title}
        />
        <select
          className="p-2 grow-0 shrink basis-1/12"
          id="complexity"
          name="complexity"
          onChange={props.onChange}
          value={props.complexity}
        >
          <option value="0">Complexity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="13">13</option>
          <option value="21">21</option>
          <option value="34">34</option>
          <option value="55">55</option>
          <option value="89">89</option>
          <option value="144">144</option>
          <option value="233">233</option>
          <option value="377">377</option>
          <option value="610">610</option>
          <option value="987">987</option>
          <option value="1597">1597</option>
          <option value="2584">2584</option>
          <option value="4181">4181</option>
        </select>
        <select
          className="p-2 grow-0 shrink basis-1/12"
          name="poStat"
          id="poStat"
          onChange={props.onChange}
          value={props.poStat}
        >
          <option value="unseen">Unseen</option>
          <option value="priorityUp">Prioritize</option>
          <option value="priorityDown">De-prioritize</option>
          <option value="ok">OK</option>
          <option value="complexityUp">Complexity ↓</option>
          <option value="complexityDown">Complexity ↑</option>
          <option value="complexityDown">Done</option>
        </select>
        <select
          className="p-2 grow-0 shrink basis-1/12"
          name="storyStat"
          id="storyStat"
          onChange={props.onChange}
          defaultValue={props.storyStat}
        >
          <option className="text-center" value="new">
            New
          </option>
          <option className="text-center" value="wip">
            WIP
          </option>
          <option className="text-center" value="next">
            Will do next
          </option>
          <option className="text-center" value="later">
            Will do later
          </option>
          <option className="text-center" value="future">
            Will do in future
          </option>
          <option className="text-center" value="waiting">
            Waiting
          </option>
          <option className="text-center" value="help">
            Help
          </option>
          <option className="text-center" value="wtf">
            WTF
          </option>
          <option className="text-center" value="done">
            Done
          </option>
        </select>

        <button type="submit" className="min-w-0 text-3xl grow-0 shrink max-w-min">
          {props.isStoryAdder ? <FaPlus /> : <FaSave />}
        </button>
        {props.isStoryAdder ? null : (
          <button
            type="button"
            onClick={() => {
              props.onClick(props.id);
            }}
            className="text-3xl grow-0 shrink max-w-min"
          >
            <FaTrash />
          </button>
        )}
      </div>
      <textarea
        className="w-full p-3 m-2 bg-gray-100"
        rows="3"
        name="devDetail"
        form={props.id}
        value={props.devDetail}
        placeholder="Development details..."
        onChange={props.onChange}
      ></textarea>
    </form>
  );
}

export default StoryForm;

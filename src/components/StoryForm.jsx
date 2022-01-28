import { MdOutlineDeleteForever, MdSave } from "react-icons/md";

function StoryForm(props) {
  const id = props.id;
  return (
    <form
      className={"mx-auto my-5 " + props.bgColor}
      key={props._id}
      id={props._id}
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(props._id);
      }}
    >
      <div className="flex items-center justify-around w-full p-2 m-2 border-black border-solid">
        <input
          type="number"
          name="priority"
          className="min-w-0 p-2 grow-0 shrink basis-1/12"
          onChange={props.onChange}
          value={props.priority}
        />
        <input
          type="text"
          name="as"
          className="min-w-0 p-2 grow-0 shrink basis-1/6"
          onChange={props.onChange}
          value={props.as}
        />
        <input
          required
          className="min-w-0 p-2 grow-0 shrink basis-1/3"
          name="want"
          type="text"
          onChange={props.onChange}
          value={props.want}
        />
        <select
          className="p-2 grow-0 shrink basis-1/12"
          id="complexity"
          name="complexity"
          onChange={props.onChange}
          value={props.complexity}
        >
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
          name="po"
          id="po"
          onChange={props.onChange}
          value={props.po}
        >
          <option value="unseen">Unseen</option>
          <option value="priorityUp">Prioritize</option>
          <option value="priorityDown">De-prioritize</option>
          <option value="ok">OK</option>
          <option value="complexityUp">Complex-ify</option>
          <option value="complexityDown">De-complex</option>
        </select>
        <select
          className="p-2 grow-0 shrink basis-1/12"
          name="status"
          id="status"
          onChange={props.onChange}
          defaultValue={props.status}
        >
          <option className="text-center" value="wip">
            Doing
          </option>
          <option className="text-center" value="next">
            Next
          </option>
          <option className="text-center" value="later">
            Later
          </option>
          <option className="text-center" value="future">
            Future
          </option>
          <option className="text-center" value="help">
            Waiting
          </option>
          <option className="text-center" value="waiting">
            Future
          </option>
        </select>

        <button type="submit" className="min-w-0 text-4xl grow-0 shrink max-w-min">
          <MdSave />
        </button>
        <button
          type="button"
          onClick={() => {
            props.onClick(props._id);
          }}
          className="text-4xl grow-0 shrink max-w-min"
        >
          <MdOutlineDeleteForever />
        </button>
      </div>
      <textarea
        className="w-full p-2 m-2"
        rows="3"
        name="dev"
        form={props.id}
        value={props.dev}
        onChange={props.onChange}
      ></textarea>
    </form>
  );
}

export default StoryForm;

import { MdOutlineDragHandle } from "react-icons/md";

function Story(props) {
  return (
    <div
      id={props.priority}
      className="flex items-center p-2 m-2 border-2 border-black border-solid"
    >
      <p className="flex-grow-0 flex-shrink-0 align-center basis-1/12">{props.priority}</p>
      <p className="flex-grow-0 flex-shrink-0 basis-1/4">As {props.as}</p>
      <p className="flex-grow-0 flex-shrink-0 basis-1/4">{props.want}</p>
      <select
        className="w-1/12 "
        name="complexity"
        id="complexity"
        value={props.complexity}
        onChange={props.onChange}
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
      </select>
      <select className=" basis-1/4" name="po" id="po" value={props.po} onChange={props.onChange}>
        <option value="unseen">Unseen</option>
        <option value="prioritize">Prioritize</option>
        <option value="de-prioritize">De-prioritize</option>
        <option value="ok">OK</option>
        <option value="complex-ify">Complex-ify</option>
        <option value="de-complex">De-complex</option>
      </select>
      <select
        className="basis-1/4"
        name="status"
        id="status"
        value={props.status}
        onChange={props.onChange}
      >
        <option className="text-center" value="doing">
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
        <option className="text-center" value="waiting">
          Waiting
        </option>
        <option className="text-center" value="future">
          Future
        </option>
      </select>
      <MdOutlineDragHandle className="text-6xl basis-1/12" />
    </div>
  );
}

export default Story;

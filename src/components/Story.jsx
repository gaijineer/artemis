import { useState } from "react";
import { MdOutlineDragHandle } from "react-icons/md";

function Story(props) {
  const [myStates, setMyStates] = useState({
    complexity: props.complexity,
    po: props.po,
    status: props.status,
  });

  function handleChange(event) {
    setMyStates((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="flex p-2 m-2 bg-gray-200 border-2 border-black border-solid w-wit">
      <p className="flex-auto">{props.priority}</p>
      <p className="flex-auto">As {props.as}</p>
      <p className="flex-auto">{props.want}</p>
      <select name="complexity" id="complexity" value={myStates.complexity} onChange={handleChange}>
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
      <select name="po" id="po" value={myStates.po} onChange={handleChange}>
        <option value="unseen">Unseen</option>
        <option value="prioritize">Prioritize</option>
        <option value="de-prioritize">De-prioritize</option>
        <option value="ok">OK</option>
        <option value="complex-ify">Complex-ify</option>
        <option value="de-complex">De-complex</option>
      </select>
      <select name="status" id="status" value={myStates.status} onChange={handleChange}>
        <option value="doing">Doing</option>
        <option value="next">Next</option>
        <option value="later">Later</option>
        <option value="future">Future</option>
        <option value="waiting">Waiting</option>
        <option value="future">Future</option>
      </select>
      <MdOutlineDragHandle draggable className="text-4xl" />
    </div>
  );
}

export default Story;

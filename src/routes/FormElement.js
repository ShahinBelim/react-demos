import React from 'react';

function FormElements(props) {
  console.log("props : ", props);
  return (
    <div>
      <textarea value={props.data.textareaValue} onChange={props.data.changeAreaValue} /> <br />
      <label>
        Select yout color
            <select value={props.data.color} onChange={props.data.changeColor}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="pink">pPink</option>
        </select>
        <p>Selected color: {props.data.color} </p>
        <div> <input type="submit" value="Submit" /> </div>
      </label>
    </div>
  )
}

export default FormElements;
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(name);
    console.log(name);
  };
  const changeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={changeHandler} />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Form;

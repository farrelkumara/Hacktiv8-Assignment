import "./InputAntrian.css";
import { useState } from "react";
import OutputAntrian from "./OutputAntrian";

const InputAntrian = (props) => {
  const [getInput, setInput] = useState("");

  function deleteUser() {
    props.onDeleteList();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newInput = {
      name: getInput,
    };

    if (validate()) {
      props.onCreateInput(newInput);
    }

    setInput("");

    //console.log(newInput);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  function validate() {
    const regex = /^[a-zA-Z ]+$/;

    if (!regex.test(getInput)) {
      alert("Nama tidak boleh menggunakan angka");
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="content">
      <p>Masukkan Nama</p>
      <form className="input-form" onSubmit={handleSubmit}>
        <input type="text" value={getInput} onChange={handleInput} />
        <br />
        <br />
        <button disabled={getInput.length < 1}>Antrikan!</button>
        &nbsp; &nbsp;
        <button type="button" onClick={deleteUser}>
          Majukan!
        </button>
        <br />
        <hr />
      </form>
    </div>
  );
};

export default InputAntrian;

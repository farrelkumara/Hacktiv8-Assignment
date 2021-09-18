import "./OutputAntrian.css";
import { useState } from "react";
import InputAntrian from "./InputAntrian";
import ListAntrian from "./ListAntrian";

const OutputAntrian = () => {
  const [getList, setList] = useState([]);

  function eventCreateList(list) {
    setList([list].concat(getList));
  }

  function deleteUser() {
    setList(getList.splice(0, getList.length - 1));
  }

  return (
    <div className="footer">
      <InputAntrian onCreateInput={eventCreateList} onDeleteList={deleteUser} />
      <ListAntrian dataList={getList} />
      <hr />
    </div>
  );
};

export default OutputAntrian;

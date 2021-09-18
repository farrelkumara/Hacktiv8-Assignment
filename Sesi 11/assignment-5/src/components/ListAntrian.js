import "./ListAntrian.css";

const ListAntrian = (props) => {
  console.log(props);
  return (
    <div>
      {props.dataList.length == 0 ? (
        <p>Antrian Kosong !</p>
      ) : (
        props.dataList.map((list, index) => {
          return (
            <div className="datalist">
              {index == 0 ? <span></span> : <span>={">"}</span>}
              <p className="list" key={list.id}>
                {list.name}
              </p>
            </div>
          );
        })
      )}
      {}
    </div>
  );
};

export default ListAntrian;

import React, { useState, useEffect } from "react";



function ListItem({ id, checked, text, onDelete }) {
  const [isChecked, setChecked] = useState(checked);



  useEffect(() => {
    // Inicio de componente
    console.log("Init");
    return () => {
      //Destruye el componente
      console.log("cleanup");
    };
  }, []);



  useEffect(() => {
    console.log("checked", checked);
    if (checked) alert("Check");
  }, [checked]);

  const handleCheck = () => {
    setChecked(!isChecked);
  };


  return (
    <li className={`p-2 bg-[#374151] rounded-md flex justify-between items-center ${isChecked ? 'line-through' : ''}`}>
      <div>
        <input className="m-2" type="checkbox" checked={isChecked} onChange={handleCheck} />
        {text}
      </div>
      
      <div>
        <button onClick={() => onDelete(id)} className="rounded-md bg-[#b81d1d] px-2 py-1 hover:bg-red-900">
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;
import { useState } from "react";

function ListItem({text, checked, onDelete}){

    const[setChecked]=useState(false);
    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <li className={`"p-2 bg-indigo-900" ${checked} ? 'line-throut'" : null`}>
            {text}<input className="m-2" type="checkbox" checked={checked} onChange={handleCheck}></input>
        </li>
    )
    
}

export default ListItem;
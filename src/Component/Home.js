import React, { useState } from "react";

export default function Home() {
const [user_Name , Update_name] = useState("");
const [text , updateTxt] = useState("LowerCase");
const [val , val_convert] = useState();
return (
    
    <>
        <div className="container">
            <input type="text" id="user_name" value={val} onChange={ (event) => {val_convert(event.target.value); Update_name(""+ document.getElementById('user_name').value);}} className="form-control"/>
            
            <p className="text-end">{user_Name}</p>
             
            
            <button className="btn btn-outline-primary" onClick={() => {
                
                let inp = document.getElementById('user_name').value
                if(inp === inp.toUpperCase())
                {
                    let upper = document.getElementById('user_name').value.toLowerCase();
                    val_convert(upper);
                    updateTxt("UpperCase");
                }
                else if(inp === inp.toLowerCase()){   
                    let lower = document.getElementById('user_name').value.toUpperCase();
                    val_convert(lower);
                    updateTxt("LowerCase");
                }
            }}>{text}</button>
        </div>
    </>
    );
}
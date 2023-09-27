import { useState } from "react";
import "./Example.css";

export function Example() {
  const [date,setDate] = useState(new Date())
  const [state, setState] = useState("");
  const sise = "size=200x200"
  let url1 = `https://api.qrserver.com/v1/create-qr-code/?data=${state}&${sise}`
  const [url,setUrl] = useState (``)

  function http(){
    setUrl(url1)
    const n = new Date()
    setDate(n)
  }   
  return (
    <div className="example">
     
      <input value={state} type="text" onChange={(event)=>{setState(event.target.value)}} />
      <button onClick={http} >Click me</button>
      <img src={url} alt=""  />
      <p>url adres {url}</p>
      <p>{sise}</p>
      <p>day{date.getDate()} taim {date.getMonth()} {date.getHours()} {date.getMinutes()}</p>
    </div>
  );
}


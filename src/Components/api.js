import { useState, useEffect } from "react";
export default function Api() {
    const [meanings, setMeanings] = useState([]);
    const [btn, setBtn]=useState(0);
  
  useEffect(() => {
    if(btn===1){
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
        .then(resp => resp.json())
        .then(data => {
            console.log(data[0].meanings)
            setMeanings(data[0].meanings);
        })
    }else{
        console.log('Button Not Pressed');
    }
  }, [btn]);
    const handleClick=()=>{
        setBtn(btn+1);
    }
    return (  
      <div>
        <button onClick={handleClick}>Fetch API</button>
        {meanings?.map((m) => <h4>{m.definitions[0].definition}</h4>)}
      </div>
    );
  }
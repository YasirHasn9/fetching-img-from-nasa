import React, {useState , useEffect} from "react"
import axios from "axios"

function DailyNasaImag() {
    const [info , setInfo] = useState("")
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
            console.log(res.data)
            setInfo(() => res.data)
        })
        .catch(err => console.log(err))
        
    } , [])
    return (
       <div >
            <h1>{info.title}</h1>
            <p style={{width:"900px", margin:"0 auto"}}>{info.explanation}</p>
            <img  src={info.url} alt="nasa" /> 
            <i style={{
                position:"absolute",
                top:"100px",
                left:"200px"
            }}>Date:{info.date}</i>
       </div>
    )
}

export default DailyNasaImag
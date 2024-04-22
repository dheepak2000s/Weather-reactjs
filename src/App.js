import axios from "axios"
import { useState } from "react"

function App() {

    const [deg,setdeg] = useState("0")
    const [city,setcity] = useState("France")
    const [desc,setdesc] = useState("Raining")
    const [enteredvalue,setenteredvalue] = useState("")

    function handleInput(event)
    {
        console.log(event.target.value)
        setenteredvalue(event.target.value)
    }

    function getData()
    {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=9637d40f657b564e34d5a21d659e1482`)

        weather.then(function(data){
            setdeg(data.data.main.temp)
            setdesc(data.data.weather[0].main)
            setcity(data.data.name)
        })

    }
    return(
     <div className="flex flex-row justify-center h-[100vh] items-center">
        <div style={{backgroundImage:"linear-gradient(120deg,#a6c0fe 0%,#f68084 100%)"}} className="p-2 rounded-md shadow">
        <h2 className="font-medium">Hey! ⛅</h2>
        <p className="text-xs">Do you want to know the weather Report :)</p>
        <input onChange={handleInput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?" />
        <br />
        <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report ⚡</button>
        <p className="text-xs mt-2">Degree: {deg} | City: {city} | Weather: {desc}</p>
        </div>
    </div>)
}
export default App
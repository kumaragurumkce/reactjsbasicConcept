import React, { useEffect, useState } from 'react'
import { use } from 'react'

export default function Sample3() {
  const [city,setCity]=useState('london')
 const [weather,setWeather]=useState(null)
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
 const fetchHandle= async()=>{
        setError(null)
        setLoading(true)
        const API_KEY="0db0107bb8b645ca24bf8a10afb3bc74";
        try {
            const res=await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            if (!res.ok) {
                throw new Error("Cannot found");
            }
            const data= await res.json();
            setWeather(data)
            
        } catch (error) {
            setError(error.message)
            setWeather(null)
        }
    finally{
        setLoading(false)
    }
 }
useEffect(() => {
fetchHandle();
}, [city])

  const handleinput=(e)=>{
        setCity(e.target.value)
  }
  const formSubmit=(e)=>{
    e.preventDefault(); 
    fetchHandle(); 
  }
    return (
    <div>

        <h1>Sample 2</h1>
        {loading && <p>loading</p> }
        {/* <form onSubmit={formSubmit}> */}
        <form onSubmit={formSubmit}> 
            <input type="text" onChange={handleinput} value={city} />
            {error && <p style={{'color': 'red'}}>{error}</p> }

            <p>Weather: {city}</p>
            {weather && (
                <div>
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                </div>
)            }
            
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

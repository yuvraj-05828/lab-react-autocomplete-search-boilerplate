import { useState } from 'react'
import './App.css'
import Data from './resources/countryData.json'
function App() {
  const [countryData, setData] = useState([])
  const passInputValue=(e)=>{
    let inputValue= e.target.value;
    if(inputValue!==""){
    let newData= Data.filter(item=>(item.name.toLowerCase().startsWith(inputValue.toLowerCase())))
    setData(newData)
  }
  }

  const esc=(e)=>{
    if(e.key==="Escape"){
      console.log("Escape")
      setData([])
    }
  }

  return (
    <>
    <h1>Search</h1>
    <input type="text" onChange={passInputValue} onKeyDown={esc} />
    <button type='search'>Search</button>
    {countryData.map((item,i)=>(
      <div key={i}>
       <div className='infocontainer'><p>{item.name}</p>
       <p>{item.code}</p>
       </div>
      </div>
    ))}
    </>
  )
}

export default App
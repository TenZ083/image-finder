import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { getImage } from "./services/services"; 
function App() {
  const [name,setName]=useState('')
  const [response,setResponse]=useState([])


  useEffect(()=>{
    const fu=async()=>{
      try{
        const data=await getImage(name,1)
        setResponse(prevState=>[...prevState,data.hits])
      }catch(error){console.log(error)}
    }
    if(name!==''){
      fu()
    }
  },[name])

  const onSubmit=(info)=>{
    setName(info)
  }
  return <>
  <SearchBar onSubmit={onSubmit}/>
  <ul>
  {
    response.length!==0&&response.map(({id,webformatURL,tags})=><li key={id}><img src={webformatURL}alt={tags}/></li>)
  }
  </ul>
  </>
}

export default App;

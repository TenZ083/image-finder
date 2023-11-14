import { useState } from "react"

export const SearchBar=({onSubmit})=>{
    const [searchName,setSearchName]=useState('')
    const handelInputChange=(event)=>{
        setSearchName(event.target.value)
    }
    const handeSubmit=(event)=>{
        event.preventDefault()
        if(searchName.trim()===""){
            return alert("u must pres keyworld")
        }
        onSubmit(searchName)
    }
    return <>
    <form onSubmit={handeSubmit}><input type="text" onChange={handelInputChange} value={searchName}/>
    <button type="submit" >Search</button>
    </form>
    
    </>
}
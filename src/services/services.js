import axios from "axios"

export const getImage=async(name,pageNumber)=>{
    const API_KEY="40452496-5d1e95a51defe2da1effb8378"
    const searchParams=new URLSearchParams({
        key:API_KEY,
        q:name,
        image_type:'photo',
        orientation:'horizontal',
        safesearch:"true",
        per_page:12,
        page:pageNumber,
    })
    const url=`https://pixabay.com/api/?${searchParams}`
    const {data}=await axios.get(url)

    return data
}
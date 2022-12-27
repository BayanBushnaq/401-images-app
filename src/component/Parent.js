import React, { useState }  from "react";
import Images from "./Images";
import JsonImages from "../images.json"

function Parent(){
    let [TotalLikes,setTotalLikes] = useState(0)
    const TotalImageLikes = () => {
        setTotalLikes(TotalLikes +1)
    }
    return(
        <>
        <h1>Total Likes = {TotalLikes}</h1>
            {JsonImages.map(data =>{
                return(
                < Images
                imageURL = {data.image_url}
                title = {data.title}
                totalLikes = {TotalImageLikes}
                />
            )
        })}
        </>
    )

}
export default Parent;
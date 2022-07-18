import React, { useState } from "react";
import MealItem from "./MealItem";


function Meal(){

    const [search, setSearch] = useState("")
    const [Mymeal, setMeal ] = useState();

    function searchMeal(event){
        if(event.key === "Enter"){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                setMeal(data.meals)
                setSearch("")
            })
        }
    }

    function onChangeMeal(event){
        setSearch(event.target.value)

    }
    return(
        // jsx 

        <>
        <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4><blockquote>
                        "Good food is the foundation of genuine happiness" <br />
                        <cite>~ Grace Otuya</cite></blockquote></h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={onChangeMeal} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Not found</p> : 
                         Mymeal.map((res)=>{
                             return(
                            <MealItem data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>
        </>
    )

}

export default Meal
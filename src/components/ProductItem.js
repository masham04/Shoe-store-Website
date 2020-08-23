import React from "react";
import shoes from "../shoes.json";
import { useParams } from "react-router-dom";

export const ProductItem = () => {

  let { id } = useParams();

  //console.log(id);
  const shoe = shoes[id];
  console.log(shoe);

  return(
       <div>
           <center><h1>{shoe.name}</h1></center>
             <center><img src={shoe.img} alt="shoe" height={500} width={500}></img></center>
       </div>
  )};

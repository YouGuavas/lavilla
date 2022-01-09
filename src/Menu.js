import { SRLWrapper } from "simple-react-lightbox";
import React, {useState} from "react";
import menu1 from "./images/Menu1.jpg";
import menu2 from "./images/Menu2.jpg";

function Menu() {

  const images = [
    menu1,
    menu2
    ]

  return(
    <div className="grid gap-y-10 pt-20 place-items-center h-full w-full shadow-md bg-breadsticks bg-cover bg-fixed bg-center">
        {images.map((image, index) => (
          <div className="w-2/3 h-full" key={index}>
          <SRLWrapper>
            <a className="flex justify-center p-6 bg-red-700 rounded bg-opacity-70 border-2 border-white" href={image} >
              <img className="rounded w-full" src={image} alt="Restaurant menu" />
            </a>
          </SRLWrapper>
          </div>
        ))} 
      </div>
  );
}
export default Menu;
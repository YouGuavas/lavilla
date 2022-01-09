import { SRLWrapper } from "simple-react-lightbox";
import React, {useState} from "react";
import menu1 from "./images/Menu1.jpg";
import menu2 from "./images/Menu2.jpg";

function Menu() {

  const [divNumber, setDivNumber] = useState(1);
  //div numbers with useState hook
  const pointerStyles = "px-2 text-5xl text-red-900 hover:cursor-pointer font-thin scale-y-150 hover:scale-x-110";
  const images = [
    menu1,
    menu2
    ]

  const nextDiv = () => {
    const divLength = Object.keys(divs).length;
    (divNumber >= divLength) ? setDivNumber(1) : setDivNumber(divNumber + 1);
    /* if the current div is the last, then go back to the first, 
    else go to next div */
  }


  const prevDiv = () => {
    const divLength = Object.keys(divs).length;
    (divNumber <= 1) ? setDivNumber(divLength) : setDivNumber(divNumber - 1);
    /* if the current div is the first, then go to the last,
    else go to previous div */
  }

  const divs = {
    1:
    <div className="grid gap-y-10 h-full w-full place-items-center p-6 pt-20">
        {images.map((image, index) => (
          <div key={index}>
          <SRLWrapper>
            <a className="flex justify-center p-6 bg-red-700 rounded bg-opacity-70 border-2 border-white" href={image} >
              <img className="rounded w-full" src={image} alt="Restaurant menu" />
            </a>
          </SRLWrapper>
          </div>
        ))} 
      </div>
      ,
    2: <div></div>
  }
  
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
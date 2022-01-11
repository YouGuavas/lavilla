import { SRLWrapper } from "simple-react-lightbox";
import React, {useState} from "react";

import menu1 from "./images/Menu1.jpg";
import menu2 from "./images/Menu2.jpg";
import catering1 from "./images/Catering1.jpg";
import catering2 from "./images/Catering2.jpg";


function Menu() {

  const fullMenu = [
    menu1,
    menu2
    ]
  const cateringMenu = [
    catering1,
    catering2
  ]

  return(
    <div className="pt-20 h-full w-full shadow-md bg-breadsticks bg-cover bg-fixed bg-center">
        <section id="full" className="h-full w-full grid md:gap-y-10 gap-y-5 place-items-center p-6">
        <h2 className="text-5xl font-thin text-red-900 font-fancy">Full Menu</h2>
        {fullMenu.map((image, index) => (
          <div className="w-2/3 h-full" key={index}>
          <SRLWrapper>
            <a className="flex justify-center p-6 bg-red-700 rounded bg-opacity-70 border-2 border-white" href={image} >
              <img className="rounded w-full" src={image} alt="Restaurant menu" />
            </a>
          </SRLWrapper>
          </div>
        ))} 
        </section>

        <section id="catering" className="h-full w-full grid md:gap-y-10 gap-y-5 place-items-center p-6 pt-8">
          <h2 className="text-5xl font-thin text-red-900 font-fancy">Catering Menu</h2>
          {cateringMenu.map((image, index) => (
            <div className="w-2/3 h-full" key={index}>
              <SRLWrapper>
                <a className="flex justify-center p-6 bg-red-700 rounded bg-opacity-70 border-2 border-white" href={image} >
                  <img className="rounded w-full" src={image} alt="Restaurant menu" />
                </a>
              </SRLWrapper>
            </div>
          ))}
        </section>
      </div>
  );
}
export default Menu;
import React, {useState} from 'react';
import Highlight from './Highlight';

import restaurant from './images/Restaurant.jpg';

export default function Catering() {
  const [divNumber, setDivNumber] = useState(1);
  //div numbers with useState hook

  const pointerStyles = "px-2 text-5xl text-red-900 hover:cursor-pointer font-thin scale-y-150 hover:scale-x-110";

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

  const handleClick = (num) => {
    setDivNumber(num);
    //when clicked, move carousel to appropriate dot
  }

  const dots = [1, 2, 3];
  const divs = {
    1: 
    <div className="h-screen w-full bg-white bg-opacity-20 p-6 place-items-center">
      <div className="h-full w-full flex place-items-center justify-center">
        <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
        <div className="md:px-20 px-10 h-full w-full p-6 grid place-items-center bg-white bg-opacity-60">
          <h2 className="md:text-4xl text-2xl py-3 font-semibold">
            Put Your Event in Good Hands
          </h2>
          <h4 className="font-semibold text-red-900 md:text-2xl text-xl py-2">
            Schedule our catering services in Mt. Morris, Michigan.
          </h4>

          <p className="md:text-xl">When you're planning an event, you can't afford to let your menu fall by the wayside. 
            Fortunately, you don't have to worry when you let our team bring the food. 
            La Villa Family Dining & Pizzeria provides catering services in Mt Morris, MI.</p>

          <p className="md:text-xl">If you're a fan of our food, you can have it whenever you like. 
            Share your favorite meals with your guests without cooking it all yourself. 
            Call (810) 686-0107 now to schedule catering services.</p>
        </div>
        <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
      </div>
      <Highlight onClick={handleClick} dots={dots} number={divNumber}/>
    </div>,
  2:
  <div className="h-screen bg-white bg-opacity-20 w-full p-6 place-items-center">
    <div className="h-full w-full flex place-items-center justify-center">
    <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
      <div className="grid md:gap-4 h-full w-full md:px-20 px-10 py-2 grid-cols-2 place-items-center">
        <div className="md:col-span-1 col-span-2 md:w-full w-1/2 rounded-full flex md:p-6 p-2 bg-green-700 bg-opacity-70">
          <img className="rounded-full h-full w-full" alt="La Villa restaurant" 
          src={restaurant} />
        </div>
        <div className="bg-white bg-opacity-60 col-span-2 p-2 md:col-span-1 place-items-center">
          <h2 className="font-semibold md:text-3xl text-xl text-red-900">Location is key</h2>
          <p className="md:text-lg text-sm">You want to host an event, but you don't have a good location - what do you do? 
            You can start by turning to La Villa Family Dining & Pizzeria. 
            We have an event room in our restaurant that's open for rentals, so you can trust us to host your...</p>
          <ul className="md:text-lg text-sm p-6 list-disc">
            <li>Baby shower</li>
            <li>Rehearsal dinner</li>
            <li>Birthday party</li>
            <li>Graduation party</li>
            <li>Family gathering</li>
          </ul>
          <p className="md:text-lg text-sm">
            Speak to us soon about using our event room!
          </p>
        </div>
      </div>
      <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
    </div>
    <Highlight onClick={handleClick} dots={dots} number={divNumber}/>
  </div>,
    3:
    <div className="h-screen bg-white bg-opacity-20 w-full p-6 place-items-center">
      <div className="h-full w-full flex place-items-center justify-center">
        <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
        <div className="md:px-20 px-10 h-full w-full flex grid grid-cols-4 grid-rows-3 justify-center text-center place-items-center">
            <a href="/Menu#catering" className="row-start-2 row-span-1 py-6 h-full md:text-xl text-lg w-full md:col-start-2 md:col-span-2 col-span-4 text-center bg-red-800 bg-opacity-90 border border-gray-200 text-white rounded grid place-items-center justify-center hover:scale-x-110">
              View our catering menu!
            </a>
          </div>
        <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
      </div>
      <Highlight onClick={handleClick} dots={dots} number={divNumber}/>
    </div>
  }
  return (
    <div className="grid place-items-center pt-40 shadow-md bg-breadsticks bg-fixed bg-cover bg-center">
    {
    divs[divNumber]
    }
  </div>
  )
}
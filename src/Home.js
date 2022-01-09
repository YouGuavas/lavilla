import React, {useState} from 'react';
import Highlight from './Highlight';
function Home() {
  
  const [divNumber, setDivNumber] = useState(1);
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
  
  //define carousel
  const dots = [1, 2, 3, 4, 5];
  const divs = {
    1:  <section className="h-screen w-full p-6 pt-20 place-items-center">
          <div className="h-full w-full flex place-items-center justify-center">
            <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
            <div className="md:px-32 px-10 h-full w-full flex justify-center text-center place-items-center">
            <h1 className="bg-white bg-opacity-70 p-2 rounded-full w-full font-fancy md:text-5xl text-3xl text-red-900">La Villa Family Dining & Pizzeria</h1>
            </div>
            <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
          </div>
          <Highlight dots={dots} number={1}/>
        </section>,

    2: <section className="h-screen w-full bg-white bg-opacity-20 p-6 pt-20">
        <div className="h-full w-full flex place-items-center content-center justify-center">
          <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
          <div className="md:px-20 px-10 h-3/4 w-full grid grid-rows-3 grid-cols-4">
            <p className="md:text-4xl text-2xl py-6 font-semibold text-red-900 col-span-4 row-span-1">Enjoy Good Food With Good Company</p>
            <p className="md:text-2xl text-lg py-6 font-semibold col-span-4 row-span-1">
            Come join our family by visiting La Villa Family Dining & Pizzeria
            </p>
            <a href="/Contact Us" className="row-span-1 py-6 h-full md:text-xl text-lg w-full md:col-start-2 md:col-span-2 col-span-4 text-center bg-red-800 bg-opacity-90 border border-gray-200 text-white rounded grid place-items-center justify-center hover:scale-x-110">
              Contact Us
            </a>
          </div>
          <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
        </div>
        <Highlight dots={dots} number={2}/>
      </section>,

    3: <section className="h-screen w-full bg-white bg-opacity-20 p-6 pt-20">
        <div className="h-full flex place-items-center">
          <div onClick={prevDiv} className={pointerStyles}>{"<"}</div>
          <div className="grid p-6 h-full bg-white bg-opacity-70">
          <p className="font-fancy text-2xl font-thin text-red-900 text-center">What's for Dinner?</p>
          <p className="text-center md:text-2xl text-lg font-semibold">FIND OUT AT YOUR FAVORITE MT MORRIS, MI PIZZA RESTAURANT</p>
          <p className="text-center md:text-lg text-xs font-mono">
          If you've lived in the Mt Morris, MI area for a long time, then you know that La Villa Family Dining & Pizzeria isn't just another pizza restaurant. We're a family dedicated to bringing both new customers and long-time fans a high-quality dining experience.
          </p>
          <p className="text-center md:text-lg text-xs">
          Whether you're stopping by for the first time or returning for your old favorites, you'll love the traditional cuisine at our restaurant. We offer:
          </p>
          <ul className="text-center md:text-lg text-xs">
            <li>Traditional Italian favorites like lasagna and chicken parm</li>
            <li>Fresh additions to our build-your-own pizza menu</li>
            <li>Delectable desserts like authentic cheesecake and tiramisu</li>
          </ul>
          <p className="text-center md:text-lg text-xs">
          You can even count on us for catering services when you rent our event room. With guidance and recipes from the original owners, we're confident that you'll be satisfied with the family restaurant experience. Call (810) 686-0107 today for more information on our menu or catering options.
          </p>
          </div>
          <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
        </div>
        <Highlight dots={dots} number={3}/>
      </section>,

    4: <section className="h-screen w-full p-6 pt-20 bg-white bg-opacity-20">
        <div className="h-full flex place-items-center">
          <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
          <div className="grid h-full grid-cols-2 grid-rows-2">
            <div className="md:row-span-2 row-span-1 md:col-span-1 md:px-6 col-span-2 md:h-full h-1/2 grid place-items-center">
              <div className="grid grid-cols-1 grid-rows-3 place-items-center">
                <h2 className="font-semibold md:text-3xl text-2xl row-span-1 col-span-1">Your local source for traditional Italian cuisine</h2>
                <p className="col-span-1 row-span-1 md:text-lg">Visit our reopened family restaurant in Mt. Morris, MI</p>
                <a href="/Contact Us" className="row-span-1 py-6 md:h-full md:text-xl w-3/4 col-span-1 text-center bg-red-900 bg-opacity-90 border border-gray-200 text-white rounded grid place-items-center justify-center hover:scale-x-110">Contact Us</a>
              </div>
            </div>
            <div className="md:row-span-2 row-span-1 md:col-span-1 col-span-2 md:h-full h-1/2 grid grid-rows-3 gap-2 place-items-center">
              <div className="md:row-start-2 md:h-full h-1/2 row-span-1 grid">
                
                <a href="/Italian specialties">
                  <div className="bg-green-700 bg-opacity-90 hover:scale-x-110 text-white p-6">
                    <p>Italian specialties  ⤑</p>
                    <p>Revel in our expansive menu of authentic dishes.</p>
                  </div>
                </a>

                <a href="/Sandwiches">
                  <div className="hover:scale-x-110 bg-opacity-90 p-6">
                    <p>Sandwiches & more  ⤑</p>
                    <p>Find what you crave.</p>
                  </div>
                </a>

                <a href="/Catering">
                  <div className="bg-red-900 hover:scale-x-110 bg-opacity-90 text-white p-6">
                    <p>Catering & events  ⤑</p>
                    <p>Let our staff help with your next big event.</p>
                  </div>
                </a>

              </div>
            </div>
          </div>
          <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
        </div>
        <Highlight dots={dots} number={4}/>
      </section>,

    5: <section className="h-screen w-full p-6 pt-20 bg-white bg-opacity-20">
        <div className="h-full flex place-items-center">
          <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
          <div className="grid grid-rows-2 h-full md:gap-2 place-items-center">
            
            <div className="row-span-1 grid grid-cols-2 place-items-center h-full bg-white bg-opacity-70">
              <div className="md:col-span-1 col-span-2 md:text-2xl text-lg md:px-6 text-red-900 font-semibold">
                Honoring the rich history of our restaurant
              </div>
              <div className="md:col-span-1 col-span-2">
                <p className="p-2 text-sm">
                  La Villa Family Dining & Pizzeria first opened in 1974 and was a beloved staple to locals until it closed in 2019. 
                  It was then purchased by two former customers who grew up going to the family restaurant as kids. 
                  They decided to bring back the taste of their childhood and share it with their fellow residents of Mt. Morris, MI.
                </p>
                <p className="p-2 text-sm">
                  For a taste of classic dishes mixed with some new additions, visit us soon.
                </p>
                <a href="/Contact Us" className="row-span-1 md:py-2 py-1 md:text-xl text-lg w-1/2 col-span-1 text-center border rounded border-white bg-opacity-90 text-red-900 font-semibold grid place-items-center justify-center hover:scale-x-110">
                  Visit Today!
                </a>
              </div>
            </div>

            <div className="row-span-1 h-full grid place-items-center grid-rows-2 bg-white bg-opacity-70">
              <h3 className="row-span-1">Stay in or dine out</h3>
              <p className="row-span-1 p-2">
                The choice between going out or staying in shouldn't keep you from good food. 
                That's why we're giving you the choice to dine-in, carry out, or receive delivery if you live within a 5-mile radius. 
                Call (810) 686-0107 today to learn about our pizza restaurant's options for service.
              </p>
            </div>

          </div>
          <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
        </div>
        <Highlight dots={dots} number={5}/>
      </section>
  }

  return(
    <div className="grid place-items-center shadow-md bg-lasagna bg-fixed bg-cover bg-center">
      {
      divs[divNumber]
      }
    </div>
  );
}

export default Home;
import React, {useState} from 'react';
import Highlight from './Highlight';
function Home() {
  
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
  
  //define carousel
  const dots = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const divs = {
    1:  <div className="h-screen w-full p-6 place-items-center">
          <div className="h-full w-full flex place-items-center justify-center">
            <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
            <div className="md:px-20 px-10 h-full w-full flex justify-center text-center place-items-center">
            <h1 className="bg-white bg-opacity-70 p-3 rounded-full w-full font-fancy md:text-5xl text-3xl text-red-900">La Villa Family Dining & Pizzeria</h1>
            </div>
            <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
          </div>
          <Highlight onClick={handleClick} dots={dots} number={1}/>
        </div>,

    2: <div className="h-screen w-full bg-white bg-opacity-20 p-6">
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
        <Highlight onClick={handleClick} dots={dots} number={2}/>
      </div>,

    3: <div className="h-screen w-full bg-white bg-opacity-20 p-6">
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
        <Highlight onClick={handleClick} dots={dots} number={3}/>
      </div>,

    4: <div className="h-screen w-full p-6 bg-white bg-opacity-20">
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
                
                  <div onClick={() => {handleClick(6)}} className="bg-green-700 hover:cursor-pointer bg-opacity-90 hover:scale-x-110 text-white p-6">
                    <p>Italian specialties  ⤑</p>
                    <p>Revel in our expansive menu of authentic dishes.</p>
                  </div>

                
                  <div className="hover:scale-x-110 hover:cursor-pointer bg-opacity-90 p-6">
                    <p>Sandwiches & more  ⤑</p>
                    <p>Find what you crave.</p>
                  </div>

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
        <Highlight onClick={handleClick} dots={dots} number={4}/>
      </div>,

    5: <div className="h-screen w-full p-6 bg-white bg-opacity-20">
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
        <Highlight onClick={handleClick} dots={dots} number={5}/>
      </div>,
      6: 
      <div className="h-screen w-full p-6 bg-white bg-opacity-20">
        <div className="h-full flex place-items-center">
          <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
          <div className="md:px-20 px-10 h-3/4 w-full grid place-items-center">
            <h3 className="font-fancy font-thin text-gray-700 md:text-4xl text-2xl">Experience the Tastes of Italy</h3>
            <h4 className="font-semibold md:text-3xl text-xl text-red-900">Enjoy classics like pizza and pasta in Mt. Morris, MI</h4>
            <p className="md:text-lg text-md">
              When something is an old favorite, why change it? 
              That's why La Villa Family Dining & Pizzeria in Mt Morris, 
              MI uses their the original Italian food menu with favorites that have been beloved since 1974. 
              From pizza and garlic bread to delectable cheesecake, 
              you'll find whatever you're craving for every course.
            </p>
            
            <p className="md:text-lg text-md">
              You'll be able to feed the whole family 
              when you choose from our large selection of entrees and sides. 
              Explore our menu today.
            </p>
          </div>
          <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
        </div>
        <Highlight onClick={handleClick} dots={dots} number={6}/>
      </div>,
      7:
      <div className="h-screen w-full p-6 bg-white bg-opacity-20">
        <div className="h-full flex place-items-center">
          <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
          <div className="md:px-20 px-10 h-full w-full grid md:grid-cols-2 place-items-center">
          <div className="col-span-2  w-1/2 p-2 bg-green-700 bg-opacity-70 md:hidden flex rounded-full">
            <img className="rounded-full h-full w-full" src="https://lh3.googleusercontent.com/pw/AM-JKLUieS-MCgC-NGRzJLmYyoJVHrudcSCJYBK4y9mJPns0C3H-U34yaKph0g0Nh38g2qJOfR8wWKKYhljUkRVNAnl4wjHJ3M4fAPfJsRVc_3n_yaOGLXoj_iAoms9k6wRU1wPyRYJlKZCVclCshWG8_RmB=s420-no?authuser=0" />
          </div>
          <div className="md:col-span-1 col-span-2 h-full w-full place-items-center">
            <h3 className="md:text-3xl text-xl text-green-700 font-semibold py-2">
              What we offer
            </h3>
            <p className="md:text-base text-sm">
              Our classic menu is part of why La Villa has 
              been a staple of Mt Morris, MI for so long, 
              so we wouldn't dream of changing it. 
              Our Italian food menu includes favorites like...
            </p>
            <ul className="md:text-base text-sm py-2">
              <li className="py-1">| <span className="font-semibold">Pizza:</span> House specialties | Build-your-own | Homemade sauce</li>
              <li className="py-1">| <span className="font-semibold">Traditional dishes:</span> Lasagna | Spaghetti | Veal and chicken parm</li>
              <li className="py-1">| <span className="font-semibold">Extras:</span> Desserts | Garlic bread and breadsticks | Kid's menu</li>
            </ul>
            <p className="md:text-base text-sm">
              If you're looking to recapture the food from years past, 
              look no further than our family restaurant. 
              Call (810) 686-0107 to ask about our dine-in, 
              carryout and delivery options.
            </p>
          </div>
          <div className="md:col-span-1 p-6 bg-green-700 bg-opacity-70 md:flex hidden rounded-full">
            <img className="rounded-full h-full w-full" src="https://lh3.googleusercontent.com/pw/AM-JKLUieS-MCgC-NGRzJLmYyoJVHrudcSCJYBK4y9mJPns0C3H-U34yaKph0g0Nh38g2qJOfR8wWKKYhljUkRVNAnl4wjHJ3M4fAPfJsRVc_3n_yaOGLXoj_iAoms9k6wRU1wPyRYJlKZCVclCshWG8_RmB=s420-no?authuser=0" />
          </div>
          </div>
          <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
        </div>
        <Highlight onClick={handleClick} dots={dots} number={7}/>
      </div>,
      8:
      <div className="h-screen w-full p-6 bg-white bg-opacity-20">
        <div className="h-full flex place-items-center">
          <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
          <div className="md:px-20 px-10 h-full w-full grid">
            <h3 className="font-fancy font-thin text-gray-700 md:text-4xl text-2xl">
              Satisfy Your Lunch Cravings
            </h3>
            <h4 className="font-semibold md:text-2xl text-xl text-red-900">
              Order sandwiches and more from La Villa 
              Family Dining & Pizzeria in Mt. Morris, MI
            </h4>
            <p className="md:text-base text-sm">Whether you need something quick for lunch or you're not in the mood for traditional Italian food, 
            you can still find something you'll enjoy on our menu. 
            La Villa Family Dining & Pizzeria offers sandwiches, 
            wraps and more in Mt Morris, MI.
            </p>

            <p className='md:text-base text-sm'>
              For non-traditional or lighter options, 
              look to the other sections of our menu. We've got...
            </p>
            <ul className='md:text-base text-sm'>
              <li className="py-1"><span className="font-semibold">Other entrees:</span> Fish and chips | Burgers | Reubens</li>
              <li className="py-1"><span className="font-semibold">Healthy choices:</span> Salads | Soups | Chili</li>
              <li className='py-1'><span className="font-semibold">Appetizers:</span> Cheese sticks | Fries | Wings</li>
            </ul>
            <p className='md:text-base text-sm'>
              From standard wraps to hearty burgers, 
              we've got what you want. 
              Visit our restaurant today to order your next meal.
            </p>
          </div>
          <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
        </div>
        <Highlight onClick={handleClick} dots={dots} number={8}/>
      </div>,
      9:
      <div className="h-screen w-full p-6 bg-white bg-opacity-20">
        <div className="h-full flex place-items-center">
          <div className={pointerStyles} onClick={prevDiv}>{"<"}</div>
          <div className="md:px-20 px-10 h-full w-full grid md:gap-4 grid-cols-2 place-items-center">
            <div className="md:col-span-1 col-span-2 md:w-full w-1/2 rounded-full flex md:p-6 p-2 bg-green-700 bg-opacity-70">
              <img className="rounded-full h-full w-full" src="https://lh3.googleusercontent.com/pw/AM-JKLX4uV5C9WgRdyW-QTU6duFM_VvDdvlqJqPw2ZeHbwXgJi32ivQXHoDYarmkV2C75FZJBRM6jgh-JuQgkyXycNW115GQekuq5Wdi4NG61ZZM9PAhQn_QzVMRvRVM-iaC0pVCV2YL9EqX5pYVS7n8YBER=s420-no?authuser=0" />
            </div>
          <div className="md:col-span-1 col-span-2 place-items-center">
            <h3 className='md:text-2xl text-xl text-green-700 font-semibold py-2'>
              Join us for lunch
            </h3>
            <p className="text-base">
              You shouldn't have to lose energy for the second half of your 
              day because your lunch didn't give you the boost of energy you need.
              Our sandwiches are perfect when you need something quick yet filling for lunch. 
              Come by our restaurant, and you won't be disappointed. 
              Call (810) 686-0107 now to learn about our delivery and carryout options for when you're on the go.
            </p>
          </div>
          </div>
          <div className={pointerStyles} onClick={nextDiv}>{">"}</div>
        </div>
        <Highlight onClick={handleClick} dots={dots} number={9}/>
      </div>
  }

  return(
    <div className="grid place-items-center pt-40 shadow-md bg-breadsticks bg-fixed bg-cover bg-center">
      {
      divs[divNumber]
      }
    </div>
  );
}

export default Home;
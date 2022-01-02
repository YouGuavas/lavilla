function Home() {
  return(
    <div className="grid place-items-center shadow-md">
      <section className="h-screen p-6 row-span-2 text-4xl font-sans grid grid-rows-3 grid-cols-3">
        <p className="row-span-1 col-span-3">Enjoy Good Food With Good Company</p>
        <p className="row-span-1 col-span-3">Come join our family by visiting La Villa Family Dining & Pizzeria</p>
        <a href="/Contact Us" className="row-span-1 text-center border-gray-300 border p-20 col-start-2 col-end-3 justify-center hover:scale-x-110">Contact Us</a>
      </section>
      <section className="h-screen grid bg-gray-200 p-6 row-span-2">
      
        <p className="font-fancy text-2xl font-thin text-center">What's for Dinner?</p>
        <p className="text-center text-2xl font-bold">FIND OUT AT YOUR FAVORITE MT MORRIS, MI PIZZA RESTAURANT</p>
        <p className="text-center font-mono text-sm">
        If you've lived in the Mt Morris, MI area for a long time, then you know that La Villa Family Dining & Pizzeria isn't just another pizza restaurant. We're a family dedicated to bringing both new customers and long-time fans a high-quality dining experience.
        </p>
        <p className="text-center text-sm">
        Whether you're stopping by for the first time or returning for your old favorites, you'll love the traditional cuisine at our restaurant. We offer:
        </p>
        <ul className="text-center text-sm">
          <li>Traditional Italian favorites like lasagna and chicken parm</li>
          <li>Fresh additions to our build-your-own pizza menu</li>
          <li>Delectable desserts like authentic cheesecake and tiramisu</li>
        </ul>
        <p className="text-center text-sm">
        You can even count on us for catering services when you rent our event room. With guidance and recipes from the original owners, we're confident that you'll be satisfied with the family restaurant experience. Call (810) 686-0107 today for more information on our menu or catering options.
        </p>
        </section>
        <section className="h-screen grid grid-cols-2 gap-2 p-6">
          <div className="col-span-1">
            <h2>your local source for traditional italian cuisine</h2>
            <p>visit our reopened family restaurant in mt morris, mi</p>
            <p>Contact Us</p>
          </div>
          <div className="col-span-1 grid grid-rows-3 gap-2 place-items-center">
            <div className="row-start-2 row-span-1 grid">
              <div className="bg-green-600 hover:scale-x-110 text-white p-6">
              <p>italian specialties  ⤑</p>
              <p>Revel in our expansive menu of authentic dishes.</p>
              </div>
              <div className="hover:scale-x-110 p-6">
              <p>sandwiches & more  ⤑</p>
              <p>Find what you crave.</p>
              </div>
              <div className="bg-red-700 hover:scale-x-110 text-white p-6">
              <p>catering & events  ⤑</p>
              <p>Let our staff help with your next big event.</p>
              </div>
            </div>
            <div className="col-span-2 row-start-3 row-span-1"></div>
          </div>

        </section>
        <section className="h-screen grid grid-rows-2 p-6">
          <div className="row-span-1 grid grid-cols-2">
            <div className="col-span-1">Honoring the rich history of our restaurant</div>
            <div className="col-span-1">
              <p>
                La Villa Family Dining & Pizzeria first opened in 1974 and was a beloved staple to locals until it closed in 2019. 
                It was then purchased by two former customers who grew up going to the family restaurant as kids. 
                They decided to bring back the taste of their childhood and share it with their fellow residents of Mt. Morris, MI.
              </p>
              <p>
                For a taste of classic dishes mixed with some new additions, visit us soon.
              </p>
            </div>
          </div>
          <div className="row-span-1">
            <h3>Stay in or dine out</h3>
            <p>
              The choice between going out or staying in shouldn't keep you from good food. 
              That's why we're giving you the choice to dine-in, carry out, or receive delivery if you live within a 5-mile radius. 
              Call (810) 686-0107 today to learn about our pizza restaurant's options for service.
            </p>
          </div>
        </section>
    </div>
  );
}

export default Home;
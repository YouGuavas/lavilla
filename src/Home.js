function Home() {
  return(
    <div className="grid place-items-center shadow-md bg-lasagna bg-fixed bg-cover bg-center">
      <section className="h-screen w-full p-6 row-span-2 text-4xl font-sans grid grid-rows-3 grid-cols-3 bg-white bg-opacity-20">
        <p className="row-span-1 col-span-3">Enjoy Good Food With Good Company</p>
        <p className="row-span-1 col-span-3">Come join our family by visiting La Villa Family Dining & Pizzeria</p>
        <a href="/Contact Us" className="row-span-1 text-center bg-red-800 bg-opacity-90 border border-gray-200 text-gray-200 rounded md:col-start-2 md:col-end-3 col-span-3 grid place-items-center justify-center hover:scale-x-110">Contact Us</a>
      </section>

      <section className="h-screen grid bg-green-900 bg-opacity-90 text-gray-200 p-6 row-span-2">
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

        <section className="h-screen grid grid-cols-2 gap-2 p-6 bg-white bg-opacity-90 w-full">
          <div className="md:col-span-1 col-span-2 h-full">
            <div className="grid grid-cols-1 grid-rows-3 place-items-center">
              <h2 className="font-semibold md:text-5xl text-2xl row-span-1 col-span-1">your local source for traditional italian cuisine</h2>
              <p className="col-span-1 row-span-1 text-lg">visit our reopened family restaurant in mt morris, mi</p>
              <a href="/Contact Us" className="row-span-1 py-6 h-full text-xl w-3/4 col-span-1 text-center bg-red-800 bg-opacity-90 border border-gray-200 text-white rounded grid place-items-center justify-center hover:scale-x-110">Contact Us</a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 md:h-full h-1/2 grid grid-rows-3 gap-2 place-items-center">
            <div className="md:row-start-2 md:h-full h-1/4 row-span-1 grid">
              <div className="bg-green-600 bg-opacity-90 hover:scale-x-110 text-white p-6">
              <p>italian specialties  ⤑</p>
              <p>Revel in our expansive menu of authentic dishes.</p>
              </div>
              <div className="hover:scale-x-110 bg-opacity-90 p-6">
              <p>sandwiches & more  ⤑</p>
              <p>Find what you crave.</p>
              </div>
              <div className="bg-red-700 hover:scale-x-110 bg-opacity-90 text-white p-6">
              <p>catering & events  ⤑</p>
              <p>Let our staff help with your next big event.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen grid grid-rows-2 p-6 w-full bg-red-800 bg-opacity-90 text-gray-200">
          <div className="row-span-1 grid grid-cols-2 place-items-center h-full">
            <div className="md:col-span-1 col-span-2 text-2xl md:px-6">Honoring the rich history of our restaurant</div>
            <div className="md:col-span-1 col-span-2 grid">
              <p className="p-6">
                La Villa Family Dining & Pizzeria first opened in 1974 and was a beloved staple to locals until it closed in 2019. 
                It was then purchased by two former customers who grew up going to the family restaurant as kids. 
                They decided to bring back the taste of their childhood and share it with their fellow residents of Mt. Morris, MI.
              </p>
              <p className="p-6">
                For a taste of classic dishes mixed with some new additions, visit us soon.
              </p>
              <a href="/Contact Us" className="row-span-1 py-6 text-xl w-1/2 col-span-1 text-center border rounded border-white bg-opacity-90 text-white font-semibold grid place-items-center justify-center hover:scale-x-110">Visit Today!</a>
            </div>
          </div>
          <div className="row-span-1 h-full p-6 grid place-items-center">
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
function Home() {
  return(
    <div id="Home" className="grid grid-rows-4 place-items-center shadow-md">
      <div className="p-6 row-span-2 text-4xl font-sans grid grid-rows-3">
      <p className="row-span-1">Enjoy Good Food With Good Company</p>
      <p className="row-span-1">Come join our family by visiting La Villa Family Dining & Pizzeria</p>
      <a href="#Contact Us" className="row-span-1 text-center">Contact Us</a>
      </div>
      <div className="bg-gray-200 p-6 row-span-2">
      
        <p className="font-fancy text-2xl font-thin text-center">What's for Dinner?</p>
        <p className="text-center">FIND OUT AT YOUR FAVORITE MT MORRIS, MI PIZZA RESTAURANT</p>
        <p className="text-center">
        If you've lived in the Mt Morris, MI area for a long time, then you know that La Villa Family Dining & Pizzeria isn't just another pizza restaurant. We're a family dedicated to bringing both new customers and long-time fans a high-quality dining experience.
        </p>
        <p className="text-center">
        Whether you're stopping by for the first time or returning for your old favorites, you'll love the traditional cuisine at our restaurant. We offer:
        </p>
        <ul className="text-center">
          <li>Traditional Italian favorites like lasagna and chicken parm</li>
          <li>Fresh additions to our build-your-own pizza menu</li>
          <li>Delectable desserts like authentic cheesecake and tiramisu</li>
        </ul>
        <p className="text-center">
        You can even count on us for catering services when you rent our event room. With guidance and recipes from the original owners, we're confident that you'll be satisfied with the family restaurant experience. Call (810) 686-0107 today for more information on our menu or catering options.
        </p>
        </div>
    </div>
  );
}

export default Home;
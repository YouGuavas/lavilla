export default function Catering() {
  return (
    <div className="shadow-md bg-breadsticks bg-fixed bg-cover bg-center">
      <section className="h-screen bg-white bg-opacity-20 grid">
        <div className="p-6 grid place-items-center">
        <h2 className="text-4xl font-semibold">
          Put Your Event in Good Hands
        </h2>
        <h4 className="font-semibold text-2xl">
          Schedule our catering services in Mt. Morris, Michigan.
        </h4>

        <p className="text-xl">When you're planning an event, you can't afford to let your menu fall by the wayside. 
          Fortunately, you don't have to worry when you let our team bring the food. 
          La Villa Family Dining & Pizzeria provides catering services in Mt Morris, MI.</p>

        <p className="text-xl">If you're a fan of our food, you can have it whenever you like. 
          Share your favorite meals with your guests without cooking it all yourself. 
          Call (810) 686-0107 now to schedule catering services.</p>
        </div>
      </section>
      <section className="h-screen grid grid-cols-2 grid-rows-2 bg-green-900 bg-opacity-90 place-items-center">
          <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-2 grid place-items-center p-6">
            <div className="p-3 bg-white rounded-full">
            <img className="rounded-full h-2/3 w-2/3 md:h-full md:w-full" alt="La Villa restaurant" 
            src="https://lh3.googleusercontent.com/pw/AM-JKLU903Q9rKMY49CjoQc-OOBmdEmvGJHWiRy_8NK53TqMf8dTK6oa0oOSUZYDBgsNeMAHVpETW6fr6d5HrmZ3F1uUIzzgUggvN-akRy48sWzQyvFqRH3L3nztPxJWCIlsOUc9TwpCJe_urvAvnJwKp9vy=s666-no?authuser=0"
            />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-2 text-white">
            <h2 className="font-semibold text-3xl">Location is key</h2>
            <p className="text-lg">You want to host an event, but you don't have a good location - what do you do? 
              You can start by turning to La Villa Family Dining & Pizzeria. 
              We have an event room in our restaurant that's open for rentals, so you can trust us to host your...</p>
            <ul className="text-lg p-6 list-disc">
              <li>Baby shower</li>
              <li>Rehearsal dinner</li>
              <li>Birthday party</li>
              <li>Graduation party</li>
              <li>Family gathering</li>
            </ul>
            <p className="text-lg">Speak to us soon about using our event room!</p>
          </div>
        </section>
      <section className="h-screen">

      </section>
    </div>
  )
}
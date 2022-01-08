export default function Catering() {
  return (
    <div className="shadow-md bg-breadsticks bg-fixed bg-cover bg-center">
      <section className="h-screen bg-white bg-opacity-60 grid">
        <div className="p-6 h-1/2 grid place-items-center">
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
        <div className="p-6 h-1/2 grid grid-cols-2 place-items-center">
          <div className="col-span-2 md:col-span-1">
            <div className="p-6 bg-green-900 border-2 border-white">
            <img alt="La Villa restaurant" 
            src="https://lh3.googleusercontent.com/pw/AM-JKLU903Q9rKMY49CjoQc-OOBmdEmvGJHWiRy_8NK53TqMf8dTK6oa0oOSUZYDBgsNeMAHVpETW6fr6d5HrmZ3F1uUIzzgUggvN-akRy48sWzQyvFqRH3L3nztPxJWCIlsOUc9TwpCJe_urvAvnJwKp9vy=s666-no?authuser=0"
            />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-semibold text-green-900 text-4xl">Location is key</h2>
            <p className="text-xl">You want to host an event, but you don't have a good location - what do you do? 
              You can start by turning to La Villa Family Dining & Pizzeria. 
              We have an event room in our restaurant that's open for rentals, so you can trust us to host your...</p>
            <ul className="text-xl p-6 list-disc">
              <li>Baby shower</li>
              <li>Rehearsal dinner</li>
              <li>Birthday party</li>
              <li>Graduation party</li>
              <li>Family gathering</li>
            </ul>
            <p className="text-xl">Speak to us soon about using our event room!</p>
          </div>
        </div>
      </section>
      <section className="h-screen">

      </section>
    </div>
  )
}
function Contact() {
  const asterisk = <span className="text-red-800">*</span>;
  const labelClass = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2";
  return(
  <div id="Contact Us" className="grid grid-cols-5 p-6 shadow-md">
    <div className="p-6 text-center bg-gray-200 col-span-4">
      <p className="font-fancy text-2xl p-3">Find Italian Food in Mt Morris, MI</p>
      <p className="text-red-800 font-sans p-3">Visit La Villa Family Dining & Pizzeria today</p>
      <p className="font-sans p-3">Thank you for visiting the website of La Villa Family Dining & Pizzeria. Revisit traditional Italian food by stopping by our family restaurant. We're eagerly awaiting your visit.</p>

      <p className="font-sans p-3">Please use the form on this page to email us. You can also call (810) 686-0107 to learn about our dine-in, carryout and delivery options.</p>
    </div>
    {/* Contact Form */}
    <div className="col-span-5 p-6">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap">
          <div className="w-full px-3">
          <label className={labelClass}>
            Contact Us
          </label>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-first-name">
              First Name{asterisk}
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" /><p></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-last-name">
              Last Name{asterisk}
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Doe" /><p></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-phone-number">
              Phone{asterisk}
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-phone-number" type="text" placeholder="(555) 555-5555"/><p></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-email">
              Email{asterisk}
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="john.doe@example.com" />
            <p id="p-email"></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-message">
              Message/Suggestions{asterisk}
            </label>
            <textarea rows="4" id="grid-message "style={{resize: "none"}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Please leave any messages, suggestions, or comments here!">
            </textarea>
            <p id="p-message"></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3">
            <label className={labelClass} for="grid-security">
              Security Check{asterisk}
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-security" type="number"/>
          </div>
          <div className="w-full md:w-1/2 md:pt-6 px-3">
            <button type="submit" className="w-full font-semibold bg-gray-300 text-gray-700 border border-1 border-gray-500 rounded py-3 px-4 mb-3 leading-tight">Submit</button>
          </div>
        </div>
      </form>
    </div>
    {/*End of contact form*/}
    <div className="h-screen grid grid-cols-2 grid-rows-2 col-span-5 gap-2">
      <div className="md:col-span-1 md:row-span-2 text-center col-span-2 grid grid-cols-2 md:grid-rows-3 grid-rows-4 bg-red-800 text-white p-6 w-full h-full">
        <div className="md:col-span-2 col-span-1 row-span-2 md:row-span-1">
          <h6 className="font-bold">La Villa Family Dining & Pizzeria</h6>
          <p>8372 N Saginaw Road</p>
          <p>Mt Morris, MI 48458</p>
        </div>
        <div className="md:col-span-2 col-span-1 row-span-4 md:hidden">
          <h7 className="font-semibold">HOURS</h7>
          <p>Mon: 11:00AM-9:00PM</p>
          <p>Tue: 11:00AM-9:00PM</p>
          <p>Wed: 11:00AM-9:00PM</p>
          <p>Thu: 11:00AM-9:00PM</p>
          <p>Fri: 11:00AM-9:00PM</p>
          <p>Sat: 11:00AM-9:00PM</p>
          <p>Sun: 12:00PM-8:00PM</p>
        </div>

        <div className="md:col-span-2 col-span-1 row-span-2 md:row-span-1">
          <h8 className="font-semibold">CALL US</h8>
          <p>Phone: (810) 686-0107</p>
        </div>
        <div className="md:col-span-2 col-span-1 hidden md:block md:row-span-1">
          <h7 className="font-semibold">HOURS</h7>
          <p>Mon: 11:00AM-9:00PM</p>
          <p>Tue: 11:00AM-9:00PM</p>
          <p>Wed: 11:00AM-9:00PM</p>
          <p>Thu: 11:00AM-9:00PM</p>
          <p>Fri: 11:00AM-9:00PM</p>
          <p>Sat: 11:00AM-9:00PM</p>
          <p>Sun: 12:00PM-8:00PM</p>
        </div>
      </div>
      <iframe className="md:col-span-1 md:row-span-2 col-span-2 w-full h-full md:h-3/4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.8082215932764!2d-83.69609114927391!3d43.12955477904035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882385c68873d049%3A0x26f4fd8b513c2810!2sLa%20Villa%20Family%20Dining%20%26%20Pizzeria!5e0!3m2!1sen!2sus!4v1641164900337!5m2!1sen!2sus" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
  );
}

export default Contact;
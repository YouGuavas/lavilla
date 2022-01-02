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
            <textarea id="grid-message "style={{resize: "none"}} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
            </textarea>
            <p id="p-message"></p>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Contact;
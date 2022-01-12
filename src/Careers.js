function Careers() {
  const asterisk = <span className="text-red-800">*</span>;
  const labelClass = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2";
  
  let numOne = Math.ceil(Math.random() * 10);
  let numTwo = Math.ceil(Math.random() * 10);
  
  const securityCheck = (value, a = numOne, b = numTwo) => {
    const sum = a + b;
    alert(value);
  }
  const handleSubmit = (value) => {
    securityCheck(value);
  }

  return(
  <div className="shadow-md h-full py-10 pt-20 px-10 bg-breadsticks bg-fixed bg-center bg-cover">
    {/* Careers Form */}
    <div className="grid h-full bg-white bg-opacity-70 place-items-center p-6">
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
            <input className="appearance-none block border border-black w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" /><p></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-last-name">
              Last Name{asterisk}
            </label>
            <input className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Doe" /><p></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-phone-number">
              Phone{asterisk}
            </label>
            <input className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-phone-number" type="text" placeholder="(555) 555-5555"/><p></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-email">
              Email{asterisk}
            </label>
            <input className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="john.doe@example.com" />
            <p id="p-email"></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-message">
              Message/Suggestions{asterisk}
            </label>
            <textarea rows="4" id="grid-message "style={{resize: "none"}} className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Please leave any messages, suggestions, or comments here!">
            </textarea>
            <p id="p-message"></p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3">
            <label className={labelClass} for="grid-security">
              Security Check{asterisk} {numOne} + {numTwo}
            </label>
            <input className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-security" type="number"/>
          </div>
          <div className="w-full md:w-1/2 md:pt-6 px-3">
            <button type="submit" className="w-full font-semibold bg-gray-300 text-gray-700 border border-1 border-gray-500 rounded py-3 px-4 mb-3 leading-tight">Submit</button>
          </div>
        </div>
      </form>
    </div>
    {/*End of Careers form*/}
  </div>
  );
}
export default Careers;
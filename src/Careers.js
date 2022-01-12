import { setMaxListeners } from "process";

function Careers() {
  const asterisk = <span className="text-red-800">*</span>;
  const labelClass = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2";
  const states = [
    "Alabama", "Alaska", "American Samoa", "Arizona","Arkansas",
    "California", "Colorado", "Connecticut",
    "Delaware", "District of Columbia", 
    "Federated States of Micronesia", "Florida",
    "Georgia", "Guam",
    "Hawaii", 
    "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky",
    "Lousiana",
    "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands",
    "Ohio", "Oklahoma", "Oregon",
    "Palau", "Pennsylvania", "Puerto Rico",
    "Rhode Island",
    "South Carolina", "South Dakota",
    "Tennessee", "Texas",
    "Utah", 
    "Vermont", "Virgin Island", "Virginia",
    "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ] 

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
  <div className="shadow-md h-full w-full py-10 pt-20 px-10 bg-breadsticks bg-fixed bg-center bg-cover">
    {/* Careers Form */}
    <div className="grid h-full w-full bg-white bg-opacity-70 place-items-center p-6">
      <form className="w-full" id="grid-form">
        <div className="flex flex-wrap">
          <div className="w-full px-3">
          <label className={labelClass}>
            Apply here
          </label>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-job">
              Position you are applying for{asterisk}
            </label>
            <select required name="job" form="grid-form" className="appearance-none block border border-black w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-job" placeholder="Jane" >
              <option value="none" selected disabled hidden>Please select an option</option>
              <option value="server">Server</option>
              <option value="cook">Cook</option>
              <option value="dishwasher">Dishwasher</option>
            </select><p></p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-date-start">
              Date available to start{asterisk}
            </label>
            <input className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-date-start" type="date" /><p></p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-phone-number">
              Days/nights you are available to work{asterisk}
            </label>
            <textarea style={{resize: "none"}} rows="4" className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-availability"/><p></p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-salary">
              Desired Salary/Hourly Wage{asterisk}
            </label>
            <input className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-salary" type="text" />
            <p id="p-email"></p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-first-name">
              First Name{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" /><p></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-last-name">
              Last Name{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" /><p></p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-phone-number">
              Phone{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-phone-number" type="text" /><p></p>
          </div>
        </div>

        <div className="flex flex-wrap pt-6">
          <div className="w-full px-3">
          <label className={labelClass}>
            Physical Address
          </label>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-first-name">
              Street Address{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" /><p></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-last-name">
              City{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" /><p></p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-job">
              State/Province{asterisk}
            </label>
            <select required name="job" form="grid-form" className="appearance-none block border border-black w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-job" placeholder="Jane" >
              <option value="none" selected disabled hidden>Please select an option</option>
              {states.map((state, index) => (
                <option key={index} value={index+1}>{state}</option>
              ))}
            </select><p></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-zip">
              Zip/Postal code{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-zip" type="number" /><p></p>
          </div>
        </div>

        <div className="flex flex-wrap pt-6">
          <div className="w-full px-3">
            <label className={labelClass}>
              Is your mailing address the same as your physical address? If no, please fill out below.{asterisk}
            </label>
            <div className="w-full flex">
              <input id="yes" value="yes" name="yesno" type="radio" />
              <label className="px-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="yes">Yes</label>
            </div>
            <div className="w-full flex">
              <input id="no" value="no" name="yesno" type="radio" />
              <label className="px-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="no">No</label>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap pt-6">
          <div className="w-full px-3">
          <label className={labelClass}>
            Mailing Address
          </label>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-m-address">
              Street Address{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-m-address" type="text" /><p></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-last-name">
              City{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-m-city" type="text" /><p></p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-m-state">
              State/Province{asterisk}
            </label>
            <select required name="job" form="grid-form" className="appearance-none block border border-black w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-m-state"  >
              <option value="none" selected disabled hidden>Please select an option</option>
              {states.map((state, index) => (
                <option key={index} value={index+1}>{state}</option>
              ))}
            </select><p></p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className={labelClass} for="grid-m-zip">
              Zip/Postal code{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-m-zip" type="number" /><p></p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass} for="grid-email">
              Email{asterisk}
            </label>
            <input required className="appearance-none border border-black block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" />
            <p id="p-email"></p>
          </div>
        </div>

        <div className="flex flex-wrap pt-6">
          <div className="w-full px-3">
            <label className={labelClass}>
              Have you ever worked for this company before?{asterisk}
            </label>
            <div className="w-full flex">
              <input value="yes" name="workedhere" type="radio" />
              <label className="px-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="yes">Yes</label>
            </div>
            <div className="w-full flex">
              <input value="no" name="workedhere" type="radio" />
              <label className="px-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="no">No</label>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-3">
            <label className={labelClass}>
              Do you have the legal right to work in the US?{asterisk}
            </label>
            <div className="w-full flex">
              <input value="yes" name="workhere" type="radio" />
              <label className="px-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="yes">Yes</label>
            </div>
            <div className="w-full flex">
              <input value="no" name="workhere" type="radio" />
              <label className="px-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="no">No</label>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap pt-6">
          <div className="w-full px-3">
            <label className={labelClass}>
              Have you pleaded "guilty" or "no contest" to, or been convicted of, a misdemeanor, fraud or felony?{asterisk}
            </label>
            <div className="w-full flex">
              <input id="guiltyyes" value="yes" name="guilty" type="radio" />
              <label className="px-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="guiltyyes">Yes</label>
            </div>
            <div className="w-full flex">
              <input value="no" id="guiltyno" name="guilty" type="radio" />
              <label className="px-2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="guiltyno">No</label>
            </div>
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
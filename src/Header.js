import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      active: "/Home"
    };
  }
  toggler = (style, item, index) => {
    //toggle active nav item
    let myhref = "/"+item;
    let activeStyle = "py-4 px-2 text-green-700 border-b-4 border-red-700 font-semibold";
    let normalStyle = "py-4 px-2 text-white font-semibold hover:text-green-700 transition duration-300";
    let menuType = '';
    if (myhref === "/Home") {
      myhref = "/"
    }
    if (item.indexOf("Order") >= 0) {
      myhref="https://slicelife.com/restaurants/mi/mt-morris/48458/la-villa-family-dining-pizzeria/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=lavilla-pizzeria.com"
    }
    if (style === "mobile") {
      menuType = 'mobile';
      activeStyle = "block text-sm px-2 py-4 text-white bg-green-700 font-semibold";
      normalStyle = "block text-sm px-2 py-4 hover:bg-green-700 hover:text-white transition duration-300";
    }
    const activeLink = <a href={myhref} key={index} className={activeStyle} onClick={() => {this.handleClick({menuType}, item, index)}}>{item}</a>;
    const inactiveLink = <a href={myhref} key={index} className={normalStyle} onClick={() => {this.handleClick({menuType}, item, index)}}>{item}</a>;

    if (this.state.active === "/") {
      if (item === "Home") {
        return activeLink;
      } else { return inactiveLink;}
    } else if (item.indexOf(' ') >= 0) {
      if ("/"+item.replace(' ', '%20') === this.state.active) {
        return activeLink;
      } else {return inactiveLink;}
    }
    else if ("/"+item === this.state.active){
      return activeLink;
    } else {
      return inactiveLink;
    }
  }

  handleClick = (menuType='', item='', index=undefined) => {
    //toggle mobile menu
    const btn = document.getElementById("nav-button");
    const menu = document.getElementById("mobile-menu");
    if (menuType === 'mobile') {
      menu.classList.toggle('hidden');
      btn.classList.toggle('hidden');
    }; 
    
  }
  componentDidMount() {
    this.setState({
      active: window.location.pathname
    })
  }

  render(){  
    const links = ["Home", "Menu", "Catering", "Careers", "Contact Us", "Order Delivery"];
    const logo = "https://lh3.googleusercontent.com/a1ZPmZbVyg6778udNK53bDi8yi-CJkygGErxRyDJasEHTSeh66H0IPT9SBIKzX369igiFPaDa-a6HaPWBZSH_P9TEozLkcTTAUSJcBw3XKxl3N6vXxG2hqOFuy6RcG0CPCLzAoR4_cv6KO9v2pDJVFiRiIvUpJMb6PiiFSx-GAwkUM_Ww7EaD43MhPMhSftW6bEVbZIJlX5DZjLU4l0y07d8tFjFu6H5jYtHWHzJI7wEcT8bi-RJ1ofKt8X_vJ9BgcGX_gMRLRe3sS5pWQDDwFdM5FA-YfkCSdJPS6INDoRbV1gtOCUb2Bo61mbnETQIyFNtVo91LAPS-nyajP-h9uxXEuecBMTPCMYyptGzKQFf1ARiT_jVebFj0Uurmr6Ugobs8z74AGtaMRc3-ZnJWRKM3mh06IocsRfVlveHTqPT_N-2qquKG7ACTVbaYnY8OnMHt5FO91_i77nPBWp2kbtEIXgQnqkSibUuvLk5W3OBe3AVQBgng5diLCqMIQOLGwz0OokdI4iPgDibORootZNwT6kvKjdGDKh06XSdQKyXAMJQBaq2ZAOyXAGEtfaxXmH5lRIhn7erV9iQoO4AEWUHgWo50D07zyRiMti_ec4f3yD4YbYIDh_atq65fZXHU7LUd7On2nuBtggqNeX5OPIh-Can5uZymSwgu1TwKbrPpfgYw4eK_ttpxMW87F8byChR8HQjxSCoOovPTi7MvzHm=w119-h80-no?authuser=0"
    return(
    <nav className='sticky bg-opacity-0 top-0 z-50 bg-white flex justify-between px-20'>
          <div>
            <a href="/" className="flex items-center">
                <span className="">
                  <img alt="An image of the La Villa logo" src={logo} />
                </span>
            </a>
          </div>
          <div className="hidden md:flex items-end space-x-1">
              {links.map((item, index) => (this.toggler("standard", item, index)))}
            </div>
        <div className="md:hidden flex items-center">
          <button name="hamburger menu" id="nav-button" className="outline-none mobile-menu-button" onClick={() => {this.handleClick("mobile")}}>
            <svg className="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div id="mobile-menu" className="hidden mobile-menu absolute">
          <ul className="">
          {links.map((item, index) => (this.toggler("mobile", item, index)))}

          </ul>
        </div>
    </nav>
  );}
}

export default Header;
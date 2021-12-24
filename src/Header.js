import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  toggle = (menuType='', index=undefined) => {
    let toggleClasses;
    const oldIndex = this.state.activeIndex;
    this.setState({activeIndex: index}, () => {
      if (menuType === 'mobile') {
        toggleClasses = ['text-white', 'hover:text-white', 'bg-green-500', 'hover:bg-green-500', 'font-semibold', 'transition', 'duration-300'];
        const active = document.getElementById(`mobileMenu${oldIndex}`);
        const activeA = document.querySelector(`#mobileMenu${oldIndex}>a`);
        const inactive = document.getElementById(`mobileMenu${this.state.activeIndex}`);
        const inactiveA = document.querySelector(`#mobileMenu${this.state.activeIndex}>a`);
        active.classList.toggle('active');
        inactive.classList.toggle('active');
        toggleClasses.map((toggleClass) => {
          activeA.classList.toggle(toggleClass);
          inactiveA.classList.toggle(toggleClass);
          return null;
        });
      } else {
        toggleClasses = ['text-gray-500', 'text-green-500', 'hover:text-green-500', 'border-b-4', 'border-green-500', 'transition', 'duration-300'];
        const active = document.getElementById(`bigMenu${oldIndex}`);
        const inactive = document.getElementById(`bigMenu${this.state.activeIndex}`)
        toggleClasses.map((toggleClass) => {
          active.classList.toggle(toggleClass);
          inactive.classList.toggle(toggleClass);
          return null;
        });
      }
    })
    
  }
  handleClick = (menuType='', item='', index=undefined) => {
    const btn = document.getElementById("nav-button");
    const menu = document.getElementById("mobile-menu");
    if (menuType === 'mobile') {
      menu.classList.toggle('hidden');
      btn.classList.toggle('hidden');
    } 
    if (item.length > 0) {
      this.toggle(menuType, index);
    }
    
  }
  render(){  
    const links = ["Home", "Menu", "Contact Us"];

    return(
    <nav className='sticky top-0 z-50 bg-white shadow-lg'>
    <div className='max-w-6xl mx-auto px-4'>
    <div className='flex justify-between'>
    <div className='flex space-x-7'>
    <div className="hidden md:flex items-center space-x-1">
            {links.map((item, index) => (
               index === 0 ? <a href='#' key={index} id={`bigMenu${index}`} className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold" onClick={() => {this.handleClick('', item, index)}}>{item}</a> : <a href={`#${item}`} key={index} id={`bigMenu${index}`} className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" onClick={() => {this.handleClick('', item, index)}}>{item}</a>
            ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button id="nav-button" className="outline-none mobile-menu-button" onClick={() => {this.handleClick("mobile")}}>
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
        <div id="mobile-menu" className="hidden mobile-menu">
          <ul className="">
            {links.map((item, index) => (
              index === 0 ? <li className="active" key={index} id={`mobileMenu${index}`}><a href="#" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold" onClick={() => {this.handleClick("mobile", item, index)}}>{item}</a></li> : <li key={index} id={`mobileMenu${index}`}><a href={`#${item}`} className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300" onClick={() => {this.handleClick("mobile", item, index)}}>{item}</a></li>
            ))}
            {/*
            <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
            */}
          </ul>
        </div>
        </div>
        </div>
      </nav>
  )};
}

export default Header;
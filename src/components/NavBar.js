import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const linkElements = links.map((link, i) => {
  //   return (
  //     <nav>{
  //       <><a href="#home" key={i}>home</a>
  //         <a href="#about" key={ii}>about</a>
  //         <a href="#projects" key={iii}>projects</a></>
  //     }</nav>
  //   );

  return (
    <nav>
      {
        links.map((link, idx) => {
          return <a href={`#${link}`} key={idx}>{link}</a>
        })
      }
    </nav>
  )

}

export default NavBar

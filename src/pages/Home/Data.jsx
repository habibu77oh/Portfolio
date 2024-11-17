import React from "react";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title" style={{color:'#212121'}}>Habibulloh Zekirullayev</h1>
      <h3 style={{color:'#212121'}} className="home__subtitle">---Frontend Developer---</h3>
      <p className="home__description" style={{color:'#212121'}}>
        HTML ,CSS ,JS ,REACT ,TAILWIND ,node ,Git/GitHub BOOTSTRAP ,MUI ,THREE.JS
      </p>
      <a href="#contact" className="button button--flex" style={{backgroundColor: "black",}}>
        Say Hello
      </a>
    </div>
  );
}

export default Data;

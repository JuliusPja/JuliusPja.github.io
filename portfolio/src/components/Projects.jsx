import "./body.css"
import "./Projects.css"
import { useState } from "react"

export default function Projects(){

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return(
 <section id="projects">
  <h2 className="FontH2">projects</h2>
  <div className={`flip_container ${isFlipped && 'flipped'}`}>
  
 <div className="Projects">

  {/* ===============FIRST PROJECT==================== */}

  <div className="First">

    <div id="left" className="ProjImg">
    </div>

    <div id="right">

      <div className="TextContainer">
       <p className="FontProjects" style={{backgroundColor:'#E8D5B0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Neque, error. Asperiores, ullam porro! Qui sapiente provident laborum quasi id rerum 
        ullam est dolorum impedit, iusto iure quaerat, repellendus, omnis hic.
        </p>
        </div>

        {/* Buttons container div START*/}
      <div>
      <div id="btn_right" onClick={handleClick}>
      <img id="btn_arrow" src="./assets/icons8-next-64.png" alt="next" />
      </div>

      <a id="btn_middle" href="">
        <img id="git_logo" src="./assets/icons8-github-64.png" alt="github" />
      </a>

      <div id="btn_left" style={{backgroundColor:'#E8D5B0'}}>
      <img id="btn_arrow" src="./assets/icons8-previous-64.png" alt="previous" />
      </div>
      </div>
        {/* Buttons container div END */}
    </div>
  </div>

  {/* ===============SECOND PROJECT==================== */}
  <div className="Second">
    <div id="left">

    </div>
    
    <div id="right">

      <div className="TextContainer">
      <p className="FontProjects" style={{backgroundColor:'#E8D5B0'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Neque, error. Asperiores, ullam porro! Qui sapiente provident laborum quasi id rerum 
        ullam est dolorum impedit, iusto iure quaerat, repellendus, omnis hic.
        </p>
        </div>

           {/* Buttons container div START*/}
      <div>
      <div id="btn_right" style={{backgroundColor:'#E8D5B0'}}>
      <img id="btn_arrow" src="./assets/icons8-next-64.png" alt="next" />
      </div>

      <a id="btn_middle" href="">
        <img id="git_logo" src="./assets/icons8-github-64.png" alt="github" />
      </a>

      <div id="btn_left" onClick={handleClick}>
      <img id="btn_arrow" src="./assets/icons8-previous-64.png" alt="previous" />
      </div>
      </div>
         {/* Buttons container div END */}
    </div> 
        {/* right div END */}
  </div>
        {/* Second div END */}
  </div>
  </div>
 </section>
)
}

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

    <div id="left" className="ProjOneImg">
    </div>

    <div id="right">

      <div className="TextContainer">
       <p className="FontProjects"> 
        <strong> Fitness Studio Website</strong> <br /><br />
        This project resulted from a time-constrained Bootstrap 
        workshop group effort. It significantly enhanced my understanding 
        of the library's practicality and time-saving capabilities.
        <br /><br />
        HTML, JavaScript, CSS, Bootstrap
        <br /><br /><br />
        <a href="https://grouphbwebsite.netlify.app" target="_blank">To the site</a>
        </p>
        </div>

      <div>
      <div id="btn_right" onClick={handleClick}>
      <img id="btn_arrow" src="./assets/icons8-next-64.png" alt="next" />
      </div>

      <a id="btn_middle" href="https://github.com/JuliusPja/Bootstrap-workshop" target="_blank">
        <img id="git_logo" src="./assets/icons8-github-64.png" alt="github" />
      </a>

      <div id="btn_left" style={{backgroundColor:'#E8D5B0'}}>
      <img id="btn_arrow" src="./assets/icons8-previous-64.png" alt="previous" />
      </div>
      </div>

    </div>
  </div>

  {/* ===============SECOND PROJECT==================== */}
  <div className="Second">
    <div id="left" className="ProjTwoImg">
    </div>
    
    <div id="right">

      <div className="TextContainer">
      <p className="FontProjects" >
        <strong> QR_maze_runner</strong> 
        <br /> <br /> 
        QR_maze_runner is a capstone project completed during my SE bootcamp. 
        It employs the Depth-First Search (DFS) algorithm to generate random 
        layouts, allowing customization with width, height, and wall density 
        parameters. The project continuously regenerates until a valid path 
        from the starting point to the exit is found. 
        <br /> <br />
        Python, pygame.
        </p>
        </div>

      <div>
      <div id="btn_right" style={{backgroundColor:'#E8D5B0'}}>
      <img id="btn_arrow" src="./assets/icons8-next-64.png" alt="next" />
      </div>

      <a id="btn_middle" href="https://github.com/JuliusPja/Maze-runner" target="_blank">
        <img id="git_logo" src="./assets/icons8-github-64.png" alt="github" />
      </a>

      <div id="btn_left" onClick={handleClick}>
      <img id="btn_arrow" src="./assets/icons8-previous-64.png" alt="previous" />
      </div>
      </div>

    </div> 
   
  </div>

  </div>
  </div>
 </section>
)
}

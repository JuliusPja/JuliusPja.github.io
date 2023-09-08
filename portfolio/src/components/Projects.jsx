import "./body.css"
import "./Projects.css"
import { useState } from "react"

export default function Projects(){

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return(
 <>
  <h2 className="FontH2">projects</h2>
  <div className={`flip_container ${isFlipped && 'flipped'}`}>
 <div className="Projects">

  {/* ===============FIRST PROJECT==================== */}

  <div className="First">
    <div id="left">
      <div id="btn_left" onClick={handleClick}>
        
        <img id="btn_arrow" src="./assets/icons8-previous-64.png" alt="previous" />
      </div>
    </div>
    <div id="right">
      <div id="btn_right" onClick={handleClick}>
      <img id="btn_arrow" src="./assets/icons8-next-64.png" alt="next" />
      </div>
    </div>
  </div>

  {/* ===============SECOND PROJECT==================== */}
  <div className="Second">
    <div id="left">
      <div id="btn_left" onClick={handleClick}>
        <img id="btn_arrow" src="./assets/icons8-previous-64.png" alt="previous" />
      </div>
    </div>
    <div id="right">
      <div id="btn_right" onClick={handleClick}>
      <img id="btn_arrow" src="./assets/icons8-next-64.png" alt="next" />
      </div>
    </div>
  </div>

  </div>
  </div>
 </>
)
}

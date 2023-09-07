import "./body.css"

export default function Hero(){
  return(
    <div 
    style={{marginTop: "300px"}}
    className="SectionContainer">
      <div className="LeftContainer">
        
        <h1
        className="FontH1">
          Hi, I am <span style={{color:"#F49E23"}}>Julius</span> <br />
          Front-End <br />Developer
          </h1>
          
          <div>
          <img 
          src="./assets/icons8-linked-in-50.png" alt="Linkedin" />
          <img 
          style={{marginLeft:"32px", height:"50px"}}
          src="./assets/icons8-github-64.png" alt="Github" />
          </div>
      </div>
      <div className="RightContainer">
        <img src="./assets/hero.png" alt="Hero" />
      </div>


    </div>
  )
}
import "./body.css"
import ContactIcons from "./ContactIcons"

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
          <ContactIcons/>
      </div>
      <div className="RightContainer">
        <img src="./assets/hero.png" alt="Hero" />
      </div>


    </div>
  )
}
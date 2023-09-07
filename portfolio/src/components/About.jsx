import "./body.css"

export default function About(){
  return(
    <>
    <h2 className="FontH2">about</h2>
    <div className="SectionContainer">
      <div 
      style={{backgroundColor: "#000"}}
      className="LeftContainer">
        <img 
        src="./assets/abstract_coding.jpg" alt="abstract" />
       </div>

      <div className="RightContainer">
        <p 
        className="FontGeneral">
          I'm a skilled front-end developer passionate about 
          crafting engaging user interfaces. I transform designs 
          into seamless web experiences. My enthusiasm for staying 
          current with industry trends drives my commitment to 
          continuous learning. With a collaborative mindset, 
          I'm excited to contribute my expertise and evolve within 
          an in1novative team.
          </p>
       </div>

    </div>
    </>
  )
}
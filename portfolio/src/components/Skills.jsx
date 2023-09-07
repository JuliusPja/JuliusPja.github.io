import "./body.css"
import SkillBox from "./SkillBox"

export default function Skills(){
  return(
    <>
    <h2 className="FontH2">skills</h2>
    <div className="SectionContainer">
      <div 
      className="LeftContainer">
        <p 
        className="FontGeneral">
          My professional skills include a strong grasp of 
          HTML5 for structurally sound web pages, proficiency 
          in CSS3 for creating visually appealing designs, and 
          a solid understanding of JavaScript for interactive 
          features. I am actively working on improving my React 
          skills to develop modern web applications.
          </p>
       </div>

      <div className="RightContainer">
      <SkillBox 
      logo='html'
      name='html5'
      percentage='80'/>
      <SkillBox 
      logo='css'
      name='css3'
      percentage='70'/>
      <SkillBox 
      logo='js'
      name='javascript'
      percentage='60'/>
      <SkillBox 
      logo='react'
      name='react'
      percentage='50'/>
       </div>

    </div>
    </>
  )
}
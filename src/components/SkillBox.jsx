import "./SkillBox.css"
import "../App.css"

export default function SkillBox({
  logo='', 
  name='', 
  percentage=''
}){

  return(

    <div className="Main">
      <div className="Middle">

        <div className="Middle">
          {logo === 'html' && <img src={'./assets/icons8-html5-48.png'} alt="html" id="logo"/>}
          {logo === 'css' && <img src={'./assets/icons8-css3-100.png'} alt="css" id="logo"/>}
          {logo === 'js' && <img src={'./assets/icons8-javascript-48.png'} alt="js" id="logo"/>}
          {logo === 'react' && <img src={'./assets/icons8-react-40.png'} alt="react" id="logo"/>}
          <h3 className="FontSkills">{name}</h3>
        </div>

        <div >
        <h3 className="FontSkills" style={{marginRight:'20px'}}>{percentage}%</h3>
        </div>

      </div>
      <div >
        <div className="Bar" style={{width: `${percentage}%`}}></div>
      </div>

    </div>
  )
}
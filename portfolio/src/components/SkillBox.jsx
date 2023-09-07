import "./SkillBox.css"

export default function SkillBox(icon='html', name, percentage){



  return(

    <div className="Main">
      <div style={{flexDirection: "row"}}>
      {icon === 'html' && <img src={'./assets/icons8-html5-48.png'} alt="icon"/>}

      </div>
      <div className="Bar">
      </div>

    </div>
  )
}
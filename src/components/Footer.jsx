import "./body.css"
import "./Footer.css"
import ContactIcons from "./ContactIcons"

export default function Footer(){
  return(
    <div id="footer_container">
      <h2 className="FontH2" style={{color:'#000', marginTop:'10px'}}>get in touch</h2>
      <div id="info_container">
   
        <ContactIcons/>

         {/* EMAIL */}
        <div >
        <a  
        id="email_link" 
        className="FontGeneral"
        href="mailto:juliuspja@yahoo.com" 
        target="_blank">
        <span id="mail_icon_container"/>
       juliuspja@yahoo.com
      </a>
    </div>
    
      </div>
    </div>
  )
}
import iconJS from "../assets/bit-js-icon.png"
import iconPython from "../assets/bit-python.png"
import iconC from "../assets/bit-c#-icon.png"
import iconRuby from "../assets/bit-ruby.png"
import iconSql from "../assets/bit-sql.png"
import iconReact from "../assets/bit-react.png"
import iconNode from "../assets/bit-node.png"
import iconRails from "../assets/bit-rails.png"
import iconFlask from "../assets/bit-flask.png"
import iconFunctional from "../assets/bit-functional.png"
import iconOpp from "../assets/bit-oop.png"
import iconHP from "../assets/bit-hp.png"
import iconMP from "../assets/bit-mp.png"




function Skills() {
    return(
        <div class="skills-content">
          <ul class="info">
            <h2>Ixius Procopios LV: 33</h2>
            <li><img src={iconHP}/> :100/100 <div class="statBar" id="hp"> </div></li>
            <li><img src={iconMP}/>:50/50 <div class="statBar" id="mp"> </div></li>
            
          </ul>
          <ul class="languages">
            <h2>Languages</h2>
            <li><img src={iconJS}/> JavaScript<div class="statBar"  style={{backgroundColor:'#e8e809'}}> </div></li>
            <li><img src={iconPython}/> Python<div class="statBar" style={{width:'60%', backgroundColor:'#03a1fc'}}> </div></li>
            <li><img src={iconC}/> C# / .NET<div class="statBar"style={{width:'50%', backgroundColor:'#07e019'}}> </div></li>
            <li><img src={iconRuby}/> Ruby<div class="statBar" style={{width:'90%', backgroundColor:'#d90f28'}}> </div></li>
            <li><img src={iconSql}/>SQL<div class="statBar" style={{width:'80%', backgroundColor:'#e87109'}}> </div></li>
          </ul>
          <ul class="libraries">
            <h2>Libraries</h2>
            <li><img src={iconReact}/>React<div class="statBar"  style={{width:'95%', backgroundColor:'#03a1fc'}}> </div></li>
            <li><img src={iconNode}/>Node.js<div class="statBar" style={{width:'60%', backgroundColor:'#07e019'}}> </div></li>
            <li><img src={iconRails}/>Rails<div class="statBar"  style={{width:'85%', backgroundColor:'#d90f28'}}> </div></li>
            <li><img src={iconFlask}/>Flask<div class="statBar" style={{width:'40%', backgroundColor:'#cfd4d0'}}> </div></li>
          </ul>
          <ul class="paradigms">
            <h2>Paradigms</h2>
            <li><img src={iconOpp}/>Object-Oriented Programming<div class="statBar"> </div></li>
            <li><img src={iconFunctional}/>Functional Programming<div class="statBar"> </div></li>
          </ul>
        </div>
    )
}

export default Skills;

// JavaScript | Python | .net / C# | SQL | Ruby
// React | Redux | Ruby on Rails | MongoDB | Node | Express
//  Object-Oriented Programming | Functional Programming

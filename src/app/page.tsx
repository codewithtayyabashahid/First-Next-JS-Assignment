import about from "./about/page";
import contact from "./contact/page";
import Servicespage from "./services/page";

const Homepage =()=>{
  return(<div>
    <a href="About/"><li><em>About</em></li></a>
    <a href="Contact/"><li><em>Contact</em></li></a>
    <a href="Services/"><li><em>Services</em></li></a>
    <h1><strong>This is Homepage</strong></h1>
  </div>

  )
}
export default Homepage;
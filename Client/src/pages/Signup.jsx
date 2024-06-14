import signupImg from "../assets/Images/wp.jpeg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the LawVistaHub for free"
      description1="When justice is denied, a shadow looms over the foundations of a lawful society"
      description2="Justice: the bedrock of a civilized society"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
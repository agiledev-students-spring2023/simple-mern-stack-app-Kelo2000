import { Link } from 'react-router-dom'
import './About.css'
import myimage from 'myimage.jpg'

/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About= props => {
  return (
    <>
      <h1>About Us!</h1>
      <h2>Lukelo Luoga:</h2>
      <img src={myimage} alt="Image of Lukelo Luoga" />
      <p>A self-driven person passionately in using technology and engineering to make this world a better place for everyone. Throughout my life, I have developed strong teamwork skills, effective communication skills, and organization skills. I am very determined to learn new things and skills to become a better version of myself.</p>
    </>
  )
}

// make this component available to be imported into any other file
export default About


import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'
import myimage from './myimage.jpeg'


/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  const [Data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
   const [error, setError] = useState('')

   // * A nested function that fetches Data from the back-end server.
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const Data = response.data.Data;
        setData(Data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      })
  }


  useEffect(() => {
    // fetch messages this once
    fetchData()

    // set a timer to load data from server every n seconds
    const intervalHandle = setInterval(() => {
      fetchData()
    }, 5000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
    <>
      <h1>About Lukelo Luoga</h1>
      <img className ="myimg" src={Data.image} alt="Image of Lukelo Luoga" />
      <p className = "mainText">{Data.bio}</p>
        <p className = "mainText">{Data.bio}</p>
    </>
  )
}

// make this component available to be imported into any other file
export default About
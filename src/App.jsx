import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all"; 
gsap.registerPlugin(ScrollTrigger, SplitText);
import "./index.css"
const App = () => {
  return (
    <div className='flex-center h-[100vh ] '>
      
      <h2 className='text-indigo-600 text-2xl'>mohammed</h2>
    </div>
  )
}

export default App
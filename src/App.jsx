import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all"; 
gsap.registerPlugin(ScrollTrigger, SplitText);
import "./index.css"
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
const App = () => {
  return (
 <main>
  <NavBar/>
  <Hero/>
  <Cocktails/>
  <div className="h-dvh bg-black"></div>
 </main>
  )
}

export default App
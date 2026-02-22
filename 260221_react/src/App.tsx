import './App.css'
import { Footer } from './components/Footer'
import { Greeting } from './components/Greeting'
import { CounterApp } from './components/CounterApp'
import { ToggleOnOff } from './components/ToggleOnOff'
import { DisplayText } from './components/DisplayText'
import { Navigation } from './components/Navigation'
import { useRef } from 'react'

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  const moveHome = () => {
    return homeRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  const moveCounter = () => {
    return counterRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  const moveToggle = () => {
    return toggleRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const moveSummary = () => {
    return summaryRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="flex flex-col w-full justify-start items-stretch min-h-screen">

        <Navigation
          clkMoveHome={moveHome}
          clkCounter={moveCounter}
          clkToggle={moveToggle}
          clkSummary={moveSummary}
        />

        {/* Greeting Props */}
        <Greeting
          title="LetPhil"
          subtitle="Level 3 Assignment"
          description="This is the first assignment using React."
          targetRef={homeRef}
        />


        <div className="flex flex-row w-full h-100 justify-evenly items-stretch bg-gray-100">

          {/*Couter App */}
          <div className="flex-1 flex justify-center items-center border-r border-gray-300">
            <CounterApp targetRef={counterRef} />
          </div>

          {/*Toggle On and Off*/}
          <div className="flex-1 flex justify-center items-center">
            <ToggleOnOff targetRef={toggleRef} />
          </div>

        </div>


        {/* Dipslay Text in Toggle Mode */}
        <DisplayText
          targetRef={summaryRef} />

        {/* Footer Props */}
        <Footer
          year="2026"
          name="LetPhil Lv3"
        />
      </div>
    </>
  )
}

export default App

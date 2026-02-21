import './App.css'
import { Footer } from './components/Footer'
import { Greeting } from './components/Greeting'
import { CounterApp } from './components/CounterApp'
import { ToggleOnOff } from './components/ToggleOnOff'
import { DisplayText } from './components/DisplayText'

const App = () => {

  return (
    <>
      {/* Greeting Props */}
      <Greeting
        name="Harim Yoo"
      />

      {/*Couter App */}
      <CounterApp />

      {/*Toggle On and Off*/}
      <ToggleOnOff />

      {/* Dipslay Text in Toggle Mode */}
      <DisplayText />

      {/* Footer Props */}
      <Footer
        year="2026"
        name="LetPhil Lv3"
      />
    </>
  )
}

export default App

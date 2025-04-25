//import Button from "./components/Button/Button"

import TextInput from "./components/TextInput/TextInput";

function App() {
  return (
    <div>

      <h1
        className="font-semibold text-3xl">
        Welcome to Hang Man!
      </h1>
      <TextInput label= {"Enter your words"}  value="" onChange={() => {}}/>
      
    </div>
  )
}

export default App;
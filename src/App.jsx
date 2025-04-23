import Button from "./components/Button/Button"

function App() {
  return (
    <div>

      <h1
        className="font-semibold text-3xl">
        Hello, World!
      </h1>

      <Button
        text="Secondary" 
        buttonType="submit" 
        styleType="secondary" 
        onClickHandler={() => console.log("secondary click")} 
      />
      
      <Button 
        text="Primary" 
        buttonType="button" 
        styleType="primary" 
        onClickHandler={() => console.log("primary click")} 
      />
      
      <Button 
        text="Warning"
        buttonType="button" 
        styleType="warning" 
        onClickHandler={() => console.log("warning click")}
      />

      <Button
        text="Error"
        buttonType="button" 
        styleType="error" 
        onClickHandler={() => console.log("error click")}
      />
      
    
    </div>
  )
}

export default App;
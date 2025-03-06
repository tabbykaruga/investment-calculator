import { useState } from "react";
import Calculator from "./components/Calculator";
import Header from "./components/header";
import Results from "./components/Results";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInv: 10000,
    annualInv: 1200,
    exptReturns: 6,
    duration: 12,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInputs((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  //check for a valid duration
  const isUserInputValid = userInputs.duration >= 1;

  return (
    <>
      <Header></Header>
      <Calculator
        userInput={userInputs}
        onChange={handleInputChange}
      ></Calculator>
      {!isUserInputValid && (
        <p className="center">Please enter a valid duration greater than 0 </p>
      )}
      {isUserInputValid && <Results userInput={userInputs} />}
    </>
  );
}

export default App;

import UserInput from "./UserInput";

export default function Calculator({ userInput, onChange }) {
  // LONG OPTION

  //   const [initialInv, setInitialInv] = useState();
  //   const [annualInv, setAnnaulInv] = useState();
  //   const [exptReturns, setExpectedReturns] = useState();
  //   const [duration, setDuration] = useState();

  // function handleInitialInv(event) {
  //   setInitialInv(event.target.value);
  // }

  // function handleAnnaulInv(event) {
  //   setAnnaulInv(event.target.value);
  // }

  // function handleExpectedReturns(event) {
  //   setExpectedReturns(event.target.value);
  // }

  // function handleDuration(event) {
  //   setDuration(event.target.value);
  // }

  //SHORT OPTION USE KEY VALUE
  //   const [userInputs, setUserInputs] = useState({
  //     initialInv: 10000,
  //     annualInv: 1200,
  //     exptReturns: 6,
  //     duration: 12,
  //   });

  //   function handleInputChange(inputIdentifier, newValue) {
  //     setUserInputs((prevUserInput) => {
  //       return {
  //         ...prevUserInput,
  //         [inputIdentifier]: [newValue],
  //       };
  //     });
  //   }

  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          labelName={"Initial Investment"}
          value={userInput.initialInv}
          onChange={(event) => onChange("initialInv", event.target.value)}
        />
        <UserInput
          labelName={"Annual Investment"}
          value={userInput.annualInv}
          onChange={(event) => onChange("annualInv", event.target.value)}
        />
      </div>
      <div className="input-group">
        <UserInput
          labelName={"Expected Return"}
          value={userInput.exptReturns}
          onChange={(event) => onChange("exptReturns", event.target.value)}
        />
        <UserInput
          labelName={"Duration"}
          value={userInput.duration}
          onChange={(event) => onChange("duration", event.target.value)}
        />
      </div>
    </section>
  );
}

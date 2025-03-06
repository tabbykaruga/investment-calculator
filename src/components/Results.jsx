import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  console.log(userInput);
  //function for calculating the investment
  const resultsData = calculateInvestmentResults(userInput);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalIntrets =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const totalAmountInv = yearData.valueEndOfYear - totalIntrets;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalIntrets)}</td>
              <td>{formatter.format(totalAmountInv)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

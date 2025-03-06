export default function UserInput({ labelName, value, onChange }) {
  return (
    <p>
      <label>{labelName}</label>
      <input type="number" required value={value} onChange={onChange}></input>
    </p>
  );
}

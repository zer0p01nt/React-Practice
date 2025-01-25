import { Link } from "react-router-dom";
import { useState } from "react";

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <div>
        <label htmlFor='minutes'>Minutes </label>
        <input
          id='minutes'
          value={inverted ? amount * 60 : amount}
          onChange={onChange}
          placeholder='Minutes'
          type='number'
          disabled={inverted === true}
        />
      </div>
      <div>
        <label htmlFor='hours'>Hours </label>
        <input
          id='hours'
          value={inverted ? amount : Math.round(amount / 60)}
          onChange={onChange}
          placeholder='Hours'
          type='number'
          disabled={inverted === false}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
    </div>
  );
}
function KmToMiles() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <div>
        <label htmlFor='Km'>Km </label>
        <input
          id='Km'
          value={inverted ? amount * 1.609344 : amount}
          onChange={onChange}
          placeholder='Km'
          type='number'
          disabled={inverted === true}
        />
      </div>
      <div>
        <label htmlFor='Miles'>Miles </label>
        <input
          id='Miles'
          value={inverted ? amount : amount / 1.609344}
          onChange={onChange}
          placeholder='Miles'
          type='number'
          disabled={inverted === false}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
    </div>
  );
}
function Converter() {
  const [index, setIndex] = useState("N");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value='null'>Units</option>
        <option value='0'>Minutes & Hours</option>
        <option value='1'>Km & Miles</option>
      </select>
      {index === "N" ? <h3>Please select your units</h3> : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
      <br />
      <button>
        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
          Home
        </Link>
      </button>
    </div>
  );
}

export default Converter;

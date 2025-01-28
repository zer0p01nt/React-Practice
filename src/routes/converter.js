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
      <div class='con-minhour'>
        <div class='con-top con-min'>
          <label class='con-label' htmlFor='minutes'>
            Minutes{" "}
          </label>
          <input
            id='minutes'
            class='con-input'
            value={inverted ? amount * 60 : amount}
            onChange={onChange}
            placeholder='Minutes'
            type='number'
            disabled={inverted === true}
          />
        </div>
        <div class='con-bottom'>
          <label class='con-label' htmlFor='hours'>
            Hours{" "}
          </label>
          <input
            id='hours'
            class='con-input'
            value={inverted ? amount : Math.round(amount / 60)}
            onChange={onChange}
            placeholder='Hours'
            type='number'
            disabled={inverted === false}
          />
        </div>
      </div>
      <div>
        <button class='con-reset' onClick={reset}>
          Reset
        </button>
        <button class='con-invert' onClick={onInvert}>
          {inverted ? "Turn back" : "Invert"}
        </button>
      </div>
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
      <div class='con-kmmile'>
        <div class='con-top con-km'>
          <label class='con-label' htmlFor='Km'>
            Km{" "}
          </label>
          <input
            id='Km'
            class='con-input'
            value={inverted ? amount * 1.609344 : amount}
            onChange={onChange}
            placeholder='Km'
            type='number'
            disabled={inverted === true}
          />
        </div>
        <div class='con-bottom'>
          <label class='con-label' htmlFor='Miles'>
            Miles{" "}
          </label>
          <input
            id='Miles'
            class='con-input'
            value={inverted ? amount : amount / 1.609344}
            onChange={onChange}
            placeholder='Miles'
            type='number'
            disabled={inverted === false}
          />
        </div>
      </div>
      <div>
        <button class='con-reset' onClick={reset}>
          Reset
        </button>
        <button class='con-invert' onClick={onInvert}>
          {inverted ? "Turn back" : "Invert"}
        </button>
      </div>
    </div>
  );
}
function Converter() {
  const [index, setIndex] = useState("N");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div class='container'>
      <h1 class='title'>Super Converter</h1>
      <div class='con-select'>
        <select value={index} onChange={onSelect}>
          <option value='null'>Units</option>
          <option value='0'>Minutes & Hours</option>
          <option value='1'>Km & Miles</option>
        </select>
      </div>
      <div class='con'>
        {index === "N" ? <h3>Please select your units</h3> : null}
        {index === "0" ? <MinutesToHours /> : null}
        {index === "1" ? <KmToMiles /> : null}
      </div>
      <button class='toHome'>
        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
          Home
        </Link>
      </button>
    </div>
  );
}

export default Converter;

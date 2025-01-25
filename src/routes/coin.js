import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const onChange = (event) => setMoney(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h3>How much USD you can spend?</h3>
          <form>
            <input
              value={money}
              onChange={onChange}
              type='number'
              placeholder='Your Money'
            />
            <span> USD</span>
          </form>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) :{" "}
                {money ? coin.quotes.USD.price / money : 0} USD
              </option>
            ))}
          </select>
        </div>
      )}
      <br />
      <button>
        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
          Home
        </Link>
      </button>
    </div>
  );
}

export default Coin;

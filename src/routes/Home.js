import { Link } from "react-router-dom";

function Home() {
  return (
    <div class='home container'>
      <h1 class='home-title'>React Practice</h1>
      <div class='home-btn-container'>
        <button class='home-btn'>
          <Link
            to='/Converter'
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Converter
          </Link>
        </button>
      </div>
      <div class='home-btn-container'>
        <button class='home-btn'>
          <Link
            to='/Coin-Tracker'
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Coin Tracker
          </Link>
        </button>
      </div>
      <div class='home-btn-container'>
        <button class='home-btn'>
          <Link
            to='/To-Do-List'
            style={{ color: "inherit", textDecoration: "none" }}
          >
            To Do List
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;

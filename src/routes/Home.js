import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <button>
        <Link
          to='/Converter'
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Converter
        </Link>
      </button>
      <button>
        <Link
          to='/Coin-Tracker'
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Coin Tracker
        </Link>
      </button>
      <button>
        <Link
          to='/To-Do-List'
          style={{ color: "inherit", textDecoration: "none" }}
        >
          To Do List
        </Link>
      </button>
    </div>
  );
}

export default Home;

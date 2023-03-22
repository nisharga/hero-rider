import "./App.css";
import { Link } from "react-router-dom";
import Bgvideo from "./Shared/Bgvideo/Bgvideo";
function App() {
  return (
    <div className="homepage">
      <Bgvideo />
      <div class="container_hero">
        <div class="hero_btn">
          <Link to="/rider">Join as a Rider</Link>
        </div>
        <div class="hero_btn">
          <Link to="/learner">Join as a Driving Lesson Learner</Link>
        </div>
      </div>
      <div class="login_btn btn btn-outline-info btn-lg">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default App;

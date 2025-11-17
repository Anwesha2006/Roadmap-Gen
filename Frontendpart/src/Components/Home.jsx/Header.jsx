
import './Header.css'
import {Link, useNavigate} from "react-router-dom"
export default function Header() {
  const navigate=useNavigate();
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">S</div>
          <span className="logo-text">StudySync</span>
        </div>
        <nav className="nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/roadmap">Roadmap</Link>
          <Link className="nav-link" to="/pyq">Pyq</Link>
          <button className="nav-button" onClick={()=>navigate("/signin")}>Signin</button>
        </nav>
      </div>
    </header>
  )
}

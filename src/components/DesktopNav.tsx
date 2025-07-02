import logo from "../assets/tuneDeckLogo.svg";
import "./DesktopNav.css";

export default function DesktopNav() {
  return (
    <aside className="sidebar-left d-none d-md-flex flex-column">
      <div className="d-flex justify-content-center">
        <img src={logo} alt="Logo" width="90" height="90" />
      </div>
      <ul>
        <li>
          <a href="/">
            <i className="bi bi-house-door-fill"></i>
            <span className="menu-option">Home</span>
          </a>
        </li>
        <li>
          <a href="/explore">
            <i className="bi bi-compass-fill"></i>
            <span className="menu-option">Explore</span>
          </a>
        </li>
        <li>
          <a href="/messages">
            <i className="bi bi-chat-text-fill"></i>
            <span className="menu-option">Messages</span>
          </a>
        </li>
        <li>
          <a href="/inbox">
            <i className="bi bi-inbox-fill"></i>
            <span className="menu-option">Inbox</span>
          </a>
        </li>
        <li>
          <a href="/settings">
            <i className="bi bi-gear-fill"></i>
            <span className="menu-option">Settings</span>
          </a>
        </li>
        <li>
          <a href="/account">
            <i className="bi bi-person-fill"></i>
            <span className="menu-option">Account</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

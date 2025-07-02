import "./Header.css";

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="border-unten bg-black">
      <div className="navbar text-white container-fluid d-md-none">
        {/* Mobile: Icon sichtbar, Suchfeld versteckt */}
        <button className="btn" onClick={onMenuClick}>
          <i className="bi bi-list text-white"></i>
        </button>
        <button className="btn" type="button">
          <i className="bi bi-search text-white"></i>
        </button>
      </div>
      <div className="d-none d-md-flex">
        <button className="position-relative header-button">For you</button>
        <button className="position-relative header-button">Following</button>
      </div>
    </div>
  );
};

export default Header;

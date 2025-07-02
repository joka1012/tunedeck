import logo from "../assets/tuneDeckLogo.svg";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ zIndex: 9998, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={onClose} // Optional: Klick auf Overlay schließt Sidebar
      />
      <div
        className="position-fixed top-0 start-0 vh-100 bg-black text-white d-md-none p-4"
        style={{ zIndex: 9999 }}
      >
        <button className="btn btn-light mb-4" onClick={onClose}>
          Schließen ✖
        </button>
        <div className="d-flex justify-content-center">
          <img src={logo} alt="Logo" width="90" height="90" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">Inbox</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
    </>
  );
}

import "./DesktopRightBar.css"


export default function DesktopRightBar() {
  return (
    <aside className="right-bar bg-black text-white d-none d-md-flex flex-column p-2">
      {/* Desktop: Suchleiste sichtbar ab md, sonst versteckt */}
        <form className="d-none d-md-flex position-relative" role="search">
          <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-2 text-dark"></i>
          <input
            className="form-control ps-5 bg-secondary text-white border-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
    </aside>
  );
}
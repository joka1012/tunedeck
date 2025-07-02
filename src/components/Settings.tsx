import "./Settings.css";

function Settings() {
    return (
        <div className="sett-main">
            <div className="sett-frame">
                <div className="sett-row">
                    <span className="sett-label">Account</span>
                    <span className="sett-value">Max Mustermann</span>
                </div>
                <div className="sett-row">
                    <span className="sett-label">Email</span>
                    <span className="sett-value">max@example.com</span>
                </div>
                <div className="sett-row">
                    <span className="sett-label">Password</span>
                    <span className="sett-value">********</span>
                </div>
                <div className="sett-row">
                    <span className="sett-label">Birthday</span>
                    <span className="sett-value">1990-01-01</span>
                </div>
                <div className="sett-row">
                    <span className="sett-label">Language</span>
                    <span className="sett-value">English</span>
                </div>
                <button className="delete-button semibold">Delete Account</button>
            </div>
        </div>
    );
}

export default Settings;
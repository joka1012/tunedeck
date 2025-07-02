import { useLocation, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Feed from "./Feed.tsx";
import Header from "./Header.tsx";
import DesktopNav from "./DesktopNav.tsx";
import MobileNav from "./MobileNav.tsx";
import DesktopRightBar from "./DesktopRightBar.tsx";
import Account from "./Account.tsx";
import Explore from "./Explore.tsx";
import Messages from "./Messages.tsx";
import Inbox from "./Inbox.tsx";
import Settings from "./Settings.tsx";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const hideHeaderRoutes = ["/account","/inbox","/settings"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        <DesktopNav />
        <MobileNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      <div className="flex-grow-0">
        {shouldShowHeader && (
          <Header onMenuClick={() => setSidebarOpen(true)} />
        )}
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route
            path="/account"
            element={
              <Account
                username="umiwisteria"
                userAvatarUrl="/src/assets/profilePic.png"
                following={50}
                follower={50}
                bio="Hallo das ist meine erste responsive Website"
              />
            }
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

      <div>
        <DesktopRightBar />
      </div>
    </div>
  );
}

export default Layout;

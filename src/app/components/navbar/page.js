"use client";
import { useState, useEffect, useRef } from "react";
import "./navbar.css";
import Profile from "../profile/page";

export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    if (showProfile) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showProfile]);

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setShowProfile((prev) => !prev);
  };

  return (
    <div className="navbar-main">
      <div className="navbar-container">
        <h1>AgriQCert Portal</h1>
      </div>

      <div className="nav-profile-container" ref={profileRef}>
        <div className="nav-profile">
          <img
            src="/profile.png"
            alt="User"
            className="avatar"
            onClick={handleProfileClick}
          />
        </div>
        {showProfile && <Profile />}
      </div>
    </div>
  );
}
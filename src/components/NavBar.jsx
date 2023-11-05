import { useState, useEffect } from "react";
import "../css/navbar.css";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import Logo from '../Images/logo.jpeg'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const NavBar = (props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={Logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">VoteChain</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      <div className="menu-items">
        {activeMenu && (
          <Menu style={{color: "white", fontWeight:"bold", fontSize:"16px"}} theme="">
            <Menu.Item icon={<HomeOutlined />}>
              <Link style={{color:"white", textDecoration:"none"}} to="/">Voting</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
              <Link style={{color:"white", textDecoration:"none"}} to="/knowMore">Know More</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link style={{color:"white", textDecoration:"none"}} to="/stats">Live Stats</Link>
            </Menu.Item>
          </Menu>
        )}
      </div>
    </div>
  );
};

export default NavBar;

// <nav className="navbar" style={{ border: "1px solid white" }}>
//   <div className="container">
//     <div className="logo">
//       <p className="p-tag">VoteChain</p>
//     </div>
//     <div className="menu-icon" onClick={handleShowNavbar}></div>
//     <div className={`nav-elements  ${showNavbar && "active"}`}>
//       <ul>
//         <li>
//           <NavLink to="/">Vote Now</NavLink>
//         </li>
//         <li>
//           <NavLink to="/knowMore">Know More</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact">Contact Us</NavLink>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

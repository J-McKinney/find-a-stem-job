/*eslint-disable*/
import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Nav,
  Button,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";

var ps;

function Sidebar(props) {
  const [dropdownOpenOne, setDropdownOpenOne] = React.useState(false);
  const [dropdownOpenTwo, setDropdownOpenTwo] = React.useState(false);
  const [dropdownOpenThree, setDropdownOpenThree] = React.useState(false);
  const sidebar = React.useRef();
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  const dropdownToggleOne = (e) => {
    setDropdownOpenOne(!dropdownOpenOne);
  };
  const dropdownToggleTwo = (e) => {
    setDropdownOpenTwo(!dropdownOpenTwo);
  };
  const dropdownToggleThree = (e) => {
    setDropdownOpenThree(!dropdownOpenThree);
  };

  return (
    <div className="sidebar" data-color={props.backgroundColor}>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.redirect) return null;
            if (key < 5)
              return (
                <li
                  className={
                    activeRoute(prop.layout + prop.path) +
                    (prop.pro ? " active active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={"now-ui-icons " + prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
          })}
        </Nav>
        {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <Nav>
          <Dropdown
            nav
            isOpen={dropdownOpenOne}
            toggle={(e) => dropdownToggleOne(e)}
          >
            <DropdownToggle nav>
              <i className="now-ui-icons education_agenda-bookmark" />
              <p>STEM Cluster</p>
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/admin/KClusters">
                <DropdownItem style={{ color: "black" }}>K-12</DropdownItem>
              </Link>
              <Link to="/admin/CommunityCollegeClusters">
                <DropdownItem style={{ color: "black" }}>
                  Community College
                </DropdownItem>
              </Link>
              <Link to="/admin/PostGradClusters">
                <DropdownItem style={{ color: "black" }}>
                  Post Grad
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        <Nav>
          <Dropdown
            nav
            isOpen={dropdownOpenTwo}
            toggle={(e) => dropdownToggleTwo(e)}
          >
            <DropdownToggle nav>
              <i className="now-ui-icons business_briefcase-24" />
              <p>Community Cluster</p>
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/admin/TechClusters">
                <DropdownItem style={{ color: "black" }}>Tech Assignments</DropdownItem>
              </Link>
              <Link to="/admin/GreenClusters">
                <DropdownItem style={{ color: "black" }}>Green Assignments</DropdownItem>
              </Link>
              <Link to="/admin/HospitalityClusters">
                <DropdownItem style={{ color: "black" }}>
                  Hospitality Assignments
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        <Nav>
          <Dropdown
            nav
            isOpen={dropdownOpenThree}
            toggle={(e) => dropdownToggleThree(e)}
          >
            <DropdownToggle nav>
              <i className="now-ui-icons location_world" />
              <p>DOD Cluster</p>
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/admin/PreapprenticeClusters">
                <DropdownItem style={{ color: "black" }}>
                  Pre-Apprentice
                </DropdownItem>
              </Link>
              <Link to="/admin/ApprenticeClusters">
                <DropdownItem style={{ color: "black" }}>
                  Apprentice
                </DropdownItem>
              </Link>
              <Link to="/admin/InternClusters">
                <DropdownItem style={{ color: "black" }}>Intern</DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <CardBody>
          <div className="author">
            <img
              alt="..."
              className="avatar border-gray"
              src={require("assets/img/SREB.png").default}
            />
          </div>
          <div className="button-container" style={{ textAlign: "center" }}>
            <Button
              style={{ background: "#00000000" }}
              className="btn-neutral btn-icon btn-round"
              color="default"
              href="#jesse"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-facebook-f" />
            </Button>
            <Button
              style={{ background: "#00000000" }}
              className="btn-neutral btn-icon btn-round"
              color="default"
              href="#jesse"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-twitter" />
            </Button>
            <Button
              style={{ background: "#00000000" }}
              className="btn-neutral btn-icon btn-round"
              color="default"
              href="#jesse"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-google-plus-g" />
            </Button>
          </div>
        </CardBody>
      </div>
    </div>
  );
}

export default Sidebar;

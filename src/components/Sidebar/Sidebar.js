/*eslint-disable*/
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Row,
  Col,
  Button,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import MyModal from "components/Modal/MyModal.js";
import STEM from "../../assets/img/STEMClusters.png";
import COMM from "../../assets/img/CommClusters.png";
import DOD from "../../assets/img/DODClusters.png";

var ps;

function Sidebar(props) {
  const [dropdownOpenOne, setDropdownOpenOne] = React.useState(false);
  const [dropdownOpenTwo, setDropdownOpenTwo] = React.useState(false);
  const [dropdownOpenThree, setDropdownOpenThree] = React.useState(false);
  const [dropdownOpenFour, setDropdownOpenFour] = React.useState(false);
  const [modalShowOne, setModalShowOne] = React.useState(false);
  const [modalShowTwo, setModalShowTwo] = React.useState(false);
  const [modalShowThree, setModalShowThree] = React.useState(false);
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
  const dropdownToggleFour = (e) => {
    setDropdownOpenFour(!dropdownOpenFour);
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
            isOpen={dropdownOpenTwo}
            toggle={(e) => dropdownToggleTwo(e)}
          >
            <DropdownToggle nav>
              <Row>
                <Col md={2} xs={2}>
                  <FontAwesomeIcon
                    style={{
                      fontSize: "22px",
                      color: "hsl(0, 0%, 50%)",
                      marginLeft: "6px",
                    }}
                    icon={faGraduationCap}
                  />
                </Col>
                <Col md={9} xs={9}>
                  <p style={{ marginLeft: "6px" }}>STEM Learning Cluster</p>
                </Col>
              </Row>
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
            isOpen={dropdownOpenThree}
            toggle={(e) => dropdownToggleThree(e)}
          >
            <DropdownToggle nav>
              <i className="now-ui-icons business_briefcase-24" />
              <p>Community Service Cluster</p>
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="/admin/TechClusters">
                <DropdownItem style={{ color: "black" }}>
                  Tech Assignments
                </DropdownItem>
              </Link>
              <Link to="/admin/GreenClusters">
                <DropdownItem style={{ color: "black" }}>
                  Green Assignments
                </DropdownItem>
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
            isOpen={dropdownOpenFour}
            toggle={(e) => dropdownToggleFour(e)}
          >
            <DropdownToggle nav>
              <Row>
                <Col md={2} xs={2}>
                  <FontAwesomeIcon
                    style={{
                      fontSize: "22px",
                      color: "hsl(0, 0%, 50%)",
                      marginLeft: "6px",
                    }}
                    icon={faFlask}
                  />
                </Col>
                <Col md={9} xs={9}>
                  <p style={{ marginLeft: "6px" }}>DOD Research Cluster</p>
                </Col>
              </Row>
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
        <Nav>
          <Dropdown
            nav
            isOpen={dropdownOpenOne}
            toggle={(e) => dropdownToggleOne(e)}
          >
            <DropdownToggle nav>
              <i className="fas fa-users"></i>
              <p>JOIN A CLUSTER</p>
            </DropdownToggle>
            <DropdownMenu right>
              <Link to="#STEMClusters">
                <DropdownItem
                  onClick={() => setModalShowOne(true)}
                  style={{ color: "black", cursor: "pointer" }}
                >
                  Join STEM Learning Cluster
                </DropdownItem>
              </Link>
              <MyModal
                heading="STEM Learning Clusters"
                titleone="Join STEM Learning Clusters"
                imgone={STEM}
                altone="STEM Learning Clusters"
                show={modalShowOne}
                onHide={() => setModalShowOne(false)}
              />
              <Link to="#CommunityClusters">
                <DropdownItem
                  onClick={() => setModalShowTwo(true)}
                  style={{ color: "black", cursor: "pointer" }}
                >
                  Join Community Service Cluster
                </DropdownItem>
              </Link>
              <MyModal
                heading="Community Service Clusters"
                titleone="Join Community Service Clusters"
                imgone={COMM}
                altone="Community Service Clusters"
                show={modalShowTwo}
                onHide={() => setModalShowTwo(false)}
              />
              <Link to="#DODClusters">
                <DropdownItem
                  onClick={() => setModalShowThree(true)}
                  style={{ color: "black", cursor: "pointer" }}
                >
                  Join DoD Research Cluster
                </DropdownItem>
              </Link>
              <MyModal
                heading="DoD Research Clusters"
                titleone="Join DoD Research Clusters"
                imgone={DOD}
                altone="DoD Research Clusters"
                show={modalShowThree}
                onHide={() => setModalShowThree(false)}
              />
            </DropdownMenu>
          </Dropdown>
        </Nav>
        {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <Nav>
          <Row>
            <Col md={5} xs={12}>
              <Link to="#ChatLink">
                <i className="fas fa-comment fa-flip-horizontal"></i>
                {/* <FontAwesomeIcon icon={faNetworkWired} /> */}
                <p style={{ color: "white" }}>Chat Link</p>
              </Link>
            </Col>
            <Col md={5} xs={12}>
              <Link to="#VideoLink">
                <i className="fas fa-video"></i>
                <p style={{ color: "white" }}>Video Link</p>
              </Link>
            </Col>
          </Row>
        </Nav>
        {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <CardBody>
          <div className="author">
            <img
              alt="..."
              className="avatar border-gray"
              // src={require("assets/img/SREB.png").default}
              src={require("assets/img/EDALogo.png").default}
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
              <i style={{ color: "steelblue" }} className="fab fa-facebook-f" />
            </Button>
            <Button
              style={{ background: "#00000000" }}
              className="btn-neutral btn-icon btn-round"
              color="default"
              href="#jesse"
              onClick={(e) => e.preventDefault()}
            >
              <i
                style={{ color: "cornflowerblue" }}
                className="fab fa-twitter"
              />
            </Button>
            <Button
              style={{ background: "#00000000" }}
              className="btn-neutral btn-icon btn-round"
              color="default"
              href="#jesse"
              onClick={(e) => e.preventDefault()}
            >
              <i
                style={{
                  background:
                    "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
                className="fab fa-google fa-1x"
              ></i>
            </Button>
          </div>
        </CardBody>
      </div>
    </div>
  );
}

export default Sidebar;

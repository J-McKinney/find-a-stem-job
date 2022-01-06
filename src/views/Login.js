import React, { Component } from "react";
import { Link } from "react-router-dom";
import BG from "../assets/img/cyb.jpg";
import {
  Button,
  Card,
  CardHeader,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import Styles from "./style.module.css";
// import firebase from "firebase";

class Login extends Component {
  state = {
    userName: "",
    passWord: "",
    usernameOne: "admin",
    passwordOne: "123",
    usernameTwo: "edaguest",
    passwordTwo: "gues",
    disabled: true,
    jobs: "",
    notice: false,
  };

  componentDidMount() {
    // alert("Notice");
  }

  // componentDidUpdate() {}
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.pathname) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_title: this.props.location.pathname,
        page_path: this.props.location.pathname,
      });
    }
    // console.log(this.state.notice);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    if (
      this.state.userName === this.state.usernameOne &&
      this.state.passWord === this.state.passwordOne
    ) {
      this.setState({ disabled: false });
    } else if (
      this.state.userName === this.state.usernameTwo &&
      this.state.passWord === this.state.passwordTwo
    ) {
      this.setState({ disabled: false });
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      userName: "",
      passWord: "",
    });
  };

  alertUser = () => {
    alert(
      "Confidentiality Notice: The information contained in this website, including any materials, processes, and proprietary business methods, is for the sole use of the intended recipient(s).  It is covered by the Electronic Communications Privacy Act, 18 U.S.C.§ 2510-2521 and is legally privileged. Unauthorized review, use, disclosure or distribution is strictly prohibited. Copying, duplication and/or use of any materials and business methods for personal gain without the written permission of SLA Labs is prohibited."
    );
  };

  render() {
    return (
      <>
        <div
          className="content"
          style={{
            overflow: "hidden",
            backgroundImage: `url(${BG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: "100vh",
          }}
        >
          <Row style={{ height: "100vh" }}>
            <Col md={4} xs={0} />
            <Col md={4} xs={12}>
              <Card
                className={Styles.card}
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  marginTop: "50px",
                  textAlign: "center",
                }}
              >
                <CardHeader>
                  <img
                    style={{ marginTop: "10px", height: "80px" }}
                    alt="..."
                    src={require("assets/img/gigpilotpng.png").default}
                  />
                  <p
                    style={{ textAlign: "center", marginTop: "10px" }}
                    className="title"
                  >
                    Digital Cluster Ecosystems
                  </p>
                </CardHeader>
                <Form>
                  <Row style={{ marginTop: "40px" }}>
                    <Col
                      style={{ marginTop: "10px", marginLeft: "10px" }}
                      className="pr-1"
                      md="11"
                    >
                      <FormGroup>
                        <Input
                          value={this.state.userName}
                          name="userName"
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="Username"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <Col
                      style={{ marginTop: "10px", marginLeft: "10px" }}
                      className="pr-1"
                      md="11"
                    >
                      <FormGroup>
                        <Input
                          value={this.state.passWord}
                          name="passWord"
                          onChange={this.handleInputChange}
                          type="password"
                          placeholder="Password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "20px", textAlign: "center" }}>
                    <Col className="pr-1" md="6">
                      <Link to="/admin/dashboard">
                        <Button
                          style={{
                            height: "50px",
                            borderRadius: "12px",
                            background: "dodgerblue",
                            cursor: "pointer",
                          }}
                          disabled={this.state.disabled}
                          onClick={this.alertUser}
                        >
                          <h5 style={{ color: "white" }}>
                            <i className="now-ui-icons ui-1_lock-circle-open" />{" "}
                            Login
                          </h5>
                        </Button>
                      </Link>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Button
                        style={{
                          height: "50px",
                          borderRadius: "12px",
                          background: "dodgerblue",
                          cursor: "pointer",
                        }}
                      >
                        <h5 style={{ color: "white" }}>Sign Up</h5>
                      </Button>{" "}
                    </Col>
                  </Row>
                </Form>
                <Row>
                  <Col md={3} xs={3} />
                  <Col md={6} xs={6}>
                    <img
                      style={{
                        height: "80px",
                        width: "150px",
                        marginTop: "10px",
                      }}
                      alt="..."
                      // src={require("assets/img/SREB.png").default}
                      src={require("assets/img/EDALogo.png").default}
                    />
                  </Col>
                  <Col md={3} xs={3} />
                </Row>
                <hr />
                <div className="button-container">
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#facebook"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i
                      style={{ color: "steelblue" }}
                      className="fab fa-facebook-f"
                    />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#twitter"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i
                      style={{ color: "cornflowerblue" }}
                      className="fab fa-twitter"
                    />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#google-plus"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
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
              </Card>
            </Col>
            <Col md={4} xs={0} />
          </Row>
          <div
            style={{
              color: "white",
              position: "absolute",
              bottom: "0",
              left: "0",
              visibility: "hidden",
            }}
          >
            Owned By: Doug Zweber & Created By: Jesse McKinney
          </div>
          <img
            style={{
              height: "100px",
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
            alt="SLA Labs Logo"
            src={require("assets/img/slaLogo.png").default}
          />
        </div>
      </>
    );
  }
}

export default Login;

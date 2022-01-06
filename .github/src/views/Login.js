import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import BG from "../assets/img/compclass.jpg";
import {
  Table,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  FormGroup,
  Form,
  Label,
  Input,
  UncontrolledTooltip,
  Row,
  Col,
} from "reactstrap";
// import firebase from "firebase";

class Login extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "admin",
    password: "123",
    disabled: true,
  };

  componentDidMount() {
    // console.log("Hello World!");
  }
  componentDidUpdate() {}

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
    if (
      this.state.firstName === this.state.username &&
      this.state.lastName === this.state.password
    ) {
      this.setState({ disabled: false });
    }
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "",
    });
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
          <Row>
            <Col md={4} xs={0} />
            <Col md={4} xs={12}>
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  marginTop: "70px",
                  textAlign: "center",
                }}
              >
                <CardHeader>
                  <h1
                    style={{ textAlign: "center", marginTop: "30px" }}
                    className="title"
                  >
                    GIG Pilot
                  </h1>
                </CardHeader>
                <Form>
                  <Row style={{ marginTop: "40px" }}>
                    <Col className="pr-1" md="2">
                      <label style={{ marginTop: "10px", marginLeft: "10px" }}>
                        USERNAME
                      </label>
                    </Col>
                    <Col className="pr-1" md="9">
                      <FormGroup>
                        <Input
                          value={this.state.firstName}
                          name="firstName"
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="Username"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <Col className="pr-1" md="2">
                      <label style={{ marginTop: "10px", marginLeft: "10px" }}>
                        PASSWORD
                      </label>
                    </Col>
                    <Col className="pr-1" md="9">
                      <FormGroup>
                        <Input
                          value={this.state.lastName}
                          name="lastName"
                          onChange={this.handleInputChange}
                          type="password"
                          placeholder="Password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "20px", textAlign: "center" }}>
                    <Col className="pr-1" md="6">
                      <Button
                        style={{
                          height: "50px",
                          borderRadius: "12px",
                          background: "lime",
                          cursor: "pointer",
                        }}
                        disabled={this.state.disabled}
                      >
                        <Link disabled to="/admin/dashboard">
                          <h5 style={{ color: "white" }}>Login</h5>
                        </Link>
                      </Button>{" "}
                    </Col>
                    <Col className="pr-1" md="6">
                      <Button
                        style={{
                          height: "50px",
                          borderRadius: "12px",
                          background: "lime",
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
                      style={{ height: "150px", width: "150px" }}
                      alt="..."
                      // className="avatar border-gray"
                      src={require("assets/img/GIGPilotLogo.png").default}
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
                    <i className="fab fa-facebook-f" />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#twitter"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon btn-round"
                    color="default"
                    href="#google-plus"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-google-plus-g" />
                  </Button>
                </div>
              </Card>
            </Col>
            <Col md={4} xs={0} />
          </Row>
        </div>
      </>
    );
  }
}

export default Login;

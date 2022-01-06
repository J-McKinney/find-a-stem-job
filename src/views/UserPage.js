import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function User() {
  return (
    <>
      <PanelHeader size="sm" />
      <div style={{ overflow: "hidden" }}>
        <Row>
          <Col md="8">
            <Card
              style={{
                boxShadow:
                  "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                marginTop: "10px",
              }}
            >
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Job Title</label>
                        <Input
                          placeholder="Job Title"
                          type="text"
                          defaultValue="Full Stack Developer"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          placeholder="Username"
                          type="text"
                          defaultValue="JesseMcKinney513"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input
                          placeholder="Email"
                          type="email"
                          defaultValue="jessemckinney@mail.com"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          placeholder="First Name"
                          type="text"
                          defaultValue="Jesse"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          placeholder="Last Name"
                          type="text"
                          defaultValue="McKinney"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          placeholder="Home Address"
                          type="text"
                          defaultValue="101 Chocolate World Way"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          placeholder="City"
                          type="text"
                          defaultValue="Hershey"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>State</label>
                        <Input
                          placeholder="State"
                          type="text"
                          defaultValue="PA"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input
                          placeholder="ZIP Code"
                          type="number"
                          defaultValue="17033"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          placeholder="Country"
                          type="text"
                          defaultValue="United States"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>Phone #</label>
                        <Input placeholder="Phone #" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>Age:</label>
                        <Input
                          placeholder="Age"
                          type="text"
                          defaultValue="35"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Highest Grade Completed</label>
                        <Input
                          placeholder="Some College/Bacholers/Masters"
                          type="text"
                          defaultValue="Bacholers Degree"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>School Name</label>
                        <Input
                          placeholder="Student/Job-Seeker/Military"
                          type="text"
                          defaultValue="Georgia Institute of Technology"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>GPA</label>
                        <Input
                          placeholder="GPA"
                          type="text"
                          defaultValue="3.9"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Status:</label>
                        <Input
                          placeholder="Student/Job-Seeker/Military"
                          type="text"
                          defaultValue="Job-Seeker"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Highest Rank if applicable</label>
                        <Input
                          placeholder="Private/Sargent/Colonial"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <br />
                  <hr />
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Chat Link Id: &nbsp;</label>
                        <label>G137m2 &nbsp;</label>
                        <Button
                          style={{
                            background: "dodgerblue",
                            borderRadius: "12px",
                            fontSize: "700",
                            fontWeight: "bold",
                          }}
                        >
                          Change Chat Link Id
                        </Button>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Video Link Id: &nbsp;</label>
                        <label>F41C0N5 &nbsp;</label>
                        <Button
                          style={{
                            background: "dodgerblue",
                            borderRadius: "12px",
                            fontSize: "700",
                            fontWeight: "bold",
                          }}
                        >
                          Change Video Link Id
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr />
                  <br />

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Profile</label>
                        <Input
                          cols="80"
                          placeholder="A place to show your personal profile"
                          rows="4"
                          type="textarea"
                          defaultValue="I am a
                      certified and versatile full stack developer with
                      experience developing and managing complex sites and
                      internal frameworks seeking a full time position in
                      development. Specializing in JavaScript frameworks and
                      responsive designs with dedication to quality work and a
                      high attention to detail. Demonstrating flawless code to
                      create, maintain, and deploy websites and apps."
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md="2">
                      <Button
                        style={{
                          height: "40px",
                          borderRadius: "12px",
                          background: "dodgerblue",
                          cursor: "pointer",
                        }}
                      >
                        <FormGroup style={{ cursor: "pointer" }}>
                          <Input
                            style={{ cursor: "pointer" }}
                            type="file"
                            name="resume"
                            id="exampleFile"
                          />
                          <label
                            htmlFor="exampleFile"
                            style={{
                              cursor: "pointer",
                              color: "white",
                              fontSize: "700",
                              fontWeight: "bold",
                            }}
                          >
                            Resume
                          </label>
                        </FormGroup>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card
              style={{
                boxShadow:
                  "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                marginTop: "10px",
              }}
              className="card-user"
            >
              <div className="image">
                <img
                  style={{ height: "250px", width: "100%" }}
                  alt="..."
                  src={require("assets/img/river.jpg").default}
                />
              </div>
              <CardBody style={{ marginTop: "30px" }}>
                <div className="author">
                  <a href="#jesse" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/Jesse.jpg").default}
                    />
                    <h5 style={{ color: "dodgerblue" }} className="title">
                      Jesse McKinney
                    </h5>
                  </a>
                  <div className="description">
                    <a href="mailto:jessemckinney@mail.com">
                      <div style={{ color: "dodgerblue" }}>
                        jessemckinney@mail.com
                      </div>
                    </a>
                  </div>
                </div>
                <p className="description text-center">
                  "Cold Blooded Coder, <br />
                  Loves animals of all kinds & <br />
                  new tech/inventions"
                </p>
              </CardBody>
              <hr />
              <div className="button-container">
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#jesse"
                  onClick={(e) => e.prSeventDefault()}
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
                  href="#jesse"
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
                  href="#jesse"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i
                    style={{
                      background:
                        "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
                      webkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      webkitTextFillColor: "transparent",
                    }}
                    className="fab fa-google fa-1x"
                  ></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <img
        style={{
          height: "50px",
          position: "static",
          bottom: "0",
          right: "0",
          float: "right",
          marginRight: "20px",
        }}
        alt="SLA Labs Logo"
        src={require("assets/img/slaLogo.png").default}
      />
      <div
        style={{
          color: "black",
          position: "static",
          bottom: "0",
          left: "0",
          visibility: "hidden",
        }}
      >
        Owned By: Doug Zweber & Created By: Jesse McKinney
      </div>
    </>
  );
}

export default User;

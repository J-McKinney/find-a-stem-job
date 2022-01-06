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
                <img alt="..." src={require("assets/img/bg5.jpg").default} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#jesse" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/james.jpg").default}
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
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#jesse"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#jesse"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-google-plus-g" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;

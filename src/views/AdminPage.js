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

function AdminPage() {
  return (
    <>
      <PanelHeader size="sm" style={{ overflowX: "hidden" }} />
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
                        <label>Company</label>
                        <Input
                          placeholder="Company"
                          type="text"
                          defaultValue="SLA Labs LLC"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          placeholder="Username"
                          type="text"
                          defaultValue="ScientistSLADOD"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input
                          placeholder="Email"
                          type="email"
                          defaultValue="iamag@gate.net"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          placeholder="Home Address"
                          type="text"
                          defaultValue="6340 Sugarloaf Parkway #200"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="2">
                      <FormGroup>
                        <label>Floor #</label>
                        <Input placeholder="Floor #" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          placeholder="City"
                          type="text"
                          defaultValue="Duluth"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="2">
                      <FormGroup>
                        <label>State</label>
                        <Input
                          placeholder="State"
                          type="text"
                          defaultValue="GA"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="2">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input
                          placeholder="ZIP Code"
                          type="number"
                          defaultValue="30097"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="2">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          placeholder="Country"
                          type="text"
                          defaultValue="United States"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="2">
                      <FormGroup>
                        <label>Phone</label>
                        <Input placeholder="Phone" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Insurance Certificate Number</label>
                        <Input
                          placeholder="Insurance Certificate Number"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Business License Number</label>
                        <Input
                          placeholder="Business License Number"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>State License Number</label>
                        <Input placeholder="State License Number" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>State Trade License Number</label>
                        <Input
                          placeholder="State Trade License Number"
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
                        <label>D188b3 &nbsp;</label>
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
                        <label>G325r9 &nbsp;</label>
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
                        />
                      </FormGroup>
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
                      style={{ marginTop: "40px", height: "120px" }}
                      alt="..."
                      src={require("assets/img/Jesse.jpg").default}
                    />
                    <h5 style={{ color: "dodgerblue" }} className="title">
                      Full Stack Flex Web Developer
                    </h5>
                  </a>
                  <div className="description">
                    <a href="mailto:SLALabs@mail.com">
                      <div style={{ color: "dodgerblue" }}>
                        jessemckinney513@mail.com
                      </div>
                    </a>
                  </div>
                </div>
                <p className="description text-center">
                  "I love creating <br />
                  beautiful websites at <br />
                  lightening speed."
                </p>
              </CardBody>
              <hr />
              <div className="button-container">
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#SLA"
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
                  href="#SLA"
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
                  href="#SLA"
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
        </Row>
      </div>
      <div
        style={{
          color: "black",
          position: "static",
          bottom: "0",
          left: "0",
          visibility: "hidden",
          overflowX: "hidden",
        }}
      >
        Created By: Jesse McKinney
      </div>
    </>
  );
}

export default AdminPage;

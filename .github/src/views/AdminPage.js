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
      <PanelHeader size="sm" style={{ overflowX: "hidden !important" }} />
      <div style={{ overflow: "hidden !important" }}>
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
                <img alt="..." src={require("assets/img/bg5.jpg").default} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#jesse" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/GIGPilotLogo.png").default}
                    />
                    <h5 style={{ color: "dodgerblue" }} className="title">
                      SLA Labs LLC
                    </h5>
                  </a>
                  <div className="description">
                    <a href="mailto:SLALabs@mail.com">
                      <div style={{ color: "dodgerblue" }}>
                        SLALabs@mail.com
                      </div>
                    </a>
                  </div>
                </div>
                <p className="description text-center">
                  "The Leaders in <br />
                  Innovation & Technology To <br />
                  Brighten Your Future."
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
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#SLA"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#SLA"
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

export default AdminPage;

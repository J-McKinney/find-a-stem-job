import React from "react";
import Modal from "react-bootstrap/Modal";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

function GigModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2 className="title">Post Job Assignment</h2>
          {/* Post GIG Assignments Here */}
          <Col md={12} xs={12}>
            <Card
              style={{
                boxShadow:
                  "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                marginTop: "40px",
              }}
            >
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Job Name</label>
                        <Input placeholder="GIG Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Company Name</label>
                        <Input placeholder="Company Name" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Contact Name</label>
                        <Input placeholder="Contact Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          maxLength="10"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="10">
                      <FormGroup>
                        <label>Company Address</label>
                        <Input placeholder="Company Address" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
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
                        <Input placeholder="City" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>State</label>
                        <Input placeholder="State" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input placeholder="Country" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col className="pr-1" md="3" xs={12}>
                      <FormGroup tag="fieldset">
                        <label>Job Type:</label>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" /> Remote
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" />
                            Hybrid
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" />
                            Onsite
                          </Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3" xs={12}>
                      <FormGroup tag="fieldset">
                        <label>Job Length:</label>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio2" /> Full-Time
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio2" />
                            Part-Time
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio2" />
                            Quarterly
                          </Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3" xs={12}>
                      <FormGroup tag="fieldset">
                        <label>Job Type</label>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio3" />
                            STEM Job
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio3" />
                            Community Job
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio3" />
                            Technology Job
                          </Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Payment Type:</label>
                        <Input
                          placeholder="Direct Deposit, Credit or Debit"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Payment Terms:</label>
                        <Input
                          placeholder="Flat Rate, Hourly or Salary"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Pay Rate:</label>
                        <Input
                          placeholder=""
                          type="number"
                          maxLength="10"
                          max="10"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr />

                  <Row>
                    {/* Add Cluster Invitation */}
                    <Col className="pr-1" md="8" xs={12}>
                      <FormGroup>
                        <label>Add Job Link:</label>
                        <Input
                          placeholder="Add Job Here"
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pr-1" md="4" xs={12}>
                      <Button
                        style={{
                          background: "dodgerblue",
                          borderRadius: "12px",
                          fontSize: "700",
                          fontWeight: "bold",
                          marginTop: "25px",
                        }}
                      >
                        Add Link
                      </Button>
                    </Col>
                    <Col className="pr-1" md={12} xs={12}>
                      <FormGroup>
                        <a target="_blank" href="https://www.coursera.org/learn/cybersecurity-for-everyone">
                          <label
                            style={{
                              cursor: "pointer",
                              fontSize: "700",
                              fontWeight: "bold",
                              marginTop: "25px",
                              marginBottom: "25px",
                            }}
                          >
                          </label>
                        </a>
                      </FormGroup>
                    </Col>
                    {/* ///////////////////////////////////////////////////////////////////////// */}
                    <Col className="pr-1" md="12" xs={12}>
                      <label>And/Or</label>
                    </Col>
                    <Col
                      style={{ marginTop: "10px" }}
                      className="pr-1"
                      md="8"
                      xs={12}
                    >
                      <FormGroup>
                        <Input
                          placeholder="Copy Your Video Link ID Here"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4" xs={12}>
                      <Button
                        style={{
                          background: "dodgerblue",
                          borderRadius: "12px",
                          fontSize: "700",
                          fontWeight: "bold",
                        }}
                      >
                        Create Video Link
                      </Button>
                    </Col>
                    {/* Add Cluster Invitation */}
                  </Row>

                  <hr />
                  <Row>
                    {/* Job Requirements */}
                    <Col md="12">
                      <FormGroup>
                        <label>Job Requirements</label>
                        <Input
                          cols="80"
                          placeholder="Job Requirements"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                    {/* Job Requirements */}
                  </Row>
                  <Row>
                    {/* Upload GIG Assignment */}
                    <Col md="3">
                      <Button
                        style={{
                          height: "40px",
                          borderRadius: "12px",
                          background: "dodgerblue",
                          cursor: "pointer",
                          paddingBottom: "40px",
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
                            <p>Upload Job Assignment</p>
                          </label>
                        </FormGroup>
                      </Button>
                    </Col>
                    {/* Upload GIG Assignment */}
                  </Row>
                  <hr />
                  <Row>
                    {/* Additional Notes */}
                    <Col md="12">
                      <FormGroup>
                        <label>Additional Notes:</label>
                        <Input
                          cols="80"
                          placeholder="Additional Notes"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                    {/* Additional Notes */}
                  </Row>

                  <br />

                  <Row>
                    {/* Post GIG Assignment (FREE) */}
                    <Col md="4">
                      <Button
                        type="submit"
                        style={{
                          background: "dodgerblue",
                          borderRadius: "12px",
                          fontSize: "700",
                          fontWeight: "bold",
                        }}
                        onClick={props.onHide}
                      >
                        Post Job Assignment (FREE)
                      </Button>
                    </Col>
                    {/* Post GIG Assignment (FREE) */}
                    {/* Post GIG Assignment (PRO) */}
                    <Col md="4">
                      <Button
                        type="submit"
                        style={{
                          background: "dodgerblue",
                          borderRadius: "12px",
                          fontSize: "700",
                          fontWeight: "bold",
                        }}
                        onClick={props.onHide}
                      >
                        Post Job Assignment (PRO)
                      </Button>
                    </Col>
                    {/* Post GIG Assignment (PRO) */}
                    {/* Save GIG Assignment */}
                    <Col md="4">
                      <Button
                        type="save"
                        style={{
                          background: "white",
                          color: "dodgerblue",
                          borderRadius: "12px",
                          fontSize: "700",
                          fontWeight: "bold",
                          padding: "19px",
                          borderStyle: "solid",
                          borderWidth: "2px",
                          borderColor: "dodgerblue",
                        }}
                        onClick={props.onHide}
                      >
                        Save Job Assignment
                      </Button>
                    </Col>
                    {/* Save GIG Assignment */}
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default GigModal;

import { Component } from "react";
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
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Gigs extends Component {
  state = {
    gigName: "",
    jobReq: "",
  };

  componentDidUpdate() {
    console.log(this.state.gigName);
    console.log(this.state.jobReq);
  }

  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={7} xs={12}>
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  marginTop: "40px",
                }}
              >
                <CardHeader>
                  <h5 className="title">Post GIG Assignment</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>GIG Name</label>
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
                      <Col className="pr-1" md="6">
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
                      <Col className="pr-1" md="6">
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

                      {/* <Col className="pr-1" md="4">
                        <FormGroup tag="fieldset">
                          <label>Sector:</label>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio3" />
                              STEM
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio3" />
                              Community
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio3" />
                              DOD
                            </Label>
                          </FormGroup>
                        </FormGroup>
                      </Col> */}

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
                    </Row>
                    <Row>
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
                              Upload GIG Assignment
                            </label>
                          </FormGroup>
                        </Button>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
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
                    </Row>

                    {/* <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup tag="fieldset">
                          <label>Broadcast Post Type:</label>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio3" />
                              Post to WWW Site Only (FREE)
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="radio3" />
                              Post to Mobile APP Users (see SMS rate)
                            </Label>
                          </FormGroup>
                        </FormGroup>
                      </Col>
                    </Row> */}

                    <hr />

                    <Row>
                      <Col md="4">
                        <Button
                          type="submit"
                          style={{
                            background: "dodgerblue",
                            borderRadius: "12px",
                            fontSize: "700",
                            fontWeight: "bold",
                          }}
                        >
                          Post GIG Assignment (FREE)
                        </Button>
                      </Col>
                      <Col md="4">
                        <Button
                          type="submit"
                          style={{
                            background: "dodgerblue",
                            borderRadius: "12px",
                            fontSize: "700",
                            fontWeight: "bold",
                          }}
                        >
                          Post GIG Assignment (PRO)
                        </Button>
                      </Col>
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
                        >
                          Save GIG Assignment
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  marginTop: "40px",
                }}
              >
                <CardHeader>
                  <CardTitle tag="h4">Active GIGs:</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th className="text-right">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Project Manager</td>
                        <td>
                          Planning, organizing, and directing the completion of
                          specific projects for an organization while ensuring
                          these projects are on time, on budget, and within
                          scope.
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip923217206"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip923217206"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>Communications Operator</td>
                        <td>
                          Directing emergency services to the caller's location
                          as necessary.
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip923217206"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip923217206"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>Full Stack Developer</td>
                        <td>Build a website for the marvelous DZ</td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip923217206"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip923217206"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Gigs;

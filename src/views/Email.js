import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  FormGroup,
  Form,
  Input,
  UncontrolledTooltip,
  Row,
  Table,
  Col,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Email extends Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Your Mail</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Subject</label>
                          <Input placeholder="Subject" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>To:</label>
                          <Input placeholder="Friends@mail.com" type="text" />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="3">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">From:</label>
                          <Input
                            placeholder="jessemckinney@mail.com"
                            type="email"
                            defaultValue="jessemckinney@mail.com"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Draft</label>
                          <Input
                            cols="80"
                            placeholder="Start typing..."
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md="1">
                        <Button
                          type="submit"
                          style={{
                            background: "dodgerblue",
                            borderRadius: "12px",
                          }}
                        >
                          Send
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                }}
                className="card-tasks"
              >
                <CardHeader>
                  <CardTitle tag="h4">New Messages:</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>John Marx</td>
                          <td className="text-left">
                            Just got in touch with the new employee on that
                            freelance work. You should check it out.
                          </td>
                          <td className="td-actions text-right">
                            {/*//////////////////////////////////////////////////*/}
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="success"
                              id="tooltip731609870"
                              type="button"
                            >
                              <i class="fas fa-user-plus"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip731609870"
                            >
                              Add To Your Contacts
                            </UncontrolledTooltip>
                            {/*//////////////////////////////////////////////////*/}
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
                          <td>David Finnigan</td>
                          <td className="text-left">
                            What was the address to that video link you sent me
                            the other day?
                          </td>
                          <td className="td-actions text-right">
                            {/*//////////////////////////////////////////////////*/}
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="success"
                              id="tooltip731609870"
                              type="button"
                            >
                              <i class="fas fa-user-plus"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip731609870"
                            >
                              Add To Your Contacts
                            </UncontrolledTooltip>
                            {/*//////////////////////////////////////////////////*/}
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip496353037"
                              type="button"
                            >
                              <i className="now-ui-icons ui-1_simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip496353037"
                            >
                              Delete
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>Will McCallister</td>
                          <td className="text-left">
                            Currently I'm assessing what was lost and what was
                            found when a ravaging rain swept through metro
                            Detroit last year.
                          </td>
                          <td className="td-actions text-right">
                            {/*//////////////////////////////////////////////////*/}
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="success"
                              id="tooltip731609870"
                              type="button"
                            >
                              <i className="fas fa-user-plus"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip731609870"
                            >
                              Add To Your Contacts
                            </UncontrolledTooltip>
                            {/*//////////////////////////////////////////////////*/}
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip389516969"
                              type="button"
                            >
                              <i className="now-ui-icons ui-1_simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip389516969"
                            >
                              Delete
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin" /> Updated 3
                    minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                }}
              >
                <CardHeader>
                  <CardTitle tag="h4">Your Job History</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Company Name</th>
                        <th>Active</th>
                        <th>Category</th>
                        <th className="text-right">Start Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Facebook</td>
                        <td>Yes</td>
                        <td>Tech</td>
                        <td className="text-right">9/22/21</td>
                      </tr>
                      <tr>
                        <td>InoTech Inc.</td>
                        <td>No</td>
                        <td>Tech</td>
                        <td className="text-right">7/13/20</td>
                      </tr>
                      <tr>
                        <td>Bank of America</td>
                        <td>No</td>
                        <td>Tech</td>
                        <td className="text-right">5/17/19</td>
                      </tr>
                      <tr>
                        <td>Morgan Middle School</td>
                        <td>No</td>
                        <td>STEM</td>
                        <td className="text-right">9/11/18</td>
                      </tr>
                      <tr>
                        <td>J. Christopher's</td>
                        <td>No</td>
                        <td>Hospitality</td>
                        <td className="text-right">5/21/17</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
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
          }}
        >
          Created By: Jesse McKinney
        </div>
      </>
    );
  }
}

export default Email;

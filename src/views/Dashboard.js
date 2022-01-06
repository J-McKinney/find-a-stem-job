import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Table,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <PanelHeader
        size="lg"
        content={
          <Line
            data={dashboardPanelChart.data}
            options={dashboardPanelChart.options}
          />
        }
      />
      <div className="content">
        <Row>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">Monthly Jobs Accepted</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={dashboardShippedProductsChart.data}
                    options={dashboardShippedProductsChart.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons ui-2_time-alarm" /> Last 30 days
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">Jobs Found Percentage</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={dashboardAllProductsChart.data}
                    options={dashboardAllProductsChart.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">Monthly Job Openings</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
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
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip731609871"
                            type="button"
                          >
                            <Link to="/admin/email">
                              <i
                                style={{ color: "dodgerblue" }}
                                className="now-ui-icons ui-1_email-85"
                              />
                            </Link>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip731609871"
                          >
                            Reply
                          </UncontrolledTooltip>
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
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip907509347"
                            type="button"
                          >
                            <Link to="/admin/email">
                              <i
                                style={{ color: "dodgerblue" }}
                                className="now-ui-icons ui-1_email-85"
                              />
                            </Link>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip907509347"
                          >
                            Reply
                          </UncontrolledTooltip>
                          {/*//////////////////////////////////////////////////*/}
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="success"
                            id="tooltip731609869"
                            type="button"
                          >
                            <i className="fas fa-user-plus"></i>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip731609869"
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
                          found when a ravaging rain swept through metro Detroit
                          last year.
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip326247652"
                            type="button"
                          >
                            <Link to="/admin/email">
                              <i
                                style={{ color: "dodgerblue" }}
                                className="now-ui-icons ui-1_email-85"
                              />
                            </Link>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip326247652"
                          >
                            Reply
                          </UncontrolledTooltip>
                          {/*//////////////////////////////////////////////////*/}
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="success"
                            id="tooltip731609868"
                            type="button"
                          >
                            <i className="fas fa-user-plus"></i>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip731609868"
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
                <CardTitle tag="h4">Your Active Job Candidates</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Active</th>
                      <th>State</th>
                      <th>City</th>
                      <th className="text-right">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Yes</td>
                      <td>Washington</td>
                      <td>Seattle</td>
                      <td className="text-right">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Yes</td>
                      <td>Florida</td>
                      <td>Naples</td>
                      <td className="text-right">$23,789</td>
                    </tr>
                    <tr>
                      <td>Jesse McKinney</td>
                      <td>Yes</td>
                      <td>Georgia</td>
                      <td>Atlanta</td>
                      <td className="text-right">$56,142</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Yes</td>
                      <td>Texas</td>
                      <td>Houston</td>
                      <td className="text-right">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Yes</td>
                      <td>Ohio</td>
                      <td>Columbus</td>
                      <td className="text-right">$78,615</td>
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
      >Created By: Jesse McKinney
      </div>
    </>
  );
}

export default Dashboard;

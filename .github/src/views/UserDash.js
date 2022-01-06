import React from "react";
import { Link } from "react-router-dom";
import { Line, Bar, Pie } from "react-chartjs-2";
import AllClusters from "../JSON/allClusters/allClusters.json";
import MarkerClusterer from "@googlemaps/markerclustererplus";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
// import stars from "../assets/img/stars.jpg";
import {
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  FormGroup,
  Input,
} from "reactstrap";
import {
  mapPagePieChart,
  mapPageGroupedBarChart,
  userAcceptedCompleted,
  userDashGroupedBarChart,
  stemTotalCompletedPlacementChart,
  mnthlyCredEarnedChart,
} from "variables/charts.js";

const MapWrapper = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "33.93781881397966";
    let lng = "-84.47701522331634";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 9,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      // icon: BlueA,
      label: "YOU",
      title: "You Are Here",
    });
    const markers = AllClusters.map((AllClusters, i) => {
      return new google.maps.Marker({
        position: AllClusters,
        map: map,
        icon: AllClusters.icon,
        title: AllClusters.title,
        label: AllClusters.label,
        animation: google.maps.Animation.DROP,
      });
    });
    var markerCluster = new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
    const contentString =
      '<div class="info-window-content"><h2>Found You!!!</h2>' +
      "<p>Look Here</p></div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    google.maps.event.addListener(markerCluster, "click", function () {
      infowindow.open(map, markerCluster);
    });
  });
  return (
    <>
      <div style={{ height: `100%` }} ref={mapRef}></div>
    </>
  );
};

function FullScreenMap() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Row>
              <Col md="5" xs={12}>
                <Card className="card-user">
                  <div className="image">
                    <img
                      alt="..."
                      src={require("assets/img/bg5.jpg").default}
                    />
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
                    <h5 style={{ fontWeight: "500" }}>Job Title:</h5>
                    <p className="description text" style={{ color: "black" }}>
                      Full Stack Flex Web Developer
                    </p>
                    <h5 style={{ fontWeight: "500" }}>Address:</h5>
                    <p className="description text" style={{ color: "black" }}>
                      101 Chocolate World Way, Hershey, PA, 17033, US
                    </p>
                    <h5 style={{ fontWeight: "500" }}>Profile:</h5>
                    <p className="description text" style={{ color: "black" }}>
                      I am a certified and versatile full stack developer with
                      experience developing and managing complex sites and
                      internal frameworks seeking a full time position in
                      development. Specializing in JavaScript frameworks and
                      responsive designs with dedication to quality work and a
                      high attention to detail. Demonstrating flawless code to
                      create, maintain, and deploy websites and apps.
                    </p>
                    <Row>
                      <Col md="6">
                        <Button
                          style={{
                            height: "40px",
                            borderRadius: "12px",
                            background: "dodgerblue",
                            cursor: "pointer",
                            color: "white",
                            fontSize: "700",
                            fontWeight: "bold",
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
                                width: "100px",
                              }}
                            >
                              Resume
                            </label>
                          </FormGroup>
                        </Button>
                      </Col>
                      <Col md="6">
                        <Link to="/admin/user-page">
                          <Button
                            style={{
                              height: "40px",
                              borderRadius: "12px",
                              background: "dodgerblue",
                              cursor: "pointer",
                              color: "white",
                              fontSize: "700",
                              fontWeight: "bold",
                              width: "140px",
                            }}
                          >
                            Edit Profile
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {/* Google Map */}
              <Col md={7} xs={12}>
                <Card>
                  <CardBody>
                    <div
                      id="map"
                      className="map"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        height: "690px",
                      }}
                    >
                      <MapWrapper />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              {/* Google Map */}
            </Row>
            {/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
            <Row>
              <Col xs={12} md={4}>
                <Card
                  style={{
                    boxShadow:
                      "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  }}
                  className="card-chart"
                >
                  <CardHeader>
                    <CardTitle tag="h4">Your GIGs:</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Bar
                        data={userAcceptedCompleted.data}
                        options={userAcceptedCompleted.options}
                        //   userAcceptedCompleted,
                        // userDashGroupedBarChart,
                        // stemTotalCompletedPlacementChart,
                      />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <div className="stats">
                      <i className="now-ui-icons arrows-1_refresh-69" />
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card
                  style={{
                    boxShadow:
                      "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  }}
                  className="card-chart"
                >
                  <CardHeader>
                    <CardTitle tag="h4">STEM Program:</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Bar
                        data={stemTotalCompletedPlacementChart.data}
                        options={stemTotalCompletedPlacementChart.options}
                        //   userAcceptedCompleted,
                        // userDashGroupedBarChart,
                        // stemTotalCompletedPlacementChart,
                      />
                    </div>
                  </CardBody>
                  <CardFooter style={{ marginBottom: "20px" }}>
                    <div className="stats">
                      {/* <i className="now-ui-icons arrows-1_refresh-69" /> */}
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card
                  style={{
                    boxShadow:
                      "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  }}
                  className="card-chart"
                >
                  <CardHeader>
                    <CardTitle tag="h4">GIGs available in your area:</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Bar
                        data={userDashGroupedBarChart.data}
                        options={userDashGroupedBarChart.options}
                        //   userAcceptedCompleted,
                        // userDashGroupedBarChart,
                        // stemTotalCompletedPlacementChart,
                      />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <div className="stats">
                      <i className="now-ui-icons arrows-1_refresh-69" />
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <Card
                  style={{
                    boxShadow:
                      "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  }}
                  className="card-chart"
                >
                  <CardHeader>
                    <CardTitle tag="h4">Monthly Credits Earned</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Bar
                        data={mnthlyCredEarnedChart.data}
                        options={mnthlyCredEarnedChart.options}
                      />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <div className="stats">
                      <i className="now-ui-icons ui-2_time-alarm" /> Updated 30
                      days ago
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card
                  style={{
                    boxShadow:
                      "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  }}
                  className="card-chart"
                >
                  <CardHeader>
                    <CardTitle tag="h4">GIGs Accepted this Week</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Bar
                        data={mapPageGroupedBarChart.data}
                        options={mapPageGroupedBarChart.options}
                      />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <div className="stats">
                      <i className="now-ui-icons arrows-1_refresh-69" />
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card
                  style={{
                    boxShadow:
                      "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  }}
                  className="card-chart"
                >
                  <CardHeader>
                    <CardTitle tag="h4">Overall GIGs Accepted</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Pie
                        data={mapPagePieChart.data}
                        options={mapPagePieChart.options}
                      />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <div className="stats">
                      <i className="now-ui-icons arrows-1_refresh-69" />
                      Just Updated
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FullScreenMap;

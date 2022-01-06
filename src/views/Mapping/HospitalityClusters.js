import React from "react";
import { Link } from "react-router-dom";
import { Line, Bar, Pie } from "react-chartjs-2";
import HCluster from "../../JSON/community/HCluster.json";
import MarkerClusterer from "@googlemaps/markerclustererplus";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
} from "reactstrap";
import {
  dashboardAllProductsChart,
  mapPageSTEMCluster,
  mapPageCommCluster,
  mapPageDODCluster,
  mapPagePieChart,
  mapPageGroupedBarChart,
} from "variables/charts.js";
import MyModal from "components/Modal/MyModal.js";
import NewHireDev from "../../assets/img/NewHireDevelopment.png";
import ConnectWorkers from "../../assets/img/ConnectingWorkers.png";
import ContractDev from "../../assets/img/ContractDevelopment.png";
import NewTech from "../../assets/img/TestingNewTech.png";
import NatDeploy from "../../assets/img/ScaleableForNationalDeployments.png";
import BusinessDev from "../../assets/img/BusinessDevelopment.png";
import Styles from "../style.module.css";

const MapWrapper = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "33.93781881397966";
    let lng = "-84.47701522331634";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 7,
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
      title: "You Are Here",
      label: "YOU",
    });

    //              Remote      Remote
    const markers = HCluster.map((HCluster, i) => {
      return new google.maps.Marker({
        //        Remote
        position: HCluster,
        map: map,
        //      Remote
        title: "Rating: ★ ★ ★ ★ ☆ ",
        icon: HCluster.icon,
        label: HCluster.label,
        animation: google.maps.Animation.DROP,
      });
    });
    var markerCluster = new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
    const contentString =
      '<div className="info-window-content"><h2>Found You!!!</h2>' +
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
  const [modalShowOne, setModalShowOne] = React.useState(false);
  const [modalShowTwo, setModalShowTwo] = React.useState(false);
  const [modalShowThree, setModalShowThree] = React.useState(false);
  const [modalShowFour, setModalShowFour] = React.useState(false);
  const [modalShowFive, setModalShowFive] = React.useState(false);
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        {/*  style={{ zIndex: "2", }}/////////////////////////*/}
        <Row>
          <Col xs={12} md={12}>
            <Card className="card-chart">
              <CardBody
                style={{
                  textAlign: "center",
                  // backgroundColor: "hsl(0,0%,25%)",
                }}
              >
                {/* Whole Card For New Nav Bar */}
                <Row>
                  <Col xs={12} md={4}>
                    <Link to="/admin/AllRemoteClusters">
                      <Button
                        style={{
                          background: "red",
                          borderRadius: "12px",
                          fontWeight: "700",
                          width: "100%",
                        }}
                      >
                        Click to see remote locations
                      </Button>
                    </Link>
                  </Col>
                  <Col xs={12} md={4}>
                    <Link to="/admin/AllHybridClusters">
                      <Button
                        style={{
                          background: "green",
                          borderRadius: "12px",
                          fontWeight: "700",
                          width: "100%",
                        }}
                      >
                        Click to see hybrid locations
                      </Button>
                    </Link>
                  </Col>
                  <Col xs={12} md={4}>
                    <Link to="/admin/AllOnsiteClusters">
                      <Button
                        style={{
                          background: "orange",
                          borderRadius: "12px",
                          fontWeight: "700",
                          width: "100%",
                        }}
                      >
                        Click to see onsite locations
                      </Button>
                    </Link>
                  </Col>
                </Row>
                {/* New Row For The New Nav Bar/////////////////////////////////////////////////////////////////////// */}
                <Row>
                  {/* New Row For The New Nav Bar/////////////////////////////////////////////////////////////////////// */}
                  <Col xs={0} md={1} />
                  <Col xs={6} md={2}>
                    <div
                      onClick={() => setModalShowOne(true)}
                      style={{
                        borderRadius: "12px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        style={{
                          height: "20px",
                        }}
                        alt="SLA Labs Logo"
                        src={require("assets/img/recruit.png").default}
                      />{" "}
                      Project Recruitment
                    </div>
                    <MyModal
                      heading="Recruitment"
                      titleone="New Hire Development"
                      imgone={NewHireDev}
                      altone="New Hire Development"
                      titletwo="Connecting Workers"
                      imgtwo={ConnectWorkers}
                      alttwo="Connecting Workers"
                      show={modalShowOne}
                      onHide={() => setModalShowOne(false)}
                    />
                  </Col>
                  {/* Next Column */}
                  <Col xs={6} md={2}>
                    <div
                      onClick={() => setModalShowTwo(true)}
                      style={{
                        borderRadius: "12px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="fas fa-tasks fa-lg"
                        style={{ color: "hsl(0, 0%, 20%)" }}
                      ></i>{" "}
                      Project Management
                    </div>
                    <MyModal
                      heading="Project Management"
                      titleone="Contract Development"
                      imgone={ContractDev}
                      altone="Contract Development"
                      titletwo="Testing New Tech"
                      imgtwo={NewTech}
                      alttwo="Testing New Tech"
                      show={modalShowTwo}
                      onHide={() => setModalShowTwo(false)}
                    />
                  </Col>
                  {/* Next Column */}
                  <Col xs={6} md={2}>
                    <div
                      onClick={() => setModalShowThree(true)}
                      style={{
                        borderRadius: "12px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        style={{
                          height: "20px",
                        }}
                        alt="SLA Labs Logo"
                        src={require("assets/img/train.png").default}
                      />{" "}
                      Project <br />
                      Training
                    </div>
                    <MyModal
                      heading="Project Training"
                      titleone="New Hire Development"
                      imgone={NewHireDev}
                      altone="New Hire Development"
                      titletwo="Connecting Workers"
                      imgtwo={ConnectWorkers}
                      alttwo="Connecting Workers"
                      show={modalShowThree}
                      onHide={() => setModalShowThree(false)}
                    />
                  </Col>
                  <Col xs={6} md={2}>
                    <div
                      onClick={() => setModalShowFour(true)}
                      style={{
                        borderRadius: "12px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        id={Styles.rocket}
                        className={"now-ui-icons objects_spaceship"}
                        style={{ color: "black" }}
                      />{" "}
                      Project <br />
                      Launch
                    </div>
                    <MyModal
                      heading="Project Launch"
                      titleone="Scaleable For National Deployments"
                      imgone={NatDeploy}
                      altone="Scaleable For National Deployments"
                      titletwo="Business Development"
                      imgtwo={BusinessDev}
                      alttwo="Business Development"
                      show={modalShowFour}
                      onHide={() => setModalShowFour(false)}
                    />
                  </Col>
                  <Col xs={12} md={2}>
                    <div
                      onClick={() => setModalShowFive(true)}
                      style={{
                        borderRadius: "12px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="far fa-comments fa-lg"
                        style={{ color: "hsl(0, 0%, 20%)" }}
                      ></i>{" "}
                      Communications Link
                    </div>
                    <MyModal
                      heading="Communications Link"
                      titleone="Scaleable For National Deployments"
                      imgone={NatDeploy}
                      altone="Scaleable For National Deployments"
                      titletwo="Business Development"
                      imgtwo={BusinessDev}
                      alttwo="Business Development"
                      show={modalShowFive}
                      onHide={() => setModalShowFive(false)}
                    />
                  </Col>
                  <Col xs={0} md={1} />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/*  style={{ zIndex: "2", }}////////////////////////*/}{" "}
        <Row>
          <Col xs={12}>
            {/* Google Map */}
            <Row>
              <Col xs={12}>
                <Card
                  style={{
                    boxShadow:
                      "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  }}
                >
                  <CardBody>
                    <div
                      id="map"
                      className="map"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <MapWrapper />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {/* Google Map */}
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
                    <CardTitle tag="h4">STEM Clusters:</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Bar
                        data={mapPageSTEMCluster.data}
                        options={mapPageSTEMCluster.options}
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
                    <CardTitle tag="h4">Community Clusters:</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Bar
                        data={mapPageCommCluster.data}
                        options={mapPageCommCluster.options}
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
                    <CardTitle tag="h4">DOD Clusters:</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Bar
                        data={mapPageDODCluster.data}
                        options={mapPageDODCluster.options}
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
                    <CardTitle tag="h4">GIG Completion Percentage</CardTitle>
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
                    <CardTitle tag="h4">GIGs Accepted Today</CardTitle>
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

export default FullScreenMap;

import React from "react";
import { Link } from "react-router-dom";
import { Line, Bar, Pie } from "react-chartjs-2";
import PCluster from "../../JSON/dod/PCluster.json";
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
    const markers = PCluster.map((PCluster, i) => {
      return new google.maps.Marker({
        //        Remote
        position: PCluster,
        map: map,
        //      Remote
        title: "Rating: ★ ★ ★ ★ ☆ ",
        icon: PCluster.icon,
        label: PCluster.label,
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
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardBody style={{ textAlign: "center" }}>
                <div>
                  Remote GIGs:{" "}
                  <Link to="/admin/DodAllRemoteClusters">
                    <Button
                      style={{
                        background: "red",
                        borderRadius: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Click to see remote locations
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardBody style={{ textAlign: "center" }}>
                <div>
                  Hybrid GIGs:{" "}
                  <Link to="/admin/DodAllHybridClusters">
                    <Button
                      style={{
                        background: "green",
                        borderRadius: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Click to see hybrid locations
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardBody style={{ textAlign: "center" }}>
                <div>
                  Onsite GIGs:{" "}
                  <Link to="/admin/DodAllOnsiteClusters">
                    <Button
                      style={{
                        background: "orange",
                        borderRadius: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Click to see onsite locations
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
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
    </>
  );
}

export default FullScreenMap;

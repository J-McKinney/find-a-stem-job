import React from "react";
import {
  Table,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Label,
  Input,
  UncontrolledTooltip,
  Row,
  Col,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import GigModal from "../components/Modal/GigModal.js";

function Gigs() {
  const [otherLat, setOtherLat] = React.useState("33.93781881397966");
  const [otherLng, setOtherLng] = React.useState("-84.47701522331634");
  const [otherLab, setOtherLab] = React.useState("You");
  const [otherRate, setOtherRate] = React.useState("Rating: ★ ★ ★ ★ ★");
  const [otherMsg, setOtherMsg] = React.useState("You Are Here");
  const MapWrapper = () => {
    const mapRef = React.useRef(null);

    React.useEffect(() => {
      let google = window.google;
      let map = mapRef.current;
      let lat = otherLat;
      let lng = otherLng;
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
        label: otherLab,
        title: otherRate,
      });
      const contentString =
        "<div className='info-window-content'><p>" + otherMsg + "</p></div>";
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    });

    return (
      <>
        <div style={{ height: `100%` }} ref={mapRef}></div>
      </>
    );
  };

  const [modalShowOne, setModalShowOne] = React.useState(false);

  function coordOne() {
    setOtherLat("33.953028689350816");
    setOtherLng("-83.5234406540099");
    setOtherLab("H");
    setOtherRate("AI Engineer \n Rating: ★ ★ ★ ★ ☆");
    setOtherMsg("AI Engineer \n Rating: ★ ★ ★ ★ ☆");
  }
  function coordTwo() {
    setOtherLat("33.87725994346352");
    setOtherLng("-84.06018026831968");
    setOtherLab("R");
    setOtherRate("Cybersecurity Operator \n Rating: ★ ★ ★ ★ ☆");
    setOtherMsg("Cybersecurity Operator \n Rating: ★ ★ ★ ★ ☆");
  }
  function coordThree() {
    setOtherLat("33.989273724740094");
    setOtherLng("-84.44046804256497");
    setOtherLab("R");
    setOtherRate("Data Miner \n Rating: ★ ★ ★ ★ ☆");
    setOtherMsg("Data Miner \n Rating: ★ ★ ★ ★ ☆");
  }
  function coordFour() {
    setOtherLat("34.21869058176982");
    setOtherLng("-84.17774218900878");
    setOtherLab("OS");
    setOtherRate("IOT Architect \n Rating: ★ ★ ★ ★ ☆");
    setOtherMsg("IOT Architect \n Rating: ★ ★ ★ ★ ☆");
  }
  function coordFive() {
    setOtherLat("34.039115629444325");
    setOtherLng("-84.11591660903706");
    setOtherLab("H");
    setOtherRate("Full Stack Cloud Developer \n Rating: ★ ★ ★ ★ ☆");
    setOtherMsg("Full Stack Cloud Developer \n Rating: ★ ★ ★ ★ ☆");
  }

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12} md={5}>
            <Card
              style={{
                boxShadow:
                  "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                marginTop: "40px",
              }}
            >
              <CardHeader className="title text-right">
                <Button
                  style={{
                    backgroundColor: "dodgerblue",
                    borderRadius: "12px",
                    fontSize: "700",
                    fontWeight: "bold",
                  }}
                  onClick={() => setModalShowOne(true)}
                >
                  Post Job Assignment
                </Button>
                <GigModal
                  show={modalShowOne}
                  onHide={() => setModalShowOne(false)}
                />
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th style={{ color: "black", fontWeight: "bold" }}>
                        Job Name
                      </th>
                      <th style={{ color: "black", fontWeight: "bold" }}>
                        Job Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AI Engineer</td>
                      <td>
                        Build AI functionality into software applications with
                        an emergent discipline focused on developing tools,
                        systems, and processes to enable the application of
                        artificial intelligence in real-world contexts
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          onClick={() => coordOne()}
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="warning"
                          id="tooltip731609960"
                          type="button"
                        >
                          <i className="fas fa-crosshairs"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609960"
                        >
                          Find Location
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="info"
                          id="tooltip731609860"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609860"
                        >
                          Detailed Job Description
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="success"
                          id="tooltip731609861"
                          type="button"
                        >
                          <i className="fas fa-video"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609861"
                        >
                          Video Link
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="danger"
                          id="tooltip923217206"
                          type="button"
                        >
                          <i className="now-ui-icons ui-2_settings-90" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip923217206"
                        >
                          Edit Job
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td>Cybersecurity Operator</td>
                      <td>
                        Design secure systems at the interface of operational
                        technology (sensors and things that move) and
                        information technology (the digital world). Cyber
                        security technicians are responsible for protecting
                        networks and systems against threats from adversaries in
                        cyberspace.
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          onClick={() => coordTwo()}
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="warning"
                          id="tooltip731609961"
                          type="button"
                        >
                          <i className="fas fa-crosshairs"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609961"
                        >
                          Find Location
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="info"
                          id="tooltip731609862"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609862"
                        >
                          Detailed Job Description
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="success"
                          id="tooltip731609863"
                          type="button"
                        >
                          <i className="fas fa-video"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609863"
                        >
                          Video Link
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="danger"
                          id="tooltip923217207"
                          type="button"
                        >
                          <i className="now-ui-icons ui-2_settings-90" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip923217207"
                        >
                          Edit Job
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td>Data Miner</td>
                      <td>
                        Exploring and analyzing large blocks of information to
                        glean meaningful patterns and trends. Database
                        marketing, credit risk management, fraud detection, spam
                        Email filtering, or even to discern the sentiment or
                        opinion of users.
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          onClick={() => coordThree()}
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="warning"
                          id="tooltip731609962"
                          type="button"
                        >
                          <i className="fas fa-crosshairs"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609962"
                        >
                          Find Location
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="info"
                          id="tooltip731609864"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609864"
                        >
                          Detailed Job Description
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="success"
                          id="tooltip731609865"
                          type="button"
                        >
                          <i className="fas fa-video"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609865"
                        >
                          Video Link
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="danger"
                          id="tooltip923217208"
                          type="button"
                        >
                          <i className="now-ui-icons ui-2_settings-90" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip923217208"
                        >
                          Edit Job
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td>IOT Architect</td>
                      <td>
                        Professional role involved in developing practical uses
                        and applications of internet of things technology. The
                        architect typically works with engineers and salespeople
                        to facilitate process development.
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          onClick={() => coordFour()}
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="warning"
                          id="tooltip731609963"
                          type="button"
                        >
                          <i className="fas fa-crosshairs"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609963"
                        >
                          Find Location
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="info"
                          id="tooltip7316098622"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip7316098622"
                        >
                          Detailed Job Description
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="success"
                          id="tooltip731609863"
                          type="button"
                        >
                          <i className="fas fa-video"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609863"
                        >
                          Video Link
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="danger"
                          id="tooltip923217207"
                          type="button"
                        >
                          <i className="now-ui-icons ui-2_settings-90" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip923217207"
                        >
                          Edit Job
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                    <tr>
                      <td>Full Stack Cloud Developer</td>
                      <td>
                        Develop both client-side and server-side software. Build
                        computer applications and software with a cloud based
                        database.
                      </td>
                      <td className="td-actions text-right">
                        <Button
                          onClick={() => coordFive()}
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="warning"
                          id="tooltip731609964"
                          type="button"
                        >
                          <i className="fas fa-crosshairs"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609964"
                        >
                          Find Location
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="info"
                          id="tooltip7316098621"
                          type="button"
                        >
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip7316098621"
                        >
                          Detailed Job Description
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="success"
                          id="tooltip731609863"
                          type="button"
                        >
                          <i className="fas fa-video"></i>
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731609863"
                        >
                          Video Link
                        </UncontrolledTooltip>
                        <Button
                          className="btn-round btn-icon btn-icon-mini btn-neutral"
                          color="danger"
                          id="tooltip923217207"
                          type="button"
                        >
                          <i className="now-ui-icons ui-2_settings-90" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip923217207"
                        >
                          Edit Job
                        </UncontrolledTooltip>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          {/* Post GIG Assignments Here */}
          <Col md={7} xs={12}>
            <Card
              style={{
                boxShadow:
                  "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                marginTop: "40px",
                zIndex: "1",
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

export default Gigs;

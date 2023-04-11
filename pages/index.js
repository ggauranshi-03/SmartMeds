import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "../routes";
import { Router } from "../routes";
import web3 from "../ethereum/web3";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
    ></link>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: "90%",
        marginTop: "150px",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "0" }}
      >
        <Header
          as="h1"
          content="SmartMeds"
          inverted
          style={{
            whiteSpace: "nowrap",
            fontFamily: "ABeeZee",
            fontStyle: "italic",
            fontWeight: "400",
            fontSize: " 90px",
            lineHeight: " 105px",
            display: "flex",
            alignItems: "center",
            color: "#1678F2",
          }}
        />
        <Header
          as="h2"
          content="Blockchain Based Medical System"
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em",
            color: "#000000",
          }}
        />
      </div>
      <img
        // src="https://images.rawpixel.com/image_png_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxLzM0MC1wYWkyMTA1LWppdGUtam9iMTY0Nl8yLnBuZw.png"
        src="https://gateway.pinata.cloud/ipfs/QmWUi7VL1Ymf5WUFXdNaSQ75CHdcFFTDvxdAnbCoBdhtRL?_gl=1*welayu*_ga*MGE1MmIxN2YtNWY1Ny00OTMyLTllNzQtOWZhNTJiODA3YTY3*_ga_5RMPXG14TE*MTY3OTEzMzQ0MS4xNi4wLjE2NzkxMzM0NDguNTMuMC4w"
        alt="banner"
        height="400px"
        width="600px"
        style={{
          marginLeft: "2em",
          transition: "transform 0.2s ease-in-out",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
        }}
      />
    </div>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  onClickedPatient = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  };

  onClickedDoctor = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  };

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 700,
              padding: "1em 0em",
              // backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
              backgroundImage:
                "url('https://i.pinimg.com/564x/3c/ea/9c/3cea9ccd4946656f606826b498e1ecad.jpg')",
              backgroundRepeat: "no-repeat", // add this line
              backgroundSize: "cover", // this line sets the image to cover the segment
              opacity: "1",
            }}
            vertical
          >
            <Menu
              size="large"
              inverted
              style={{
                // backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
                // backgroundImage: "url('./Landing.png')",
                backgroundColor: "#F1F1FD",
                opacity: "1",
              }}
            >
              <Link route="/">
                {/* <a className="item" style={{ color: "black" }}> */}
                  <img
                    src="https://gateway.pinata.cloud/ipfs/QmQ2mkZw5c2Cstp4NboT4moaNrCiYFoXF9bB8e43gQiFoN?_gl=1*b1mo2a*_ga*YmNlZmNjNTUtY2Q2Ni00OTkxLTk2MGEtY2UxYzQwOTJhNmUw*_ga_5RMPXG14TE*MTY3OTIwMTQzMS4xLjEuMTY3OTIwMTQ1NC4zNy4wLjA"
                    // height="100em"
                    // width="100em"
                    style={{
                      width: "6.5em",
                      // filter: "blur(1px)",
                      opacity: "1",
                    }}
                  ></img>
                {/* </a> */}
              </Link>

              <Menu.Menu position="right">
                <Link href="https://ayushs-organization.gitbook.io/smartmeds/">
                  {/* <a
                    className="item"
                    style={{ color: "black", fontSize: "20px" }}
                  > */}
                    Docs
                  {/* </a> */}
                </Link>
                <Link route="/dashboard">
                  {/* <a
                    className="item"
                    style={{ color: "black", fontSize: "20px" }}
                  > */}
                    Dashboard
                  {/* </a> */}
                </Link>

                <Link route="/list">
                  {/* <a
                    className="item"
                    style={{ color: "black", fontSize: "20px" }}
                  > */}
                    Records List
                  {/* </a> */}
                </Link>

                <Dropdown
                  item
                  text="Doctor"
                  style={{ color: "black", fontSize: "20px" }}
                >
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link route="/">
                        {/* <a
                          style={{ color: "black" }}
                          onClick={this.onClickedDoctor}
                        > */}
                          View Profile
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route="/edit-doctor">
                        {/* <a style={{ color: "black" }}> */}
                        Edit Profile
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route="/make-appointment">
                        {/* <a style={{ color: "black" }}> */}
                        Make Appointment
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route="/edit-appointment">
                        {/* <a style={{ color: "black" }}> */}
                        Update Appointment
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  item
                  text="Patient"
                  style={{ color: "black", fontSize: "20px" }}
                >
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link route="/">
                        {/* <a
                          style={{ color: "black" }}
                          onClick={this.onClickedPatient}
                        > */}
                          View Profile
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route="/edit-patient">
                        {/* <a style={{ color: "black" }}> */}
                        Edit Profile
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route="/approve-doctor">
                        {/* <a style={{ color: "black" }}> */}
                        Allow Access
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route="/revoke-doctor">
                        {/* <a style={{ color: "black" }}> */}
                        Revoke Access
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  item
                  text="Register"
                  style={{ color: "black", fontSize: "20px" }}
                >
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link route="/register-patient">
                        {/* <a style={{ color: "black" }}> */}
                        Patient
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link route="/register-doctor">
                        {/* <a style={{ color: "black" }}> */}
                        Doctor
                        {/* </a> */}
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  onClickedPatient = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  };

  onClickedDoctor = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/doctor/${accounts[0]}`);
  };

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Link route="/">
              {/* <a className="item"> */}
              Home
              {/* </a> */}
            </Link>

            <Link route="/dashboard">
              {/* <a className="item"> */}
              Dashboard
              {/* </a> */}
            </Link>

            <Link route="/list">
              {/* <a className="item"> */}
              Records List
              {/* </a> */}
            </Link>

            <Dropdown item text="Doctor">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route="/">
                    {/* <a
                      style={{ color: "black" }}
                      onClick={this.onClickedDoctor}
                    > */}
                      View Profile
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route="/edit-doctor">
                    {/* <a style={{ color: "black" }}> */}
                    Edit Profile
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route="/make-appointment">
                    {/* <a style={{ color: "black" }}> */}
                    Make Appointment
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route="/edit-appointment">
                    {/* <a style={{ color: "black" }}> */}
                    Update Appointment
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Patient">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route="/">
                    {/* <a
                      style={{ color: "black" }}
                      onClick={this.onClickedPatient}
                    > */}
                      View Profile
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route="/edit-patient">
                    {/* <a style={{ color: "black" }}> */}
                    Edit Profile
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route="/approve-doctor">
                    {/* <a style={{ color: "black" }}> */}
                    Allow Access
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route="/revoke-doctor">
                    {/* <a style={{ color: "black" }}> */}
                    Revoke Access
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Register">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route="/register-patient">
                    {/* <a style={{ color: "black" }}> */}
                    Patient
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route="/register-doctor">
                    {/* <a style={{ color: "black" }}> */}
                    Doctor
                    {/* </a> */}
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment
      style={{
        padding: "8px 0px",
        backgroundImage:
          "url('https://i.pinimg.com/564x/c7/f8/37/c7f8378ea66d0d9c8a1c0c33f29de818.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "100%",
      }}
      vertical
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            whiteSpace: " nowrap",
            fontFamily: "ABeeZee",
            fontStyle: "italic",
            fontWeight: "400",
            fontSize: " 40px",
            lineHeight: " 105px",
            alignItems: "center",
          }}
        >
          Features SmartMeds provides:
        </h1>
        <h3
          style={{
            whiteSpace: "nowrap",
            alignItems: "center",
            fontSize: "20px",
            color: "rgb(22, 120, 242)",
          }}
        >
          Revolutionizing Hospital Management with Blockchain Technology
        </h3>
      </div>
      {/* <div style={{ textAlign: "center" }}></div> */}
      <br />
      <br />
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div
                  style={{
                    background:
                      "linear-gradient(to bottom right,#2D49EB, #06D8EA)",
                    borderRadius: "0px 20px 0px 20px",

                    padding: "20px",
                  }}
                >
                  <Header as="h3" style={{ fontSize: "2em", color: "white" }}>
                    <img
                      src="https://gateway.pinata.cloud/ipfs/QmRNdhkjfTSJY6uR1deyNRu8duqzt4eLpkpQfdy3RGrCJp?_gl=1*g0qeq2*_ga*NGVkMWZlMjAtOGJlZC00OGFiLWJkOGYtNzZhYjBmMjJhMjhk*_ga_5RMPXG14TE*MTY3OTEzNjAwNi4zLjEuMTY3OTEzNjA5NS4zMi4wLjA"
                      alt=""
                      style={{
                        height: "100px",
                        width: "80px",
                        display: "block",
                        margin: "auto",
                      }}
                    ></img>
                    Secure storage of health records
                  </Header>
                  <p style={{ fontSize: "1.33em", color: "white" }}>
                    SmartMeds uses blockchain technology to store patient
                    records securely, ensuring privacy and data integrity.
                    Patients and healthcare providers can easily access and
                    update patient records, without worrying about data breaches
                    or unauthorized access.
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div
                  style={{
                    background:
                      "linear-gradient(to bottom right,#2D49EB, #06D8EA)",
                    borderRadius: "0px 20px 0px 20px",

                    padding: "20px",
                  }}
                >
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em",
                      color: "white",
                      marginBottom: "0",
                    }}
                  >
                    <img
                      src="https://gateway.pinata.cloud/ipfs/QmaGuxuk8qWzrLUdacoibU69NXp6qSMnJyQFqqHLTyMQRw?_gl=1*1yzn3qv*_ga*NGVkMWZlMjAtOGJlZC00OGFiLWJkOGYtNzZhYjBmMjJhMjhk*_ga_5RMPXG14TE*MTY3OTEzODMzNi40LjEuMTY3OTEzOTM5NS40NS4wLjA"
                      alt=""
                      height="200px"
                      width="150px"
                      style={{
                        height: "80px",
                        width: "80px",
                        display: "block",
                        margin: "auto",
                      }}
                    ></img>
                    Prescription management
                  </Header>
                  <br />
                  <p style={{ fontSize: "1.33em", color: "white" }}>
                    Patients can receive and manage their prescriptions within
                    the app, while healthcare providers can easily issue and
                    update them. This makes it easier for patients to stay on
                    top of their medication and for healthcare providers to
                    monitor adherence.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div
                  style={{
                    background:
                      "linear-gradient(to bottom right,#2D49EB, #06D8EA)",
                    borderRadius: "0px 20px 0px 20px",

                    padding: "20px",
                  }}
                >
                  <Header as="h3" style={{ fontSize: "2em", color: "white" }}>
                    <img
                      src="https://gateway.pinata.cloud/ipfs/QmWr2rCWaeDTGJuxDj4RqdxQ3agQbomX2pcqcQ95JQD59r?_gl=1*1016m73*_ga*NGVkMWZlMjAtOGJlZC00OGFiLWJkOGYtNzZhYjBmMjJhMjhk*_ga_5RMPXG14TE*MTY3OTEzODMzNi40LjEuMTY3OTEzOTM5NS40NS4wLjA"
                      alt=""
                      style={{
                        height: "100px",
                        width: "80px",
                        display: "block",
                        margin: "auto",
                      }}
                    ></img>
                    <br />
                    Medication reminders
                  </Header>
                  <p style={{ fontSize: "1.33em", color: "white" }}>
                    SmartMeds reminds patients to take their medication on time
                    and monitors adherence. This can be especially helpful for
                    patients who need to take multiple medications or have
                    complex medication schedules.
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div
                  style={{
                    background:
                      "linear-gradient(to bottom right,#2D49EB, #06D8EA)",
                    borderRadius: "0px 20px 0px 20px",

                    padding: "20px",
                  }}
                >
                  <Header as="h3" style={{ fontSize: "2em", color: "white" }}>
                    <img
                      src="https://gateway.pinata.cloud/ipfs/QmSKBNkJzr2gisQ45NZdtsU18ziiyjJVPfVNTLAUSspYax?_gl=1*sepidg*_ga*NGVkMWZlMjAtOGJlZC00OGFiLWJkOGYtNzZhYjBmMjJhMjhk*_ga_5RMPXG14TE*MTY3OTEzODMzNi40LjEuMTY3OTEzOTM5NS40NS4wLjA"
                      alt=""
                      style={{
                        height: "80px",
                        width: "80px",
                        display: "block",
                        margin: "auto",
                      }}
                    ></img>
                    <br />
                    Appointment scheduling
                  </Header>
                  <p style={{ fontSize: "1.33em", color: "white" }}>
                    Patients can schedule and manage their appointments with
                    healthcare providers, ensuring timely care. This can help
                    reduce wait times and ensure that patients receive the care
                    they need when they need it.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Us Out</Button>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </Segment>
    <br />

    <Segment style={{ padding: "7em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{
              paddingBottom: "5em",
              borderRadius: "35px 0 35px 0 ",
              paddingTop: "5em",
              border: "dotted 6px",
              background: "linear-gradient(to bottom right, #F3F3FD,  #E4E9FA)",
            }}
          >
            <Header
              as="h3"
              style={{
                fontSize: "2em",
                fontFamily: "Advent Pro",
                borderRadius: "15px",
                fontStyle: "normal",
                fontWeight: " 700",
                lineHeight: "40px",
              }}
            >
              "Easy to use, Reliable, Secure"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingTop: "5em",
              border: "dotted 6px",
              borderRadius: "35px 0 35px 0 ",

              // background: "#f0f0f0",
              background: "linear-gradient(to bottom right, #F3F3FD, #E4E9FA)",
            }}
          >
            <Header
              as="h3"
              style={{
                fontSize: "2em",
                fontFamily: "Advent Pro",
                fontStyle: "normal",
                fontWeight: " 700",
                lineHeight: "40px",
              }}
            >
              "One of the Best Blockchain Medical Record Systems available."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image
                avatar
                src="https://365psd.com/images/istock/previews/8717/87172655-female-doctor-icon-nurse-symbol-faceless-woman-doctor-with-a-stethoscope.jpg"
              />
              <b>Dr Lim</b>, Surgeon at Pantai Hospital
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment
      style={{
        padding: "8em 0em",
        backgroundImage:
          "url('https://i.pinimg.com/564x/c7/f8/37/c7f8378ea66d0d9c8a1c0c33f29de818.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      vertical
    >
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Blockchain — A panpharmacon for Medical and Hospital management
          Systems
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          According to McKinsey out of 2.7 Trillion USD spending on healthcare
          solutions in the US, 400 Billion USD (14%) gets to spend on claim
          processing, payments, medical billing, revenue cycle management, and
          debts. There is also a high level of error rate around 20% among
          health insurers, according to American Medical Association (AMA), ...
        </p>
        <Button
          as="a"
          size="large"
          href="https://medium.com/medifakt/blockchain-a-panpharmacon-for-medical-and-hospital-management-systems-c1ea24769cf0"
          style={{ backgroundColor: "rgb(22, 120, 242)", color: "white" }}
        >
          Read More
        </Button>

        <Header as="h3" style={{ fontSize: "2em" }}>
          How can Blockchain help with EHR and HL7? A Revolution in Healthcare
          Information Management
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          BHealthcare organizations and their systems have a nagging problem.
          Patient information has to be communicated between different hospital
          systems and stakeholders in a consistent, secure way while maintaining
          patient privacy. Most of you reading this might say, we have HL7 and
          HIPAA to cover this. But here are the key challenges ...
        </p>
        <Button
          as="a"
          size="large"
          href="https://medium.com/@saikyt/how-can-blockchain-help-with-ehr-and-hl7-a-revolution-in-healthcare-information-management-35fbbddfbc83"
          style={{ backgroundColor: "rgb(22, 120, 242)", color: "white" }}
        >
          Read More
        </Button>
      </Container>
    </Segment>

    <Segment
      inverted
      vertical
      style={{
        padding: "5em 0em",
        background:
          "linear-gradient(to bottom right, #F3F3FD,  #99BCEB,  #99BCEB)",
      }}
    >
      <Container style={{ color: "#1678F2" }}>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column style={{ width: "150px" }}>
              <img
                src="https://gateway.pinata.cloud/ipfs/QmQ2mkZw5c2Cstp4NboT4moaNrCiYFoXF9bB8e43gQiFoN?_gl=1*b1mo2a*_ga*YmNlZmNjNTUtY2Q2Ni00OTkxLTk2MGEtY2UxYzQwOTJhNmUw*_ga_5RMPXG14TE*MTY3OTIwMTQzMS4xLjEuMTY3OTIwMTQ1NC4zNy4wLjA"
                style={{ height: "100px", width: "250px" }}
              />
            </Grid.Column>
            <Grid.Column width={3} style={{ color: "#1678F2" }}>
              <Header
                inverted
                as="h2"
                content="NAVIGATE"
                style={{ color: "#1678F2" }}
              />
              <List link inverted style={{ color: "#1678F2" }}>
                <List.Item as="a" style={{ color: "#1678F2" }}>
                  Contact Us
                </List.Item>
                <List.Item as="a" style={{ color: "#1678F2" }}>
                  Creator Info
                </List.Item>
                <List.Item as="a" style={{ color: "#1678F2" }}>
                  Site Details
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <div style={{ position: "absolute", bottom: 0, right: 0 }}>
        <p
          style={{
            backgroundColor: "#99BCEB",
            color: "black",
            marginRight: "15px",
            marginBottom: "1rem",
          }}
        >
          Created by USAR SHARDIANS
        </p>
      </div>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;

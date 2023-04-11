import React, { Component } from "react";
import {
  Divider,
  Form,
  Input,
  Button,
  Segment,
  Message,
  Select,
} from "semantic-ui-react";
import Layout from "../components/Layout";
import record from "../ethereum/record";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

const options = [
  { key: "m", text: "Male", value: "Male" },
  { key: "f", text: "Female", value: "Female" },
  { key: "o", text: "Other", value: "Other" },
];

const allergyOptions = [
  { key: "f", text: "Food", value: "Food" },
  { key: "m", text: "Medical", value: "Medical" },
  { key: "e", text: "Environmental", value: "Environmental" },
  { key: "o", text: "Others", value: "Others" },
];

class RegisterPatient extends Component {
  state = {
    ic: "",
    name: "",
    phone: "",
    gender: "",
    dob: "",
    height: "",
    weight: "",
    houseaddr: "",
    bloodgroup: "",
    allergies: "",
    medication: "",
    emergencyName: "",
    emergencyContact: "",
    loading: false,
    errorMessage: "",
  };

  handleGender = (e, { value }) => this.setState({ gender: value });

  handleAllergies = (e, { value }) => this.setState({ allergies: value });

  onSubmit = async (event) => {
    event.preventDefault();

    const {
      ic,
      name,
      phone,
      gender,
      dob,
      height,
      weight,
      houseaddr,
      bloodgroup,
      allergies,
      medication,
      emergencyName,
      emergencyContact,
    } = this.state;

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      await record.methods
        .setDetails(
          ic,
          name,
          phone,
          gender,
          dob,
          height,
          weight,
          houseaddr,
          bloodgroup,
          allergies,
          medication,
          emergencyName,
          emergencyContact
        )
        .send({ from: accounts[0] });

      alert("Account created successfully!");
      Router.pushRoute("/list");
    } catch (err) {
      this.setState({ errorMessage: err.message });
      alert("Account already exists");
    }

    this.setState({
      loading: false,
      ic: "",
      name: "",
      phone: "",
      gender: "",
      dob: "",
      height: "",
      weight: "",
      houseaddr: "",
      bloodgroup: "",
      allergies: "",
      medication: "",
      emergencyName: "",
      emergencyContact: "",
    });
  };

  render() {
    return (
      <Layout>
        <Segment
          padded
          style={{ borderRadius: "15px", backgroundColor: "#CDDAF6" }}
        >
          <h1>Create New Record</h1>
        </Segment>
        <Segment style={{ borderRadius: "15px", backgroundColor: "#CDDAF6" }}>
          <h2 style={{ marginTop: "10px", marginBottom: "30px" }}>
            General Information
          </h2>
          <Divider clearing />
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Group widths="equal">
              <Form.Field>
                <label>
                  <h3>IC</h3>
                </label>
                <Input
                  placeholder="Eg. 001234010234"
                  value={this.state.ic}
                  onChange={(event) =>
                    this.setState({ ic: event.target.value })
                  }
                />
              </Form.Field>

              <Form.Field>
                <label>
                  <h3>Full Name</h3>
                </label>
                <Input
                  placeholder="Eg. John Smith"
                  value={this.state.name}
                  onChange={(event) =>
                    this.setState({ name: event.target.value })
                  }
                  style={{
                    backgroundColor: "#f4f4f4",
                    color: "#333",
                    // padding: "10px",
                    borderRadius: "25px",
                    border: "none",
                    marginBottom: "10px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />
              </Form.Field>

              <Form.Field>
                <label>
                  <h3>Phone</h3>
                </label>
                <Input
                  placeholder="Eg. 0123456789"
                  value={this.state.phone}
                  onChange={(event) =>
                    this.setState({ phone: event.target.value })
                  }
                />
              </Form.Field>
            </Form.Group>
            <br />
            <Form.Group widths="equal">
              <Form.Field
                label="Gender"
                control={Select}
                options={options}
                onChange={this.handleGender}
              />

              <Form.Field>
                <label>
                  <h3>Date of Birth</h3>
                </label>
                <Input
                  placeholder="Eg. 01/01/1997"
                  value={this.state.dob}
                  onChange={(event) =>
                    this.setState({ dob: event.target.value })
                  }
                />
              </Form.Field>

              <Form.Field>
                <label>
                  <h3>Height</h3>
                </label>

                <Input
                  placeholder="Eg. 183"
                  label={{ basic: true, content: "cm" }}
                  labelPosition="right"
                  value={this.state.height}
                  onChange={(event) =>
                    this.setState({ height: event.target.value })
                  }
                />
              </Form.Field>

              <Form.Field>
                <label>
                  <h3>Weight</h3>
                </label>

                <Input
                  placeholder="Eg. 65"
                  label={{ basic: true, content: "kg" }}
                  labelPosition="right"
                  value={this.state.weight}
                  onChange={(event) =>
                    this.setState({ weight: event.target.value })
                  }
                />
              </Form.Field>
            </Form.Group>

            <br />
            <Form.Group widths="equal" style={{ fontSize: "20px" }}>
              <Form.TextArea
                label="House Address"
                placeholder="Eg. 1234, Jalan Seksyen 1/3, 31900 Kampar, Perak"
                value={this.state.houseaddr}
                onChange={(event) =>
                  this.setState({ houseaddr: event.target.value })
                }
              />
            </Form.Group>

            <br />
            <h2 style={{ marginTop: "20px", marginBottom: "30px" }}>
              Medical History
            </h2>
            <Divider clearing />
            <Form.Group widths="equal">
              <Form.Field>
                <label>
                  <h3>Blood Group</h3>
                </label>

                <Input
                  placeholder="Eg. A-"
                  value={this.state.bloodgroup}
                  onChange={(event) =>
                    this.setState({ bloodgroup: event.target.value })
                  }
                />
              </Form.Field>

              <Form.Field
                label="Allergies"
                as="h3"
                control={Select}
                options={allergyOptions}
                onChange={this.handleAllergies}
              />
            </Form.Group>
            <br />
            <Form.Group widths="equal" style={{ fontSize: "20px" }}>
              <Form.TextArea
                label="Current Medications"
                placeholder="Eg. Antidepressants"
                value={this.state.medication}
                onChange={(event) =>
                  this.setState({ medication: event.target.value })
                }
              />
            </Form.Group>

            <br />
            <h2 style={{ marginTop: "20px", marginBottom: "30px" }}>
              Emergency Contact
            </h2>
            <Divider clearing />
            <Form.Group widths="equal">
              <Form.Field>
                <label>
                  <h3>Emergency Contact Name</h3>
                </label>

                <Input
                  placeholder="Eg. Taylor Smith"
                  value={this.state.emergencyName}
                  onChange={(event) =>
                    this.setState({ emergencyName: event.target.value })
                  }
                />
              </Form.Field>

              <Form.Field>
                <label>
                  <h3>Emergency Contact Phone</h3>
                </label>

                <Input
                  placeholder="Eg. 0124995002"
                  value={this.state.emergencyContact}
                  onChange={(event) =>
                    this.setState({ emergencyContact: event.target.value })
                  }
                />
              </Form.Field>
            </Form.Group>
            <br />
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button primary loading={this.state.loading}>
              Create
            </Button>
          </Form>
        </Segment>
      </Layout>
    );
  }
}

export default RegisterPatient;

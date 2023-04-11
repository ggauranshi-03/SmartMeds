import React from "react";
import { Container, Header, Icon, Segment } from "semantic-ui-react";
import Head from "next/head";
import MenuBar from "./MenuBar";

export default (props) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        ></link>
      </Head>

      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 340,
          backgroundImage: `url('https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg')`,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <MenuBar class />

        <Header
          as="h2"
          style={{
            fontSize: "3em",
            fontWeight: "bold",
            fontFamily: "ABeeZee",
            color: "blue",
          }}
          content="SmartMeds Records"
        />
        <Header
          as="h3"
          style={{ fontSize: "1.5em", fontWeight: "normal", color: "black" }}
          content="Ensure that your records are safe and sound"
        />
      </Segment>

      <Container>{props.children}</Container>
    </>
  );
};

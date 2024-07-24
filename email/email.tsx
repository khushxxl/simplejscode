import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  email: string;
}

export const WelcomeEmailTemplate = ({ email }: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      A Curated Directory of Simple JS Code That You Can Copy Paste in Your
      Projects
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <h1 className="text-2xl">{"{ }"} Simple JS Code</h1>
        <Text style={paragraph}>Hi 👋,</Text>
        <Text style={paragraph}>
          Welcome to Simple JS Code, a hand-picked collection of JS code
          snippets that's constantly updated, and curated for you to include it
          in your next project.
        </Text>
        <Text style={paragraph}>
          Thank you for your purchase, if you got any recommendation or require
          any support feel free to shoot me an email at
          khushaal.choithramani@gmail.com
        </Text>
        <Section style={btnContainer}>
          <Button
            style={button}
            href="https://www.notion.so/Simple-JS-Code-Complete-Database-836fbc87ff284fcba7cb3d10cf8fed45?pvs=4"
          >
            Get Access Now
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Khushaal Choithramani - Simple JS Code
        </Text>
        <Hr style={hr} />
        <Text style={footer}>khushaal.choithramani@gmail.com</Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

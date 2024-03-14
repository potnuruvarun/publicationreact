import React from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageProvider";
import config from "./config";
import "./ai.css";
import { ThemeProvider } from "react-bootstrap";

const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
  floating: true,
};

function Chatmasala() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <ThemeProvider theme={theme}>
        <Chatbot
          headerTitle="GeekBot"
          config={config}
          // {...configg}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </ThemeProvider>
      {/* </header> */}
    </div>
  );
}
export default Chatmasala;

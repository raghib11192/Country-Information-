import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import "./App.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';


const App1 = ({ children }) => (
  <Container style={{ margin: 20 }}>
    
    

    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  
  <App/>,document.getElementById("root")
);

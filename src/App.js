import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Hello React</h1>
        </header>
        <footer className="App-footer">
          <p>This project was created by </p>
          <a href="https://jessica-abiri-portfolio.netlify.app/">
            Jessica Abiri 👩🏽‍💻{" "}
          </a>{" "}
          and is open-sourced on <a href="/">Github</a>
        </footer>
      </div>
    </div>
  );
}

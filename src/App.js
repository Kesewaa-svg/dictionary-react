import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p>
            <em>
              This project was created by
              <a href="https://jessica-abiri-portfolio.netlify.app/">
                Jessica Abiri 👩🏽‍💻{" "}
              </a>{" "}
              and is open-sourced on{" "}
              <a href="https://github.com/Kesewaa-svg/dictionary-react">
                Github
              </a>
            </em>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

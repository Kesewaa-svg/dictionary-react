import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("river");
  let [result, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function searchDictionary(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchDictionary();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    searchDictionary();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>
            <em>What word are you searching for?</em>
          </h2>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="suggestedWord">
            suggested words: believe, computer,sunrise..
          </div>
        </section>
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

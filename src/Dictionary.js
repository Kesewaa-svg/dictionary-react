import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("river");
  let [result, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchDictionary(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "on22Ndm2qGXl5DlviV3C5Abi2Ky2UnsLBTlXrKKmyddZMWTRWmQsuT2J";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotoResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

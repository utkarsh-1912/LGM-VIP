import React, { useState } from "react";
import "./App.css";
import NavBar from "./component/header";
import UserBox from "./component/user";

const Url = "https://reqres.in/api/users?page=1";

function App() {
  const [apiData, setApiData] = useState([]);
  const [btnText, setBtnText] = useState("Get Users");
  const [preContent, setPreContent] = useState(
    "Click Button to make a API call to get User ->"
  );
  const makeApiCall = async () => {
    const response = await fetch(Url);
    console.log(response);
    const jsonRes = await response.json();
    console.log(jsonRes.data);
    setBtnText("Hide Users");
    setApiData(jsonRes.data);
  };

  const hideData = () => {
    setBtnText("Get Users");
    setApiData([]);
  };

  const setData = () => {
    if (btnText === "Get Users") {
      makeApiCall();
      setPreContent("");
    } else {
      hideData();
      setPreContent("Click Button to make a API call to get User ->");
    }
  };

  return (
    <div className="App">
      <NavBar />
      <p>{preContent}</p>
      <button className="getUserBtn" onClick={setData}>
        {btnText}
      </button>
      <div className="user">
        {apiData.map((content) => {
          return (
            <UserBox
              email={content.email}
              first_name={content.first_name}
              last_name={content.last_name}
              avatar={content.avatar}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import NavBar from "./component/header";
import UserBox from "./component/userData";

function App() {
  // ======== VARIABLES TO STORE DATA =========
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    website: "",
    image: "",
    gender: "",
    skills: [],
  });

  const [userList, setUserList] = useState([]);
  const [toCheck, setToCheck] = useState([false, false, false]);

  // ============== FUNCTIONS =================
  const updateInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const updateCheck = (e) => {
    var temp = toCheck;
    const val = e.target.value;
    if (val === "Java") {
      if (temp[0] === true) {
        temp[0] = false;
      } else {
        temp[0] = true;
      }
    } else if (val === "HTML") {
      if (temp[1] === true) {
        temp[1] = false;
      } else {
        temp[1] = true;
      }
    } else if (val === "CSS") {
      if (temp[2] === true) {
        temp[2] = false;
      } else {
        temp[2] = true;
      }
    }
    setToCheck(temp);
    var skillBox = [];
    if (toCheck[0] === true) {
      skillBox.push("Java");
    }
    if (toCheck[1] === true) {
      skillBox.push("HTML");
    }
    if (toCheck[2] === true) {
      skillBox.push("CSS");
    }
    var name = "skills";
    setUserInfo((prevNote) => {
      return {
        ...prevNote,
        [name]: skillBox,
      };
    });
  };
  const submitUser = () => {
    console.log(userInfo);
    if (
      userInfo.name !== "" &&
      userInfo.email !== "" &&
      userInfo.gender !== "" &&
      userInfo.website !== ""
    ) {
      setUserList((prevList) => {
        return [...prevList, userInfo];
      });
      setUserInfo({
        name: "",
        email: "",
        website: "",
        image: "",
        gender: "",
        skills: [],
      });
      setToCheck([false, false, false]);
    } else {
      alert(
        "Fill 'Name' , 'Email' , 'website link' , 'image link' , 'gender' and 'skills' fields to submit !!"
      );
    }
  };

  // ================ To Return ================
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <div className="box left">
          <u>
            <h4>User Form</h4>
          </u>
          <form>
            <table>
              <tr>
                <td>Name :</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={updateInfo}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={updateInfo}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Website :</td>
                <td>
                  <input
                    type="text"
                    name="website"
                    value={userInfo.website}
                    onChange={updateInfo}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Image :</td>
                <td>
                  <input
                    type="text"
                    name="image"
                    value={userInfo.image}
                    onChange={updateInfo}
                  />
                </td>
              </tr>
              <tr>
                <td>Gender :</td>
                <td className="radioTd">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={updateInfo}
                  />
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={updateInfo}
                  />
                  Female
                </td>
              </tr>
              <tr>
                <td>Skills :</td>
                <td className="checkBox">
                  <input
                    type="checkbox"
                    name="skills"
                    value="Java"
                    onChange={updateCheck}
                  />
                  Java
                  <input
                    type="checkbox"
                    name="skills"
                    value="HTML"
                    onChange={updateCheck}
                  />
                  HTML
                  <input
                    type="checkbox"
                    name="skills"
                    value="CSS"
                    onChange={updateCheck}
                  />
                  CSS
                </td>
              </tr>
            </table>
            <button type="submit" onClick={submitUser}>
              Submit
            </button>
          </form>
        </div>
        <div className="box right">
          <u>
            <h4>User Details</h4>
          </u>
          {userList.map((user, indx) => {
            return (
              <UserBox
                id={indx}
                name={user.name}
                email={user.email}
                website={user.website}
                image={user.image}
                gender={user.gender}
                skills={user.skills}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./index.css";
const User = () => {
  const [userData, setUserData] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
  };
  //1. yontem fetch i yazmak yada get user fksyıde cagırabılırsın.Uygulama açıldığında ekranda gözukmesı ıcın atılan useeffectle ilk ıstedıgı attık.
  useEffect(() => {
    // fetch("https://randomuser.me/api")
    //   .then((res) => res.json())
    //   .then((data) => setUserData(data.results[0]))
    //   .catch((err) => console.log(err));
    getUser();
  }, []);

  console.log(userData);
  return (
    <div className="container">
      {/* Optional Chaining */}
      <img src={userData?.picture?.large} alt="" className="img" />
      <h4>Hi guys, My name is</h4>
      <h1>
        {userData?.name?.first} {userData?.name?.last}
      </h1>

      <h3>{userData?.email}</h3>
      <h4>{new Date(userData?.dob?.date).toLocaleDateString()}</h4>
      <h5>{userData?.phone}</h5>
      <h6>{userData?.location?.city}</h6>
      <button className="btn" onClick={getUser}>
        Get Random User
      </button>
    </div>
  );
};

export default User;

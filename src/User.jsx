// import React, { useEffect, useState } from "react";

const User = () => {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  return (
    <div>
      <img src="" alt="" />
      <h4>Hi guys, My name is</h4>
      <h1>Name</h1>

      <h3>Email</h3>
      <h4>dob</h4>
      <h5>phone</h5>
      <h6>address</h6>
    </div>
  );
};

export default User;

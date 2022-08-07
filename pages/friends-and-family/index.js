import React, { useEffect, useState } from "react";
import { ButtonGroup, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Form from "../../components/Form";
import axios from "axios";

export const getStaticProps = async () => {
  const relativeAPI = "https://staging-api.astrotak.com/api/relative/all";
  const tokenStr =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4ODA5NzY1MTkxIiwiUm9sZXMiOltdLCJleHAiOjE2NzY0NjE0NzEsImlhdCI6MTY0NDkyNTQ3MX0.EVAhZLNeuKd7e7BstsGW5lYEtggbSfLD_aKqGFLpidgL7UHZTBues0MUQR8sqMD1267V4Y_VheBHpxwKWKA3lQ";
  let response = await axios.get(relativeAPI, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "Application/json",
      Authorization: `Bearer ${tokenStr}`,
    },
  });
  console.log("responsse relativeApiData", response.data);
  return {
    props: { relativeApiData: response.data },
  };
};

const FriendsAndFamily = ({ relativeApiData }) => {
  // const getData = async () => {
  //   const relativeAPI = "https://staging-api.astrotak.com/api/relative/all";
  //   const tokenStr =
  //     "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4ODA5NzY1MTkxIiwiUm9sZXMiOltdLCJleHAiOjE2NzY0NjE0NzEsImlhdCI6MTY0NDkyNTQ3MX0.EVAhZLNeuKd7e7BstsGW5lYEtggbSfLD_aKqGFLpidgL7UHZTBues0MUQR8sqMD1267V4Y_VheBHpxwKWKA3lQ";
  //   await axios
  //     .get(relativeAPI, {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-type": "Application/json",
  //         Authorization: `Bearer ${tokenStr}`,
  //       },
  //     })
  //     .then(
  //       (response) => {
  //         var response = response.data;
  //         console.log("responsse relativeApiData", response.data);
  //       },
  //       (error) => {
  //         var status = error.response.status;
  //       }
  //     );
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log("relativeApiData===", relativeApiData);
  return (
    <Container className="familyContainer">
      <div className="profileHeading">
        <h5 className="orangeBottomBorder">My Profile</h5>
        <h5>Order History</h5>
      </div>
      <div className="walletBox">
        <span>Wallet Balance: ₹0 </span>
        <button>Add money</button>
      </div>
      <Form />
      <br />
      <div className="saveChangesBtn">
        <Button>Save Changes</Button>
      </div>
    </Container>
  );
};

export default FriendsAndFamily;

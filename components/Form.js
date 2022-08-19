import React, { useEffect, useState } from "react";
import { ButtonGroup, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const gridItemSyles = {
  ".MuiOutlinedInput-input ": {
    padding: "14px 12px",
  },
};

const Form = () => {
  const [gender, setGender] = useState();
  const [relation, setRelation] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dobDay, setDobDay] = useState();
  const [dobMonth, setDobMonth] = useState();
  const [dobYear, setDobYear] = useState();
  const [tobHour, setTobHour] = useState();
  const [tobMinute, setTobMinute] = useState();
  const [meridiem, setMeridiem] = useState();
  const [birthPlaceName, setBirthPlaceName] = useState("");

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeRelation = (event) => {
    setRelation(event.target.value);
  };

  const relationArray = [
    "Father",
    "Brother",
    "Spouse",
    "Son",
    "Uncle",
    "Father-in-law",
    "Brother-in-law",
    "Friend",
  ];
  const handleSubmit = async () => {
    let postData = {
      birthDetails: {
        dobDay: dobDay,
        dobYear: dobYear,
        dobMonth: dobMonth,
        tobHour: tobHour,
        tobMin: tobMinute,
        meridiem: meridiem,
      },
      birthPlace: {
        placeName: birthPlaceName,
        placeId: "",
      },
      firstName: firstName,
      lastName: lastName,
      relationId: relationArray.indexOf(relation),
      gender: gender,
    };

    const relativeAPI = "https://staging-api.astrotak.com/api/relative";
    const tokenStr =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4ODA5NzY1MTkxIiwiUm9sZXMiOltdLCJleHAiOjE2NzY0NjE0NzEsImlhdCI6MTY0NDkyNTQ3MX0.EVAhZLNeuKd7e7BstsGW5lYEtggbSfLD_aKqGFLpidgL7UHZTBues0MUQR8sqMD1267V4Y_VheBHpxwKWKA3lQ";

    await axios
      .post(relativeAPI, postData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "Application/json",
          Authorization: `Bearer ${tokenStr}`,
        },
      })
      .then(
        (response) => {
          var response = response.data;
          console.log("responsse relativeApiData", response.data);
        },
        (error) => {
          var status = error.response.status;
        }
      );
  };

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <Grid container spacing={2} sx={gridItemSyles} className="gridContainer">
        <Grid item xs={6}>
          <span>First Name</span>
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* {firstName.length < 1 && <span className="error">Invalid Name</span>} */}
        </Grid>
        <Grid item xs={6}>
          <span>Last Name</span>
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
      </Grid>
      <span>Date of Birth</span>
      <Grid container spacing={2} sx={gridItemSyles} className="gridContainer">
        <Grid item xs={4}>
          <TextField
            id="dobDate"
            label="DD"
            variant="outlined"
            type="number"
            onChange={(e) => setDobDay(e.target.value)}
          />
          {(dobDay > 31 || dobDay < 1) && (
            <span className="error">Invalid DD</span>
          )}
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="dobMonth"
            label="MM"
            variant="outlined"
            type="number"
            onChange={(e) => setDobMonth(e.target.value)}
          />
          {(dobMonth > 12 || dobMonth < 1) && (
            <span className="error">Invalid MM</span>
          )}
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="dobYear"
            label="YYYY"
            variant="outlined"
            type="number"
            onChange={(e) => setDobYear(e.target.value)}
          />
          {(dobYear < 1899 || dobYear > 2022) && (
            <span className="error">Invalid YY</span>
          )}
        </Grid>
      </Grid>
      <span>Time of Birth</span>
      <Grid container spacing={2} sx={gridItemSyles} className="gridContainer">
        <Grid item xs={4}>
          <TextField
            id="tobHour"
            label="HH"
            variant="outlined"
            type="number"
            onChange={(e) => setTobHour(e.target.value)}
          />
          {(tobHour > 12 || tobHour < 1) && (
            <span className="error">Invalid HH</span>
          )}
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="tobMinute"
            label="MM"
            variant="outlined"
            type="number"
            onChange={(e) => setTobMinute(e.target.value)}
          />
          {(tobMinute > 59 || tobMinute < 1) && (
            <span className="error">Invalid HH</span>
          )}
        </Grid>
        <Grid item xs={2}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ marginTop: "10px" }}
          >
            <Button
              sx={{ padding: "12px" }}
              id="AM"
              onClick={(e) => setMeridiem(e.target.id)}
            >
              AM
            </Button>
            <Button
              sx={{ padding: "12px" }}
              id="PM"
              onClick={(e) => setMeridiem(e.target.id)}
            >
              PM
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <span>Place of Birth</span>
      <Grid container sx={gridItemSyles} className="gridContainer">
        <Grid item xs={12}>
          <TextField
            id="placeofBirth"
            variant="outlined"
            sx={{ width: "100%" }}
            onChange={(e) => setBirthPlaceName(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={gridItemSyles} className="gridContainer">
        <Grid item xs={6}>
          <span>Gender</span>
          <FormControl fullWidth>
            <Select
              id="selectGender"
              value={gender}
              onChange={handleChangeGender}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <span>Relation</span>
          <FormControl fullWidth>
            <Select
              id="selectRelation"
              value={relation}
              onChange={handleChangeRelation}
            >
              {relationArray.map((rel, i) => (
                <MenuItem key={i} value={i}>
                  {rel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />
      <div className="saveChangesBtn">
        <Button onClick={handleSubmit}>Save Changes</Button>
      </div>
    </div>
  );
};

export default Form;

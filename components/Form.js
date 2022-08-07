import React, { useState } from "react";
import { ButtonGroup, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const gridItemSyles = {
  ".MuiOutlinedInput-input ": {
    padding: "14px 12px",
  },
};

const Form = () => {
  const [gender, setGender] = useState("");
  const [relation, setRelation] = useState("");
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
  return (
    <div>
      <Grid container spacing={2} sx={gridItemSyles} className="gridContainer">
        <Grid item xs={6}>
          <span>First Name</span>
          <TextField id="outlined-basic" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <span>Last Name</span>
          <TextField id="outlined-basic" variant="outlined" />
        </Grid>
      </Grid>
      <span>Date of Birth</span>
      <Grid container spacing={2} sx={gridItemSyles} className="gridContainer">
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="DD" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="MM" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="YYYY" variant="outlined" />
        </Grid>
      </Grid>
      <span>Time of Birth</span>
      <Grid container spacing={2} sx={gridItemSyles} className="gridContainer">
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="HH" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="MM" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ marginTop: "10px" }}
          >
            <Button sx={{ padding: "12px" }}>AM</Button>
            <Button sx={{ padding: "12px" }}>PM</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <span>Place of Birth</span>
      <Grid container sx={gridItemSyles} className="gridContainer">
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "100%" }}
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
    </div>
  );
};

export default Form;

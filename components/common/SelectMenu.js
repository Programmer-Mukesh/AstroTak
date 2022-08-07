import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import _ from "lodash";

const selectStyles = {
  ".MuiInputLabel-root": { fontFamily: "sofia-pro, sans-serif !important" },
  marginTop: "15px",
};

const SelectMenu = ({ categoryData, questionApiData, setCategoryData }) => {
  const [questionCategory, setQuestionCategory] = React.useState("Love");

  const handleChange = (event) => {
    setQuestionCategory(event.target.value);

    _.findKey(questionApiData, function (opt) {
      if (opt.name === event.target.value) {
        sessionStorage.setItem("selectedCategoryData", JSON.stringify(opt));
        setCategoryData(opt);
      }
    });
  };

  return (
    <Box sx={({ minWidth: 120 }, selectStyles)} className="select-menu">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          id="select-category"
          value={questionCategory}
          label="Category"
          onChange={handleChange}
        >
          {questionApiData &&
            questionApiData.map((option) => (
              <MenuItem value={option.name} key={option.id}>
                {option.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectMenu;

import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Paper } from "@mui/material";

const Filter = ({ courses, onChange }) => {
  return (
    <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
      <FormControl fullWidth>
        <InputLabel>Filter by Course</InputLabel>
        <Select onChange={(e) => onChange(e.target.value)} defaultValue="">
          <MenuItem value="">All</MenuItem>
          {courses.map((course, index) => (
            <MenuItem key={index} value={course}>
              {course}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
};

export default Filter;

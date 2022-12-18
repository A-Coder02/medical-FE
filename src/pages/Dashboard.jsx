import { TextField } from "@mui/material";
import React, { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <TextField
        label="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Dashboard;

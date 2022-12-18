import { TextField } from "@mui/material";
import React, { useState } from "react";
import CustomTableLayout from "../components/Layout/CustomTableLayout";

const Udharis = () => {
  const intialState = { phone: "", name: "", address: "" };
  const [formData, setFormData] = useState(intialState);

  const formDataHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const resetFormData = () => setFormData(intialState);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 110,
      renderCell: ({ row }) => row.id,
    },
    {
      field: "name",
      headerName: "Name",
      width: 210,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 110,
    },
    {
      field: "address",
      headerName: "Address",
      width: 210,
      flex: 1,
    },
  ];
  return (
    <CustomTableLayout
      url="udharis"
      columns={columns}
      formProps={{ formData, resetFormData, setFormData, formDataHandler }}
    >
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={formDataHandler}
      />
      <TextField
        label="Phone"
        type="number"
        name="phone"
        value={formData.phone}
        onChange={formDataHandler}
      />{" "}
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={formDataHandler}
      />
    </CustomTableLayout>
  );
};

export default Udharis;

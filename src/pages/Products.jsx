import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomTableLayout from "../components/Layout/CustomTableLayout";

const Products = () => {
  const intialState = { price: 0, name: "" };
  const [formData, setFormData] = useState(intialState);

  const formDataHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const resetFormData = () => setFormData(intialState);

  const columns = [
    {
      field: "",
      headerName: "ID",
      width: 110,
      renderCell: ({ row }) => row.id,
    },
    {
      field: "name",
      headerName: "Name",
      width: 310,
    },
    {
      field: "price",
      headerName: "Price",
      width: 210,
      renderCell: ({ row }) => <span>₹ {row.price}</span>,
    },
  ];
  return (
    <CustomTableLayout
      url="products"
      columns={columns}
      formProps={{ formData, resetFormData, setFormData, formDataHandler }}
    >
      <TextField
        required
        label="Name"
        name="name"
        value={formData.name}
        onChange={formDataHandler}
      />
      <TextField
        required
        label="Price"
        type="number"
        name="price"
        value={formData.price}
        onChange={formDataHandler}
      />
    </CustomTableLayout>
  );
};

export default Products;

import { TextField } from "@mui/material";
import React, { useState } from "react";
import CustomTableLayout from "../components/Layout/CustomTableLayout";
import currencyHandler from "../utils/currency-handler";

const Udharis = () => {
  const intialState = { amount: "", paid: "", customerId: "" };
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
      field: "customer.name",
      headerName: "Customer Name",
      width: 210,
      renderCell: ({ row }) => <span>{row.customer?.name}</span>,
    },
    {
      field: "customer.phone",
      headerName: "Customer Phone",
      width: 210,
      renderCell: ({ row }) => <span>{row.customer?.name}</span>,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 210,
      renderCell: ({ row }) => currencyHandler(row.amount),
    },
    {
      field: "paid",
      headerName: "Paid",
      width: 110,
      renderCell: ({ row }) => currencyHandler(row.paid),
    },
    {
      field: "unpaid",
      headerName: "Unpaid",
      width: 110,
      renderCell: ({ row }) => currencyHandler(Math.abs(row.paid - row.amount)),
    },
  ];
  return (
    <CustomTableLayout
      url="udharis"
      columns={columns}
      formProps={{ formData, resetFormData, setFormData, formDataHandler }}
    >
      <TextField
        label="Amount"
        name="amount"
        type="number"
        value={formData.amount}
        onChange={formDataHandler}
      />
      <TextField
        label="Paid"
        type="number"
        name="paid"
        value={formData.paid}
        onChange={formDataHandler}
      />{" "}
      <TextField
        label="Customer"
        name="customerId"
        value={formData.customerId}
        onChange={formDataHandler}
      />
    </CustomTableLayout>
  );
};

export default Udharis;

import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { toast } from "react-toastify";
import useCustomTable from "../../hooks/useCustomTable";
import CustomTable from "../CustomTable";

const ProductTable = ({ setDefaultData }) => {
  const { deleteMutate } = useCustomTable({ url: "products" });
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
      // width: 110,
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      width: 210,
      // flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 210,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={2}>
          <Typography
            color="primary.main"
            sx={{ cursor: "pointer" }}
            onClick={() => setDefaultData(row)}
          >
            Edit
          </Typography>
          <Typography
            color="error.main"
            sx={{ cursor: "pointer" }}
            onClick={() =>
              deleteMutate(row.id, {
                onSuccess: toast.success("Product Deleted Successfully"),
              })
            }
          >
            Delete
          </Typography>
        </Stack>
      ),
    },
  ];
  return <CustomTable url={"products"} columns={columns} />;
};

export default ProductTable;

import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { productUrl } from "../../utils/urls";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useEffect } from "react";
import useCustomTable from "../../hooks/useCustomTable";
const ProductForm = ({ defaultData, resetDefaultDataHandler }) => {
  const intialState = { price: "", name: "" };
  const [formData, setFormData] = useState(intialState);

  useEffect(() => {
    setFormData(defaultData || intialState);
  }, [defaultData]);

  const { mutate } = useCustomTable({ defaultData, url: "products" });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: async () => {
        toast.success(`Product ${defaultData ? "Edited" : "Added"}`);
        setFormData(intialState);
      },
      onError: () => toast.error("Please fill form!"),
    });
  };
  const formDataHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Box component={Paper} p={2} height="100%">
      <Stack component="form" spacing={2} onSubmit={onSubmitHandler}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={formDataHandler}
        />
        <TextField
          label="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={formDataHandler}
        />
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained" sx={{ flex: 1 }}>
            {defaultData ? "Edit" : "Add"} Product
          </Button>
          {defaultData !== null && (
            <Button
              variant="outlined"
              onClick={() => resetDefaultDataHandler()}
              startIcon={<RestartAltIcon />}
            >
              Reset
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default React.memo(ProductForm);

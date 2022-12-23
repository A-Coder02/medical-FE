import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useEffect } from "react";
import useCustomTable from "../../../hooks/useCustomTable";
const CustomTableForm = ({
  form,
  defaultData,
  resetDefaultDataHandler,
  url,
  formProps = {},
  crudProps,
}) => {
  const { formData, resetFormData, setFormData } = formProps;

  useEffect(() => {
    defaultData ? setFormData(defaultData) : resetFormData();
  }, [defaultData]);

  const { mutate } = useCustomTable({ defaultData, url });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: async () => {
        toast.success(`${defaultData ? "Edited" : "Added"} Successfully`);
        resetFormData();
        crudProps.onPost();
      },
      onError: () => toast.error("Something went wrong!"),
    });
  };

  return (
    <Box component={Paper} p={2} height="100%">
      <Stack component="form" spacing={2} onSubmit={onSubmitHandler}>
        {form}
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained" sx={{ flex: 1 }}>
            {defaultData ? "Edit" : "Add"} {url.slice(0, -1)}
          </Button>
          {defaultData !== null && (
            <Button
              variant="outlined"
              onClick={() => resetDefaultDataHandler()}
              startIcon={<RestartAltIcon />}
            >
              to add
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default React.memo(CustomTableForm);

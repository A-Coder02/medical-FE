import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import useCustomTable from "../../hooks/useCustomTable";

export default function CustomTable({ columns = null, url, maxWidth }) {
  const { tableData } = useCustomTable({ url });
  const { rows, length, isLoading, page, setPage } = tableData;

  return (
    <div style={{ height: "70vh", width: maxWidth || "100%" }}>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
        rowCount={length || 0}
        loading={isLoading}
        rowsPerPageOptions={[10]}
        pagination
        page={page}
        pageSize={10}
        paginationMode="server"
        onPageChange={(newPage) => {
          setPage(newPage);
        }}
        sx={{
          "& .MuiDataGrid-cell:last-child,& .MuiDataGrid-columnHeader:last-child":
            {
              // backgroundColor: "white",
              // position: "sticky",
              // right: 0,
              // borderLeft: "1px whitesmoke solid",
            },
        }}
      />
    </div>
  );
}

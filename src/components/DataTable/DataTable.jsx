import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function DataTable({
  columns,
  rows,
  pageSize = 5,
  checkboxSelection = false
}) {
  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        backgroundColor: "#1e1e2f",
        borderRadius: 3,
        p: 2
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: { pageSize }
          }
        }}
        checkboxSelection={checkboxSelection}
        sx={{
          border: "none",
          color: "#fff",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#27293d",
            fontWeight: "bold"
          }
        }}
      />
    </Box>
  );
}
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
          "& .MuiDataGrid-columnHeaders": {
            fontWeight: "bold",
          }
        }}
      />
    </Box>
  );
}
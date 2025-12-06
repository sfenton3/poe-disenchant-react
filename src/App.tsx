import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import mockData from "./data/mockData.json";

function App() {
  //ModuleRegistry.registerModules([AllCommunityModule]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "Name" },
    { field: "Price" },
    { field: "Dust Value" },
    { field: "Dust / Chaos" },
    { field: "Dust / Chaos / Slot" },
    { field: "Gold Fee" },
    { field: "Trade Link" },
  ]);

  const [rowData, setRowData] = useState(mockData);


  const defaultColDef = {
    flex: 1,
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className='mx-auto w-400 h-100'>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};



export default App

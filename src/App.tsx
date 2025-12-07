import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import mockData from "./data/mockData.json";

function App() {
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

  const filterAmount = () => {
    setRowData(mockData.filter((item) => item["Dust Value"] > 2500))
  };

  const reset = () => {
    setRowData(mockData);
  }

  const defaultColDef = {
    flex: 1,
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className='p-8'>
      <button
        onClick={filterAmount}
        className="mb-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md">
        Dust Range
      </button>
      <button
        onClick={reset}
        className="mb-4 ml-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md">
        Reset
      </button>
      <div className='ag-theme-quartz mx-auto h-200 w-450'>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};



export default App

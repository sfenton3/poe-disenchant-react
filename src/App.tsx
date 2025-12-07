import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import mockData from "./data/mockData.json";
import { Slider } from "radix-ui";

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

  console.log(Slider);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className='flex flex-col gap-4'>

      { /** Toolbar */}
      <div className="flex flex-row gap-2 mx-auto w-[80%] mt-5">
        <button
          onClick={filterAmount}
          className="p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md">
          Dust Range
        </button>
        <button
          onClick={reset}
          className="p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md">
          Reset
        </button>
        <div className="  border-2">
          <Slider.Root className="relative flex items-center select-none touch-none w-[200px] h-5" defaultValue={[50]} max={100} step={1}>
            <Slider.Track className="bg-black/30 relative flex-grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full border-2 border-blue-500 hover:bg-purple-200 focus:outline-none focus:shadow-[0_0_0_5px_rgba(0,0,0,0.2)]" aria-label="Volume" />
          </Slider.Root>
        </div>
      </div>

      { /** Table */}
      <div className='mx-auto w-[80vw] h-[80vh]'>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        //suppressVerticalScroll={true}
        // domLayout='autoHeight'
        />
      </div>
    </div>
  );
};

export default App

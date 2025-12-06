import { useState } from 'react'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';


function App() {
  const [count, setCount] = useState(0);
  ModuleRegistry.registerModules([AllCommunityModule]);


  return (
    <>
      <div className=''> Hello world! </div>
    </>
  )
}

export default App

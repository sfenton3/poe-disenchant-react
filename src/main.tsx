import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import "@radix-ui/themes/styles.css";
import './index.css'
import App from './App.tsx'

ModuleRegistry.registerModules([AllCommunityModule]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>,
)

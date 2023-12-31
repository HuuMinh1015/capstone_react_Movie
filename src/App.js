import { BrowserRouter, Routes } from "react-router-dom";
import { renderRoutes } from "./routes";
import { Suspense } from "react";
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/publicRoutes/routes";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

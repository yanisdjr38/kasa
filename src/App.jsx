import {
  createBrowserRouter,
  Link as LinkRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About/About.jsx";
import Error from "./pages/NotFound/NotFound.jsx";
import Home from "./pages/Home/Home.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <header>
        <nav>
          <LinkRouter to="/home">Home</LinkRouter>
          <LinkRouter to="/about">About</LinkRouter>
        </nav>
      </header>
      <div className="Container">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={Router} />;
}

export default App;

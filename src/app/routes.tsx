import { createBrowserRouter } from "react-router";
import { Portfolio } from "./pages/portfolio";
import { ProjectDetail } from "./pages/project-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/project/:id",
    Component: ProjectDetail,
  },
],
  {
    basename: "/Portfoliopage",
  }
);

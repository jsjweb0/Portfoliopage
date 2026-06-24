import { createBrowserRouter } from "react-router";
import { NotFoundPage } from "../pages/not-found/ui/NotFoundPage";
import { PortfolioPage } from "../pages/portfolio/ui/PortfolioPage";
import { ProjectDetailPage } from "../pages/project-detail/ui/ProjectDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PortfolioPage,
  },
  {
    path: "/project/:id",
    Component: ProjectDetailPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
],
  {
    basename: "/Portfoliopage",
  }
);

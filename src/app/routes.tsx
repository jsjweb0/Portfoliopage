import { createBrowserRouter } from "react-router";
import { AboutPage } from "../pages/about/ui/AboutPage";
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
    path: "/about",
    Component: AboutPage,
  },
],
  {
    basename: "/Portfoliopage",
  }
);

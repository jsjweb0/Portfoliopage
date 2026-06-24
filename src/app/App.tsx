import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ErrorBoundary } from "./ErrorBoundary";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        본문 바로가기
      </a>

      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  );
}

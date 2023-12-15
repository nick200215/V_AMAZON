import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { protectedRoutes, routes } from "./routes/api";
import { ProtectedRoute } from "./routes/protectedRoute";
import { MainRoute } from "./routes/main";
import NotFound from "./pages/notFound";

const Header = lazy(() => import("./components/Header/mainHeader"));
const Footer = lazy(() => import("./components/footer/footer"));
function app() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>

      <Suspense
        fallback={
          <div className="relative w-full sm:w-1/2 bg-gray-200 rounded">
            <div
              style={{ width: "100vw" }}
              className="absolute top-0 h-4 rounded shim-red"
            ></div>
          </div>
        }
      >
        <Routes>
          <Route element={<MainRoute />}>
            {routes.map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Route>

          <Route element={<ProtectedRoute />}>
            {protectedRoutes.map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </Suspense>
    </BrowserRouter>
  );
}
export default app;

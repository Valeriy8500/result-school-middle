import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationPanel from "./navigationPanel";
import { characterUrl } from "../data/url";
import { episodeUrl } from "../data/url";
import { locationUrl } from "../data/url";

const AuthProvider = lazy(() => import("./authProvider").then((module) => ({
  default: module.AuthProvider
})));
const BaseList = lazy(() => import("./baseList").then((module) => ({
  default: module.BaseList
})));
const PrivateRoute = lazy(() => import("./privateRoute").then((module) => ({
  default: module.PrivateRoute
})));
const Login = lazy(() => import("./signin"));
const Home = lazy(() => import("./home"));
const NotFound = lazy(() => import("./notFound"));
const ErrorBoundary = lazy(() => import("./errorBoundary"));

function App() {
  const [pageNumber, setPageNumber] = React.useState(1);

  return (
    <AuthProvider>
      <div className="app">
        <Routes>
          <Route element={<NavigationPanel setPageNumber={setPageNumber} />} >
            <Route path="/" element={<ErrorBoundary><BaseList page="home" /></ErrorBoundary>} />
            <Route
              path="/characters/*"
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <BaseList
                      page="characters"
                      url={characterUrl}
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                    />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            />
            <Route
              path="/episode/*"
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <BaseList
                      page="episode"
                      url={episodeUrl}
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                    />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            />
            <Route
              path="/location/*"
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <BaseList
                      page="location"
                      url={locationUrl}
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                    />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <PrivateRoute>
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<ErrorBoundary><Login /></ErrorBoundary>} />
            <Route path="*" element={<NotFound page="home" />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

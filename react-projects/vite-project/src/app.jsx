import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { NavigationPanel } from "./layout/navigationPanel/navigationPanel";
import { characterUrl } from "./constans/constans";
import { episodeUrl } from "./constans/constans";
import { locationUrl } from "./constans/constans";

const AuthProvider = lazy(() => import("./context/authProvider").then((module) => ({
  default: module.AuthProvider
})));
const BaseList = lazy(() => import("./pages/baseList/baseList").then((module) => ({
  default: module.BaseList
})));
const PrivateRoute = lazy(() => import("./components/privateRoute/privateRoute").then((module) => ({
  default: module.PrivateRoute
})));
const Login = lazy(() => import("./components/signin/signin"));
const Home = lazy(() => import("./pages/home/home"));
const NotFound = lazy(() => import("./components/notFound/notFound"));
const ErrorBoundary = lazy(() => import("./components/errorBoundary/errorBoundary"));

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

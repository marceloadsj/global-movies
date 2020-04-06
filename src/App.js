import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import getConfiguration from "features/app/actions/getConfiguration";
import AppLoader from "features/app/organisms/AppLoader";
import AppError from "features/app/organisms/AppError";
import TheHeader from "features/app/organisms/TheHeader";
import TheFooter from "features/app/organisms/TheFooter";
import HomePage from "features/home/pages/HomePage";
import GenresPage from "features/genres/pages/GenresPage";
import SelectedGenrePage from "features/genres/pages/SelectedGenrePage";
import SelectedMoviePage from "features/movies/pages/SelectedMoviePage";
import SearchPage from "features/search/pages/SearchPage";

export default function App() {
  // dispatch to get the configurations object, as it's needed all over the system
  const dispatch = useDispatch();
  const configuration = useSelector((state) => state?.configuration);

  useEffect(() => {
    if (!configuration) {
      dispatch(getConfiguration());
    }
  }, [configuration, dispatch]);

  // scroll to top when pathname changes
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <main className="flex-1 flex flex-col">
        {(!configuration || configuration.state === "loading") && <AppLoader />}

        {configuration?.state === "error" && (
          <AppError>{configuration.message}</AppError>
        )}

        {configuration?.state === "success" && (
          <>
            <TheHeader />

            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>

              <Route path="/genres" exact>
                <GenresPage />
              </Route>

              <Route path="/genre/:genreId" exact>
                <SelectedGenrePage />
              </Route>

              <Route path="/movie/:movieId" exact>
                <SelectedMoviePage />
              </Route>

              <Route path="/search/:query?" exact>
                <SearchPage />
              </Route>

              <Redirect to="/" />
            </Switch>
          </>
        )}
      </main>

      <TheFooter />
    </>
  );
}

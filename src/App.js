import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import getConfiguration from "features/app/actions/getConfiguration";
import AppLoader from "features/app/organisms/AppLoader";
import AppError from "features/app/organisms/AppError";
import TheHeader from "features/app/organisms/TheHeader";
import TheFooter from "features/app/organisms/TheFooter";
import HomePage from "features/home/pages/HomePage";

export default function App() {
  // dispatch to get the configurations object, as it's needed all over the system
  const dispatch = useDispatch();

  const configuration = useSelector((state) => state?.configuration);

  useEffect(() => {
    if (!configuration) {
      dispatch(getConfiguration());
    }
  }, [configuration, dispatch]);

  return (
    <>
      <main className="flex-1 flex flex-col">
        {(!configuration || configuration?.state === "loading") && (
          <AppLoader />
        )}

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
            </Switch>
          </>
        )}
      </main>

      <TheFooter />
    </>
  );
}

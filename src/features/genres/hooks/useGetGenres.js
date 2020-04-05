import { useEffect } from "react";
import { useDispatch, useStore, useSelector } from "react-redux";

import getGenres from "../actions/getGenres";

export default function useGetGenres() {
  const store = useStore();

  const dispatch = useDispatch();

  useEffect(() => {
    const { genres } = store.getState();

    if (!genres) dispatch(getGenres());
  }, [dispatch, store]);

  return useSelector((state) => state.genres);
}

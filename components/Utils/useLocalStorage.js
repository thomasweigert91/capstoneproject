import {useCallback, useEffect, useState} from "react";

export default function useLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);
  const setStateAndLocalStorage = useCallback(
    callbackOrValue => {
      setState(previousValue => {
        const nextValue =
          typeof callbackOrValue === "function"
            ? callbackOrValue(previousValue)
            : callbackOrValue;
        window.localStorage.setItem(key, JSON.stringify(nextValue));
        return nextValue;
      });
    },
    [key]
  );
  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (stored !== null) {
      setState(JSON.parse(stored));
    }
  }, [key]);
  return [state, setStateAndLocalStorage];
}

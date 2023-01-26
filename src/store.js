import { useEffect, useState } from "react";

let global = "global state";

export let subscribers = new Set();

const subscribe = (callback) => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};

const setter = (value) => {
  global = value;
  subscribers.forEach((callback) => callback());
  return;
};

const getter = () => {
  return global;
};

export const useStore = () => {
  const [value, setValue] = useState(getter());
  useEffect(() => {
    return subscribe(() => setValue(getter()));
  }, []);
  return [value, setter];
};

import { useState } from "react";

let global = "global state";
let subscribers = new Set();

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
  subscribers.add(() => setValue(getter()));
  return [value, setter];
};

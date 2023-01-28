# 전역 상태 관리도구 입니다
 - 실용성보다는 개념적으로 이해하기 위함입니다.
 - contextAPI 사용하지 않고 구현했습니다. 의존성이 있다면 리엑트의 useState에 대한 의존성을 갖고 있습니다.
 
 ![globalstate](https://user-images.githubusercontent.com/59566239/214877242-61c1dae2-d504-4e9c-8d41-58e5283e8c35.gif)

 - store에는 노출되지 않는 네가지 변수와 외부에서 접근할 수 있는 훅이 있습니다.
 - 전역상태 값, subscibers, getter, setter는 외부로 export하지 않고 있습니다.
 - 전역상태 값은 실제데이터를 저장하기 위한 용도이고 getter, setter는 읽고 변경하기 위함입니다.
 - subscribers에는 처음에는 빈set을 두고 useStore를 호출할경우 `() => setValue(getter())`와 같은 콜백이 등록됩니다.
 - subscribers는 setter가 globalstate를 변경할 때 forEach를 통해 set에 등록된 해당 콜백을 모두 실행합니다.
 - setValue는 state를 변경하게 되고 useStore를 호출했던 컴포넌트는 제랜더링이 발생하게 됩니다.
 
 ```javascript
 // store.js
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

 ```

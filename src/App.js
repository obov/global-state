import { useState } from "react";
import { subscribers, useStore } from "./store";

function App() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <Btn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <Btn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <Btn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => console.log(subscribers)}>subs</button>
    </div>
  );
}

function Btn() {
  const [value, setValue] = useStore();
  const handleClick = () => {
    setValue(value + "!");
  };
  return <button onClick={handleClick}>{value}</button>;
}

export default App;

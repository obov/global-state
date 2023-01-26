import { useState } from "react";
import { useStore } from "./store";

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

import { useState } from "react";
import "./App.css";
import Checkbox1 from "./components/CheckBox1";
import CheckboxWrapper from "./components/CheckboxWrapper";
import CheckboxHeadless from "./components/CheckboxHeadless";
import { useCheckbox } from "./hooks/useCheckbox";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const { _isChecked, _onChange } = useCheckbox();
  return (
    <>
      {/* Headless 리팩 전 */}
      <div>
        <Checkbox1
          label="체크박스 만들기"
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>
      {/* Headless 리팩 1, compound 패턴 */}
      <div>
        <CheckboxWrapper
          id="checkbox-1"
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        >
          <CheckboxWrapper.Checkbox />
          <CheckboxWrapper.Label>체크박스 Headless1</CheckboxWrapper.Label>
        </CheckboxWrapper>
      </div>
      {/* Headless 리팩 2, Function as Child Component */}
      <div>
        <CheckboxHeadless>
          {({ isChecked, onChange }) => {
            return (
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={onChange}
                />
                <span>체크박스 Headless2</span>
              </label>
            );
          }}
        </CheckboxHeadless>
      </div>
      {/* Headless 리팩 3, Custom hooks */}
      <div>
        <label>
          <input type="checkbox" checked={_isChecked} onChange={_onChange} />
          <span>체크박스 Headless3</span>
        </label>
      </div>
    </>
  );
}

export default App;

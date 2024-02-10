// import { useState } from "react";

// const Checkbox1 = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={isChecked}
//         onChange={() => setIsChecked(!isChecked)}
//       />
//       <span>체크박스 만들기</span>
//     </label>
//   );
// };

// export default Checkbox1;

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange: () => void;
};

const Checkbox = ({ label, isChecked, onChange }: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;

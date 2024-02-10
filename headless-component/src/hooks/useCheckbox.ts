import { useState } from "react";

export const useCheckbox = () => {
  const [_isChecked, _setIsChecked] = useState(false);

  return {
    _isChecked,
    _onChange: () => _setIsChecked(!_isChecked),
  };
};

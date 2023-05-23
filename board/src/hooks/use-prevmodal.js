import { useState } from "react";

const usePrevModal = (initialValue) => {
  const [isModal, setIsModal] = useState(initialValue);

  const onPreveModal = () => {
    setIsModal((prev) => !prev);
  };
  return [isModal, setIsModal, onPreveModal];
};

export default usePrevModal;

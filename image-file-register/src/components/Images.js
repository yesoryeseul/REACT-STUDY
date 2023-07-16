import { useRef, useState } from "react";

// image input 로직
const IamgeRegister = () => {
  const fileInput = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleUploadImage = (e) => {
    fileInput.current.click();
  };

  const handleOnChange = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setImageSrc(imgUrl);
  };
  return (
    <div>
      <button onClick={handleUploadImage}>이미지 등록</button>
      <input
        type="file"
        ref={fileInput}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />
      {imageSrc && <img src={imageSrc} alt="upload image" />}
    </div>
  );
};

export default IamgeRegister;

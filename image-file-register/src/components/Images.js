import { useRef, useState } from "react";

// image input 로직
const IamgeRegister = () => {
  const fileInput = useRef(null);
  const [imageSrcList, setImageSrcList] = useState([]);

  const handleUploadImage = (e) => {
    fileInput.current.click();
  };

  const handleOnChange = (e) => {
    // console.log(e.target.files[0]);
    const files = e.target.files;
    const imgUrls = Array.from(files).map((imgFile) =>
      URL.createObjectURL(imgFile)
    );
    setImageSrcList((prev) => [...prev, ...imgUrls]);
  };
  return (
    <div>
      <button onClick={handleUploadImage}>이미지 등록</button>
      <input
        type="file"
        ref={fileInput}
        onChange={handleOnChange}
        style={{ display: "none" }}
        multiple
      />
      {imageSrcList.map((imageUrl, idx) => (
        <img key={idx} src={imageUrl} alt={`uploaded image ${idx}`} />
      ))}
    </div>
  );
};

export default IamgeRegister;

import { useRef, useState } from "react";

// image input 로직
const IamgeRegister = () => {
  const fileInput = useRef(null);
  const [imageSrcList, setImageSrcList] = useState([]);

  const handleUploadImage = (e) => {
    fileInput.current.click();
  };

  const handleOnChange = (e) => {
    const files = e.target.files;
    const imgUrls = Array.from(files).map((imgFile) =>
      URL.createObjectURL(imgFile)
    );
    setImageSrcList((prev) => [...prev, ...imgUrls].slice(0, 5));
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
      <div
        style={{
          display: "grid",
          gap: "15px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          maxWidth: "1060px",
          margin: "0 auto",
        }}
      >
        {imageSrcList.map((imageUrl, idx) => (
          <img
            key={idx}
            src={imageUrl}
            alt={`uploaded image ${idx}`}
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid #ddd",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IamgeRegister;

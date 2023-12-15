import { useState } from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  data?: Product;
  isLoading: boolean;
}

const MainSwiper = ({ data, isLoading }: Props) => {
  const [mainImg, setMainImg] = useState(data?.images[0]);

  if (!data && !isLoading) {
    return <h1>No products found</h1>;
  }

  const handleImageClick = (image: string) => {
    setMainImg(image);
  };

  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col">
        {data?.images.map((image: string) => (
          <div key={image} className="flex items-center mb-3 w-[60px] h-[60px]">
            <img
              src={image}
              alt=""
              style={{
                border:
                  mainImg === image ? "2px solid #e77600" : "1px solid #ddd",
                transition: "border-color 0.3s",
              }}
              onClick={() => handleImageClick(image)}
              onMouseEnter={() => handleImageClick(image)}
              className="w-full h-full cursor-pointer rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="w-[500px] h-[500px]">
        <img src={mainImg} alt="" className="w-[500%] h-[100%]" />
      </div>
    </div>
  );
};

export default MainSwiper;

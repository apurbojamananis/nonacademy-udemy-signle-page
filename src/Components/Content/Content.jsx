import { FaVideo } from "react-icons/fa";

const Content = () => {
  return (
    <section className="min-h-screen">
      <div className="flex">
        {/* left Side Video */}
        <div className="w-[75%]">
          <video
            src="https://mp4-c.udemycdn.com/2022-07-23_15-37-20-3435f861c5ee86f3b25f6f09eb105f88/2/WebHD_720p.mp4?Expires=1688969166&Signature=atC8RW29qzxYtYkGPgMyiifqwfbwtRoSFNQPXIu3M8QTDAKA8tWw0RfFSf8L9LDH2SMeeGx8hz1RrZGMGup-VibVVwPWC1SD4Igxq0QaY10WBiW7s5HLhc~RVT6GCK-ARopc4QeVWpA7Vqsra5~Wj0gbD~LRUFqlbKqqQY4sYy8oUjaWzia7xZD5Njnb9R81vmLAw6WE0SGy0~PMGQIon9HhMyzOcelg5qeoA22p12WdCVG1x2XR9CDHtqFY9EvwJARDwG2luuw7TyexsctAZ8boGLi-TuWFxRQh0KM-AdWjGWvq5icSSGI5RO22nV0-0d~FOG0CL5Lq8HF8aVyTIg__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
            controls
            className="w-full"
          ></video>
        </div>
        {/* sidebar */}
        <div className="w-[25%] bg-black text-white border-l min-h-screen">
          <div className="flex justify-between items-center pr-4 my-3 px-5">
            <h3>Course Content</h3>
            <p>X</p>
          </div>
          <hr className="px-5" />
          <div className="px-5 mt-5">
            <p>Section: Learn Python From the scratch</p>
            <p>0/20 | 1 hr 19min</p>
          </div>
          <div className="">
            <div className="flex gap-5 items-baseline mt-5 hover:bg-DarkBlue px-5 py-3">
              <input type="checkbox" className="text-[20px]" />
              <div>
                <p>1. Install Python</p>
                <div className="flex items-center gap-2 mt-1">
                  <FaVideo></FaVideo> 2Min{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-baseline mt-2 hover:bg-DarkBlue px-5 py-3">
              <input type="checkbox" className="text-[20px]" />
              <div>
                <p>2. Hello World</p>
                <div className="flex items-center gap-2 mt-1">
                  <FaVideo></FaVideo> 2Min{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-baseline mt-2 hover:bg-DarkBlue px-5 py-3">
              <input type="checkbox" className="text-[20px]" />
              <div>
                <p>3. Data Types</p>
                <div className="flex items-center gap-2 mt-1">
                  <FaVideo></FaVideo> 2Min{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-baseline mt-2 hover:bg-DarkBlue px-5 py-3">
              <input type="checkbox" className="text-[20px]" />
              <div>
                <p>4. Numbers</p>
                <div className="flex items-center gap-2 mt-1">
                  <FaVideo></FaVideo> 2Min{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

import AllTabs from "./AllTabs";
import VideoList from "./VideoList";

const Content = () => {
  return (
    <section className="min-h-screen">
      <div className="flex">
        {/* left Side Video */}
        <div className="w-[75%]">
          <video
            src="https://mp4-c.udemycdn.com/2022-07-23_15-37-20-88595b483b6fef1378b9f9b3a8823246/2/WebHD_720p.mp4?Expires=1689018997&Signature=FxdkZQJ0U9OZ17jI0eGBNIS6ZW-KobNUFd7ZKJGk6SVyKM~pRq4ZUeEc8rRBOMJqbrgtAu7EvxOEh3dVxesbXILfLWk42SoTNIe-m~EiNgMmnXSn7fZtQUeNxe3CSiyJfQpcGAR-f9yE8~hWdNqcW~Ne56JYYAmJEZD4mSbbtLCHvJ9JnwDa5pqbEQXGOp7fmw10FKI77rWN4pMU~jWgNh-hqvSGw33NqoJG9lb78HLohAmANd6JlKX9G9VoDk00n6xto4tzpTwCpJRfs~PnU6-hCoGP1Hx2MCtXUXSI~BxDSi2few5u0ssr~-dft-DRiMtKQYk9C2sGMY2XpjnOog__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
            controls="true"
            className="w-full"
          ></video>

          {/* <video width="640" height="360" id="player1" preload="none" controls>
            <source
              type="video/youtube"
              src="http://www.youtube.com/watch?v=nOEw9iiopwI"
            />
          </video> */}

          {/* <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/eI4an8aSsgw"
          ></iframe> */}
          <AllTabs></AllTabs>
        </div>
        {/* sidebar */}
        <div className="w-[25%] bg-black text-white border-l min-h-screen ">
          <div className="flex justify-between items-center pr-4 my-3 px-5">
            <h3>Course Content</h3>
            <p>X</p>
          </div>
          <hr className="px-5" />
          <div className="px-5 mt-5">
            <p>Section: Learn Python From the scratch</p>
            <p>0/20 | 1 hr 19min</p>
          </div>
          <VideoList></VideoList>
        </div>
      </div>
    </section>
  );
};

export default Content;

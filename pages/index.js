import { useState, Fragment } from "react";
import copy from "copy-to-clipboard";
import { NextSeo, FAQPageJsonLd } from "next-seo";

const Index = () => {
  const [error, seterror] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [HDImage_1280_720, setHDImage_1280_720] = useState("");
  const [SDImage_640_480, setSDImage_640_480] = useState("");
  const [NormalImage_480_360, setNormalImage_480_360] = useState("");
  const [NormalImage_320_180, setNormalImage_320_180] = useState("");
  const [NormalImage_120_90, setNormalImage_120_90] = useState("");
  const [YTvideURL, setYTvideURL] = useState("");

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    if (match && match[1].length == 11) {
      let videoURL = match[1];
      setYTvideURL(videoURL);
      setHDImage_1280_720(
        "http://img.youtube.com/vi/" + videoURL + "/maxresdefault.jpg"
      );
      setSDImage_640_480(
        "http://img.youtube.com/vi/" + videoURL + "/sddefault.jpg"
      );
      setNormalImage_480_360(
        "http://img.youtube.com/vi/" + videoURL + "/hqdefault.jpg"
      );
      setNormalImage_320_180(
        "http://img.youtube.com/vi/" + videoURL + "/mqdefault.jpg"
      );
      setNormalImage_120_90(
        "http://img.youtube.com/vi/" + videoURL + "/default.jpg"
      );
      seterror("");
    } else {
      seterror(
        "The URL you have entered maybe incorrect. Please Enter a correct URL."
      );
    }
  };

  return (
    <Fragment>
      <NextSeo
        title="Free Youtube Thumbnail Downloader"
        description="Free Youtube Thumbnail Downloader is free sevice in which you can download all kinds of thumbnails from high quality to low quality it supports all kind of videos from 8k to 140p."
        canonical="https://youtubethumbnaildownloader.geeksfortech.com"
        openGraph={{
          url: "https://youtubethumbnaildownloader.geeksfortech.com",
          title: "Free Youtube Thumbnail Downloader",
          description:
            "Free Youtube Thumbnail Downloader is free sevice in which you can download all kinds of thumbnails from high quality to low quality it supports all kind of videos from 8k to 140p.",
          site_name: "Free Youtube Thumbnail Downloader",
        }}
      />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: "How to download youtube thumbnail ?",
            acceptedAnswerText:
              "Goto https://https://youtubethumbnaildownloader.geeksfortech.com enter your video url click on download this will show all available resolutions click on any resolution that you want to download.",
          },
        ]}
      />

      <header className="text-gray-700 body-font">
        <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <span className="ml-3 text-xl">YoutubeThumbnailDownloader</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
          <a
            className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
            href="https://geeksfortech.com"
            target="_blank"
          >
            Home
          </a>
        </div>
      </header>
      <div className="mt-15 md:mt-10 lg:mt-10 mx-auto">
        <center>
          <h1 className="mb-10 font-black">
            Youtube Thumbnail Downloader Supports All Youtube Videos Including
            4K, 1080p, HD, HQ, etc.
          </h1>
          <form className="w-full max-w-md">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                value={videoURL}
                placeholder="Enter Youtube URL"
                onChange={(event) => {
                  setVideoURL(event.target.value);
                }}
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={() => {
                  getYouTubeThumbnail(videoURL);
                }}
              >
                Download
              </button>
            </div>
          </form>
          {error && <span className="font-black">{error}</span>}
          {!error && HDImage_1280_720 !== "" ? (
            <div className="mt-10">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5 inline-flex">
                <svg
                  className="fill-current w-4 h-4 mr-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <a href={HDImage_1280_720} target="_blank">
                  HD Image (1280x720)
                </a>
              </button>
              <img
                src={HDImage_1280_720}
                alt="HDImage_1280_720"
                className="mb-3 object-center"
              />
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5 inline-flex">
                <svg
                  className="fill-current w-4 h-4 mr-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <a href={SDImage_640_480} target="_blank">
                  SD Image (640x480)
                </a>
              </button>
              <img
                src={SDImage_640_480}
                alt="HDImage_1280_720"
                className="mb-3 object-center"
              />
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5 inline-flex">
                <svg
                  className="fill-current w-4 h-4 mr-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <a href={NormalImage_480_360} target="_blank">
                  Normal Image (480x360)
                </a>
              </button>
              <img
                src={NormalImage_480_360}
                alt="HDImage_1280_720"
                className="mb-3 object-center"
              />
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5 inline-flex">
                <svg
                  className="fill-current w-4 h-4 mr-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <a href={NormalImage_320_180} target="_blank">
                  Normal Image (320x180)
                </a>
              </button>
              <img
                src={NormalImage_320_180}
                alt="HDImage_1280_720"
                className="mb-3 object-center"
              />
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5 inline-flex">
                <svg
                  className="fill-current w-4 h-4 mr-2 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <a href={NormalImage_120_90} target="_blank">
                  Normal Image (120x90)
                </a>
              </button>
              <img
                src={NormalImage_120_90}
                alt="HDImage_1280_720"
                className="mb-3 object-center"
              />
              <span className="font-bold text-2xl mt-10">
                Youtube Video iFrame Generator
              </span>
              <br />
              <iframe
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                width="400"
                height="230"
                type="text/html"
                src={`https://www.youtube.com/embed/${YTvideURL}?autoplay=0`}
              ></iframe>
              <br />
              <span className="font-semibold text-lg">
                {`<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                width="400" 
                height="230" 
                type="text/html" 
                src="https://www.youtube.com/embed/${YTvideURL}?autoplay=0"></iframe>`}
              </span>
              <br />
              <br />
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5 inline-flex"
                onClick={() => {
                  copy(`<iframe frameborder="0" scrolling="no" 
              marginheight="0" 
              marginwidth="0" 
              width="400" 
              height="230" 
              type="text/html" 
              src="https://www.youtube.com/embed/${YTvideURL}?autoplay=0">
            </iframe>`);
                }}
              >
                <span>Copy Code</span>
              </button>
            </div>
          ) : (
            <div className="mt-10">
              <h1 className="font-black">How to Download Youtube Thumbnail</h1>
              <ul className="mt-1">
                <li>
                  <strong>1.</strong> Copy the Youtube Video Link / URL from
                  Youtube App or Website Paste the Youtube video Link / URL in
                  the Input Field Above.
                </li>
                <li>
                  <strong>2.</strong> Click on the "Download" Button.
                </li>
                <li>
                  <strong>3.</strong> You will get a list of all The Available
                  Youtube Video Thumbnail Qualities, Which you can Choose From
                  High Quality(HQ), High Definition (HD), 4K, 720p, 1080p
                  Thumbnail, Low Quality and Medium Quality Youtube Thumbnails
                  are also available.
                </li>
                <li>
                  <strong>4.</strong> Choose the quality of thumbnail that you
                  want to download. Click on the Download Button of and Your
                  Youtube Video Thumbnail will be Downloaded.
                </li>
              </ul>
            </div>
          )}
        </center>
      </div>
    </Fragment>
  );
};
export default Index;

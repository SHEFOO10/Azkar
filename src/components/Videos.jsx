import VideoBox from "./VideoBox";
import useVideos from "../hooks/useVideos";
import Loading from "./Loading";

const Videos = () => {
  const { videos, loading, error, activeTab, setActiveTab } = useVideos();

  return (
    <div className="p-10" id="videos">
      <div className="head flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          السيرة والقرآن
        </h1>
        <p className="dark:text-gray-400 text-gray-600 text-lg mb-6">
          قوائم تشغيل للسيرة النبوية والقرآن الكريم
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === "alsera"
              ? "bg-[#10B981] text-white shadow-md"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("alsera")}
        >
          السيرة النبوية
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === "quran"
              ? "bg-[#10B981] text-white shadow-md"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("quran")}
        >
          القرآن الكريم
        </button>
      </div>

      {loading && <Loading />}
      {error && <p className="text-center text-red-500">خطأ: {error}</p>}

      <div className="videos-container flex flex-wrap gap-4 justify-center">
        {videos.map((video) => (
          <VideoBox
            key={video.url}
            title={video.title}
            thumbnail={video.thumbnail}
            url={video.url}
            publishedAt={video.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;

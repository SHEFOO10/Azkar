import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const PLAYLISTS = {
  alsera: "PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee",
  quran: "PLSSxr3Rf2_X0LhahU5RFyX87dKBAjIkZj",
};

const useVideos = () => {
  const [activeTab, setActiveTab] = useState("alsera");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const playlistId = PLAYLISTS[activeTab];
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`
        );

        if (!response.ok) throw new Error("فشل في جلب البيانات");

        const data = await response.json();

        const formattedVideos = data.items.map((item) => ({
          title: item.snippet.title,
          url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
          thumbnail: item.snippet.thumbnails.medium.url,
          publishedAt: item.snippet.publishedAt || null,
        }));

        setVideos(formattedVideos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [activeTab]);

  return { videos, loading, error, activeTab, setActiveTab };
};

export default useVideos;

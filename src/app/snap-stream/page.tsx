"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Download, Play, X } from "lucide-react";

const PEXELS_API_KEY =
  "6FB6VBVM6LhMr9Qj6ZPyRhUSmAfsR4S0sQJ8eURNtdncnwpBZBlr87o5";
const PEXELS_API_URL = "https://api.pexels.com/v1/search?query=";
const PEXELS_VIDEO_API_URL = "https://api.pexels.com/videos/search?query=";

export default function SnapStream() {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("seoul");
  const [input, setInput] = useState("");
  const [photos, setPhotos] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("images");
  const [page, setPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);

  const perPage = 10;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchMedia = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const photoRes = await fetch(
          `${PEXELS_API_URL}${query}&per_page=${perPage}&page=${page}`,
          {
            headers: { Authorization: PEXELS_API_KEY },
          }
        );
        const photoData = await photoRes.json();
        setPhotos(photoData.photos || []);
        setTotalPhotos(photoData.total_results || 0);

        const videoRes = await fetch(
          `${PEXELS_VIDEO_API_URL}${query}&per_page=${perPage}&page=${page}`,
          {
            headers: { Authorization: PEXELS_API_KEY },
          }
        );
        const videoData = await videoRes.json();
        setVideos(videoData.videos || []);
        setTotalVideos(videoData.total_results || 0);
      } catch (err) {
        console.error("Failed to fetch media:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [query, page]);

  const handleSearch = () => {
    setQuery(input.trim());
    setPage(1);
  };

  const getCurrentItems = () =>
    activeTab === "images" ? photos : videos;
  const hasNextPage =
    activeTab === "images"
      ? page * perPage < totalPhotos
      : page * perPage < totalVideos;

  if (!mounted) return null;

  return (
    <div className="p-4 mt-20 pt-10">
      {/* Banner Section */}
      <div
        className="relative h-[250px] w-full rounded-xl overflow-hidden mb-8"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
            Explore Stunning Images & Videos
          </h1>
        
        </div>
      </div>
          <div className="max-w-xl mx-auto mb-6">
     <div className="flex gap-2">           <Input
            type="text"
            className=""
            placeholder="Search images and videos"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
      <Tabs defaultValue="images" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        {/* Images */}
        <TabsContent value="images">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: perPage }).map((_, i) => (
                <Skeleton key={i} className="w-full h-48 rounded-lg" />
              ))}
            </div>
          ) : (
            <>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="10px">
                  {photos.map((photo, i) => (
                    <div
                      key={photo.id}
                      onClick={() => {
                        setSelectedIndex(i);
                        setIsModalOpen(true);
                      }}
                      className="cursor-pointer"
                    >
                      <Image
                        src={photo.src.large2x}
                        alt=""
                        width={800}
                        height={600}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
              <div className="flex justify-end mt-4 gap-2">
                <Button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </Button>
                <Button
                  disabled={!hasNextPage}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </TabsContent>

        {/* Videos */}
        <TabsContent value="videos">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: perPage }).map((_, i) => (
                <Skeleton key={i} className="w-full h-48 rounded-lg" />
              ))}
            </div>
          ) : (
            <>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="10px">
                  {videos.map((video, i) => (
                    <div
                      key={video.id}
                      onClick={() => {
                        setSelectedIndex(i);
                        setIsModalOpen(true);
                      }}
                      className="relative group cursor-pointer"
                    >
                      <video
                        muted
                        playsInline
                        preload="metadata"
                        className="rounded-lg w-full"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      >
                        <source
                          src={video.video_files[0]?.link}
                          type="video/mp4"
                        />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <Play className="text-white w-10 h-10" />
                      </div>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
              <div className="flex justify-end mt-4 gap-2">
                <Button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </Button>
                <Button
                  disabled={!hasNextPage}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </TabsContent>
      </Tabs>

      {/* Modal */}
      {isModalOpen && selectedIndex !== null && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="absolute top-4 right-4">
              <div
                className="cursor-pointer w-10 h-10 rounded-full bg-white flex items-center justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-6 h-6 text-black" />
              </div>
            </div>
            <div className="relative max-w-4xl w-full flex flex-col items-center">
              <div className="w-full max-h-[80vh] overflow-hidden rounded-xl">
                {activeTab === "images" ? (
                  <Image
                    src={getCurrentItems()[selectedIndex].src.large2x}
                    alt="Selected"
                    width={1000}
                    height={600}
                    className="rounded-xl w-full object-cover"
                  />
                ) : (
                  <video
                    src={getCurrentItems()[selectedIndex].video_files[0].link}
                    autoPlay
                    controls
                    className="rounded-xl w-full"
                  />
                )}
              </div>
              <div className="mt-5 flex justify-end w-full gap-3">
                <a
                  href={
                    activeTab === "images"
                      ? getCurrentItems()[selectedIndex].src.original
                      : getCurrentItems()[selectedIndex].video_files[0].link
                  }
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="flex gap-2 items-center">
                    <Download className="w-4 h-4" /> Download
                  </Button>
                </a>

                <button
                  className="z-10 bg-white/80 hover:bg-white rounded-full p-2 "
                  onClick={() =>
                    setSelectedIndex((prev) => (prev ?? 0) - 1)
                  }
                  disabled={selectedIndex === 0}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  className="bg-white/80 hover:bg-white rounded-full p-2"
                  onClick={() =>
                    setSelectedIndex((prev) => (prev ?? 0) + 1)
                  }
                  disabled={
                    selectedIndex === getCurrentItems().length - 1
                  }
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}

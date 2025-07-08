
import { useState, useRef, useEffect } from "react";

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setVideoEnded(true);
      // Add a small delay before hiding to ensure smooth transition
      setTimeout(() => {
        onComplete();
      }, 500);
    };

    const handleVideoError = (e: Event) => {
      console.error('Video failed to load:', e);
      // If video fails to load, skip to main content after a short delay
      setTimeout(() => {
        onComplete();
      }, 2000);
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('error', handleVideoError);

    // Ensure video starts playing
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error('Video autoplay failed:', error);
        // If autoplay fails, skip to main content after a short delay
        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    };

    // Small delay to ensure video is loaded
    setTimeout(playVideo, 100);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('error', handleVideoError);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        videoEnded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#0c0d0f' }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{
          maxWidth: '100vw',
          maxHeight: '100vh'
        }}
      >
        <source 
          src="https://files.catbox.moe/g5jvux.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default OpeningAnimation;

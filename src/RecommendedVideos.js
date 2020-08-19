import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";


function RecommendedVideos() {
  return (
    <div className="recommendedVideos">


        <h2> Recommended</h2>

        <div className="recommendedVideos_videos">

          <VideoCard
          title="John Mayer Tomo Fujita Berklee"
          views="2.4m"
          timestamp="4 months ago"
          channel="TomFujitaMusic"
          channelImage="https://yt3.ggpht.com/a/AATXAJxU_3TzgawKDPE-6wH3SWYCKHxUcCZ7_h449rBU=s48-c-k-c0xffffffff-no-rj-mo"
          image="https://i.ytimg.com/an_webp/U-MAYC4k15Y/mqdefault_6s.webp?du=3000&sqp=CLLp8vkF&rs=AOn4CLBUDOgYCONUH8gELbTvVcE2XzsYsw"
          />

          <VideoCard
          title="Joe Rogan Experience #1315 - Bob Lazar & Jeremy Corbell"
          views="5.2m"
          timestamp="1 year ago"
          channel="PowerfulJRE"
          channelImage="https://yt3.ggpht.com/a/AATXAJwVJeeimAaxFQxL7vMQWzc7_ElVpT_Vhjnxwi9X=s48-c-k-c0xffffffff-no-rj-mo"
          image="https://i.ytimg.com/an_webp/BEWz4SXfyCQ/mqdefault_6s.webp?du=3000&sqp=CIiG8_kF&rs=AOn4CLBurBf9wOzmVNVr7Rt-JtwGofwN3Q"
          />

          <VideoCard
          title="Munchies: Anthony Bourdain"
          views="1.2m"
          timestamp="8 years ago"
          channel="Vice"
          channelImage="https://yt3.ggpht.com/a/AATXAJxntdVqmv9mk9sInvpa4MY8fk6xI-_hzWaHF3nczLw=s48-c-k-c0xffffffff-no-rj-mo"
          image="https://i.ytimg.com/an_webp/mxxYul_LV0I/mqdefault_6s.webp?du=3000&sqp=CPz88vkF&rs=AOn4CLAQs8_IFRWKbiJofXqDSYOP451fag"
          />

          <VideoCard
          title="Jamming with my student @zackgibs / G A-7 A-7 G /BPGL#20"
          views="202k"
          timestamp="1 year ago"
          channel="TomoFujitaMusic"
          channelImage="https://yt3.ggpht.com/a/AATXAJxU_3TzgawKDPE-6wH3SWYCKHxUcCZ7_h449rBU=s48-c-k-c0xffffffff-no-rj-mo"
          image="https://i.ytimg.com/an_webp/6ARrgHAkfRg/mqdefault_6s.webp?du=3000&sqp=CNCE8_kF&rs=AOn4CLBpUY1bm1ajohs6xW25fHp7gMzZcw"
          />

           <VideoCard
          title="The History of Pancakes"
          views="202k"
          timestamp="2 years ago"
          channel="TastingHistory"
          channelImage="https://yt3.ggpht.com/a/AATXAJwlo5aer3Dy6eQIXvKpK1bGks88_aNlL-CnbCMI=s48-c-k-c0xffffffff-no-rj-mo"
          image="https://i.ytimg.com/an_webp/SD3WKbXhm6M/mqdefault_6s.webp?du=3000&sqp=CIag8_kF&rs=AOn4CLAXT8s_q318JPytgYrcoczzkS1vNg"
          />

            <VideoCard
          title="What is React (Recat js)?"
          views="202k"
          timestamp="2 years ago"
          channel="Programming with Mosh"
          channelImage="https://yt3.ggpht.com/a/AATXAJymy6xr9_W7GTkPW1ov2OyxzvNCOE-ff1d7VK36Cg=s48-c-k-c0xffffffff-no-rj-mo"
          image="https://i.ytimg.com/an_webp/N3AkSS5hXMA/mqdefault_6s.webp?du=3000&sqp=CIDZ8vkF&rs=AOn4CLBvu1TStGSISxuKY5QdZeztsNr51w"
          />





      </div>
    </div>
  )
}

export default RecommendedVideos
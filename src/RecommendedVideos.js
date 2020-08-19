import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";


function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
        <h2> Recommended</h2>
        <div className="recommendedVideos_videos">
          <a href="https://www.youtube.com/watch?v=U-MAYC4k15Y">
          <VideoCard
            title="John Mayer Tomo Fujita Berklee"
            views="2.4m"
            timestamp="4 months ago"
            channel="TomFujitaMusic"
            channelImage="https://yt3.ggpht.com/a/AATXAJxU_3TzgawKDPE-6wH3SWYCKHxUcCZ7_h449rBU=s48-c-k-c0xffffffff-no-rj-mo"
            image="https://lh3.googleusercontent.com/m7XqaB3j4LSY2PIM_XNnTCr0Q38cwR_NEink5pdKpz2N-YKYGiFltrImHLngdvezWrkV=s151"
            />
        </a>

      <a href="https://www.youtube.com/watch?v=SD3WKbXhm6M&t=1s">
        <VideoCard
          title="The History of Pancakes"
          views="202k"
          timestamp="2 years ago"
          channel="TastingHistory"
          channelImage="https://yt3.ggpht.com/a/AATXAJwlo5aer3Dy6eQIXvKpK1bGks88_aNlL-CnbCMI=s48-c-k-c0xffffffff-no-rj-mo"
          image="https://lh3.googleusercontent.com/t7tn6UUTu_FqZAHc4SnJcy8Z_m9CzHVc6G_4jcgdoDGtquZIOeFhqx45gpr73F80SQvK3g=s151"
          />
      </a>

        <a href="https://www.youtube.com/watch?v=1w-oQ-i1XB8">
            <VideoCard
              title="React JS / Redux Tutorial - 1 - What is Redux??"
              views="202k"
              timestamp="2 years ago"
              channel="thenewboston"
              channelImage="https://yt3.ggpht.com/a/AATXAJxZrkhB1ynPmbqOCde-9PgLuLQ4oVHv81VF0hxM_A=s48-c-k-c0xffffffff-no-rj-mo"
              image="https://lh3.googleusercontent.com/ygw7q5yHVbjSbb219H5kuBie9oH0FdkD5ok2JErG_qROGOtqaXvvpKsy1WAsFSkhWi7PSQ=s151"
            />
          </a>

          <a href="http://google.com">
            <VideoCard
              title="26 UNBELIEVABLE LIFE HACKS YOU DREAMT ABOUT"
              views="40k"
              timestamp="1 month ago"
              channel="5-Minute Crafts"
              channelImage="https://yt3.ggpht.com/a/AATXAJx7KyeeucXROros84IKVfFPIEnW7MrZX0ZTyiRplw=s48-c-k-c0xffffffff-no-rj-mo"
              image="https://lh3.googleusercontent.com/zJ6mNuulczA2D0zROPDBjGpP81yfe-NgtIDkT0DxbJTLogdpgbkG_1wCoGnkmsStAsNB=s151"
              />
          </a>


          <a href="http://google.com">
            <VideoCard
              title="2020 Tesla Model S in-depth review – has it had its day? | What Car"
              views="100k"
              timestamp="5 months ago"
              channel="What car?"
              channelImage="https://yt3.ggpht.com/a/AATXAJze32Z_V6iZaERUqmqbVzpQS14zmi7xhA3qQ2GEo-Q=s48-c-k-c0xffffffff-no-rj-mo"
              image="https://lh3.googleusercontent.com/3OtCEDGi1MdArlKZJh5nyGVEpgXX0AkcQyLXVzg0mgZ_PhJENinAtqT_MshrAc9-Znfd5Q=s151"
            />
        </a>

        <a href="http://google.com">
          <VideoCard
            title="Joe Rogan Experience #1315 - Bob Lazar & Jeremy Corbell"
            views="5.2m"
            timestamp="1 year ago"
            channel="PowerfulJRE"
            channelImage="https://yt3.ggpht.com/a/AATXAJwVJeeimAaxFQxL7vMQWzc7_ElVpT_Vhjnxwi9X=s48-c-k-c0xffffffff-no-rj-mo"
            image="https://lh3.googleusercontent.com/01gUUe9rljxvyPLwdIUjzNQxkz4LwSkYcQWEF8VDW7icK8IcnfiukO0ta5W7JohBaS1vS9o=s151"
          />
        </a>

        <a href="http://google.com">
          <VideoCard
            title="Munchies: Anthony Bourdain"
            views="1.2m"
            timestamp="8 years ago"
            channel="Vice"
            channelImage="https://yt3.ggpht.com/a/AATXAJxntdVqmv9mk9sInvpa4MY8fk6xI-_hzWaHF3nczLw=s48-c-k-c0xffffffff-no-rj-mo"
            image="https://lh3.googleusercontent.com/tPQqcXex-cMv9ddDzV0C-9O-k72JevN1vyuvu6S5WP2ga6Z05SShQMIdkT83xRRtGqQisQ=s151"
          />
        </a>
        <a href="http://google.com">
            <VideoCard
             title="Jamming with my student @zackgibs / G A-7 A-7 G /BPGL#20"
              views="202k"
              timestamp="1 year ago"
              channel="TomoFujitaMusic"
              channelImage="https://yt3.ggpht.com/a/AATXAJxU_3TzgawKDPE-6wH3SWYCKHxUcCZ7_h449rBU=s48-c-k-c0xffffffff-no-rj-mo"
              image="https://lh3.googleusercontent.com/GBw4E1YAECsfHX9XYG6fEpUjVLZ777qmvPtQW-cygKhkjhufr502TgAxu-hql36U3Oja=s151"
          />
        </a>

      </div>
    </div>
  )
}

export default RecommendedVideos
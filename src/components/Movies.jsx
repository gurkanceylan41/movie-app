"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt }) => {
  const router = useRouter();
  console.log(dt);

  // Görsel URL'sini kontrol ediyoruz
  const imageUrl = dt?.backdrop_path || dt?.poster_path;
  const title = dt?.title;
  if (!title || !imageUrl) {
    return null;
  }
  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="relative min-w-[450px] h-[250px] cursor-pointer overflow-hidden rounded-lg"
    >
      <Image
        width={450}
        height={300}
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
        alt={dt?.title || "Movie Image"}
        className="w-full h-full"
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold text-white">{dt?.title}</div>
        <div className="text-white">
          {dt?.vote_average?.toString().slice(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default Movies;

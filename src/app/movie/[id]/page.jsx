import { getMovie } from "@/app/api/route";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title} </div>
        <div className="w-1/2">{movieDetail?.overview} </div>
        <div className="my-3">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <div className="border w-32 p-2 hover:bg-white hover:text-black rounded-md text-center text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;

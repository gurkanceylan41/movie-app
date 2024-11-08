import Movies from "@/components/Movies";
import { getMovies } from "./api/route";

const Page = async ({ searchParams }) => {
  const data = await getMovies(searchParams);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies dt={dt} key={i} />
      ))}
    </div>
  );
};

export default Page;

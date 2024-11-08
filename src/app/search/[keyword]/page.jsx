import { getSearchMovie } from "@/app/api/route";
import Movies from "@/components/Movies";

const Page = async ({ params }) => {
  const { keyword } = await params;

  const searchMovie = await getSearchMovie(keyword);
  return (
    <div>
      {!searchMovie?.results ? (
        <div>Aranılan şey bulunamadı!!!</div>
      ) : (
        <div className="flex items-center flex-wrap gap-2">
          {searchMovie?.results?.map((dt, i) => (
            <Movies dt={dt} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;

const API_URL = process.env.NEXT_PUBLIC_TMDB_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Film detaylarını getiren fonksiyon
export const getMovie = async (id) => {
  const res = await fetch(`${API_URL}/movie/${id}`, {
    ...options,
    next: { revalidate: 10000 },
  });
  return await res.json();
};

// Filmleri listeleyen fonksiyon
export const getMovies = async (searchParams) => {
  const endpoint = searchParams?.genre
    ? `/movie/${searchParams.genre}`
    : "/trending/all/day";
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    next: { revalidate: 10000 },
  });
  return await res.json();
};

// Arama yapan fonksiyon
export const getSearchMovie = async (keyword) => {
  const res = await fetch(`${API_URL}/search/movie?query=${keyword}`, {
    ...options,
    next: { revalidate: 10000 },
  });
  return await res.json();
};

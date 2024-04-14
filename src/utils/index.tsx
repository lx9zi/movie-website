const API_KEY = process.env.NEXT_PUBLIC_KEY;
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// export async function getTrendingMovies() {
//   const res = await fetch(
//     `${BASE_URL}/trending/movie/day?language=en-Usiapi_key=${API_KEY}`
//   );
//   const data = await res.json();
//   return data.results;
// }

// export const getMovies = async (query: any) => {
//   const res = await fetch(
//     `S${BASE_URL}/search/movie?api_key=${API_KEY}Squery=${query}`
//   );
//   const data = await res.json();
//   return data.result;
// };

// export const getMoviesDetails = async (id: any) => {
//   const res = await fetch(`${BASE_URL}/movie/${id}epi_key=${API_KEY}`);
//   const data = await res.json();
//   return data;
// };

// export const getSimilerMovies = async (id: any) => {
//   const res = await fetch(`${BASE_URL}/movie/${id}/sinilar?epi_key=${API_KEY}`);
//   const data = await res.json();
//   return data.results;
// };

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// export const getTrendingMovies = async () => {
//   const res = await fetch(`${BASE_URL}/trending/movie/week?language=en-US`);
//   const data = await res.json();
//   return data.results;
// };

// export const getMovies = async (query: any) => {
//   const res = await fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
//   );
//   const data = await res.json();
//   return data.results;
// };

// export const getMovieDetails = async (id: any) => {
//   const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
//   const data = await res.json();
//   return data;
// };

// export const getSimilarMovies = async (id: any) => {
//   const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
//   const data = await res.json();
//   return data.results;
// };

export async function getTrendingMovies() {
  const headers = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZhYTExOTE1YWI4ZTlmN2NjOTcxYTM4NDk1OWU3ZiIsInN1YiI6IjY2MTcxMWY5ZjEyY2Y0MDE2MzAzYjllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hngB7etvarvbRfqyICUbR34glASRq7jsnQuOfUfnfpE",
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result.results;
}

export async function getMoviesDetails(query: any) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZhYTExOTE1YWI4ZTlmN2NjOTcxYTM4NDk1OWU3ZiIsInN1YiI6IjY2MTcxMWY5ZjEyY2Y0MDE2MzAzYjllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hngB7etvarvbRfqyICUbR34glASRq7jsnQuOfUfnfpE",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${query}?language=en-US`,
    options
  );
  const result = await response.json();
  return result;
}

export async function getMovies(query: any) {
  const headers = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZhYTExOTE1YWI4ZTlmN2NjOTcxYTM4NDk1OWU3ZiIsInN1YiI6IjY2MTcxMWY5ZjEyY2Y0MDE2MzAzYjllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hngB7etvarvbRfqyICUbR34glASRq7jsnQuOfUfnfpE",
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=20faa11915ab8e9f7cc971a384959e7f`,

    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result.results;
}
export async function getSimilarMovies(id: any) {
  const headers = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZhYTExOTE1YWI4ZTlmN2NjOTcxYTM4NDk1OWU3ZiIsInN1YiI6IjY2MTcxMWY5ZjEyY2Y0MDE2MzAzYjllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hngB7etvarvbRfqyICUbR34glASRq7jsnQuOfUfnfpE",
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,

    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result.results;
}

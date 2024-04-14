import { getMovies } from "@/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function page({ searchParams }: any) {
  const searchText = searchParams.query;
  const ImageBaseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  console.log(searchText);

  const movie = await getMovies(searchText);

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Top search Results from &#x201D{searchText}&#x201D
      </h1>
      <div className="w-full h-full flex flex-row flex-wrap gap-10 items-center justify-center">
        {movie.map((movie: any) => {
          return (
            <>
              <div className="w-[20rem] h-[30rem] rounded-t-md text-black ">
                <Link href={`/movies/${movie.id}`}>
                  <Image
                    src={
                      movie.poster_path
                        ? ImageBaseUrl + movie.poster_path
                        : "/mission_movie_poster.webp"
                    }
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-t-md object-center w-full h-[25rem]"
                  />
                  <h2 className="py-3 text-3xl">{movie.title}</h2>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

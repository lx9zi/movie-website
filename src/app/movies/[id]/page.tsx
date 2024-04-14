"use client";
import { getMoviesDetails, getSimilarMovies } from "@/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default async function page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = await getMoviesDetails(params.id);
  const similarMovei = await getSimilarMovies(params.id);
  const ImageBaseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <>
      <div className="flexing__layout gap-6 sm:gap-0">
        <div className="sm:flex-1 ">
          <Image
            src={ImageBaseUrl + data.poster_path}
            alt={data.title}
            width={400}
            height={500}
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-start ">
          <h1 className="py-3 text-2xl font-bold">{data.title}</h1>

          <div className="flex items-center justify-start gap-3 py-2">
            <div className="p-2 bg-orange-500 text-white hover:bg-orange-300 transition ease-in-out delay-75 rounded-md">
              {data.release_date}
            </div>
            <div className="p-2 bg-orange-500 text-white hover:bg-orange-300 transition ease-in-out delay-75 rounded-md">
              {data.original_language}
            </div>
            <div className="p-2 bg-orange-500 text-white hover:bg-orange-300 transition ease-in-out delay-75 rounded-md">
              {data.status}
            </div>
          </div>

          <div className="flex items-center justify-start gap-3 py-2">
            {data.genres.map((genres: any) => {
              return (
                <div
                  className="p-2 bg-gray-700 text-white hover:bg-gray-300 hover:text-black transition ease-in-out delay-75 rounded-md"
                  key={genres.id}
                >
                  {genres.name}
                </div>
              );
            })}
          </div>
          <p className="text-gray-500">{data.overview}</p>
        </div>
      </div>

      <div className="w-full my-10 h-[40rem]">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {similarMovei.map((movie: any) => {
            return (
              <>
                <SwiperSlide>
                  <Link href={`/movies/${movie.id}`}>
                    <Image
                      src={
                        movie.poster_path
                          ? ImageBaseUrl + movie.poster_path
                          : "/mission_movie_poster.webp"
                      }
                      alt={movie.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-center"
                    />
                    <h1 className="from-black w-full bg-gradient-to-t absolute bottom-0 pb-14 text-start z-10 text-2xl text-white ">
                      {movie.title}
                    </h1>
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

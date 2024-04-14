import React from "react";
import Image from "next/image";

export default function Main() {
  return (
    <section className="section flexing__layout !flex-wrap-reverse">
      <div className="sm:flex-1">
        <h1 className="title sm:w-2/3">
          your ultimate destination for top-quality TV shows, movies, and more
        </h1>
        <p className="py-3">
          A Library if movies and TV shows you can watch any where
        </p>

        <div className="flex items-center gap-6 justify-between sm:justify-normal">
          <button className="button__layout bg-orange-500 hover:text-orange-500 hover:bg-white simple__transition">
            Subscribe
          </button>
          <button className="button__layout border border-orange-500 !text-black simple__transition hover:bg-orange-500 hover:!text-white">
            Free Tarail
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/main-poster.jpg"
          alt="2"
          width={9999999}
          height={99990}
          className="w-full sm:w-[70%] h-[40rem]"
        />
      </div>
    </section>
  );
}

import { getTrendingMovies } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import Main from "./components/Main";
import Questions from "./components/Questions";

export default async function Home() {
  const data = await getTrendingMovies();
  const ImageBaseUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <>
      <Main />
      <h1 className="title">Top Trendings:</h1>
      <section className="section flexing__layout gap-10 !justify-center">
        {data.map((dt: any) => {
          return (
            <div
              className="w-[18rem] h-[20rem] rounded-md overflow-hidden text-black relative"
              key={dt.id}
            >
              <Link href={`/movies/${dt.id}`}>
                <Image
                  src={ImageBaseUrl + dt.poster_path}
                  alt={dt.title}
                  width={800}
                  height={800}
                  className="object-center w-full h-full"
                />
                <div className="absolute bottom-0 w-full h-full hover:bg-black opacity-50 simple__transition "></div>
                <h2 className="py-3 text-xl absolute bottom-0 left-2 font-bold text-white">
                  {dt.title}
                </h2>
                {/* <p className="h-1/5 overflow-hidden">{dt.overview}</p> */}
              </Link>
            </div>
          );
        })}
      </section>

      <Questions />
    </>
  );
}

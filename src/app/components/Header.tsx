"use client";
import { Clapperboard, Search } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const route = useRouter();

  function submitHandle(e: any) {
    e.preventDefault();

    if (searchText) {
      route.push(`/movies/search?query=${searchText}`);
    }
  }

  return (
    <div className="flexing__layout py-3">
      <div>
        <Link href="/">
          <Clapperboard
            size={50}
            className="hover:text-orange-500 transition ease-in-out"
          />
        </Link>
      </div>

      <form
        action=""
        onSubmit={(e) => submitHandle(e)}
        className="flex items-center justify-center gap-6"
      >
        <Search className="hidden sm:flex" />
        <input
          type="text"
          placeholder="Search About Movie"
          name=""
          id="search"
          onChange={(e) => setSearchText(e.target.value)}
          className=" outline-none p-1 border-b-4"
        />
        <button className="px-5 py-3 bg-orange-500 text-white hover:bg-orange-300 transition ease-in-out delay-75 rounded-md ">
          Seaerch
        </button>
      </form>
    </div>
  );
}

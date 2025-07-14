"use client";

import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import { useActionState } from "react"
import { submitSearch } from "./actions/actions"



export default function Home() {
  const [data, setData] = useActionState(submitSearch, {});

  return (
    <div className="header">
      <Navbar></Navbar>
      <Searchbar action={setData}></Searchbar>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1>{data.headword}</h1>
          <p>{data.definition}</p>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
      </div>
    </div>
  );
}

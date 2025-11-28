"use client";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import WordPage from "./pages/WordPage/WordPage";
import { useActionState } from "react"
import { submitSearch } from "./actions/actions"



export default function Home() {
  const [data, setData] = useActionState(submitSearch, { user_input: ''});
  console.log(data)

  return (
    <div>
      <div className="header">
        <Navbar></Navbar>
        <div id="quick-start-info" className="pt-4 px-4 sm:px-11" style={{ display: (data.user_input === '' ? 'block' : 'none') }}>
          <p>Type in Tamil or copy-paste a Tamil word to find its meaning, plus the meaning of each of its parts.</p>
          <p>Try using Kelvi to figure out what மேய்ந்துவிடும் means!</p>
        </div>
        <div className="pt-4 px-4"><Searchbar action={setData}></Searchbar></div>
      </div>
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 md:items-center md:justify-items-center">
        <WordPage data={data}></WordPage>
      </div>
      <Footer></Footer>
    </div>  
  );
}

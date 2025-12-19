"use client";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import WordPage from "./pages/WordPage/WordPage";
import { useActionState, useEffect, startTransition, useRef, Suspense } from "react"
import { submitSearch } from "./actions/actions"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

function HomeContent() {
  const [data, setData] = useActionState(submitSearch, { user_input: ''});
  console.log(data)

  const hasLoaded = useRef(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Redirect to URL with query param when data.user_input changes
  useEffect(() => {
    if (searchParams) {
      const params = new URLSearchParams(searchParams.toString())
      if (data.user_input) {
        params.set('query', data.user_input)
      } else {
        params.delete('query')
      }
      const queryString = params.toString()
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false })
    }
  }, [data.user_input, pathname, router, searchParams])

  // Check for query param and set data accordingly
  useEffect(() => {
    if (searchParams) {
      const query = searchParams.get('query')
      if (!hasLoaded.current && query && data.user_input === '') {
        hasLoaded.current = true;
        const formData = new FormData();
        formData.append('user_input', query);
        startTransition(() => setData(formData))
      } 
    }
  }, [searchParams, data.user_input, setData])

  return (
    <div>
      <div className="header">
        <Navbar onHomeClick={() => { router.replace('/'); const formData = new FormData(); formData.append('user_input', ''); startTransition(() => setData(formData)) }}></Navbar>
        <div id="quick-start-info" className="pt-4 px-4 sm:px-11" style={{ display: (data.user_input === '' ? 'block' : 'none') }}>
          <p>Type in Tamil or romanization/English transliteration to find the meaning of a Tamil word, plus the meaning of each of its parts.</p>
          <p>Try copy and pasting மேய்ந்துவிடும் into the searchbar to find its definition!</p>
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

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}

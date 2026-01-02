import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

export default function About(){
    return(
        <div>
            <Navbar></Navbar>
                <div className="items-center justify-items-center min-h-screen p-4 sm:px-38 pb-20 gap-16">
                <h1 className="font-semibold font-serif text-xl text-default-black py-2">Report Errors</h1>
                <p className="py-2">Please note: Kelvi is a work in progress 🚧 Our team is working diligently to improve the website 👷🏾🛠️ </p>
                <p className="py-2">Notice any errors or missing words? Let us know!</p>
                <iframe className="py-4" src="https://docs.google.com/forms/d/e/1FAIpQLSf9ovMZqIJVPBNA6jmhaCFBrVjGARk3yCc4IXxtWHTyhf08PA/viewform?usp=dialog" width="100%" height="1159">Loading…</iframe>
            </div>
            <Footer></Footer>
        </div>
    )
}
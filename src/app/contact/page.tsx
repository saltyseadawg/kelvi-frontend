import Navbar from "../components/Navbar/Navbar"

export default function About(){
    return(
        <div>
            <Navbar></Navbar>
                <div className="items-center justify-items-center min-h-screen p-4 sm:px-38 pb-20 gap-16">
                <h1 className="font-semibold font-serif text-xl text-default-black py-2">Contact Us</h1>
                <p className="py-2">We are always looking to improve Kelvi! If you notice any errors or have any suggestions for how Kelvi could be made more useful, we’d love to hear from you.</p>
                <iframe className="py-4" src="https://docs.google.com/forms/d/e/1FAIpQLSeRux6di2mWrHpxImJmFDrqVcAkMKQ8smFfjBAKRpa40F_4yw/viewform?embedded=true" width="100%" height="1159">Loading…</iframe>
            </div>
        </div>
    )
}
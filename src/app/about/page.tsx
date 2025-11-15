import Image from 'next/image'

import biosJson from '../../../public/data/team_bios.json'
import Navbar from "../components/Navbar/Navbar"

export default function About() {
    return (
        <div>
            <Navbar></Navbar>
            <main className="items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20">
                <h1>About</h1>
                <p>Kelvi (Tamil: கேள்வி) is the passion project of linguist-developers Shankhalika Srikanth and Sabrina Yu. After several years of contributing to community-led language revitalization initiatives together, in 2024 we had the idea of creating a Tamil dictionary specifically geared at helping language learners. Tamil words can get very large, but dictionaries will only carry the “stem” or “root word” form of these words. If you’re not already somewhat familiar with the language, finding the “dictionary-form” of a long Tamil word can feel impossible. Kelvi was designed to 1) provide an easy way for learners to find the “dictionary-form” of any word, and 2) use everyday language to explain what all the complicated-looking suffixes that form the rest of the word mean, so that learners can start to recognize the patterns that go into forming Tamil words themselves. The ultimate goal of Kelvi is to empower learners, and the hope is that teachers and students alike will find it a useful tool.</p>
                <p>Kelvi was made possible through the generous support of the Audrey Wearn Language Prize, the Future Design School, and the contributors listed below. Our sincere thanks as well to everyone who took the time to user test Kelvi while it was in development.</p>
                <p>Kelvi is an open-source software, and you can find the source code for the website<a href="url">here</a></p>
                <h1>The Team</h1>
                <div className="grid sm:grid-cols-2 gap-8 grid-cols-1">
                    {biosJson.map((person) => {
                        return(
                            <Bio {...person} key={person.name}/>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}


//How to include img from gdrive: https://www.youtube.com/watch?v=46UcUHmIY2w
//Circle border: https://stackoverflow.com/questions/76991532/how-do-make-a-image-circle-using-next-js-image-component-using-next-js-13
//Image as circle: https://dev.to/shawon/creating-perfect-rounded-images-in-nextjs-using-tailwind-css-24ac
function Bio(data){
    const altText = "Picture of " + data.name;
    const pronouns = (data.pronouns) ? ", (" + data.pronouns + ")" : ""
    const description = (data.description) ? data.description : ""
    return (
        <div>
            <div className="grid grid-cols-1 justify-items-center">
                <div className="overflow-hidden border border-gray-300 p-1 rounded-[50%] aspect-square inline-block">
                    <Image height={125} width={125} src={data.img} alt={altText} className="rounded-full aspect-square object-cover"/>
                </div>
                <h2>{data.name}{pronouns}</h2>

                <p>{data.role}</p>
                <a href={data.website}>Link</a>
                <p>{description}</p>
                
            </div>            
        </div>
    )
}
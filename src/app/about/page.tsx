import Navbar from "../components/Navbar/Navbar"

export default function About() {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <h1>Hi! Vanakkam! வணக்கம்!</h1>
                
                <p>Kelvi (Tamil: கேள்வி) is the passion project of linguist-developers Shankhalika Srikanth and Sabrina Yu. After several years of contributing to community-led language revitalization initiatives together, in 2024 we had the idea of creating a Tamil dictionary specifically geared at helping language learners. Tamil words can get very large, but dictionaries will only carry the “stem” or “root word” form of these words. If you’re not already somewhat familiar with the language, finding the “dictionary-form” of a long Tamil word can feel impossible. Kelvi was designed to 1) provide an easy way for learners to find the “dictionary-form” of any word, and 2) use everyday language to explain what all the complicated-looking suffixes that form the rest of the word mean, so that learners can start to recognize the patterns that go into forming Tamil words themselves. The ultimate goal of Kelvi is to empower learners, and the hope is that teachers and students alike will find it a useful tool.</p>
            </main>
        </div>
    )
}
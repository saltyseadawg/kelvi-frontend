'use client';

export default function Word({data}) {
    if (!data.user_input){
        return <></>
    }
    else{
        return (
        <div>
            <h2>{data.root.tamil}</h2>
            <h1>{data.user_input}</h1>
            <p>{data.root_definition?.definitions.join(', ')}</p>
        </div>
        )
    }
}
// function MorphologyTable(){
//     return(
//     )
// }

interface iMorpheme{
    morpheme: string
    definition: string
}
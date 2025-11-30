'use client';

import styles from './WordPage.module.css'


export default function WordPage({data}) {

    if (data.detail){
        return (
          <h2 className="font-sans">Word not found (இ﹏இ`｡)</h2>
        )
    } else if (!data.user_input){

    }
    else {
        return (
        <div className={styles.wordpage}>
            <h1 className="pt-2 text-xl text-default-black font-sans-tamil">{data.user_input}</h1>
            <h1 className="pb-4 text-xl text-default-black font-sans">{data.romanization}</h1>
            <hr></hr>
            <Gloss data={data}/>
            <hr></hr>
            <h2 className="indent-2 min-h-0 pt-4 pb-2 text-lg text-default-black font-sans-tamil">{data.root.tamil}</h2>
            <ListDefinitions items={data.root_definition}/>
        </div>
        )
    }
}

function ListDefinitions({ items }) {
  return (
    <ol className="list-decimal list-inside space-y-2 text-balance min-h-0 text-base text-default-black font-sans">
      {items.map((entry, index) => (
        <li key={index} className="pb-2 flex-auto">
          {entry.definitions?.length
            ? entry.definitions.join(", ")
            : "No definition available"}
        </li>
      ))}
    </ol>
  );
}

function Gloss({ data }){
  if (data.user_input === data.root.tamil){
    return (
      <></>
    )
  } else {
    return(
    <table className="table-auto border-collapse">
      <tbody className="text-lg font-normal">
        <tr className="justify-start font-sans-tamil">
          <th className="font-bold bg-pale-orange">{data.root.tamil}</th>
          <th className="font-bold w-[2rem]">+</th>
          <th className="font-bold bg-pale-orange">{data.suffixal_material.text}</th>
        </tr>
        <tr className="font-sans">
          <th className="bg-pale-orange">{data.root.romanization}</th>
          <th></th>
          <th className="font-bold bg-pale-orange">{data.suffixal_material.romanization}</th>
        </tr>
        <tr className="font-sans">
          <th className="bg-pale-orange"></th>
          <th></th>
          <th className="bg-pale-orange">{data.suffixal_material.gloss}</th>
        </tr>
      </tbody>
    </table>
  );
  }
  
}
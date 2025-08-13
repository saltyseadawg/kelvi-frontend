'use client';

import React from "react";
import styles from './WordPage.module.css'


export default function WordPage({data}) {
    const [isVisible, setVisible] = React.useState();

    function toggle(){
      setVisible(!isVisible);
    }

    if (!data.user_input){
        return <></>
    }
    else{
        return (
        <div className={styles.wordpage}>
            <h1>{data.user_input}</h1>
              <div id="headword">
                <h2>{data.root.tamil}</h2>
                <ListDefinitions items={data.root_definition}/>
              </div>
        </div>
        )
    }
}

function ListDefinitions({ items }) {
  return (
    <ol className="list-decimal list-inside space-y-2">
      {items.map((entry, index) => (
        <li key={index}>
          {entry.definitions?.length
            ? entry.definitions.join(", ")
            : "No definition available"}
        </li>
      ))}
    </ol>
  );
}
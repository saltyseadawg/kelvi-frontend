'use client';

export default function WordPage({data}) {
    if (!data.user_input){
        return <></>
    }
    else{
        return (
        <div>
            <h2>{data.user_input}</h2>
            <div>
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

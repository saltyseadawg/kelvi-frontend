'use client';

export default function WordPage({ data }) {
  if (data.detail) {
    return (
      <h2 className="font-sans">Word not found (இ﹏இ`｡)</h2>
    )
  } else if (!data.user_input) {

  }
  else {
    const input_roman = data.romanization
      ? `(${data.romanization})`
      : "";

    const root_roman = data.root?.romanization
      ? `(${data.root.romanization})`
      : "";
    return (
      <div>
        <h1 className="pt-2 text-xl text-default-black font-sans-tamil">{data.user_input}</h1>
        <h1 className="pb-4 text-xl text-default-black font-sans">{input_roman}</h1>
        <hr></hr>
        <Romanization data={data} />
        <hr></hr>
        <h2 className="min-h-0 pt-4 pb-2 text-lg text-default-black font-sans-tamil">
          {data.root.tamil} {root_roman}
        </h2>
        <ListRootDefinitions items={data.root_definition} />
        <Gloss data={data} />
      </div>
    )
  }
}

function ListRootDefinitions({ items }) {

  return (
    <ol className="ml-[1em] list-decimal list-inside space-y-2 text-balance min-h-0 text-base text-default-black font-sans">
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

function Romanization({ data }) {
  if (data.user_input === data.root.tamil) {
    return (
      <></>
    )
  } else {
    return (
      <table className="table-auto border-collapse">
        <tbody className="text-lg font-normal">
          <tr className="justify-start font-sans-tamil">
            <th className="font-bold bg-pale-orange">{data.root.tamil}</th>
            <th className="font-bold w-[2rem]">+</th>
            <th className="font-bold bg-pale-orange">  {data.suffixal_material?.display ?? ""}</th>
          </tr>
          <tr className="font-sans">
            <th className="bg-pale-orange">{data.root.romanization}</th>
            <th></th>
            <th className="font-bold bg-pale-orange">{data.suffixal_material?.romanization ?? ""}</th>
          </tr>
        </tbody>
      </table>
    );
  }

}

function ListGlosses({ data }) {
  return (
    <ol className="ml-[1em] list-decimal list-inside space-y-2 text-balance min-h-0 text-base text-default-black font-sans">
      {data?.length ? (
        data.map((definition, index) => (
          <li key={index} className="pb-2">
            {definition}
          </li>
        ))
      ) : (
        <li>No definition available</li>
      )}
    </ol>
  );
}


function Gloss({ data }) {
  if (!data.suffixal_material){
    return(
      <></>
    )
  } else {
    const gloss_roman = data.suffixal_material?.romanization
      ? `(${data.suffixal_material.romanization})`
      : "";
    return (
    <div id="gloss">
      <h2 className="min-h-0 pt-4 pb-2 text-lg text-default-black font-sans-tamil">
        {data.suffixal_material.display} {gloss_roman}
      </h2>
      <ListGlosses data={data.suffixal_material.gloss}/>
    </div>
  );
  }
  
}
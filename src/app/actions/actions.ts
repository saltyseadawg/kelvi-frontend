"use server";

export async function submitSearch(previousState: string, formData: FormData){
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const query = formData.get("query") as string
    console.log(query)
    const response = await fetch(
        `http://127.0.0.1:8000/word/${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const result = await response.json()
    console.log(result)
    return result
}
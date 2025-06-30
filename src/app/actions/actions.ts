"use server";

export async function submitSearch(previousState: string, formData: FormData){
    const query = formData.get("query") as string
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
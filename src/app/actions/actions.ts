"use server";

export async function submitSearch(previousState: string, formData: FormData){
    const query = formData.get("user_input") as string
    
    const response = await fetch(
        //change to `http://localhost:8000/word/${query}` if backend isn't a container
        `http://${process.env.BACKEND_SERVICE}:${process.env.INTERNAL_PORT}/word/${query}`, {
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
const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/'
const token = process.env.API_TOKEN

export async function kpFetch(path: string) {
    if (!token) {
        throw new Error("API_TOKEN is not defined");
    }   
    const data = await fetch(`${url}${path}`,{
        method: 'GET',
        headers: {
            "X-API-KEY": token,
            "Content-Type": "application/json",
        }
    })
    if(!(data.ok)){
        return false
    }
    return data.json()
}
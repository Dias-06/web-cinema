
const token = process.env.API_TOKEN

export async function kpFetch(path: string,apiVersion = "v2.2") {
    if (!token) {
        throw new Error("API_TOKEN is not defined");
    }
    const url = `https://kinopoiskapiunofficial.tech/api/${apiVersion}/`
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

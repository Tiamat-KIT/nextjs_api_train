
type Person = {
    json: any
    name : string
}

export default async function Page(){
    const res = await fetch("https://localhost:3000/api/user")
    const data : Person = await res.json()
    return (
        <>
            <p>{data.json.name}</p>
        </>
    )
}
// https://opencodetrackerback.onrender.com/

export async function getAllPosts(){
    const response = await fetch('https://opencodetrackerback.onrender.com/api')
    const data = await response.json()

    return data
}


export async function searchPosts(fragment){
    const response = await fetch(`https://opencodetrackerback.onrender.com/api/${fragment}`)
    const data = await response.json()

    return data
}

export async function searchTrendings(){
    const response = await fetch(`https://opencodetrackerback.onrender.com/api/views/trending`)
    const data = await response.json()

    return data
}

export async function searchTechnology(name){
    const response = await fetch(`https://opencodetrackerback.onrender.com/api/category/search/${name}`)
    const data = await response.json()

    return data
}

export async function searchTitle(title){
    const response = await fetch(`https://opencodetrackerback.onrender.com/api/title/${title}`)
    const data = await response.json()

    return data
}




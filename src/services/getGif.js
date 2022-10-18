
const getGifs = (search) =>{

    const URL =`https://api.giphy.com/v1/gifs/search?api_key=zqIAta0tI3xnT63BqfCRC90on6dF2fg8&q=${search}&limit=25&offset=0&rating=g&lang=en` ;

    return fetch(URL)
    .then(response => response.json())
    .then(response => {
      const data = response.data;
      const images = data.map(item => item.images.original.url)
      return images
    })
}


export default getGifs;
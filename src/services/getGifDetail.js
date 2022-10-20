import axios from "axios";

const getGifDetail = async (id, response) =>{
    const request = await axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=zqIAta0tI3xnT63BqfCRC90on6dF2fg8`);
    response(request.data.data);
}


export default getGifDetail;
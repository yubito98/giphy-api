import React, {useEffect, useState} from 'react';
import getGifDetail from '../../services/getGifDetail';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const GifDetail = () => {

  const params = useParams()
  const [gifDetail, setGifDetail] = useState(null);

  useEffect(()=>{
    getGifDetail(params.id, setGifDetail);
    console.log(gifDetail)
  },[])


  

  return (
    <div className="gifDetail">
      {gifDetail != null ? (
      <div className='row' >
        <a href='/' className="btn btn-primary mb-4 ">Go Back</a>
        <div className='col-4' >
          <img  src={gifDetail.images.original.url} />
        </div>
        <div className='col-8' >
          <ul>
            <li>{gifDetail.title}</li>
          </ul>
        </div>
      </div>
      ): "Loading..."}
    </div>
  );
}

export default GifDetail;
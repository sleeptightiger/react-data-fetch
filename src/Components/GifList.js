import React from 'react';
import Gif from './Gif';

const GifList = props => {
  let gifs = props.data.map(gif => {
    // console.log(gif.id);
    return <Gif src={gif.images.fixed_height_still.url} key={gif.id}/>
  })
  return(
    <ul className="gif-list">
      {gifs}
    </ul>
  );
}

export default GifList;

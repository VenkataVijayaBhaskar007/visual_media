import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const images = [
    {
        original: "./images/slidergallery/1.png",
        thumbnail: "./images/slidergallery/1.png",
      },
      {
        original: "./images/slidergallery/2.png",
        thumbnail: "./images/slidergallery/2.png",
      },
      {
        original: "./images/slidergallery/3.png",
        thumbnail: "./images/slidergallery/3.png",
      },
  {
    original: "/images/slidergallery/4.png",
    thumbnail: "/images/slidergallery/4.png",
  },
 
  {
    original: "./images/slidergallery/5.png",
    thumbnail: "./images/slidergallery/5.png",
  },
  {
    original: "./images/slidergallery/6.png",
    thumbnail: "./images/slidergallery/6.png",
  },
  {
    original: "./images/slidergallery/1.png",
    thumbnail: "./images/slidergallery/1.png",
  },
  {
    original: "./images/slidergallery/2.png",
    thumbnail: "./images/slidergallery/2.png",
  },
  {
    original: "./images/slidergallery/3.png",
    thumbnail: "./images/slidergallery/3.png",
  },
];

class MyGallery extends React.Component {
    render() {
      return <ImageGallery items={images} />;
    }
  }
  
  export default MyGallery;
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const images = [
    {
        original: "https://placekitten.com/1000/600",
        thumbnail: "https://placekitten.com/250/150",
      },
      {
        original: "https://placekitten.com/1000/600",
        thumbnail: "https://placekitten.com/250/150",
      },
      {
        original: "https://placekitten.com/1000/600",
        thumbnail: "https://placekitten.com/250/150",
      },
  {
    original: "https://via.placeholder.com/1000x600",
    thumbnail: "https://via.placeholder.com/250x150",
  },
 
  {
    original: "https://placekitten.com/1000/600",
    thumbnail: "https://placekitten.com/250/150",
  },
  {
    original: "https://placekitten.com/1000/600",
    thumbnail: "https://placekitten.com/250/150",
  },
  {
    original: "https://placekitten.com/1000/600",
    thumbnail: "https://placekitten.com/250/150",
  },
  {
    original: "https://placekitten.com/1000/600",
    thumbnail: "https://placekitten.com/250/150",
  },
  {
    original: "https://placekitten.com/1000/600",
    thumbnail: "https://placekitten.com/250/150",
  },
];

class MyGallery extends React.Component {
    render() {
      return <ImageGallery items={images} />;
    }
  }
  
  export default MyGallery;
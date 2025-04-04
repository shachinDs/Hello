import React from 'react'
import {useState} from "react";



// Array of image URLs (replace with your own image URLs)
const images = [
    "collage.jpg",
    "me.jpg",
    "ig.png",
    
];

const SlideViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={styles.container}>
      <button onClick={goToPrevious} style={styles.button}>
        Previous
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={styles.image}
        />
      <button onClick={goToNext} style={styles.button}>
        Next
      </button>
    </div>
  );
};

// Basic styles for the slide viewer
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  image: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "0 20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default SlideViewer;
import React, { useState, useEffect } from "react";

import ImageCard from "./components/imageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const apiKey = process.env.REACT_APP_PIXELBAY_API_KEY;
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true&category=nature`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto">Loading...</h1>
        ) : (
          images.map((image) => <ImageCard key={image.id} image={image} />)
        )}
      </div>
    </div>
  );
}

export default App;

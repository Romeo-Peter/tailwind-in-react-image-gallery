import React, { Fragment, useState, useEffect } from "react";

import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const apiKey = process.env.REACT_APP_PIXELBAY_API_KEY;
  // eslint-disable-next-line
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true&category=nature`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <Fragment>
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">No image found</h1>
        )}

        {!window.navigator.onLine ? (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No internet connection!
          </h1>
        ) : isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default App;

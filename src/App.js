import React, { useState, useEffect } from "react";
import { ApiUrl, apiKey } from "./config";
import ImageCard from "./components/ImageCard";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(async () => {
    try {
      const response = await fetch(
        `${ApiUrl}/?key=${apiKey}&q=yellow+flowers&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setImages(data.hits);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="container-2xl px-2 ">
      <div className="grid grid-cols-4 gap-10">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;

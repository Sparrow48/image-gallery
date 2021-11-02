import React, { useState, useEffect } from "react";
import { ApiUrl, apiKey } from "./config";
import ImageCard from "./components/ImageCard";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(async () => {
    try {
      console.log(process.env);
      const response = await fetch(
        `${ApiUrl}/?key=${apiKey}&q=yellow+flowers&image_type=photo&pretty=true`
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {/* {images.map((image) => {
          <ImageCard key={image.id} image={image} />;
        })} */}
      </div>
    </div>
  );
}

export default App;

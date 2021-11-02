import React, { useState, useEffect } from "react";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = true;
  const [term, setTerm] = "";

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_API_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    ).then((res) => {
      setImages(data.hits);
      setIsLoading(false);
    });
  }, []);

  return <div></div>;
}

export default App;

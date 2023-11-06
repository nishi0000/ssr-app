import React, { useEffect, useState } from 'react';
import "./header.css";

export const Header = () => {
  const [src, setSrc] = useState<string>(''); 
  const [style, setStyle] = useState<string>(''); 

  useEffect(() => {
    setSrc('/images/profile.jpg'); // クライアント側のURL
    setStyle('/images/background.jpg')
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${style})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
          backgroundPosition: `center`,
     }}
      ><div className="header-container">
        <img className="header-profile-image" src={`${src}`}></img>
        <h2 className="header-username">Nishimura</h2>
        </div>
      </div>
    </>
  );
};
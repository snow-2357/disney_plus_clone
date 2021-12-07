import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Movie({ number }) {
  const url = `https://api.tvmaze.com/shows/${number}`;
  const [imgSrc, setImgSrc] = useState("");

  const dataFetch = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImgSrc(data.image.original);
      });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  console.log(imgSrc);

  if (!imgSrc) {
    return <></>;
  }
  return (
      <Wrap>
         <a href="details"><img src={imgSrc} alt="" /></a>
      </Wrap>
  );
}

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transition: all 50ms cubic-bezier(0.17, 0.67, 0.3, 0.83);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1);
    border-color: rgba(249, 249, 249, 0.6);
    box-shadow: rgb(249, 249, 249, 0.1) 0px 20px 30px -10px;
  }
`;

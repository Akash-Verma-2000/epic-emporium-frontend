// Import necessary modules and images
import "./CategoryBlock.css";
import menCatImg from "../../images/menCatImg.jpg";
import menCatImgFade from "../../images/menCatImgFade.jpg";
import womCatImg from "../../images/womCatImg.jpg";
import womCatImgFade from "../../images/womCatImgFad.jpg";
import accCatImg from "../../images/accCatImg.jpg";
import accCatImgFade from "../../images/accCatImgFade.jpg";
import jelCatImg from "../../images/jelCatImg.jpg";
import jelCatImgFade from "../../images/jelCatImgFade.jpg";
import eleCatImg from "../../images/eleCatImg.jpg";
import eleCatImgFade from "../../images/eleCatImgFade.jpg";
import kidCatImg from "../../images/kidCatImg.jpg";
import kidCatImgFade from "../../images/kidCatImgFade.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

// Component for displaying category block
export default function CategoryBlock() {
  const [menImg, setMenImg] = useState(false);
  const [womImg, setWomImg] = useState(false);
  const [kidImg, setKidImg] = useState(false);
  const [accImg, setAccImg] = useState(false);
  const [jelImg, setJelImg] = useState(false);
  const [eleImg, setEleImg] = useState(false);

  return (
    <>
      <div className="container">
        <h2 className="text-primary mt-5 text-center">
          Browse Our Collections
        </h2>
        <hr />
        <div className="row mb-4 mt-5">
          <div
            className="col-4"
            onMouseEnter={() => {
              setMenImg(true);
            }}
            onMouseLeave={() => {
              setMenImg(false);
            }}
          >
            <Link to={"/category/men"}>
              {!menImg ? (
                <img
                  className="img-fluid my-shadow "
                  src={menCatImgFade}
                  alt="menCatImageFade"
                />
              ) : (
                <img
                  className="img-fluid my-shadow "
                  src={menCatImg}
                  alt="menCatImageFade"
                />
              )}
            </Link>
          </div>

          <div
            className="col-4"
            onMouseEnter={() => {
              setWomImg(true);
            }}
            onMouseLeave={() => {
              setWomImg(false);
            }}
          >
            <Link to={"/category/woman"}>
              {!womImg ? (
                <img
                  className="img-fluid my-shadow "
                  src={womCatImgFade}
                  alt="womCatImgFade"
                />
              ) : (
                <img
                  className="img-fluid my-shadow "
                  src={womCatImg}
                  alt="womCatImgFade"
                />
              )}
            </Link>
          </div>
          <div
            className="col-4"
            onMouseEnter={() => {
              setKidImg(true);
            }}
            onMouseLeave={() => {
              setKidImg(false);
            }}
          >
            <Link to={"/category/kids"}>
              {!kidImg ? (
                <img
                  className="img-fluid my-shadow "
                  src={kidCatImgFade}
                  alt="kidCatImgFade"
                />
              ) : (
                <img
                  className="img-fluid my-shadow "
                  src={kidCatImg}
                  alt="kidCatImgFade"
                />
              )}
            </Link>
          </div>
        </div>
        <div className="row">
          <div
            className="col-4"
            onMouseEnter={() => {
              setAccImg(true);
            }}
            onMouseLeave={() => {
              setAccImg(false);
            }}
          >
            <Link to={"/category/accessories"}>
              {!accImg ? (
                <img
                  className="img-fluid my-shadow "
                  src={accCatImgFade}
                  alt="accCatImgFade"
                />
              ) : (
                <img
                  className="img-fluid my-shadow "
                  src={accCatImg}
                  alt="accCatImgFade"
                />
              )}
            </Link>
          </div>
          <div
            className="col-4"
            onMouseEnter={() => {
              setEleImg(true);
            }}
            onMouseLeave={() => {
              setEleImg(false);
            }}
          >
            <Link to={"/category/electronics"}>
              {!eleImg ? (
                <img
                  className="img-fluid my-shadow "
                  src={eleCatImgFade}
                  alt="eleCatImgFade"
                />
              ) : (
                <img
                  className="img-fluid my-shadow "
                  src={eleCatImg}
                  alt="eleCatImgFade"
                />
              )}
            </Link>
          </div>
          <div
            className="col-4"
            onMouseEnter={() => {
              setJelImg(true);
            }}
            onMouseLeave={() => {
              setJelImg(false);
            }}
          >
            <Link to={"/category/jewelery"}>
              {!jelImg ? (
                <img
                  className="img-fluid my-shadow "
                  src={jelCatImgFade}
                  alt="jelCatImgFade"
                />
              ) : (
                <img
                  className="img-fluid my-shadow "
                  src={jelCatImg}
                  alt="jelCatImgFade"
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

"use client"; // Agrega esta línea en la parte superior del archivo

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "react-awesome-reveal";

export default function contacto() {
  const [color, setColor] = useState(false);
  const [images, setImages] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setImages(["/cartaRecomendacion1.png", "/cartaRecomendacion2.png"]);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const opacity = Math.min(1, Math.max(0, scrollPosition / 100));

  return (
    <div>
      <div className="">
        <div>
          <div className={color ? styles.navbarScroll : styles.navbar}>
            <Link href="/perfil">
              <>
                <div className={styles.briefCaseIcon}>
                  <b>Luis Ernesto Romero</b>
                </div>
              </>
            </Link>
            <>
              <div className={styles.navbarlist}>
                <a href="/perfil" className={styles.navbarlisttag}>
                  Perfil
                </a>
                <Link href="/contacto" className={styles.navbarlisttag}>
                  Contacto
                </Link>
              </div>
            </>
          </div>
        </div>
      </div>
      <div className={styles.contacto}>
        <Slide direction="left">
          <h1>Contacto</h1>
        </Slide>
        <p>Celular: +504 93181208</p>
        <p>Email: espiromero2397@gmail.com</p>
        <p>Dirección: La Lima, Cortes, Honduras</p>
        <div className={styles.SliderContacto}>
          <h2>Cartas de recomendación</h2>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  className={styles.imageSliderContacto}
                  alt={`Imagen ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.Contactoparte}>
        Diseñado por: Luis Ernesto Romero
      </div>
    </div>
  );
}

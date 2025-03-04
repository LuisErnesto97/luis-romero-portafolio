"use client"; // Agrega esta línea en la parte superior del archivo
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import Head from "next/head";
import sombrero from "/app/sombrero.png";
import certificado from "../certificado.png";
import shape from "/app/shape.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "react-awesome-reveal";

export default function Home() {
  const [images, setImages] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [experiencia, setExperiencia] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [color, setColor] = useState(false);

  useEffect(() => {
    setImages([
      "/Titulo Bachillerato.png",
      "/TOEIC.png",
      "/Habilidades Blandas.png",
      "/Marketing.png",
    ]);
    setProyectos([
      "/photo1.JPG",
      "/Photo2.jpg",
      "/Photo3.jpg",
      "/Photo4.jpg",
      "/Photo5.jpg",
      "/Photo6.jpg",
    ]);
    setExperiencia([
      "/experiencia1.jpg",
      "/experiencia8.jpeg",
      "/experiencia3.JPG",
      "/experiencia4.JPG",
      "/experiencia5.JPG",
      "/experiencia6.JPG",
      "/experiencia7.jpg",
      "/experiencia2.jpg",
    ]);
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
      <div className={styles.primeraparte}>
        <div className="">
          <Slide direction="left">
            <h1 className={styles.luisromero}>Luis Ernesto Romero </h1>
          </Slide>
          <Slide direction="left">
            <h2>Licenciatura en Administración de Empresas</h2>
          </Slide>
          <Slide direction="left">
            <p className={styles.acerdemi}>
              Soy apasionado por las tecnologías de la información y el análisis
              financiero. Soy una persona creativa, comunicativa e innovadora.
              Mi objetivo es seguir creciendo en el campo administrativo,
              aprender continuamente y contribuir al éxito de una empresa con mi
              experiencia y habilidades.
            </p>
          </Slide>
        </div>
        <div className="profileDesign">
          <div className={styles.backgrounProfileImage}></div>
        </div>
        <div className={styles.shape}>
          <Image src={shape} width={500} height={450} alt="" />
        </div>
      </div>
      <div className={styles.segundaparte}>
        <Slide direction="left">
          {" "}
          <h1 className={styles.segundapartetitulo}>Formación Academica</h1>
        </Slide>
        <div className={styles.grupotitulo}>
          <Slide direction="left">
            <div>
              <div className={styles.universidad}>
                <b>Universidad San Marcos (USAM)</b>
                <p>
                  Licenciatura en Administración de Empresas con énfasis en
                  gerencia
                </p>
                <p>2023 - 2025</p>
              </div>
              <div className={styles.universidad}>
                <b>Universidad Latina de Costa Rica</b>
                <p>Bachillerato en Administración de Empresas</p>
                <p>2021 - 2023</p>
              </div>
              <div className={styles.universidad}>
                <b>Instituto Cristiano Bilingue Sunshine</b>
                <p>Bachillerato en Ciencias y Humanidades</p>
                <p>2009 - 2014</p>
              </div>
            </div>
          </Slide>
          <div>
            <Slide direction="right">
              <div className={styles.sombrero}>
                <Image
                  src={sombrero}
                  width={150}
                  height={120}
                  alt=""
                  className={styles.sombreron}
                />
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className={styles.terceraparte}>
        <Slide direction="left">
          <h1 className={styles.segundapartetitulo}>Certificados</h1>
        </Slide>
        <div className={styles.grupotitulo}>
          <Slide direction="left">
            <div>
              <div className={styles.universidad}>
                <b>TOEIC</b>
                <p>Centro Cultural Costarricense Norteamericanos</p>
                <p>Mayo 2023</p>
              </div>
              <div className={styles.universidad}>
                <b>Habilidades Blandas</b>
                <p>Transformación Costa Rica y Maxwell Leadership Foundation</p>
                <p>Octubre 2022</p>
              </div>
              <div className={styles.universidad}>
                <b>Fundamentos de Marketing Digital</b>
                <p>Google Activate</p>
                <p>Septiembre 2021</p>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div>
              <div className={styles.certifadoBackground}>
                <Image
                  src={certificado}
                  width={150}
                  height={150}
                  alt=""
                  className={styles.certificado}
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <div className={styles.cuartaparte}>
        <Slide direction="left">
          <div id="galeriaContacto">
            <h1>Galeria de Fotos</h1>
          </div>
        </Slide>
        <Slider {...settings} className={styles.sliderImageContacto}>
          {images.map((image, index) => (
            <div key={index} className={styles.carouselcontactoimage}>
              <img
                src={image}
                className={styles.imageTituloContacto}
                alt={`Imagen ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.quintaparte}>
        <Slide direction="left">
          <h1 className={styles.segundapartetitulo}>Proyectos</h1>
        </Slide>
        <br></br>
        <div className={styles.grupotitulo}>
          <Slide direction="left">
            <div className={styles.universidadParte}>
              <b>Centro de Educación Especial Santa Ana (CEESA)</b>
              <p>sept.2022 - dic.2022</p>
              <br></br>
              <p className={styles.tituloUniversidad}>
                Fue un trabajo comunal obligatorio de 180 horas para obtener mi
                título de Bachillerato en Administración de Empresas. Tuve la
                oportunidad de realizar este proyecto en un Centro de Educación
                Especial ubicado en Santa Ana, Costa Rica. El objetivo durante
                este proyecto fue capacitar a estudiantes de tercer ciclo sobre
                la importante de las habilidades blandas. Haber realizado este
                trabajo fue una gran experiencia en mi vida ya que pude poner en
                practica habilidades muy importantes en la vida.
              </p>
            </div>
          </Slide>
          <div className={styles.proyectoSlider}>
            <Slider {...settings}>
              {proyectos.map((proyecto, index) => (
                <div key={index}>
                  <img
                    src={proyecto}
                    className={styles.imageTituloContacto}
                    alt={`Imagen ${index + 1}`}
                    width={450}
                    height={400}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className={styles.sextaparte}>
        <Slide direction="left">
          <h1 className={styles.segundapartetitulo}>Experiencia</h1>
        </Slide>
        <br></br>
        <div className={styles.grupotitulo}>
          <div className={styles.universidadParte}>
            <b>Super 83 M</b>
            <p>Administrador general</p>
            <p>oct.2023 - ene.2025</p>
            <br></br>
            <Slide direction="left">
              <div className={styles.tituloUniversidad}>
                <li>
                  Manejo de transacciones en efectivo y con tarjetas, asegurando
                  precisión en los procesos de cobro y devoluciones.
                </li>
                <li>Pago de facturas a proveedores.</li>
                <li>
                  Verificación y actualización de precios de los productos al
                  momento de su ingreso, asegurando la correcta rotulación y
                  cumplimiento de políticas comerciales.
                </li>
                <li>
                  Gestión de pedidos con agentes de ventas, optimizando el
                  abastecimiento de inventario según la demanda del negocio.
                </li>
                <li>
                  Coordinación y distribución de tareas diarias entre los
                  colaboradores, asegurando el cumplimiento eficiente de las
                  actividades del supermercado.
                </li>
                <li>
                  Realización del cierre diario de la caja registradora,
                  verificando balances y generando reportes de ingresos y
                  egresos.
                </li>
              </div>
            </Slide>
          </div>
          <div className={styles.proyectoSlider}>
            <Slider {...settings}>
              {experiencia.map((experiencia, index) => (
                <div key={index}>
                  <img
                    src={experiencia}
                    className={styles.imageTituloContacto}
                    alt={`Imagen ${index + 1}`}
                    width={450}
                    height={450}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className={styles.septimaParte}>
        <div className={styles.blandas}>
          <Slide direction="left">
            <h2>Habilidades Blandas</h2>
          </Slide>
          <li>Creatividad</li>
          <li>Liderazgo</li>
          <li>Empatía</li>
          <li>Trabajo en equipo</li>
          <li>Comunicación</li>
          <img
            src="/puzzle.png"
            width={250}
            height={200}
            className={styles.puzzle}
          />
        </div>

        <div className={styles.duras}>
          <Slide direction="right">
            <h2>Habilidades duras</h2>
          </Slide>
          <b>Contabilidad</b>
          <li>Balance general</li>
          <li>Estado de resultados</li>
          <li>Estado de utilidades retenidas</li>
          <li>Estado de flujo de efectivo</li>
          <li>Estado de cambios en el patrimonio</li>
          <li>Estado de costo de producción</li>
          <li>KPI's financiero</li>
          <b>Software y herramientas digitales</b>
          <li>Planificación de Recursos Empresariales (ERP) - Odoo</li>
          <li>
            {" "}
            Microsoft Office: Word, PowerPoint, Teams, Outlook, OneDrive, Excel
            (Tablas pivote, gráficos pivote, segmentación de datos)
          </li>
          <li> Gestión de software de proyectos - Trello</li>
          <li>Google Workspace</li>
          <li>Cloud Firestore</li>
          <li>Google Firebase</li>
          <li>Power BI</li>
          <li>Lenguajes de programación (HTML, CSS, Javascript)</li>
          <img
            src="/bulb.png"
            width={230}
            height={200}
            className={styles.puzzle}
          />
        </div>
      </div>

      <div className={styles.octavaparte}>
        Diseñado por: Luis Ernesto Romero
      </div>
    </div>
  );
}

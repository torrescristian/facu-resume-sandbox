import Image from "next/image";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Title from "../components/Shared/Title";


export default function About() {
  return (
    <>
      <Header />

      <div id="hero">
        <div className="contenedor" />
        <div className="carta">
          <div>
            <Image
              className="perfil"
              src="/img/perfil3.jpg"
              alt="/img/perfil3.jpg"
              width={100}
              height={100}
            />
          </div>
          <div className="texto">
            <hr />
            <h2>
              Walter Facundo <br />
              Salvatierra
            </h2>
            <br />
            <h3>Desarrollador Full-Stack</h3>
            <br />
            <hr />
            <br />
            <p>Estudiante de Desarrollo web y aplicaciones moviles</p>
          </div>
        </div>
        <div>
          <hr />
          <h2 className="trabajo">
            En busca de
            <br />
            mi primer
            <br />
            trabajo IT
          </h2>
        </div>
      </div>

      <a href="#top" className="irarriba">
        <i className="fa-solid fa-angle-up"></i>
      </a>

      <Projects />

      <section id="habilidades">
        <Title>Habilidades</Title>
        <div className="contenedor">
          <div className="carta">
            <div>
              <Image
                src="/img/html5-svgrepo-com.svg"
                alt="5-svgrepo-com.svg"
                width={100}
                height={100}
              />
              <h2>HTML5</h2>
            </div>
            <div>
              <Image
                src="/img/css3-svgrepo-com.svg"
                alt="-svgrepo-com.svg"
                width={100}
                height={100}
              />
              <h2>CSS</h2>
            </div>
          </div>
          <div className="carta">
            <div>
              <Image
                src="/img/git-svgrepo-com.svg"
                alt="svgrepo-com.svg"
                width={100}
                height={100}
              />
              <h2>Git/GitHub</h2>
            </div>
            <div>
              <Image
                src="/img/javascript-svgrepo-com.svg"
                alt="script-svgrepo-com.svg"
                width={100}
                height={100}
              />
              <h2>JavaScript</h2>
            </div>
          </div>
          <div className="carta">
            <div>
              <Image
                src="/img/bootstrap-svgrepo-com.svg"
                alt="strap-svgrepo-com.svg"
                width={100}
                height={100}
              />
              <h2>Bootstrap</h2>
            </div>
            <div>
              <Image
                src="/img/mysql-svgrepo-com.svg"
                alt="l-svgrepo-com.svg"
                width={100}
                height={100}
              />
              <h2>MySQL</h2>
            </div>
          </div>
          <div className="carta">
            <div>
              <Image
                src="/img/python.png"
                alt="on.png"
                width={100}
                height={100}
              />
              <h2>Python</h2>
            </div>
            <div>
              <Image
                src="/img/flask.svg"
                alt="k.svg"
                width={100}
                height={100}
              />
              <h2>Flask</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Title from "../Shared/Title";

export default function Projects() {
  return (
    <section id="proyectos">
      <Title>Proyectos</Title>
      <div className="contenedor">
        <div className="carta">
          <div className="slider">
            <ul>
              <li>
                <Image
                  className="imagen-proyect"
                  src="/img/lista-de-tareas-1.png"
                  alt="/img/lista-de-tareas-1.png"
                  width={100}
                  height={100}
                />
              </li>
              <li>
                <Image
                  className="imagen-proyect"
                  src="/img/lista-de-tareas-2.png"
                  alt="/img/lista-de-tareas-2.png"
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
          <div>
            <h2>Task List</h2>
          </div>
          <div>
            <p>Activad hecha en el curso Argentina Programa</p>
          </div>
          <form
            action="https://github.com/FacKuSalvatierra/Task-List-ARGENTINAPROGRAMA"
            target="_blank"
          >
            <button>Ir a Repo</button>
          </form>
        </div>
        <div className="carta">
          <div className="slider">
            <ul>
              <li>
                <Image
                  className="imagen-proyect"
                  src="/img/Hiperlapso-1.PNG"
                  alt="src=/img/Hiperlapso-1.PNG"
                  width={100}
                  height={100}
                />
              </li>
              <li>
                <Image
                  className="imagen-proyect"
                  src="/img/Hiperlapso-2.PNG"
                  alt=" src=/img/Hiperlapso-2.PNG"
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
          <div>
            <h2>Hiperlapso</h2>
          </div>
          <div>
            <p>Esta pagina esta hecha con un CRUD en FLASK con Python</p>
          </div>
          <form action="https://github.com/FacKuSalvatierra/Crud-pyhton-flask">
            <button>Ir a Repo</button>
          </form>
        </div>
        <div className="carta">
          <div>
            <div>
              <h2>Este proyecto se esta por realizar</h2>
            </div>
            <div>
              <p>Pronto se pondra un repo aca</p>
            </div>
            <form>
              <button>Ir a Repo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Header() {
  return (
    <header id="top">
      <div className="contenedor">
        <Image
          className="logo"
          src="/img/FS.png"
          alt="/img/FS.png"
          width={100}
          height={100}
        />
        <nav>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="/Sobremi.html">Sobre mi</a>
        </nav>
      </div>
    </header>
  );
}

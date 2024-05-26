// import Image from "next/image";
// import styles from "./page.module.css";

import NavBar from "./components/NavBar";

export default function Home() {
  // Array de objetos de personas
  let personas = [
    { nombre: "Juan", apellido: "Perez", edad: 25, email: "5hJqz@example.com" },
    { nombre: "Maria", apellido: "Gonzalez", edad: 30, email: "5hJqz@example.com" },
    { nombre: "Pedro", apellido: "Lopez", edad: 35, email: "5hJqz@example.com" },
  ];
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1 className="text-center fw-bold mb-5">
              Guía Completa para Integrar Bootstrap 5 en Next.js 14
              <hr />
            </h1>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {personas.map((persona, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{persona.nombre}</td>
                        <td>{persona.apellido}</td>
                        <td>{persona.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

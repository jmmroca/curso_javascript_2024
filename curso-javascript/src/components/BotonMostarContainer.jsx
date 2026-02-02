import React from "react";

function BotonMostarContainer({ mostrarContainer, setMostrarContainer }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          mostrarContainer
            ? setMostrarContainer(false)
            : setMostrarContainer(true);
        }}
      >
        {mostrarContainer ? "Ocultar contenedor" : "Mostrar contenedor"}
      </button>
    </>
  );
}

export default BotonMostarContainer;

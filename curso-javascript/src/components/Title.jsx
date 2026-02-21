function Title( { titulo, imagen, imagenGrande } ) {
  return (
    <>
        <div id="title-container">
          <div id="image">
            <img
              className={imagenGrande ? "imagen-grande" : "imagen-chica"}
              src={imagen}
              alt={titulo}
            />
          </div>
        </div>
    </>
  )
}

export default Title
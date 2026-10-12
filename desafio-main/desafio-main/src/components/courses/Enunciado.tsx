import React from "react";
/* import Listas from "./Listas" */

interface EnunciadoProps {
  enunciado?: string
/*   descripcion: string; */
}

export const Enunciado: React.FC<EnunciadoProps> = ({
  enunciado
 /*  descripcion, */
}) => {
  return (
      <div className="enunciado-container">
        <h4>{enunciado}</h4>
        {/* <p>{Listas}</p> */}   {/* prueba{/*  */}
        {/* <h4>{descripcion}</h4> */}
      </div>
  );
};

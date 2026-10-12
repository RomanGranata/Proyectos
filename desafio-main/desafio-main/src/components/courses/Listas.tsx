import React from "react";
import descripcion from "@/problems/problems.json"


interface ListasProps {
    descripcion : string
}


export const Listas : React.FC<ListasProps> = ({
    descripcion
}) => {
    return (
        <li>
            <ul>{descripcion}</ul>
            <ul>{descripcion}</ul>
            <ul>{descripcion}</ul>
        </li>
    )
}

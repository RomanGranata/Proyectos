/* import { problems } from "@/problems/problems.json"; */
import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  lenguaje: string;
  id: number;
  subtitle: string;
}

export default function HeaderExercise({ lenguaje, id, subtitle }: Props) {
  let color = "";
  if (lenguaje == "html") {
    color = "color_excercises_html";
  } else if (lenguaje == "css") {
    color = "color_excercises_css";
  } else {
    color = "color_excercises_html";
  }
  return (
    <Container
      /* id={color} */
      className="rounded d-flex justify-content-center align-items-center gap-3"
    >
      <h2 className="py-1 fw-bold fs-1"
        id={color}>
          <span className="text-uppercase">{subtitle}</span>   {/* {problems.subtitle}*/}
      </h2>
      <h2 className="fw-bold p-1"
        id={color}> 
        {id}/20</h2>{" "}
    </Container>
  );
}

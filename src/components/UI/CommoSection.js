import React from "react";
import { Container } from "reactstrap";
import '../../styles/commonSection.css'
export default function CommoSection({ title }) {
  return (
    <>
      <section className="common_section">
        <Container className=" text-center">
          <h1>{title}</h1>
        </Container>
      </section>
    </>
  );
}

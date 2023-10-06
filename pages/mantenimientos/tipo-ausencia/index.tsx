'use client'
import type { NextPage } from "next";
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <main>
      <header className="py-4 mb-2">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Tipo de Ausencias</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row className="py-2 justify-content-end">
          <Col xs={3}>
            <Link className="btn btn-primary" style={{width: "100%"}} href="create">
              <FontAwesomeIcon
                icon={faGear}
                style={{fontSize: "18px", color: "white", marginRight: 10}}
              />
              Agregar un nuevo registro
            </Link>
          </Col>
        </Row>
        <Row >
          <Col xs={12}>
            Contenido
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Index;

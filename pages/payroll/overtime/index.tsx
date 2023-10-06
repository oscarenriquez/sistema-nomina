'use client'
import type { NextPage } from "next";
import {Container, Table, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <main>
      <header className="py-4 mb-2">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Configuración de Pago de Horas Extras</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row className="py-2 justify-content-end">
          <Col xs={3}>
            <Link className="btn btn-primary" style={{width: "100%"}} href="overtime/create">
              <FontAwesomeIcon
                icon={faGear}
                style={{fontSize: "18px", color: "white", marginRight: 10}}
              />
              
              Crear Nueva Configuración
            </Link>
          </Col>
        </Row>
        <Row >
          <Col xs={12}>
            <Table striped responsive bordered hover>
              <thead>
              <tr>
                <th>Nombre</th>
                <th>Tasa (%)</th>
                <th>Acciones</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th>Hora Extra Dia Normal 1.5x</th>
                <td>Hora pagada 1.5</td>
                <td className="text-center"><Button variant="light"><FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{fontSize: "18px"}}
                /></Button></td>
              </tr>
              <tr>
                <th>Hora Extra Asueto 2.0x</th>
                <td>Hora pagada 2</td>
                <td className="text-center"><Button variant="light"><FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{fontSize: "18px"}}
                /></Button></td>
              </tr>
              <tr>
                <th>Día de vacaciones Hora trabajada 3.0x</th>
                <td>Hora pagada 3</td>
                <td className="text-center"><Button variant="light"><FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{fontSize: "18px"}}
                /></Button></td>
              </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Index;

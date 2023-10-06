'use client'
import type { NextPage } from "next";
import {Container, Table, Row, Col, Image, Badge, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faGear} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <main>
      <header className="py-4 mb-2">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Salarios de Empleados</h1>
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
              Agregar Nuevo Salario
            </Link>
          </Col>
        </Row>
        <Row >
          <Col xs={12}>
            <Table>
              <thead>
              <tr>
                <th>Nombre</th>
                <th>Empleado ID</th>
                <th>Correo Electronico</th>
                <th>Fecha de contratación</th>
                <th>Puesto</th>
                <th>Salario</th>
                <th>Boleta de pago</th>
                <th>Acción</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <Image src="images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Carlos Gomez
                </td>
                <td>4738947346</td>
                <td>jgomez@example.com</td>
                <td> 25 de Agosto, 2020</td>
                <td>
                  <Badge bg="success">Software Engineer</Badge>
                </td>
                <td>Q 10,000.00</td>
                <td> <Button variant="secondary">Generar Boleta</Button></td>
                <td className="text-center"><Button variant="light"><FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{fontSize: "18px"}}
                /></Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>4738947346</td>
                <td>jgomez@example.com</td>
                <td> 25 de Agosto, 2020</td>
                <td>
                  <Badge bg="success">Software Engineer</Badge>
                </td>
                <td>Q 10,000.00</td>
                <td> <Button variant="secondary">Generar Boleta</Button></td>
                <td className="text-center"><Button variant="light"><FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{fontSize: "18px"}}
                /></Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Luis Gomez
                </td>
                <td>4738947346</td>
                <td>jgomez@example.com</td>
                <td> 25 de Agosto, 2020</td>
                <td>
                  <Badge bg="success">Software Engineer</Badge>
                </td>
                <td>Q 10,000.00</td>
                <td> <Button variant="secondary">Generar Boleta</Button></td>
                <td className="text-center"><Button variant="light"><FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{fontSize: "18px"}}
                /></Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="images/avatars/avatar-17.270e8f5a53a90907eb3c.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>4738947346</td>
                <td>jgomez@example.com</td>
                <td> 25 de Agosto, 2020</td>
                <td>
                  <Badge bg="success">Product Owner</Badge>
                </td>
                <td>Q 20,000.00</td>
                <td> <Button variant="secondary">Generar Boleta</Button></td>
                <td className="text-center"><Button variant="light"><FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{fontSize: "18px"}}
                /></Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>4738947346</td>
                <td>jgomez@example.com</td>
                <td> 25 de Agosto, 2020</td>
                <td>
                  <Badge bg="success">Software Engineer II</Badge>
                </td>
                <td>Q 18,000.00</td>
                <td> <Button variant="secondary">Generar Boleta</Button></td>
                <td className="text-center"><Button variant="light"><FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{fontSize: "18px"}}
                /></Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Oscar Gomez
                </td>
                <td>4738947346</td>
                <td>jgomez@example.com</td>
                <td> 25 de Agosto, 2020</td>
                <td>
                  <Badge bg="success">UX Designer</Badge>
                </td>
                <td>Q 8,000.00</td>
                <td> <Button variant="secondary">Generar Boleta</Button></td>
                <td className="text-center"><Button variant="light"><FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{fontSize: "18px"}}
                /></Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="images/avatars/avatar-08.52bc8e15df8d4c72cd9b.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Rodrigo Gomez
                </td>
                <td>4738947346</td>
                <td>jgomez@example.com</td>
                <td> 25 de Septiembre, 2020</td>
                <td>
                  <Badge bg="success">Web Developer</Badge>
                </td>
                <td>Q 12,000.00</td>
                <td> <Button variant="secondary">Generar Boleta</Button></td>
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

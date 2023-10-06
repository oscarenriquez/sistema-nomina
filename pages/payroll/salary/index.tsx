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
              <h1>Reporte de pago de Nómina</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row className="my-5" >
          <Col xs={12}>
            <Table>
              <thead>
              <tr>
                <th>Nombre</th>
                <th>Total Pagado</th>
                <th>Mes de Pago</th>
                <th>Año de Pago</th>
                <th>Número de Pago</th>
                <th>Acción</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-09.14a0679566439f5a0f04.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Carlos Gomez
                </td>
                <td>Q 12,342.33</td>
                <td>Enero</td>
                <td> 2023</td>
                <td>19</td>
                <td> <Button variant="secondary">PDF</Button> <Button variant="success">EXCEL</Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>Q 9,321.40</td>
                <td>Febrero</td>
                <td> 2023</td>
                <td>21</td>
                <td> <Button variant="secondary">PDF</Button> <Button variant="success">EXCEL</Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Luis Gomez
                </td>
                <td>Q 12,342.33</td>
                <td>Junio</td>
                <td> 2023</td>
                <td>20</td>
                <td> <Button variant="secondary">PDF</Button> <Button variant="success">EXCEL</Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-17.270e8f5a53a90907eb3c.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>Q 10,112.33</td>
                <td>Agosto</td>
                <td> 2023</td>
                <td>18</td>
                <td> <Button variant="secondary">PDF</Button> <Button variant="success">EXCEL</Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>Q 10,342.33</td>
                <td>Mayo</td>
                <td> 2023</td>
                <td>11</td>
                <td> <Button variant="secondary">PDF</Button> <Button variant="success">EXCEL</Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Oscar Gomez
                </td>
                <td>Q 12,342.33</td>
                <td>Enero</td>
                <td> 2023</td>
                <td>3</td>
                <td> <Button variant="secondary">PDF</Button> <Button variant="success">EXCEL</Button></td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-08.52bc8e15df8d4c72cd9b.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Rodrigo Gomez
                </td>
                <td>Q 12,342.33</td>
                <td>Julio</td>
                <td> 2023</td>
                <td>10</td>
                <td> <Button variant="secondary">PDF</Button> <Button variant="success">EXCEL</Button></td>
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

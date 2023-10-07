'use client'
import type { NextPage } from "next";
import {Container, Table, Row, Col, Image, Badge, Button, Form, FloatingLabel} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faEllipsisV, faFileExcel,
  faFilePdf,
  faGear, faList,
  faMoneyBill,
  faPeopleCarry,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

const Index: NextPage = () => {
  return (
    <main>
      <header className="py-4 mb-2">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Generación de Nómina</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Form className={'mb-4'}>
          <Row>
            <Col xs={4}>
              <FloatingLabel
                controlId="periodo"
                label="Periodo de Pago"
                className="mb-3"
              >
                <Form.Select size='lg' aria-label="Seleccione Puesto" name='periodo'>
                  <option>-</option>
                  <option value="1">Primera Quincena de Octubre</option>
                  <option value="2">Scrum Master</option>
                  <option value="3">Product Owner</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <Button variant='info' size='lg' className='btn-block w-100' >
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  style={{fontSize: "18px", marginRight: "18px", color: "black"}} />
                Vista Preview
              </Button>
            </Col>
            <Col>
              <Button variant='secondary' size='lg' className='btn-block w-100' >
                <FontAwesomeIcon
                  icon={faPeopleCarry}
                  style={{fontSize: "18px", marginRight: "18px", color: "white"}} />
                Envíar a Revisión
              </Button>
            </Col>
            <Col>
              <Button variant='success' size='lg' className='btn-block w-100' >
                <FontAwesomeIcon
                  icon={faDollar}
                  style={{fontSize: "18px", marginRight: "18px", color: "white"}} />
                Envíar a Pago
              </Button>
            </Col>
          </Row>
        </Form>
        <Row className="my-5" >
          <Col xs={12}>
            <Table>
              <thead>
              <tr>
                <th>Nombre</th>
                <th>Total a Pagar</th>
                <th>Ingresos</th>
                <th>Deducciones</th>
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
                <td>Q 13,342.33</td>
                <td>Q 1,000.00</td>
                <td>Enero</td>
                <td> 2023</td>
                <td>19</td>
                <td>
                  <Button size={'sm'}  variant="warning" className='m-1'>
                    <FontAwesomeIcon
                      icon={faList}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    DETALLE
                  </Button>
                  <Button size={'sm'}  variant="secondary" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    PDF
                  </Button>
                  <Button size={'sm'} variant="success" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    EXCEL
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>Q 9,321.40</td>
                <td>Q 11,321.40</td>
                <td>Q 2,000.00</td>
                <td>Febrero</td>
                <td> 2023</td>
                <td>21</td>
                <td>
                  <Button size={'sm'}  variant="warning" className='m-1'>
                    <FontAwesomeIcon
                      icon={faList}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    DETALLE
                  </Button>
                  <Button size={'sm'}  variant="secondary" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    PDF
                  </Button>
                  <Button size={'sm'} variant="success" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    EXCEL
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Luis Gomez
                </td>
                <td>Q 12,342.33</td>
                <td>Q 13,842.33</td>
                <td>Q 1,500.00</td>
                <td>Junio</td>
                <td> 2023</td>
                <td>20</td>
                <td>
                  <Button size={'sm'}  variant="warning" className='m-1'>
                    <FontAwesomeIcon
                      icon={faList}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    DETALLE
                  </Button>
                  <Button size={'sm'}  variant="secondary" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    PDF
                  </Button>
                  <Button size={'sm'} variant="success" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    EXCEL
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-17.270e8f5a53a90907eb3c.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>Q 10,112.33</td>
                <td>Q 13,112.33</td>
                <td>Q 3,000.00</td>
                <td>Agosto</td>
                <td> 2023</td>
                <td>18</td>
                <td>
                  <Button size={'sm'}  variant="warning" className='m-1'>
                    <FontAwesomeIcon
                      icon={faList}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    DETALLE
                  </Button>
                  <Button size={'sm'}  variant="secondary" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    PDF
                  </Button>
                  <Button size={'sm'} variant="success" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    EXCEL
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>Q 10,342.33</td>
                <td>Q 12,342.33</td>
                <td>Q 2,000.00</td>
                <td>Mayo</td>
                <td> 2023</td>
                <td>11</td>
                <td>
                  <Button size={'sm'}  variant="warning" className='m-1'>
                    <FontAwesomeIcon
                      icon={faList}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    DETALLE
                  </Button>
                  <Button size={'sm'}  variant="secondary" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    PDF
                  </Button>
                  <Button size={'sm'} variant="success" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    EXCEL
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Oscar Gomez
                </td>
                <td>Q 12,342.33</td>
                <td>Q 12,942.33</td>
                <td>Q 642.33</td>
                <td>Enero</td>
                <td> 2023</td>
                <td>3</td>
                <td>
                  <Button size={'sm'}  variant="warning" className='m-1'>
                    <FontAwesomeIcon
                      icon={faList}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    DETALLE
                  </Button>
                  <Button size={'sm'}  variant="secondary" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    PDF
                  </Button>
                  <Button size={'sm'} variant="success" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    EXCEL
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src="../images/avatars/avatar-08.52bc8e15df8d4c72cd9b.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Rodrigo Gomez
                </td>
                <td>Q 12,342.33</td>
                <td>Q 13,342.33</td>
                <td>Q 1,000.00</td>
                <td>Julio</td>
                <td> 2023</td>
                <td>10</td>
                <td>
                  <Button size={'sm'}  variant="warning" className='m-1'>
                    <FontAwesomeIcon
                      icon={faList}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    DETALLE
                  </Button>
                  <Button size={'sm'}  variant="secondary" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                  PDF
                  </Button>
                  <Button size={'sm'} variant="success" className='m-1'>
                    <FontAwesomeIcon
                      icon={faFileExcel}
                      style={{fontSize: "18px", marginRight: "5px", color: "white"}} />
                    EXCEL
                  </Button>
                </td>
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

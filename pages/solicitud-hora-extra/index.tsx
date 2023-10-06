'use client'
import type { NextPage } from "next";
import {Container, Table, Row, Col, Card, Image, Badge, Button, Dropdown, DropdownButton, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faCancel, faCheck, faEdit, faEllipsisV, faGear, faTrash} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";


const MenuDropdown = (props) => {
  return (
    <DropdownButton
      title={<FontAwesomeIcon
        icon={faEllipsisV}
        style={{fontSize: "18px"}}/>
      }
      drop={'start'}
      variant="light"
    >
      <Dropdown.Item onClick={() => props.Editar()} component={Link}>
        <FontAwesomeIcon
          icon={faEdit}
          style={{fontSize: "18px", marginRight: "5px", color: "blue"}} />
        Editar
      </Dropdown.Item>
      <Dropdown.Item onClick={() => props.Editar()}>
        <FontAwesomeIcon
          icon={faTrash}
          style={{fontSize: "18px", marginRight: "5px", color: "red"}} />
        Eliminar
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => props.Aprobar()}>
        <FontAwesomeIcon
          icon={faCheck}
          style={{fontSize: "18px", marginRight: "5px", color: "green"}} />
        Aprobar
      </Dropdown.Item>
      <Dropdown.Item onClick={() => props.Rechazar()}>
        <FontAwesomeIcon
          icon={faCancel}
          style={{fontSize: "18px", marginRight: "5px", color: "red"}} />
        Rechazar
      </Dropdown.Item>
    </DropdownButton>
  )
}

const CreateOrEditModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {!!props.isEditing ? 'Editar Solicitud de Hora Extra' : 'Crear Nueva Solicitud de Hora Extra'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant={'light'}>{!!props.isEditing ? 'Editar' : 'Crear'}</Button>
        <Button onClick={props.onHide} variant={'danger'}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Index: NextPage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <header className="py-4 mb-2">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Horas Extras Trabajadas</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row className="py-2 justify-content-end">
          <Col xs={3}>
            <Button className="btn btn-primary float-end" onClick={() => setModalShow(true)}>
              <FontAwesomeIcon
                icon={faAdd}
                style={{fontSize: "18px", color: "white", marginRight: 10}}
              />
              Crear
            </Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Title>Total Empleados</Card.Title>
                <div>
                  <h1>12</h1>
                  <span>Este mes</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Title>Total Horas Trabajadas</Card.Title>
                <div>
                  <h1>230</h1>
                  <span>Este mes</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Title>Solicitudes Pendientes</Card.Title>
                <div>
                  <h1>20</h1>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Body className="text-center">
                <Card.Title>Solicitudes Rechazadas</Card.Title>
                <div>
                  <h1>6</h1>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row >
          <Col xs={12}>
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Horas trabajadas</th>
                <th>Descripcion</th>
                <th>Estado</th>
                <th>Aprovado por</th>
                <th>Acción</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Image src="images/avatars/avatar-02.fa88689eba04e38282d2.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Juan Gomez
                </td>
                <td>2023-08-10</td>
                <td>15</td>
                <td>Horas extra</td>
                <td>
                  <Badge>Aprobado</Badge>
                </td>
                <td>Ricardo Castro</td>
                <td className="text-center">
                
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <Image src="images/avatars/avatar-03.1a6654aa9e8ad1ed9640.jpg" roundedCircle width={35} style={{marginRight: 20}} />
                  Karla Aguiree
                </td>
                <td>2023-08-10</td>
                <td>4</td>
                <td>Horas extra</td>
                <td>
                  <Badge>Aprobado</Badge>
                </td>
                <td>Luis Vasquez</td>
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
      <CreateOrEditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};
export default Index;

'use client'
import type { NextPage } from "next";
import {Container, Table, Row, Col, Button, Modal, DropdownButton, Dropdown, Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV, faAdd, faEdit, faTrash
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from './TipoHoraExtra.module.css'

const datos = [
  {
    id: 1,
    nombre: 'Hora Extra Dia Normal 1.5x',
    valor: 1.5,
  },
  {
    id: 2,
    nombre: 'Hora Extra Asueto 2.0x',
    valor: 2,
  },
  {
    id: 3,
    nombre: 'Día de vacaciones Hora trabajada 3.0x',
    valor: 3,
  },
  {
    id: 4,
    nombre: 'Hora Extra Special - Operación',
    valor: 3.5,
  },
]
const MenuDropdown = (props) => {
  return (
    <DropdownButton
      title={<FontAwesomeIcon
        icon={faEllipsisV}
        style={{fontSize: "18px"}}/>
      }
      variant="light"
    >
      <Dropdown.Item onClick={() => props.editar()}>
        <FontAwesomeIcon
          icon={faEdit}
          style={{fontSize: "18px", marginRight: "5px", color: "blue"}} />
        Editar
      </Dropdown.Item>
      <Dropdown.Item onClick={() => props.eliminar()}>
        <FontAwesomeIcon
          icon={faTrash}
          style={{fontSize: "18px", marginRight: "5px", color: "red"}} />
        Eliminar
      </Dropdown.Item>
    </DropdownButton>
  )
}

const CreateOrEditModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
        <Modal.Title id="crear-editar-modal" className={'text-center w-100'}>
          {!!props.isEditing ? 'Editar Hora Extra' : 'Agregar Hora Extra'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={'p-4'}>
        <Form>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control type="text" placeholder="Ingresa Nombre o Descripción" required={true} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formValor">
            <Form.Label>Tasa (%) *</Form.Label>
            <Form.Control type="number" min={1} max={999} placeholder="Ingresa tasa de pago para esta hora" required={true} />
          </Form.Group>
          <div className="submit-section pt-4 text-center">
            <Button variant="primary" type="submit" size={'lg'} className={'submit-btn'}>
              {!!props.isEditing ? 'Actualizar' : 'Crear'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const Index: NextPage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editingObject, setEditingObject] = React.useState({});
  
  const editar = (id) => {
    setIsEditing(true);
    setModalShow(true);
  }
  
  const eliminar = (id) => {
  
  }
  
  return (
    <Container>
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
            <Button className="btn btn-primary float-end" onClick={() => {
              setModalShow(true)
              setIsEditing(false)
            }}>
              <FontAwesomeIcon
                icon={faAdd}
                style={{fontSize: "18px", color: "white", marginRight: 10}}
              />
              Crear
            </Button>
          </Col>
        </Row>
        <Row >
          <Col xs={12}>
            <Table striped responsive bordered hover className={styles.table}>
              <thead>
              <tr>
                <th>Nombre</th>
                <th>Tasa (%)</th>
                <th>Acciones</th>
              </tr>
              </thead>
              <tbody>
              {datos.map((item) => (
                <tr key={item.id}>
                  <th>{item.nombre}</th>
                  <td>Hora pagada {item.valor}</td>
                  <td className="text-center">
                    <MenuDropdown
                      editar={() => editar(item.id)}
                      eliminar={() => eliminar(item.id)}
                    />
                  </td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <CreateOrEditModal
        show={modalShow}
        isEditing={isEditing}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};
export default Index;

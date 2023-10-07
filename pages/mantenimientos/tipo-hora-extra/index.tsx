'use client'
import type { NextPage } from "next";
import {Container, Table, Row, Col, Button, Modal, DropdownButton, Dropdown, Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV, faAdd, faEdit, faTrash, faSave
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import styles from './TipoHoraExtra.module.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);
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
  const formData = { nombre: '', coeficiente: 0};
  const formValidation = { nombre: false, coeficiente: false};
  const [requestBody, setRequestBody] = useState(formData);
  const [validation, setValidation] = useState(formValidation);
  
  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setRequestBody({...requestBody, [name]: value})
  }
  const submitForm = (event) => {
    event.preventDefault();
    if (!requestBody.coeficiente && requestBody.coeficiente === 0) {
      setValidation({...validation, coeficiente: true});
      return;
    }
    if (!requestBody.nombre.trim()) {
      setValidation({...validation, nombre: true});
      return;
    }
    
    setValidation(formValidation);
  
    try {
      props.submitRecord(requestBody);
      MySwal.fire({
        key: 'successCreation',
        title: '¡Configuración Creada!',
        icon: 'success'
      });
    } catch (e) {
     console.log(e);
    }
  }
  
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
      <Modal.Body className={'p-5'}>
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-4" controlId="nombre">
            <Form.Label>Nombre <span className='text-danger'>*</span></Form.Label>
            <Form.Control name='nombre' size={'lg'} type="text" placeholder="Ingresa Nombre o Descripción" required={true} onChange={(event) => inputChangeHandler(event)}/>
            {formValidation.nombre && <Form.Text className='text-danger'>El Nombre es un valor requerido para guardar este registro.</Form.Text>}
            
          </Form.Group>
          <Form.Group className="mb-4" controlId="coeficiente">
            <Form.Label>Tasa (%) <span className='text-danger'>*</span></Form.Label>
            <Form.Control name='coeficiente' size={'lg'} type="number" min={1} max={999} placeholder="Ingresa tasa de pago para esta hora" required={true} onChange={(event) => inputChangeHandler(event)}/>
            {formValidation.coeficiente && <Form.Text className='text-danger'>El valor de tasa es requerido para guardar este registro.</Form.Text>}
          </Form.Group>
          <div className="submit-section pt-4 text-center">
            <Button variant="primary" type="submit" size={'lg'} className={'submit-btn'}>
              <FontAwesomeIcon
                icon={faSave}
                style={{fontSize: "18px", marginRight: "10px", color: "white"}} />
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
  
  const create = (requestBody) => {
    datos.push({...requestBody, id : datos.length + 1});
    setModalShow(false);
  }
  
  const eliminar = (id) => {
    MySwal.fire({
      titleText: '¡Atención!',
      text: '¿Está seguro de eliminar esta configuración?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire('Eliminado!', '', 'success')
      }
    })
  }
  
  return (
    <Container>
      <header className="py-4 mb-2">
        <Container>
          <Row>
            <Col>
              <h1>Configuración de Pago de Horas Extras</h1>
            </Col>
            <Col xs={3}>
              <Button className="btn btn-primary float-end add-btn" onClick={() => {
                setModalShow(true)
                setIsEditing(false)
              }}>
                <FontAwesomeIcon
                  icon={faAdd}
                  style={{fontSize: "18px", color: "white", marginRight: 10}}
                />
                Agregar
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
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
        submitRecord={(requestBody) => create(requestBody)}
      />
    </Container>
  );
};
export default Index;

'use client'
import type { NextPage } from "next";
import {
  Container,
  Table,
  Row,
  Col,
  Card,
  Image,
  Badge,
  Button,
  Dropdown,
  DropdownButton,
  Modal,
  Form, InputGroup
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCancel,
  faCheck,
  faEdit,
  faEllipsisV,
  faGear,
  faSave,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, {useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CIcon from "@coreui/icons-react";
import {cilAccountLogout, cilBasket, cilChartPie, cilGroup, cilPeople} from "@coreui/icons";
import {CWidgetStatsC} from "@coreui/react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MySwal = withReactContent(Swal);

const datos = [
  {
    id: 1,
    nombre_empleado: 'Javier Torre',
    imagen_url: 'images/avatars/avatar-02.fa88689eba04e38282d2.jpg',
    total_horas: 5,
    fecha: '2023-09-23',
    justificacion: 'Hora trabajados por cierre de jornada.',
    estado: 'Nuevo',
    aprobado_por: '',
    tipo_hora_extra: 'Hora Extra Dia Normal 1.5x'
  },
  {
    id: 2,
    nombre_empleado: 'Oscar Enriquez',
    imagen_url: 'images/avatars/avatar-02.fa88689eba04e38282d2.jpg',
    total_horas: 5,
    fecha: '2023-09-23',
    justificacion: 'Proyecto de nomina',
    estado: 'Rechazado',
    aprobado_por: 'Hugo Sánchez',
    tipo_hora_extra: 'Hora Extra Dia Normal 1.5x'
  },
  {
    id: 3,
    nombre_empleado: 'Carlos Enriquez',
    imagen_url: 'images/avatars/avatar-02.fa88689eba04e38282d2.jpg',
    total_horas: 5,
    fecha: '2023-09-23',
    justificacion: 'Diseño de red LAN - ventas',
    estado: 'Nuevo',
    aprobado_por: '',
    tipo_hora_extra: 'Hora Extra Dia Normal 1.5x'
  },
  {
    id: 4,
    nombre_empleado: 'Jose Luis Perez',
    imagen_url: 'images/avatars/avatar-02.fa88689eba04e38282d2.jpg',
    total_horas: 5,
    fecha: '2023-09-23',
    justificacion: '',
    estado: 'Aprobado',
    aprobado_por: 'Luis Garcia',
    tipo_hora_extra: 'Hora Extra Dia Normal 1.5x'
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
  const formData = { tipo: '', empleado_id: 0, total_horas: 0, justificacion: '', fecha: new Date() };
  const formValidation = { tipo: false, empleado_id: false, total_horas: false, justificacion: false, fecha: false};
  const [requestBody, setRequestBody] = useState(formData);
  const [validation, setValidation] = useState(formValidation);
  
  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setRequestBody({...requestBody, [name]: value})
  }
  const submitForm = (event) => {
    event.preventDefault();
    if (!requestBody.total_horas && requestBody.total_horas === 0) {
      setValidation({...validation, total_horas: true});
      return;
    }
    if (!requestBody.justificacion.trim()) {
      setValidation({...validation, justificacion: true});
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
  
  function dateChangeHandler(date) {
    setRequestBody({...requestBody, fecha: date})
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
        <Modal.Title id="crear-editar-modal" className={'text-center w-100'}>
          {!!props.isEditing ? 'Editar solicitud de hora extra' : 'Enviar nueva solicitud'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={'p-5'}>
        <Form onSubmit={submitForm}>
          <Row className='mb-4'>
            <Col>
              <Form.Group controlId="empleado_id" >
                <Form.Label>Seleccione Empleado <span className='text-danger'>*</span></Form.Label>
                <Form.Select size='lg' aria-label="Seleccione Empleado" onChange={event => inputChangeHandler(event)} name='empleado_id'>
                  <option>-</option>
                  <option value="1">Oscar Enríquez</option>
                  <option value="2">Carlos Morales</option>
                  <option value="3">Daniel Mejía</option>
                </Form.Select>
                {formValidation.empleado_id && <Form.Text className='text-danger'>Debe de seleccionar un empleado.</Form.Text>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tipo">
                <Form.Label>Seleccione Tipo de Hora <span className='text-danger'>*</span></Form.Label>
                <Form.Select size='lg' aria-label="Seleccione tipo" onChange={event => inputChangeHandler(event)} name='tipo'>
                  <option>-</option>
                  <option value="1">Hora Extra Dia Normal 1.5x</option>
                  <option value="2">Hora Extra Asueto 2.0x</option>
                  <option value="3">Día de vacaciones Hora trabajada 3.0x</option>
                </Form.Select>
                {formValidation.empleado_id && <Form.Text className='text-danger'>Debe de seleccionar un empleado.</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col>
              <Form.Group className="mb-3" controlId="total_horas">
                <Form.Label>Horas Extras <span className='text-danger'>*</span></Form.Label>
                <Form.Control name='total_horas' size={'lg'} type="number" min={1} max={999} placeholder="Ingresa el total de horas" required={true} onChange={(event) => inputChangeHandler(event)}/>
                {formValidation.total_horas && <Form.Text className='text-danger'>El total de horas es requerido para guardar este registro.</Form.Text>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="fecha">
                <Form.Label>Fecha <span className='text-danger'>*</span></Form.Label>
                <Row>
                  <Col>
                    <DatePicker selected={requestBody.fecha} className='form-control' onChange={(date) => dateChangeHandler(date)} component={Form.Control}/>
                  </Col>
                </Row>
              </Form.Group>
              {formValidation.fecha && <Form.Text className='text-danger'>Seleccione la fecha.</Form.Text>}
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="justificacion">
                <Form.Label>Horas Extras <span className='text-danger'>*</span></Form.Label>
                <Form.Control as='textarea' name='justificacion' size={'lg'} type="text" style={{height: '200px'}} placeholder="Ingresa la justificación" required={true} onChange={(event) => inputChangeHandler(event)}/>
                {formValidation.justificacion && <Form.Text className='text-danger'>El total de horas es requerido para guardar este registro.</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          
          
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
  
  const MyBadge = (estado) => {
    if (estado === 'Aprobado') {
      return(
        <Badge bg={'success'} >{estado}</Badge>
      );
    }
    
    if (estado === 'Rechazado') {
      return(
        <Badge bg={'danger'} >{estado}</Badge>
      );
    }
  
    return (<Badge>{estado}</Badge>)
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
              <h1>Solicitudes Horas Extras</h1>
            </Col>
            <Col xs={3}>
              <Button className="btn btn-primary float-end add-btn" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon
                  icon={faAdd}
                  style={{fontSize: "18px", color: "white", marginRight: 10}}
                />
                Agregar nueva solicitud
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row className="my-3">
          <Col xs={3}>
            <CWidgetStatsC
              className="mb-3"
              icon={<CIcon icon={cilPeople} height={36} />}
              progress={{ color: 'info', value: 90 }}
              text="En este mes"
              title="Total Empleados"
              value="120"
            />
          </Col>
          <Col xs={3}>
            <CWidgetStatsC
              className="mb-3"
              icon={<CIcon icon={cilChartPie} height={36} />}
              progress={{ color: 'success', value: 75 }}
              text="En este mes"
              title="Total Horas Trabajadas"
              value="230"
            />
          </Col>
          <Col xs={3}>
            <CWidgetStatsC
              className="mb-3"
              icon={<CIcon icon={cilAccountLogout} height={36} />}
              progress={{ color: 'warning', value: 25 }}
              title="Solicitudes Pendientes"
              value="20"
            />
          </Col>
          <Col xs={3}>
            <CWidgetStatsC
              className="mb-3"
              icon={<CIcon icon={cilBasket} height={36} />}
              progress={{ color: 'danger', value: 10 }}
              title="Solicitudes Rechazadas"
              value="20"
            />
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
                <th>Horas</th>
                <th>Tipo</th>
                <th>Justificación</th>
                <th>Estado</th>
                <th>Aprovado por</th>
                <th>Acción</th>
              </tr>
              </thead>
              <tbody>
              {datos.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>
                      <Image src={item.imagen_url} roundedCircle width={35} style={{marginRight: 20}} />
                      {item.nombre_empleado}
                    </td>
                    <td>{item.fecha}</td>
                    <td>{item.total_horas}</td>
                    <td>{item.tipo_hora_extra}</td>
                    <td>{item.justificacion}</td>
                    <td>
                      {MyBadge(item.estado)}
                    </td>
                    <td>{item.aprobado_por}</td>
                    <td className="text-center">
                      <MenuDropdown
                        editar={() => editar(item.id)}
                        eliminar={() => eliminar(item.id)}
                      />
                    </td>
                  </tr>
                )
              )}
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

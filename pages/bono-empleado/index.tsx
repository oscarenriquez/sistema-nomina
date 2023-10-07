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
  Form, InputGroup, FloatingLabel
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCancel,
  faCheck,
  faEdit,
  faEllipsisV,
  faGear,
  faSave, faSearch,
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
    departamento: 'Ventas',
    tipo_ingreso: 'Comisiones',
    monto: 434,
    fecha_bonificacion: '2023-09-23',
    estado: 'Nuevo',
    aprobado_por: '',
    moneda: 'GTQ'
  },
  {
    id: 2,
    nombre_empleado: 'Miguel Cervantes',
    imagen_url: 'images/avatars/avatar-02.fa88689eba04e38282d2.jpg',
    departamento: 'Admnistración',
    tipo_ingreso: 'Pago de certificacion',
    monto: 3400,
    fecha_bonificacion: '2023-09-23',
    estado: 'Nuevo',
    aprobado_por: '',
    moneda: 'GTQ'
  },
  {
    id: 3,
    nombre_empleado: 'Lucia Aguirre',
    imagen_url: 'images/avatars/avatar-02.fa88689eba04e38282d2.jpg',
    tipo_ingreso: 'Bono de rendimiento',
    departamento: 'Ventas',
    monto: 5000,
    fecha_bonificacion: '2023-09-23',
    estado: 'Nuevo',
    aprobado_por: '',
    moneda: 'GTQ'
  },
  {
    id: 4,
    nombre_empleado: 'Oscar Enríquez',
    imagen_url: 'images/avatars/avatar-02.fa88689eba04e38282d2.jpg',
    departamento: 'Informatica',
    tipo_ingreso: 'Pago de viaticos',
    monto: 3500,
    fecha_bonificacion: '2023-09-23',
    estado: 'Nuevo',
    aprobado_por: '',
    moneda: 'GTQ'
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
  const formData = { tipo_ingreso: '', empleado_id: 0, monto: 0, fecha_bonificacion: new Date() };
  const formValidation = { tipo_ingreso: false, empleado_id: false, monto: false, fecha_bonificacion: false };
  const [requestBody, setRequestBody] = useState(formData);
  const [validation, setValidation] = useState(formValidation);
  
  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setRequestBody({...requestBody, [name]: value})
  }
  const submitForm = (event) => {
    event.preventDefault();
    if (!requestBody.monto && requestBody.monto === 0) {
      setValidation({...validation, total_horas: true});
      return;
    }
    if (!requestBody.tipo_ingreso.trim()) {
      setValidation({...validation, tipo_ingreso: true});
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
          {!!props.isEditing ? 'Editar bonificación' : 'Crear nueva bonificación'}
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
                <Form.Label>Seleccione Tipo de Ingreso <span className='text-danger'>*</span></Form.Label>
                <Form.Select size='lg' aria-label="Seleccione tipo de ingreso" onChange={event => inputChangeHandler(event)} name='tipo'>
                  <option>-</option>
                  <option value="1">Comisiones</option>
                  <option value="2">Bono por Productividad</option>
                  <option value="3">Bono Escolar</option>
                  <option value="3">Pago de Viaticos</option>
                </Form.Select>
                {formValidation.empleado_id && <Form.Text className='text-danger'>Debe de seleccionar un empleado.</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col>
              <Form.Group className="mb-3" controlId="monto">
                <Form.Label>Monto de Bono <span className='text-danger'>*</span></Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">GTQ</InputGroup.Text>
                  <Form.Control name='monto' size={'lg'} type="number" min={1} placeholder="Ingresa el monto total del bono" required={true} onChange={(event) => inputChangeHandler(event)}/>
                </InputGroup>
                {formValidation.monto && <Form.Text className='text-danger'>El total del monto otorgado a empleado.</Form.Text>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="fecha">
                <Form.Label>Fecha Bonoficación <span className='text-danger'>*</span></Form.Label>
                <Row>
                  <Col>
                    <DatePicker selected={requestBody.fecha_bonificacion} className='form-control' onChange={(date) => dateChangeHandler(date)} component={Form.Control}/>
                  </Col>
                </Row>
              </Form.Group>
              {formValidation.fecha_bonificacion && <Form.Text className='text-danger'>Seleccione la fecha.</Form.Text>}
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
  const formData = { nombre: '', puesto: 0, departamento: 0};
  const [requestBody, setRequestBody] = useState(formData);
  
  const inputChangeHandler = (event) => {
    const {name, value} = event.target
    setRequestBody({...requestBody, [name]: value})
  }
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
              <h1>Bonificaciones de empleados</h1>
            </Col>
            <Col xs={3}>
              <Button className="btn btn-primary float-end add-btn" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon
                  icon={faAdd}
                  style={{fontSize: "18px", color: "white", marginRight: 10}}
                />
                Agregar bono
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Form className={'mb-4'}>
          <Row>
            <Col>
              <FloatingLabel
                controlId="nombre"
                label="Nombre Empleado"
                className="mb-3"
              >
                <Form.Control size='lg' type="text" placeholder="Ingrese el nombre del empleado" onChange={event => inputChangeHandler(event)} name='nombre' />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="puesto"
                label="Puesto"
                className="mb-3"
              >
                <Form.Select size='lg' aria-label="Seleccione Puesto" onChange={event => inputChangeHandler(event)} name='puesto'>
                  <option>-</option>
                  <option value="1">Software Engineer</option>
                  <option value="2">Scrum Master</option>
                  <option value="3">Product Owner</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="departamento"
                label="Departamento"
                className="mb-3"
              >
                <Form.Select size='lg' aria-label="Seleccione Puesto" onChange={event => inputChangeHandler(event)} name='puesto'>
                  <option>-</option>
                  <option value="1">Informatica</option>
                  <option value="2">Ventas</option>
                  <option value="3">Administración</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <Button variant='success' size='lg' className='btn-block w-100' >
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{fontSize: "18px", marginRight: "10px", color: "white"}} />
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col xs={12}>
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Departamento</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Descripción</th>
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
                    <td>{item.departamento}</td>
                    <td>{item.moneda} {item.monto.toFixed(2).toLocaleString('en-US')}</td>
                    <td>{item.fecha_bonificacion}</td>
                    <td>{item.tipo_ingreso}</td>
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

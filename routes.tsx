import React from 'react'

const Dashboard = React.lazy(() => import('./pages/dashboard'))

// Organización
const ListaEmpleados = React.lazy(() => import('./pages/empleados/lista'))
const Ausencias = React.lazy(() => import('./pages/empleados/ausencias'))
const Marcaje = React.lazy(() => import('./pages/empleados/marcaje'))
const SalarioHistorial = React.lazy(() => import('./pages/empleados/salario-historial'))
const Departamentos = React.lazy(() => import('./pages/departamentos'))
const Puestos = React.lazy(() => import('./pages/puestos'))

// Nóminas
const PagoNomina = React.lazy(() => import('./pages/pago-nomina'))
const SolicitudHoraExtra = React.lazy(() => import('./pages/solicitud-hora-extra'))
const BonosEmpleados = React.lazy(() => import('./pages/bono-empleado'))
const DeduccionesEmpleado = React.lazy(() => import('./pages/deduccion-empleado'))
const PeriodoPago = React.lazy(() => import('./pages/periodo-pago'))
const Transferencias = React.lazy(() => import('./pages/transferencias'))

// Métricas
const Reportes = React.lazy(() => import('./pages/reportes'))

// Mantenimientos
const DiaFestivo = React.lazy(() => import('./pages/mantenimientos/dia-festivo'))
const TipoAusencia = React.lazy(() => import('./pages/mantenimientos/tipo-ausencia'))
const TipoHoraExtra = React.lazy(() => import('./pages/mantenimientos/tipo-hora-extra'))
const TipoIngreso = React.lazy(() => import('./pages/mantenimientos/tipo-ingreso'))
const TipoDeduccion = React.lazy(() => import('./pages/mantenimientos/tipo-deduccion'))
const GradoAcademino = React.lazy(() => import('./pages/mantenimientos/grado-academico'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/empleados', name: 'Empleados', element: ListaEmpleados, exact: true },
  { path: '/empleados/lista', name: 'Listado de empleados', element: ListaEmpleados, exact: true },
  { path: '/empleados/ausencias', name: 'Ausencias', element: Ausencias, exact: true },
  { path: '/empleados/marcaje', name: 'Marcaje', element: Marcaje, exact: true },
  { path: '/empleados/salario-historial', name: 'Salario Historial', element: SalarioHistorial, exact: true },
  { path: '/departamentos', name: 'Departamentos', element: Departamentos },
  { path: '/puestos', name: 'Puestos', element: Puestos },
  { path: '/pago-nomina', name: 'Pago nómina', element: PagoNomina },
  { path: '/solicitud-hora-extra', name: 'Solicitud hora extra', element: SolicitudHoraExtra, exact: true },
  { path: '/solicitud-hora-extra/crear', name: 'Crear Nueva', element: SolicitudHoraExtra, exact: true },
  { path: '/bono-empleado', name: 'Bonos de empleado', element: BonosEmpleados },
  { path: '/deduccion-empleado', name: 'Deducciones de Empleado', element: DeduccionesEmpleado },
  { path: '/periodo-pago', name: 'Período de Pago', element: PeriodoPago },
  { path: '/transferencias', name: 'Transferencias', element: Transferencias },
  { path: '/reportes', name: 'Reportes', element: Reportes },
  { path: '/mantenimientos', name: 'Mantenimientos', element: DiaFestivo, exact: true },
  { path: '/mantenimientos/dia-festivo', name: 'Dias Festivos', element: DiaFestivo },
  { path: '/mantenimientos/tipo-ausencia', name: 'Tipo Ausencia', element: TipoAusencia },
  { path: '/mantenimientos/tipo-hora-extra', name: 'Tipo Hora Extra', element: TipoHoraExtra },
  { path: '/mantenimientos/tipo-ingreso', name: 'Tipo Ingresos', element: TipoIngreso },
  { path: '/mantenimientos/tipo-deduccion', name: 'Tipo Deducciones', element: TipoDeduccion },
  { path: '/mantenimientos/grado-academico', name: 'Grado Académico', element: GradoAcademino },
]

export default routes

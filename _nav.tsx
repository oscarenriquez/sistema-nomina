import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplicationsSettings, cilAvTimer, cilBank,
  cilBell,
  cilCalculator, cilCalendar, cilCalendarCheck,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop, cilGroup, cilMoney, cilMovie,
  cilNotes,
  cilPencil, cilPeople,
  cilPuzzle, cilSend,
  cilSpeedometer,
  cilStar, cilTruck
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    href: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Organización',
  },
  {
    component: CNavGroup,
    name: 'Empleados',
    href: '/empleados',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista de Empleados',
        href: '/empleados/lista',
      },
      {
        component: CNavItem,
        name: 'Ausencias y Vacaciones',
        href: '/empleados/ausencias',
      },
      {
        component: CNavItem,
        name: 'Marcaje',
        href: '/empleados/marcaje',
      },
      {
        component: CNavItem,
        name: 'Salario Historial',
        href: '/empleados/salario-historial',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Departamentos',
    href: '/departamentos',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Puestos',
    href: '/puestos',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Nóminas',
  },
  {
    component: CNavItem,
    name: 'Pago de Nómina',
    href: '/pago-nomina',
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Solicitud de Hora Extra',
    href: '/solicitud-hora-extra',
    icon: <CIcon icon={cilAvTimer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Bonos de empleados',
    href: '/bono-empleado',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Deducciones',
    href: '/deduccion-empleado',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Periodo de Pago',
    href: '/periodo-pago',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Transferencias',
    href: '/transferencias',
    icon: <CIcon icon={cilSend} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Métricas',
  },
  {
    component: CNavItem,
    name: 'Reportes',
    href: '/reportes',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Mantenimientos',
    href: '/mantenimientos',
    icon: <CIcon icon={cilApplicationsSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Día Festivo',
        href: '/mantenimientos/dia-festivo',
      },
      {
        component: CNavItem,
        name: 'Tipo Ausencia',
        href: '/mantenimientos/tipo-ausencia',
      },
      {
        component: CNavItem,
        name: 'Tipo Hora Extra',
        href: '/mantenimientos/tipo-hora-extra',
      },
      {
        component: CNavItem,
        name: 'Tipo Ingreso',
        href: '/mantenimientos/tipo-ingreso',
      },
      {
        component: CNavItem,
        name: 'Tipo Deducción',
        href: '/mantenimientos/tipo-deduccion',
      },
      {
        component: CNavItem,
        name: 'Grado Académico',
        href: '/mantenimientos/grado-academico',
      }
    ],
  },
]

export default _nav

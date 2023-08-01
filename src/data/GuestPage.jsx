import { ReactComponent as ChurchIconSvg } from '../assents/icons/ChurchIcon.svg'
import { ReactComponent as ReceptionIconSvg } from '../assents/icons/ReceptionIcon.svg'
import { ReactComponent as BusIconSvg } from '../assents/icons/ReceptionIcon.svg'

export const guestInformation = [
  {
    id: 'OFUTMS',
    name: 'Pablo',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    numberGuests: 2,
  },
]

export const scheduleInformation = [
  {
    id: 'Misa',
    title: 'Ceremonia religiosa',
    icon: <ChurchIconSvg />,
    location: 'Basilica La Purisima Concepción',
    time: '14:30 HRS',
    lat: 25.6697748,
    long: -100.3262888,
  },
  {
    id: 'Paseo',
    title: 'Viaje por Santiago',
    icon: <BusIconSvg />,
    location: 'Princess Wedding Garden',
    time: '19:30 HRS',
    lat: 25.6697748,
    long: -100.3262888,
  },
  {
    id: 'Fiesta',
    title: 'Recepción',
    icon: <ReceptionIconSvg />,
    location: 'Princess Wedding Garden',
    time: '19:30 HRS',
    lat: 25.6697748,
    long: -100.3262888,
  },
]

export const bankAccounts = [
  {
    id: 1,
    moneda: 'Colones',
    cuentas: [
      {
        id: 1,
        nombre: 'Sinpe movil',
        numero: '+506 71059897',
        nombrePersona: 'Pablo Madrigal',
      },
      {
        id: 2,
        nombre: 'BAC San José',
        tipo: 'Cuenta BAC',
        numero: '924875248',
        nombrePersona: 'Pablo Madrigal',
      },
      {
        id: 3,
        nombre: 'BAC San José',
        tipo: 'IBAN',
        numero: 'CR41010200009248752486',
        nombrePersona: 'Pablo Madrigal / cédula:1-1602-0924',
      },
    ],
  },
  {
    id: 2,
    moneda: 'Dolares',
    cuentas: [
      {
        id: 1,
        nombre: 'BAC San José',
        tipo: 'Cuenta BAC',
        numero: '945090413',
        nombrePersona: 'Pablo Madrigal',
      },
      {
        id: 2,
        nombre: 'BAC San José',
        tipo: 'IBAN',
        numero: 'CR16010200009450904137',
        nombrePersona: 'Pablo Madrigal / cédula:1-1602-0924',
      },
    ],
  },
  {
    id: 3,
    moneda: 'Pesos Mexicanos',
    cuentas: [
      {
        id: 1,
        nombre: 'Klar',
        tipo: 'CLABE',
        numero: '661610008478959734',
        nombrePersona: 'Pablo Madrigal',
      },
    ],
  },
]

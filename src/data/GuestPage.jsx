import { ReactComponent as ChurchIconSvg } from '../assents/icons/ChurchIcon.svg'
import { ReactComponent as ReceptionIconSvg } from '../assents/icons/ReceptionIcon.svg'
import { ReactComponent as BusIconSvg } from '../assents/icons/BusIcon.svg'

import amazonLogo from '../assents/logos/Amazon.png'

export const guestInformation = [
  {
    id: 'OFUTMS',
    name: 'Rafael Regidor',
    message:
      'Querido Rafa, queria invitarte a nuestra boda el 20 de octubre, para nosotros va a ser demasiado especial que pudieras acompañarnos',
    numberGuests: 2,
  },
]

export const scheduleInformation = [
  {
    id: 'Misa',
    title: 'Ceremonia religiosa',
    icon: <ChurchIconSvg />,
    location: 'Basilica La Purisima Concepción',
    time: '14:45 HRS',
    lat: 25.6697748,
    long: -100.3262888,
  },
  {
    id: 'Paseo',
    title: 'Viaje por Santiago',
    icon: <BusIconSvg />,
    location: 'Pueblo Magico Santiago',
    description: '(Habrá transporte para extranjeros)',
    time: '16:00 HRS',
    lat: 25.4216649,
    long: -100.1387526,
  },
  {
    id: 'Fiesta',
    title: 'Recepción',
    icon: <ReceptionIconSvg />,
    location: 'Princess Wedding Garden',
    time: '19:30 HRS',
    lat: 25.4726162,
    long: -100.1717237,
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

export const registryList = [
  {
    name: 'Amazon',
    logo: (
      <img
        src={amazonLogo}
        alt="Amazon"
        style={{ width: '100%', height: 'auto', maxWidth: '150px' }}
      />
    ),
    url: 'https://www.amazon.com/registry/wishlist/3QKJFJZ5VJRQ?ref_=wl_share',
  },
  {
    name: 'Liverpool',
    logo: (
      <img
        src="data:image/png;base64,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"
        alt="Amazon"
      />
    ),
    url: 'https://www.amazon.com/registry/wishlist/3QKJFJZ5VJRQ?ref_=wl_share',
  },
]

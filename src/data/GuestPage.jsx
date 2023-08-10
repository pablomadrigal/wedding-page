import { ReactComponent as ChurchIconSvg } from '../assents/icons/ChurchIcon.svg'
import { ReactComponent as ReceptionIconSvg } from '../assents/icons/ReceptionIcon.svg'
import { ReactComponent as BusIconSvg } from '../assents/icons/BusIcon.svg'

import amazonLogo from '../assents/logos/Amazon.png'

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
        nombre: 'Bannorte',
        tipo: 'CLABE',
        numero: '072580012327581492',
        nombrePersona: 'Paloma Ruiz',
      },
    ],
  },
]

export const registryList = {
  name: 'Amazon',
  logo: (
    <a
      href="https://www.amazon.com.mx/wedding/share/Pablo-Paloma"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={amazonLogo}
        alt="Amazon"
        style={{ width: '100%', height: 'auto', maxWidth: '150px' }}
      />
    </a>
  ),
  url: 'https://www.amazon.com.mx/wedding/share/Pablo-Paloma',
}

export const guestInformation = [
  {
    id: 'PZDOYD',
    message:
      'Adrian, te queremos mucho, tenerte en nuestra vida nos alegra el corazon, gracias por formar parte de este momento.',
    numberGuests: 1,
  },
  {
    id: 'SPVYCE',
    message:
      'Aida, gracias por quererme tanto y siempre consentirme con tus detalles en las diferentes etapas de mi vida, te quiero mucho.',
    numberGuests: 1,
  },
  {
    id: 'GJIVND',
    message:
      'Alice, gracias por siempre alegrarte con nosotros y por tu amistad genuina, nos hace muy felices poder compartir contigo este momento.',
    numberGuests: 1,
  },
  {
    id: 'BZTCRD',
    message:
      'Sayda, te queremos mucho, gracias por tu amistad siempre tan generosa y honesta, nos hace muy feliz tenerte con nosotros.',
    numberGuests: 2,
  },
  {
    id: 'AEPTVJ',
    message:
      'Angie, nuestra colombiana mexicana, te queremos mucho y nos hace muy felices que estes viviendo esto con nosotros, gracias por tu calida amistad y cariño.',
    numberGuests: 1,
  },
  {
    id: 'JFAMDZ',
    message:
      'Bere, nuestra amistad es algo que aprecio mucho, gracias por siempre alegrarte conmigo, por tu amistad honesta y amorosa, te quiero mucho.',
    numberGuests: 1,
  },
  {
    id: 'RTECHM',
    message:
      'Beto y Sara, en este dia tan especial para nosotros no puedo imaginarme no tenerlos cerca, gracias por ser como hermanos para mi y estar para mi familia en todo momento.',
    numberGuests: 4,
  },
  {
    id: 'ISGUBJ',
    message:
      'Brenda, gracias por quererme tanto, que alegría poder compartir contigo este momento.',
    numberGuests: 1,
  },
  {
    id: 'POUFPP',
    message:
      'Bri, gracias por cada consejo y por ser una amistad que me acerca al Señor, me hace muy feliz compartir este momento contigo.',
    numberGuests: 1,
  },
  {
    id: 'PCRPLY',
    message:
      'Cesar, tus pasos de baile no podían faltar en la pista, tu amistad me alegra el corazón y me hace muy feliz que seas parte de nuestra vida.',
    numberGuests: 1,
  },
  {
    id: 'PSYNDH',
    message:
      'Diana, aprecio mucho tu amistad, durante nuestro tiempo trabajando juntas fuiste un lugar seguro para mi, gracias por tu amistad desinteresada y tus consejos, te quiero mucho. ',
    numberGuests: 1,
  },
  {
    id: 'NJDPQN',
    message:
      'Diana, que alegría es que formes parte de este momento en nuestras vidas, gracias por tu amistad siempre honesta y por cada consejo que me haz brindado. ',
    numberGuests: 1,
  },
  {
    id: 'FNJOSG',
    message:
      'Erika, gracias por ser el hada madrina que resuelve cualquier situación, me hace feliz poder compartir este momento contigo. ',
    numberGuests: 2,
  },
  {
    id: 'NQJRIY',
    message:
      'Familia Pequeño, los quiero mucho, gracias por siempre demostrarme su cariño, me hace muy feliz que formen parte de este momento. ',
    numberGuests: 4,
  },
  {
    id: 'JGPZHJ',
    message:
      'Fany, me hace muy feliz que formes parte de este momento, te quiero. ',
    numberGuests: 2,
  },
  {
    id: 'JNQCYT',
    message:
      'Fufo, queremos verte gozandola en la pista, gracias por tu amistad, nos hace muy felices tenerte con nosotros en este día.',
    numberGuests: 1,
  },
  {
    id: 'FTUFET',
    message:
      'Gabuas, mi amiga más viajera, gracias por todos estos años de amistad, te quiero mucho y me hace muy feliz compartir este día tan especial contigo.',
    numberGuests: 1,
  },
  {
    id: 'JTEBWT',
    message:
      'Gaby, gracias por ser como un hermano para mi, gracias por todo el amor que siempre nos demuestras, me hace muy feliz tenerte en este dia tan especial.',
    numberGuests: 1,
  },
  {
    id: 'MBGVOP',
    message:
      'Hillary, nuestra hermandad es para siempre, no puedo agradecerte suficiente todo lo que haces por mi con tal de que yo sea feliz, tu amistad es un regalo y un tesoro para mi, te amo y recuerda que podemos seguir llendo a misa juntas aunque este casada haha. ',
    numberGuests: 1,
  },
  {
    id: 'BRVYRT',
    message:
      'Janeth y Roy, gracias por formar parte de este momento tan especial en mi vida.',
    numberGuests: 2,
  },
  {
    id: 'NYYTMM',
    message:
      'Jessi, gracias por alegrarte con nosotros, no hace muy felices que puedas ser parte de este momento.',
    numberGuests: 1,
  },
  {
    id: 'ZTJOYB',
    message:
      'Josué. gracias por tu amistad y por formar parte de este momento tan especial.',
    numberGuests: 1,
  },
  {
    id: 'VGPLWU',
    message:
      'Karen, mi amiguita foránea, todos nuestros recuerdos juntas los atesoro en mi corazón, gracias por siempre adoptarme en tu depa y gracias por siempre hacerme sentir tu amor a pesar de la distancia, me hace demasiado feliz poder compartir contigo este momento.',
    numberGuests: 1,
  },
  {
    id: 'MWLSFL',
    message:
      'Katy, Hassan, Mila y Manara, los quiero mucho, gracias por siempre estar para mi cuando lo he necesitado, me hace muy feliz compartir este momento con ustedes. ',
    numberGuests: 4,
  },
  {
    id: 'BLPNNU',
    message:
      'Lizy, nuestra bailarina estrella, gracias por formar parte de este momento, te queremos mucho. ',
    numberGuests: 2,
  },
  {
    id: 'WGIZJI',
    message:
      'Lolis, gracias por tu amistad, gracias por cada consejo honesto que me haz brindado y gracias por hacer mi ramo de ensueño realidad, me hace muy feliz que formes parte de este día. ',
    numberGuests: 2,
  },
  {
    id: 'MCOSYM',
    message:
      'Lucy, quién diría que nos enamorariamos de ticos haha, significa mucho para mi poder compartir este momento contigo, gracias por siempre alegrarte con nosotros, te quiero mucho. ',
    numberGuests: 1,
  },
  {
    id: 'EHELQB',
    message:
      'Mariale, tu amistad es sinonimo de alegría en nuestra vida, gracias por tu generosidad y amor para con nosotros, te queremos mucho.',
    numberGuests: 1,
  },
  {
    id: 'RJQDNY',
    message:
      'Marianita, que alegría es que puedas compartir con nosotros este momento, te quiero.',
    numberGuests: 2,
  },
  {
    id: 'SBUUYD',
    message:
      'Mega y Araly, gracias por ser parte de mi familia, por siempre estar para nosotros, por su generosidad y atenciones, los quiero mucho.',
    numberGuests: 4,
  },
  {
    id: 'FVLWRW',
    message:
      'Miriam, gracias por formar parte de este momento tan especial en mi vida.',
    numberGuests: 2,
  },
  {
    id: 'TGNLMS',
    message:
      'Monica, Arturo y Mariana, gracias por formar parte de este momento tan especial en mi vida.',
    numberGuests: 3,
  },
  {
    id: 'RBJQXW',
    message:
      'Mony, gracias por cada consejo que me haz brindado, me hace muy feliz compartir este momento contigo.',
    numberGuests: 1,
  },
  {
    id: 'ICMASO',
    message:
      'Myrthala, gracias por alegrarte con nosotros, te quiero mucho y me hace feliz que seas parte de este momento. ',
    numberGuests: 1,
  },
  {
    id: 'MIVMSI',
    message:
      'Nadia, te quiero mucho y me hace muy feliz que sigas formando parte de mi vida, te agradezco todo lo que me enseñaste, gracias por formar parte de este momento tan especial. ',
    numberGuests: 2,
  },
  {
    id: 'TAULDL',
    message:
      'Natalia Zapiain, gracias por todos estos años de amistad, me hace muy feliz que estemos creciendo juntas y compartir estos momentos tan felices contigo.',
    numberGuests: 1,
  },
  {
    id: 'HWGTBS',
    message:
      'Nelly y Tio Hector, gracias por cada consejo que me ayudo a crecer, su oración nos sostiene y damos gracias a Dios por conocerlos',
    numberGuests: 2,
  },
  {
    id: 'IEBGLT',
    message:
      'Prima, te quiero mucho y aunque la distancia nos separe siempre debes saber lo mucho que te quiero y lo feliz que me hace tenerte conmigo este día.',
    numberGuests: 2,
  },
  {
    id: 'ATDPKR',
    message:
      'Primo, me hace muy feliz poder compartir este momento tan importante con ustedes, los quiero.',
    numberGuests: 2,
  },
  {
    id: 'ZFEPNT',
    message:
      'Roberto y Yareli, que alegría poder compartir este momento tan importante con ustedes, gracias por alegrarse con nosotros. ',
    numberGuests: 2,
  },
  {
    id: 'LGRVHR',
    message:
      'Sam, mi amiga más iconic, te quiero mucho y me llena el corazón compartir este momento de alegría contigo, que nunca se nos acaben los reencuentros anuales y el chismesito.',
    numberGuests: 1,
  },
  {
    id: 'MYEQZU',
    message:
      'Sandy y Over, gracias por alegrarse con nosotros y compartir este momento tan especial.',
    numberGuests: 2,
  },
  {
    id: 'NTWWIQ',
    message:
      'Sra Lidia, gracias por todas sus atenciones en diferentes momentos de mi vida, me alegra compartir este día con usted.',
    numberGuests: 2,
  },
  {
    id: 'HZDFUC',
    message:
      'Tia Carmen, gracias por formar parte de este momento tan especial en mi vida.',
    numberGuests: 1,
  },
  {
    id: 'IIWYHG',
    message:
      'Tia Carmen, la quiero mucho, gracias por su calido amor y gracias por alegrarse con nosotros en este día.',
    numberGuests: 2,
  },
  {
    id: 'BQZDOD',
    message:
      'Tia Cecy, le agradezco todo su amor y atenciones que siempre tiene conmigo, la quiero mucho y me hace muy feliz que sea parte de este momento de mi vida. ',
    numberGuests: 1,
  },
  {
    id: 'EPTEQE',
    message:
      'Queridos Tia Guadalupe, Tia Paty y Rodrigo significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 3,
  },
  {
    id: 'SGGCST',
    message:
      'Tia Juany y Tio Manuel, los quiero mucho y me hace muy feliz que compartan conmigo este momento. ',
    numberGuests: 2,
  },
  {
    id: 'ZZXMJO',
    message:
      'Queridos Tia Lily y Tio Francisco  significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'PAWRMY',
    message:
      'Tia Paty, Tio Enrique gracias por formar parte de este momento tan especial en mi vida.',
    numberGuests: 2,
  },
  {
    id: 'OIONWG',
    message:
      'Tia Pera, gracias por amarme como a una hija, la amo y le agradezco a Dios tenerla en mi vida y sobretodo poder compartir estos momentos con usted.',
    numberGuests: 1,
  },
  {
    id: 'WFFZDE',
    message:
      'Tia Tita y Tio German, gracias por siempre estar para mi familia, gracias por quererme tanto y por su generoso amor, me hace muy feliz compartir esta alegría con usted.',
    numberGuests: 3,
  },
  {
    id: 'KARELT',
    message:
      'Tia Vero y Tio Lauro, me hace muy feliz poder compartir este momento con ustedes.',
    numberGuests: 2,
  },
  {
    id: 'UIRMKK',
    message:
      'Tio Beto y Tia Chayo, me hace muy feliz poder compartir este momento tan importante con ustedes, los quiero mucho.',
    numberGuests: 2,
  },
  {
    id: 'OCCTCL',
    message:
      'Tio Carlos y Tia Yadira, gracias por su cariño, me hace muy feliz que sean parte de este momento.',
    numberGuests: 2,
  },
  {
    id: 'CODGXL',
    message:
      'Tio Carlos, gracias por todo su amor y por siempre ser tan generoso con mi familia, le agradezco todo lo que ha hecho por nosotros, me hace muy feliz que me pueda acompañar en este gran momento de mi vida.',
    numberGuests: 1,
  },
  {
    id: 'OOXMIN',
    message:
      'Tio Ramiro y Tia Lidia, gracias por siempre ser atentos conmigo, me hace muy feliz que puedan acompañarnos en este dia.',
    numberGuests: 2,
  },
  {
    id: 'EEPKPA',
    message:
      'Tio Raúl, gracias por quererme tanto, me hace muy feliz compartir con usted este día.',
    numberGuests: 1,
  },
  {
    id: 'OYXQUS',
    message:
      'Tio Rogelio y Tia Jazmin, me hace muy feliz poder compartir este momento tan importante con ustedes y mis primos, los quiero mucho.',
    numberGuests: 5,
  },
  {
    id: 'PUQHYX',
    message:
      'Queridos Tio Victor y Tia Silvia, significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'EAMJSE',
    message:
      'Vale, gracias por tantos años de amistad que hemos compartido, que nunca se acabe el chismesito y los reencuentros anuales haha, te quiero mucho y me hace muy feliz que formes parte de este momento.',
    numberGuests: 1,
  },
  {
    id: 'DHJKMA',
    message:
      'Yare, gracias por tu amistad, nos hace muy felices que compartas este momento con nosotros.',
    numberGuests: 1,
  },
  {
    id: 'HYFJZX',
    message:
      'Yuli, gracias por quererme tanto y por siempre compartirme la cuenta de spotify haha, me hace muy feliz que puedas compartir con nosotros este día, te quiero.',
    numberGuests: 1,
  },
  {
    id: 'QLXRHO',
    message:
      'Queridos Tia Connie y Tio Ricardo significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'BONMFL',
    message:
      'Querida Sra Irmita significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'NVONUK',
    message:
      'Querida Sra Tita significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'NDWGRJ',
    message:
      'Querida Titi significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'XITOTH',
    message:
      'Queridos Tavo, Magy y Natalia significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 3,
  },
  {
    id: 'XBZDHH',
    message:
      'Querido Ivan significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'NEFCKX',
    message:
      'Querida Tia Brenda  significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'XAHJSG',
    message:
      'Querida Tia Marcela significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'ZBMIQT',
    message:
      'Querida Jessi significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'ECDXAN',
    message:
      'Queridos Janeth y Francisco significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'UCRCUG',
    message:
      'Querida Tatiana significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'CMDODR',
    message:
      'Querido Diego significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'CLMBMG',
    message:
      'Querida Lili significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'VVLTBL',
    message:
      'Querida Caro significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'ZUZKFJ',
    message:
      'Querida Virginia significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'MCJBAJ',
    message:
      'Querida Charly significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'EIUHTP',
    message:
      'Querida Gaby significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'XJDLIT',
    message:
      'Querida Clau significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'DLZLUG',
    message:
      'Querida Yana significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'TPUSPO',
    message:
      'Querida Renata significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
  },
  {
    id: 'ANDBBE',
    message:
      'Querido Alan significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'WYWPLL',
    message:
      'Querido Ernesto significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
  },
  {
    id: 'PRJZOV',
    message:
      'Juan Ca, estoy demasiado agradecido con Dios por tu vida y sobretodo el poder llamarte mi amigo, no solo un líder de Shalom más jeje sino un verdadero amigo, compañero de batalla. Y ahora poder compartir con Sofi y vos el inicio de esta nueva aventura que estoy por empezar.',
    numberGuests: 1,
  },
  {
    id: 'TSOGJL',
    message:
      'Aurorita, es difícil poner en un mensaje tan corto más de 15 años de amistad, pero quería agradecerte por la increíble amiga y hermana que haz sido todo este tiempo, por todas las aventuras y tonteras que hemos hecho jajajaja estamos muy felices de poder compartir con vos este inicio de una nueva etapa de vida ',
    numberGuests: 2,
  },
  {
    id: 'JEYWGX',
    message:
      'Irenita querida, gracias por tu amistad, nos alegra mucho poder tenerte en este momento tan especial para nosotros ',
    numberGuests: 1,
  },
  {
    id: 'HRLYSQ',
    message:
      'Annie queríamos darte gracias por tu gran amistad, desde que Paloma viajo por primera vez a CR haz sido la mejor. Y estamos demasiado alegres de que puedas ser parte de este inicio de una gran aventura :)',
    numberGuests: 1,
  },
  {
    id: 'IZDQXE',
    message:
      'Mae Javi quien se hubiera imaginado hace 11 años que estábamos en Managua (escapandonos a Granada) esperando a un retiro de los Siervos de la Palabra que hoy ibas a estar casado y yo a punto de jajajaja gracias por todos estos años de amistad y de aventuras locas que hemos tenido. Nos emociona muchísimo que seas parte de el inicio de esta nueva aventura 🤩',
    numberGuests: 2,
  },
  {
    id: 'ASUYJS',
    message:
      'Mi Bro (JDG) quería agradecerte por tu hermandad todos estos años la verdad para mí ha sido todo un honor poder compartir en grupo con vos y ahora que tengamos esta aventura de relaciones a distancia regioticas. Estamos muy felices Paloma y yo de poder contar con Tigo en el inicio de esta Gran Aventura.',
    numberGuests: 1,
  },
  {
    id: 'SEOBNY',
    message:
      'Carito, soy demasiado feliz de tenerte como prima, siempre le pones demasiada alegría a la vida y a toda la dinámica de los Quesada y estamos muy felices de que Antonio y vos vayan a poder ser parte de este momento tan especial de nuestra vida.',
    numberGuests: 2,
  },
  {
    id: 'DGXNCI',
    message:
      'Verito querida, primero quería decirte que te quiero muchísimo y que estoy demasiado feliz con el Señor por haberte puesto en mi vida. Cada aventura que hemos tenido desde muy niños hasta ya viajes de adultos y me alegra muchísimo que vayas a ser parte de esta nueva aventura que estamos por empezar Paloma y yo ',
    numberGuests: 1,
  },
  {
    id: 'ZGFAVQ',
    message:
      'Anita mi hermanita quería aprovechar esta oportunidad para agradecerte por tu amistad todo este tiempo y más recientemente hemos podido compartir Cris y vos con Paloma y conmigo. Para nosotros es un gusto increíble poder contar con ustedes en este día tan especial y nos va a ser muy feliz que podamos seguir poniendo recuerdos conjuntos con este momento tan importante para nosotros',
    numberGuests: 2,
  },
  {
    id: 'AOYBJR',
    message:
      'Nats primero que todo quería darte gracias por tu amistad en esta más de una década de tiempo que tenemos de ser hermanitos y decirte que para nosotros es sumamente especial el poder contar contigo en este día tan importante para nosotros.',
    numberGuests: 1,
  },
  {
    id: 'PMUPKB',
    message:
      'Mae Jeffrey quería aprovechar este momento para agradecerte por tu amistad y compañerismo realmente soy muy afortunado de haber estado con vos en el científico pero también en todas las otras aventuras que tuvimos olimpiadas de robótica aprender a dar clases de programación aprender a lidiar con niños y aunque no hemos estado tan cercanos últimamente desde que yo me fui a México para mí es sumamente especial el poder contar con vos en este día tan importante de mi vida',
    numberGuests: 1,
  },
  {
    id: 'LEZOAY',
    message:
      'Tixi, me es complicado poder describir la increíble amistad que tenemos, eres una grandiosa amiga que siempre busca como ayudar y apoyar. Enserio nos alegra mucho que vayas a ser parte de nuestra vida y de esta nueva etapa que estamos empezando.',
    numberGuests: 1,
  },
  {
    id: 'BUMMMO',
    message:
      'Mae Eddy quería aprovechar para darte gracias y honrarte por este tiempo que he podido conocerte en GP, sos un hombre increíble y un cristiano radical, gracias por tu amistad sincera. Para nosotros es de mucha alegría poder contar con vos en nuestra boda y que nos acompañes en este día tan especial ',
    numberGuests: 2,
  },
  {
    id: 'VYIYNV',
    message:
      'Sofi, muchas gracias por tantos años de amistad y de crecer juntos, desde adolescentes medio locos hasta ya casados (aunque tú te adelantaste muchísimo) queria que supieras que es muy especial que podas acompañarnos en este día tan importante y seguir sumando grandiosos recuerdos a los muchos que hemos acumulado ',
    numberGuests: 2,
  },
  {
    id: 'HEUUAJ',
    message:
      'Vicky gracias por tantos años de amistad :D y por qué haz buscado también ser amiga de Paloma y estamos super felices de que vayas a poder parte del inicio de esta gran aventura ',
    numberGuests: 1,
  },
  {
    id: 'TVNXHQ',
    message:
      'Mae Quintero le doy demasiadas gracias a Dios por tu vida y por tantos años de amistad, hermandad, servicio juntos, etc. Realmente haz sido una bendición en mi vida, un hombre en quien se que puedo confiar plenamente y estoy muy feliz de por compartir contigo del inicio de esta nueva aventura ',
    numberGuests: 1,
  },
  {
    id: 'SOVCIJ',
    message:
      'Mari amiga querida, quería darte gracias por todos estos años de amistad :) y nos alegraría que puedas ser parte de este inicio de mi nueva familia :D',
    numberGuests: 1,
  },
  {
    id: 'GIWOAX',
    message:
      'Irenita hace poco estaba revisando y limpiando mi WhatsApp y me di cuenta que el mensaje más viejo que tengo es una receta de brownie de chocolate en microondas que me mandaste a inicios del 2015 por que ocupaba con urgencia llevar algo a una actividad 😂 y eso es un buen ejemplo de como eres, siempre buscando como ayudar, como servir, que detalle especial y personal regalar. Quiero darte gracias por todos estos años de amistad, Paloma y yo estamos muy alegres de que vayas a formar parte de nuestra vida y que nos puedas acompañar en este inicio de una nueva etapa',
    numberGuests: 2,
  },
  {
    id: 'KSYEGS',
    message:
      'Mae Alex, le doy muchas gracias a Dios por tu vida y por el gran compartir que tuvimos el tiempo que estuvimos juntos en GP y estoy muy feliz por qué puedas acompañarnos en el inicio de esta gran aventura que es el matrimonio.',
    numberGuests: 2,
  },
  {
    id: 'BQGUVS',
    message:
      'Mae Jhonny quería darte mil gracias por todos estos años de amistad, desde que llegaste a CR en el 2018 super que en ti había encontrado un buen amigo, pero sobretodo cuando volví de los siervos descubrí que era más real de lo que había esperado. Compartir con vos en GP es increíble, he aprendido mucho de ti y me alegra que vayas a ser parte del este paso a una nueva etapa',
    numberGuests: 1,
  },
  {
    id: 'HMNPXR',
    message:
      'Mae Chue luego de una vida de crecer juntos y vivir cada uno de las etapas de la vida, desde CCC, Shalom, CEM, etc. Y ahora el poder compartir mi brinco a esta nueva etapa contigo es súper alegre para mí :D ',
    numberGuests: 1,
  },
  {
    id: 'ZIYSYD',
    message:
      'Majo !!!! Paloma y yo estamos super agradecidos con vos por todo lo que haz hecho por nosotros :) no se que habríamos hecho sin tu ayuda para la civil, pero también quería darte gracias por todos estos años de amistad, por eso nos alegra mucho que puedas ser parte de este inicio de una nueva aventura',
    numberGuests: 1,
  },
  {
    id: 'XDTXWI',
    message:
      'Valkis !! Le doy demasiadas gracias a Dios por tu vida y por tantos años de amistad que hemos tenido, por todas las aventuras y enredos en los que nos hemos metido jeje y estoy súper feliz de poder contar con vos en el inicio de esta nueva aventura :D',
    numberGuests: 1,
  },
  {
    id: 'ILMFXG',
    message:
      'Hugo, gracias por tu amistad y por formar parte de este momento tan increible para nosotros, queremos verte gozandola en la pista.',
    numberGuests: 1,
  },
  {
    id: 'YJWVSG',
    message:
      'Omar, gracias por tantos años de amistad sincera y por las pláticas profundas en el carro, nos alegra mucho que seas parte de nuestra vida.',
    numberGuests: 1,
  },
  {
    id: 'QZIUTR',
    message:
      'Juansa, nos alegra tenerte con nosotros en este día, tu amistad siempre generosa y servicial ha sido de mucha bendición para nosotros, te queremos mucho. ',
    numberGuests: 1,
  },
  {
    id: 'FMMPGR',
    message:
      'Montsesita, te queremos mucho y nos hace muy felices tenerte en nuestra vida.',
    numberGuests: 1,
  },
  {
    id: 'CSSQDJ',
    message:
      'Andy, tu vida ha sido de bendición para la nuestra, gracias por todo lo que haz hecho por nosotros, te debemos muchas y nos hace muy felices gozar este día contigo, te queremos mucho. ',
    numberGuests: 1,
  },
  {
    id: 'CXYDDH',
    message:
      'Vicky, gracias por todos estos años de amistad tan generosa que haz tenido con nosotros, lo valoramos mucho y no podemos imaginarnos este día sin tí, te queremos mucho. ',
    numberGuests: 1,
  },
  {
    id: 'DGSQMP',
    message:
      'Nati, tu amistad alegre y sincera nos llena el corazón, gracias por querernos tanto, nos alegra mucho compartir contigo este momento.',
    numberGuests: 1,
  },
  {
    id: 'TRMIHY',
    message:
      'Paola, gracias por querernos tanto, por tu generosidad que no hay forma de pagar y por alegrarte con nosotros, te queremos mucho.',
    numberGuests: 1,
  },
  {
    id: 'CLJPJM',
    message:
      'Michelle, contar con tu amistad es una alegría, gracias por querernos tanto y formar parte de nuestra vida, te queremoc mucho. ',
    numberGuests: 1,
  },
  {
    id: 'RQWBBD',
    message:
      'Bety y Dany, agradecemos contar con su amistad, gracias por siempre tener un consejo y ser guía para nosotros, los queremos.',
    numberGuests: 2,
  },
  {
    id: 'SCIOAR',
    message:
      'Eymi, siempre seras mi mejor amiga, recuerda que aunque este casada tu siempre serás mi relación más larga, te amo.',
    numberGuests: 2,
  },
  {
    id: 'TBDAOB',
    message:
      'Ani, la siguiente eres tú!, gracias por cada aventura, gracias por amarme tanto y nunca reservarte nada, sin duda tu vida es una bendicion en la mía, te amo. ',
    numberGuests: 2,
  },
  {
    id: 'NHGEJW',
    message:
      'Tania, no puedo agradecerte tanto amor que me das, pero quiero que sepas que valoro mucho todo lo que haces por verme feliz, eres una bendicion, te amo. ',
    numberGuests: 1,
  },
  {
    id: 'GFSYNR',
    message:
      'Lau, gracias por todo el apoyo que siempre nos haz brindado, valoramos mucho lo que haz hecho por nosotros, te queremos mucho. ',
    numberGuests: 1,
  },
  {
    id: 'MSFWCL',
    message:
      'Alfre y Ana Grace, que alegría poder compartir este momento con ustedes, los queremos!',
    numberGuests: 2,
  },
  {
    id: 'MELVQN',
    message:
      'Janeth, te quiero mucho y le doy gracias a Dios por todos estos años de amistad, nos alegra mucho poder compartir este momento contigo.',
    numberGuests: 1,
  },
  {
    id: 'IIRWML',
    message:
      'Madaes, gracias por cada consejo, por siempre alegrarte con nosotros, te queremos y nos alegra compartir este momento contigo.',
    numberGuests: 1,
  },
  {
    id: 'KQKDFQ',
    message:
      'Natalia, que gozó es ser tu amiga y que alegría es que ahora puedas compartir con nosotros este momento, te queremos.',
    numberGuests: 2,
  },
  {
    id: 'QBNRHF',
    message:
      'Jacquie, gracias por acompañarme en diferentes momentos de mi vida, valoro mucho nuestra amistad y te quiero demasiado, no me imagino este día especial sin ti. ',
    numberGuests: 2,
  },
  {
    id: 'EPDCHH',
    message:
      'Familia Nolasco, gracias por todo el apoyo que nos han brindado, conocerlos es una bendición y son un ejemplo de familia para nosotros, los queremos mucho y nos hace muy felices compartir este día con ustedes. ',
    numberGuests: 4,
  },
  {
    id: 'ADQYEF',
    message:
      'Chris, nos alegra el corazón que formes parte de nuestra vida, gracias por querernos tanto y alegrarte con nosotros.',
    numberGuests: 1,
  },
  {
    id: 'RXBSXS',
    message:
      'Nana, te queremos mucho y tu amistad es muy valiosa para nosotros, gracias por ser parte de esta alegría que sentimos.',
    numberGuests: 1,
  },
  {
    id: 'AFECWK',
    message:
      'Andrea, tu amistad es un regalo, gracias por siempre alegrarte con nosotros y también brindarnos tu apoyo cuando lo hemos necesitado, te queremos mucho y ya te queremos ver gozandola en la pista. ',
    numberGuests: 1,
  },
  {
    id: 'EYGPCY',
    message:
      'Said, nos hace muy felices que puedas vivir esto con nosotros, gracias por tu amistad generosa y por alegrarte desde el primer dia por nosotros, te queremos.',
    numberGuests: 1,
  },
  {
    id: 'MODKJD',
    message:
      'Beto, gracias por tu amistad tan honesta y siempre dispuesta a servir, te queremos mucho y nos hace muy felices compartir este momento contigo.',
    numberGuests: 1,
  },
  {
    id: 'MGEYIS',
    message:
      'Pepe y Lupita, su amistad es un regalo que nos alegra el corazón, gracias por formar parte de este momento. ',
    numberGuests: 2,
  },
  {
    id: 'GGVVAC',
    message:
      'Luis Diego y Melanie, nada nos hace más felices que estén de regreso en mty y puedan formar parte de este momento tan especial, gracias por cada consejo que nos han brindado, los queremos muchisimo. ',
    numberGuests: 2,
  },
  {
    id: 'CBJWKX',
    message:
      'Anyely, gracias por querernos tanto y siempre demostrarnoslo, que alegría es poder compartir este momento contigo, a partir de ahora te quedas como presidenta del club de los noviazgos a distancia con ticos hahaha te queremos. ',
    numberGuests: 1,
  },
  {
    id: 'CVYMUY',
    message:
      'Salmita, nuestra Dra fav, gracias por tu amistad tan bonita y sincera, te queremos mucho y nos alegra poder compartir esto contigo.',
    numberGuests: 2,
  },
  {
    id: 'NLKELA',
    message:
      'Padre Borre, muchas gracias por brindarnos su guía y sobretodo su amistad, gracias por cada consejo y compartir que ha terminado en sesion pastoral haha lo queremos mucho, gracias por ser parte de nuestra unión. ',
    numberGuests: 1,
  },
  {
    id: 'SFFRMK',
    message:
      'Lore, gracias por cada consejo que me haz brindado y por ser parte de mi vida, tu amistad es muy valiosa para nosotros y nos hace muy felices que seas parte de este momento.',
    numberGuests: 1,
  },
  {
    id: 'YOEVMG',
    message:
      'Mae Santi, primero que todo quería darte gracias por tu gran amistad, por tantos años que hemos tenido desde que estabamos en Shalom intentando hacer una maquina de algodon de azucar manualmente y sirviendo juntos por tantos años y ahora en esta nueva etapa de vida, gracias por tu gran hermandad y me alegra muchisimo que vayas a poder ser parte del inicio de esta gran aventura',
    numberGuests: 2,
  },
  {
    id: 'FFVYOR',
    message:
      'Mae Chais, quería darte gracias por tantos años de amistad, hemos vivido un chorro de cosas juntos, como estar con los Siervos y vivir este llamado comunitario, quiero que sepas que te quiero muchisimo y es muy importante para mi el poder contar con vos en este día tan especial para nosotros dos, te queremos muchisimo',
    numberGuests: 1,
  },
  {
    id: 'IOUVPG',
    message:
      'Mae Ale, queria darle gracias a Dios por tu vida, soy sumamente afortunado de poder llamarte mi amigo y por lo tanto estoy super feliz y agradecido con que podas acompañarnos en este día tan importante para nosotros. Te queremos mucho',
    numberGuests: 1,
  },
  {
    id: 'KTYQZS',
    message:
      'Silvi queria aprovechar para darte las gracias por tantos años de amistad (atte Pablo), realmente sos super especial para nosotros como pareja, la manera en que acogiste a Paloma desde la primera vez que fue a Costa Rica y todo lo que nos hemos acercado este tiempo, por eso es sumamente especial que puedas acompañarnos en este inicio de nuestro matrimonio',
    numberGuests: 2,
  },
  {
    id: 'FPXFHA',
    message:
      'Memish!! Primero que todo quería darle gracias a Dios por tu vida y por haberte puesto en la mía, es dificil poner tantos años de amistad en estas pequeñas lineas pero realmente te agradezco por estos últimos años en que hemos compartido esta aventura de una relación (y ahora boda) regio-tica. Por eso es sumamente especial para nosotros poder contar con vos y con Richi en este día tan importante',
    numberGuests: 2,
  },
  {
    id: 'MSLTGW',
    message:
      'Hermanitaaaaaaa le doy demasiadas gracias a Dios por tu vida y por tantísimos años de aventuras juntos, desde estar juntos en los rallys como shalomitas, escaparnos de clases en la U, que me sacarás una cordal (regalando la otra)y ahora estoy muy feliz de que podamos empezar esta nueva etapa de casados tan cercanos de tiempo y nos encantaría que puedan acompañarnos al inicio de esta gran aventura ',
    numberGuests: 2,
  },
  {
    id: 'GDYNHD',
    message:
      'Mae Paolo, gracias por siempre alegrarte con nosotros y por tu amistad genuina, nos hace muy felices poder compartir contigo este momento.',
    numberGuests: 1,
  },
]

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
    lat: 25.424343,
    long: -100.151169,
  },
  {
    id: 'Fiesta',
    title: 'Recepción',
    icon: <ReceptionIconSvg />,
    location: 'Princess Wedding Garden',
    time: '19:30 HRS',
    lat: 25.472615,
    long: -100.169136,
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
        nombre: 'Banorte',
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
    name: 'Adrian Alvarado',
  },
  {
    id: 'UIRMKK',
    message:
      'Tio Beto y Tia Chayo, me hace muy feliz poder compartir este momento tan importante con ustedes, los quiero mucho.',
    numberGuests: 2,
    name: 'Tio Roberto Alvarado',
  },
  {
    id: 'OCCTCL',
    message:
      'Tio Carlos y Tia Yadira, gracias por su cariño, me hace muy feliz que sean parte de este momento.',
    numberGuests: 2,
    name: 'Tio Carlos',
  },
  {
    id: 'OOXMIN',
    message:
      'Tio Ramiro y Tia Lidia, gracias por siempre ser atentos conmigo, me hace muy feliz que puedan acompañarnos en este dia.',
    numberGuests: 2,
    name: 'Ramiro  Alvarado',
  },
  {
    id: 'OYXQUS',
    message:
      'Tio Rogelio y Tia Jazmin, me hace muy feliz poder compartir este momento tan importante con ustedes y mis primos, los quiero mucho.',
    numberGuests: 5,
    name: 'Rogelio Alvarado',
  },
  {
    id: 'RTECHM',
    message:
      'Beto y Sara, en este dia tan especial para nosotros no puedo imaginarme no tenerlos cerca, gracias por ser como hermanos para mi y estar para mi familia en todo momento.',
    numberGuests: 4,
    name: 'Roberto (primo) Alvarado',
  },
  {
    id: 'JTEBWT',
    message:
      'Gaby, gracias por ser como un hermano para mi, gracias por todo el amor que siempre nos demuestras, me hace muy feliz tenerte en este dia tan especial.',
    numberGuests: 1,
    name: 'Gabriel Alvarado',
  },
  {
    id: 'OIONWG',
    message:
      'Tia Pera, gracias por amarme como a una hija, la amo y le agradezco a Dios tenerla en mi vida y sobretodo poder compartir estos momentos con usted.',
    numberGuests: 1,
    name: 'Esperanza  Alvarado',
  },
  {
    id: 'EEPKPA',
    message:
      'Tio Raúl, gracias por quererme tanto, me hace muy feliz compartir con usted este día.',
    numberGuests: 1,
    name: 'Raúl  Alvarado',
  },
  {
    id: 'ZBMIQT',
    message:
      'Querida Jessi significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
    name: 'Jessi',
  },
  {
    id: 'ECDXAN',
    message:
      'Queridos Janeth y Francisco significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
    name: 'Janeth y Francisco',
  },
  {
    id: 'ATDPKR',
    message:
      'Ramirin, me hace muy feliz poder compartir este momento tan importante con ustedes, los quiero.',
    numberGuests: 2,
    name: 'Ramiro  Alvarado (primo)',
  },
  {
    id: 'NHVKFB',
    message:
      'Mae Chuy, no tengo las palabras suficientes (y este espacio es muy pequeño) para poder poner lo mucho que te quiero, a pesar de la distancia (que es mucha) haz llegado a ser mas que un amigo para mi, me haz visto en mis mejores y en mis peores momentos y me haz acompañado en cada una de mis etapas, como universitario, como afiliado, como siervo, como soltero, ennoviado y ahora caminando hacia el matrimonio, por eso me alegra mucho poder contar contigo en este día tan especial para nosotros.',
    numberGuests: 1,
    name: 'Jesús Anleu',
  },
  {
    id: 'IQOBOG',
    message:
      'Tío Horacio y tía Rosarío, los quiero muchisimo y estoy muy agradecido con ustedes por todo el cariño que me muestran cada vez que voy a Monterrey, gracias también por adoptarme aún cuando estabamos en plena pandemia y por mostrarme una hospitalidad como ninguna otra. Los queremos mucho y por eso nos alegraría mucho poder compartir con ustedes de este día tan especial para nosotros',
    numberGuests: 2,
    name: 'Horacio Anleu',
  },
  {
    id: 'FKIXZV',
    message:
      'María, gracias por querernos tanto, nos hace muy feliz compartir con usted este día.',
    numberGuests: 1,
    name: 'Maria Anleu',
  },
  {
    id: 'MPEEUT',
    message:
      'Sarai, gracias por toda tu amistad, significa mucho para nosotros poder compartir con vos este día tam importante para nosotros',
    numberGuests: 1,
    name: 'Sarai Anleu',
  },
  {
    id: 'PMFTWZ',
    message:
      'Mae Michell estoy demasiado agradecido con Dios por tu vida y por tu gran hermandad y sobretodo en esta nueva etapa que empecé, desde que conociste a Paloma la aceptaste y la hiciste sentir muy querida. Por eso nos alegra muchisimo que podas acompañarnos en este día tan importante para nosotros',
    numberGuests: 1,
    name: 'Michell',
  },
  {
    id: 'CMDODR',
    message:
      'Querido Diego significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
    name: 'Diego',
  },
  {
    id: 'BEMSAX',
    message:
      'Fer Ayala queria darte gracias por tu amistad y por que he podido ver a Dios actuar en mi vida a traves tuyo y no solo en el tiempo que estuve viviendo allá con los siervos sino de una manera muy personal en esta nueva etapa de mi vida, ya no solo por que tenes que, sino por que hay una hermandad real. Por eso estamos muy felices de poder contar con vos en este día tan importante para nuestra vida.',
    numberGuests: 1,
    name: 'Fernando Ayala',
  },
  {
    id: 'BZTCRD',
    message:
      'Sayda, te queremos mucho, gracias por tu amistad siempre tan generosa y honesta, nos hace muy feliz tenerte con nosotros.',
    numberGuests: 2,
    name: 'Sayda  Benitez',
  },
  {
    id: 'IIWYHG',
    message:
      'Tia Carmen, la quiero mucho, gracias por su calido amor y gracias por alegrarse con nosotros en este día.',
    numberGuests: 2,
    name: 'Carmen  Bishop',
  },
  {
    id: 'IEBGLT',
    message:
      'Prima, te quiero mucho y aunque la distancia nos separe siempre debes saber lo mucho que te quiero y lo feliz que me hace tenerte conmigo este día.',
    numberGuests: 2,
    name: 'Vanessa  Bolaños',
  },
  {
    id: 'WFFZDE',
    message:
      'Tia Tita y Tio German, gracias por siempre estar para mi familia, gracias por quererme tanto y por su generoso amor, me hace muy feliz compartir esta alegría con usted.',
    numberGuests: 3,
    name: 'Leticia Bolaños',
  },
  {
    id: 'QLXRHO',
    message:
      'Queridos Tia Connie y Tio Ricardo significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
    name: 'Tia Connie y Tio Ricardo',
  },
  {
    id: 'PCRPLY',
    message:
      'Cesar, tus pasos de baile no podían faltar en la pista, tu amistad me alegra el corazón y me hace muy feliz que seas parte de nuestra vida.',
    numberGuests: 1,
    name: 'Cesar  Calzada',
  },
  {
    id: 'ILMFXG',
    message:
      'Hugo, gracias por tu amistad y por formar parte de este momento tan increible para nosotros, queremos verte gozandola en la pista.',
    numberGuests: 1,
    name: 'Hugo  Canizales',
  },
  {
    id: 'YJWVSG',
    message:
      'Omar, gracias por tantos años de amistad sincera y por las pláticas profundas en el carro, nos alegra mucho que seas parte de nuestra vida.',
    numberGuests: 1,
    name: 'Omar  Castañeda',
  },
  {
    id: 'NLKRFB',
    message:
      'Luis Fe mi querido hermano, primero que todo quería darle gracias a Dios por tu vida y por tu amistad, eres un verdadero heramo y un gran apoyo todo el tiempo que hemos compartido allá en México. Aún me acuerdo de las loqueras que haciamos de adolescentes como ir en pañales a Shalom, las batallas de Paintball y los buenos tiempos de compartir en Savegre. Por eso estoy muy feliz de que nos acompañes en el inicio de esta gran aventura, te queremos mucho',
    numberGuests: 1,
    name: 'Luis Felipe Brenes',
  },
  {
    id: 'SPVYCE',
    message:
      'Aida, gracias por quererme tanto y siempre consentirme con tus detalles en las diferentes etapas de mi vida, te quiero mucho.',
    numberGuests: 1,
    name: 'Aida  Castillo',
  },
  {
    id: 'WTUFBW',
    message:
      'Guille, estoy muy agradecido con Dios por tu vida, haz sido todo un hermanod y un apoyo desde que viniste a Costa Rica y nos toco servir juntos hace varios años, el poder compartir tantas aventuras cuando estuve allá y el hecho de que estuvieras presente desde antes de que nosotros mismo supieramos que nos gustabamos jeje enserio eres super especial para nosotros dos y por eso nos alegra que podamos compartir este día tan importante para nosotros',
    numberGuests: 1,
    name: 'Guillermo Camilo',
  },
  {
    id: 'PUQHYX',
    message:
      'Queridos Tio Victor y Tia Silvia, significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
    name: 'Tio Victor y Tia Silvia,',
  },
  {
    id: 'SFFRMK',
    message:
      'Lore, gracias por cada consejo que me haz brindado y por ser parte de mi vida, tu amistad es muy valiosa para nosotros y nos hace muy felices que seas parte de este momento.',
    numberGuests: 1,
    name: 'Lorena Chavez',
  },
  {
    id: 'BONMFL',
    message:
      'Querida Sra Irmita significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
    name: 'Sra Irmita',
  },
  {
    id: 'NVONUK',
    message:
      'Querida Sra Tita significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
    name: 'Sra Tita',
  },
  {
    id: 'QZIUTR',
    message:
      'Juansa, nos alegra tenerte con nosotros en este día, tu amistad siempre generosa y servicial ha sido de mucha bendición para nosotros, te queremos mucho. ',
    numberGuests: 1,
    name: 'Juansa  Collins',
  },
  {
    id: 'FMMPGR',
    message:
      'Montsesita, te queremos mucho y nos hace muy felices tenerte en nuestra vida.',
    numberGuests: 1,
    name: 'Montse  Collins',
  },
  {
    id: 'PSYNDH',
    message:
      'Diana, aprecio mucho tu amistad, durante nuestro tiempo trabajando juntas fuiste un lugar seguro para mi, gracias por tu amistad desinteresada y tus consejos, te quiero mucho. ',
    numberGuests: 1,
    name: 'Diana  Cordero',
  },
  {
    id: 'TIUYTG',
    message:
      'Tita maruja, te quiero muchisimo, gracias por todo el amor que me haz dado por tantos años y por todos los consejos en este ultimo tiempo de noviazgo, estoy muy feliz de poder compartir contigo de este día tan especial',
    numberGuests: 1,
    name: 'Maruja Chavez',
  },
  {
    id: 'CSSQDJ',
    message:
      'Andy, tu vida ha sido de bendición para la nuestra, gracias por todo lo que haz hecho por nosotros, te debemos muchas y nos hace muy felices gozar este día contigo, te queremos mucho. ',
    numberGuests: 1,
    name: 'Andres Correa',
  },
  {
    id: 'CXYDDH',
    message:
      'Vicky, gracias por todos estos años de amistad tan generosa que haz tenido con nosotros, lo valoramos mucho y no podemos imaginarnos este día sin tí, te queremos mucho. ',
    numberGuests: 1,
    name: 'Victoria  Correa',
  },
  {
    id: 'RJQDNY',
    message:
      'Marianita, que alegría es que puedas compartir con nosotros este momento, te quiero.',
    numberGuests: 2,
    name: 'Mariana  Cruz',
  },
  {
    id: 'DGSQMP',
    message:
      'Nati, tu amistad alegre y sincera nos llena el corazón, gracias por querernos tanto, nos alegra mucho compartir contigo este momento.',
    numberGuests: 1,
    name: 'Natalia  Davila',
  },
  {
    id: 'VGPLWU',
    message:
      'Karen, mi amiguita foránea, todos nuestros recuerdos juntas los atesoro en mi corazón, gracias por siempre adoptarme en tu depa y gracias por siempre hacerme sentir tu amor a pesar de la distancia, me hace demasiado feliz poder compartir contigo este momento.',
    numberGuests: 1,
    name: 'Karen  De la cruz',
  },
  {
    id: 'HWGTBS',
    message:
      'Nelly y Tio Hector, gracias por cada consejo que me ayudo a crecer, su oración nos sostiene y damos gracias a Dios por conocerlos',
    numberGuests: 2,
    name: 'Nelly de Zamora',
  },
  {
    id: 'TRMIHY',
    message:
      'Paola, gracias por querernos tanto, por tu generosidad que no hay forma de pagar y por alegrarte con nosotros, te queremos mucho.',
    numberGuests: 1,
    name: 'Paola  Diez',
  },
  {
    id: 'FGRHPQ',
    message:
      'Prima! te quiero mucho, sos sumamente especial y no sabes lo feliz que me hace tenerte conmigo este día.',
    numberGuests: 2,
    name: 'Dayanna Cortés',
  },
  {
    id: 'ALUHRE',
    message:
      'Monica quería darle gracias a Dios por tu vida y por el poder tenerte como prima, te quiero mucho y me hace sumamente feliz poder compartir contigo este día tan especial ',
    numberGuests: 2,
    name: 'Monica Cortés',
  },
  {
    id: 'FFVYOR',
    message:
      'Mae Chais, quería darte gracias por tantos años de amistad, hemos vivido un chorro de cosas juntos, como estar con los Siervos y vivir este llamado comunitario, quiero que sepas que te quiero muchisimo y es muy importante para mi el poder contar con vos en este día tan especial para nosotros dos, te queremos muchisimo',
    numberGuests: 1,
    name: 'Christopher Duran',
  },
  {
    id: 'CLJPJM',
    message:
      'Michelle, contar con tu amistad es una alegría, gracias por querernos tanto y formar parte de nuestra vida, te queremoc mucho. ',
    numberGuests: 1,
    name: 'Michelle Duran',
  },
  {
    id: 'HYFJZX',
    message:
      'Yuli, gracias por quererme tanto y por siempre compartirme la cuenta de spotify haha, me hace muy feliz que puedas compartir con nosotros este día, te quiero.',
    numberGuests: 1,
    name: 'Yuliana Esparza',
  },
  {
    id: 'NJDPQN',
    message:
      'Diana, que alegría es que formes parte de este momento en nuestras vidas, gracias por tu amistad siempre honesta y por cada consejo que me haz brindado. ',
    numberGuests: 1,
    name: 'Diana  Flores',
  },
  {
    id: 'RQWBBD',
    message:
      'Bety y Dany, agradecemos contar con su amistad, gracias por siempre tener un consejo y ser guía para nosotros, los queremos.',
    numberGuests: 2,
    name: 'Beatriz  Freyman',
  },
  {
    id: 'FTUFET',
    message:
      'Gabuas, mi amiga más viajera, gracias por todos estos años de amistad, te quiero mucho y me hace muy feliz compartir este día tan especial contigo.',
    numberGuests: 1,
    name: 'Sofia Gabuardi',
  },
  {
    id: 'NDWGRJ',
    message:
      'Querida Titi significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
    name: 'Titi',
  },
  {
    id: 'SCIOAR',
    message:
      'Eymi, siempre seras mi mejor amiga, recuerda que aunque este casada tu siempre serás mi relación más larga, te amo.',
    numberGuests: 2,
    name: 'Eymi García',
  },
  {
    id: 'JFAMDZ',
    message:
      'Bere, nuestra amistad es algo que aprecio mucho, gracias por siempre alegrarte conmigo, por tu amistad honesta y amorosa, te quiero mucho.',
    numberGuests: 1,
    name: 'Berenice Garza',
  },
  {
    id: 'TGNLMS',
    message:
      'Monica, Arturo y Mariana, gracias por formar parte de este momento tan especial en mi vida.',
    numberGuests: 3,
    name: 'Mónica  Garza',
  },
  {
    id: 'JNQCYT',
    message:
      'Fufo, queremos verte gozandola en la pista, gracias por tu amistad, nos hace muy felices tenerte con nosotros en este día.',
    numberGuests: 1,
    name: 'Arnulfo Garza',
  },
  {
    id: 'MLKMUP',
    message:
      'Jess y Mario :D los quiero montones, ambos han sido sumamente especiales en mi vida, desde que Jess y yo estabamos en Shalom, luego pasar a CEM, que Mario llegara y yo lo mordiera (por error) en una de sus primeras reuniones y ahora uds 2 como matrimonio son top y todo un ejemplo a seguir. Gracias también por que han sabido abrir su hogar a Paloma y hacerla sentir parte de Costa Rica. Por eso estamos muy felices de poder compartir con ustedes este día tan importante para nosotros',
    numberGuests: 2,
    name: 'Jessi (Y Mario)',
  },
  {
    id: 'CUHBUA',
    message:
      'Eso Azoteeee jajajaja no ya poniendonos serios, Mau queria darte gracias por tu amistado todos estos años, desde que eras un niño que venia a quedarse a dormir a actividades de torre en la casa, hasta ahora ser compañeros de grupo, tu vida es una verdadera bendición. Por eso estamos muy felices de poder compartir contigo el inicio de nuestra nueva familia',
    numberGuests: 1,
    name: 'Mauricio Fonseca',
  },
  {
    id: 'DHIHBD',
    message:
      'Tíos Garza  los queremos mucho, gracias por siempre estar presentes, nos hace muy felices poder compartir este momento con ustedes. ',
    numberGuests: 2,
    name: 'Tio Arnulfo  Garza',
  },
  {
    id: 'TBDAOB',
    message:
      'Ani, la siguiente eres tú!, gracias por cada aventura, gracias por amarme tanto y nunca reservarte nada, sin duda tu vida es una bendicion en la mía, te amo. ',
    numberGuests: 2,
    name: 'Anilu Garza',
  },
  {
    id: 'NHGEJW',
    message:
      'Tania, no puedo agradecerte tanto amor que me das, pero quiero que sepas que valoro mucho todo lo que haces por verme feliz, eres una bendicion, te amo. ',
    numberGuests: 1,
    name: 'Tania  Garza',
  },
  {
    id: 'KLOHAC',
    message:
      'Mae Gadea, queria darle gracias a Dios por tu vida y por tu amistad, desde que estabamos en Shalom hasta el llegar a servir juntos en CEM, han sido muchos y muy buenos años de hermandad y de poder ver como Dios ha estado actuando en nuestras vidas. Ahora estoy muy alegre de poder compartir contigo del inicio de esta nueva aventura que estamos teniendo Paloma y yo',
    numberGuests: 2,
    name: 'Jose Rodolfo Gadea',
  },
  {
    id: 'EPTEQE',
    message:
      'Queridos Tia Guadalupe, Tia Paty y Rodrigo significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 3,
    name: 'Tia Guadalupe, Tia Paty y Rodrigo',
  },
  {
    id: 'ZZXMJO',
    message:
      'Queridos Tia Lily y Tio Francisco  significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
    name: 'Tia Lily y Tio Francisco ',
  },
  {
    id: 'XITOTH',
    message:
      'Queridos Tavo, Magy y Natalia significa mucho para nosotros que esten presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 3,
    name: 'Tavo, Magy y Natalia ',
  },
  {
    id: 'MYEQZU',
    message:
      'Sandy y Over, gracias por alegrarse con nosotros y compartir este momento tan especial.',
    numberGuests: 2,
    name: 'Sandy Guevara',
  },
  {
    id: 'HZDFUC',
    message:
      'Tia Carmen, gracias por formar parte de este momento tan especial en mi vida.',
    numberGuests: 1,
    name: 'Carmen  Guevara',
  },
  {
    id: 'GFSYNR',
    message:
      'Lau, gracias por todo el apoyo que siempre nos haz brindado, valoramos mucho lo que haz hecho por nosotros, te queremos mucho. ',
    numberGuests: 1,
    name: 'Laura  Hernández',
  },
  {
    id: 'EHELQB',
    message:
      'Mariale, tu amistad es sinonimo de alegría en nuestra vida, gracias por tu generosidad y amor para con nosotros, te queremos mucho.',
    numberGuests: 1,
    name: 'Mariale  Juarez',
  },
  {
    id: 'KARELT',
    message:
      'Tia Vero y Tio Lauro, me hace muy feliz poder compartir este momento con ustedes.',
    numberGuests: 2,
    name: 'Verónica Leal',
  },
  {
    id: 'MSFWCL',
    message:
      'Alfre y Ana Grace, que alegría poder compartir este momento con ustedes, los queremos!',
    numberGuests: 2,
    name: 'Alfredo Linarte',
  },
  {
    id: 'ETUFXV',
    message:
      'Eve, me alegra mucho poder llamarte mi prima, pones un sabor especial en la familia y Adrián también sos una adquicisión :O muy valiosa jeje enserio nos sentimos muy afortunados de ser familia de ustedes y estamos muy muy felices de poder compartir el inicio de esta gran aventura',
    numberGuests: 1,
    name: 'Evelyn  Gomez',
  },
  {
    id: 'ZTJOYB',
    message:
      'Josué. gracias por tu amistad y por formar parte de este momento tan especial.',
    numberGuests: 1,
    name: 'Josué Lopez',
  },
  {
    id: 'NACPGJ',
    message:
      'Mae Jorge, es muy pequeño este espacio para poder poner lo mucho que te quiero, aprecio con demasiado cariño los recuerdos de cuando eramos pequeños e ibamos a jugar a tu casa, el irnos al polideportivo o meternos en el cerro y que nos enseñaras todas tus habilidades de Scout jeje y me dolió mucho cuando te fuiste a USA por que sentí que habia perdido un muy buen amigo, pero estos últimos años en que hemos podido vernos más han sido muy reconformantes. Por eso estoy muy feliz de poder contar con vos en este día tan importante para mi vida y que ahora que vamos a estar "mas cerca" podamos vernos más seguido',
    numberGuests: 1,
    name: 'Jorge Ignacio Gongora',
  },
  {
    id: 'MELVQN',
    message:
      'Janeth, te quiero mucho y le doy gracias a Dios por todos estos años de amistad, nos alegra mucho poder compartir este momento contigo.',
    numberGuests: 1,
    name: 'Janeth  Lopez',
  },
  {
    id: 'CLMBMG',
    message:
      'Querida Lili significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 2,
    name: 'Lili',
  },
  {
    id: 'PAWRMY',
    message:
      'Tia Paty, Tio Enrique gracias por formar parte de este momento tan especial en mi vida.',
    numberGuests: 2,
    name: 'Tia Paty  Lozano',
  },
  {
    id: 'IIRWML',
    message:
      'Madaes, gracias por cada consejo, por siempre alegrarte con nosotros, te queremos y nos alegra compartir este momento contigo.',
    numberGuests: 1,
    name: 'Madaes Lozano',
  },
  {
    id: 'PRJZOV',
    message:
      'Juan Ca, estoy demasiado agradecido con Dios por tu vida y sobretodo el poder llamarte mi amigo, no solo un líder de Shalom más jeje sino un verdadero amigo, compañero de batalla. Y ahora poder compartir con Sofi y vos el inicio de esta nueva aventura que estoy por empezar.',
    numberGuests: 1,
    name: 'Juan Ca',
  },
  {
    id: 'FZBLQT',
    message:
      'Hola tíos, primero que todo queríamos darles gracias por todo su cariño, consejos, adoptar a Pablo cuando salio de los siervos, y por ser un matrimonio presente para nosotros, por eso nos alegra mucho compartir este día tan especial con ustedes. Los queremos mucho',
    numberGuests: 2,
    name: 'Javier Lugo',
  },
  {
    id: 'TSOGJL',
    message:
      'Aurorita, es difícil poner en un mensaje tan corto más de 15 años de amistad, pero quería agradecerte por la increíble amiga y hermana que haz sido todo este tiempo, por todas las aventuras y tonteras que hemos hecho jajajaja estamos muy felices de poder compartir con vos este inicio de una nueva etapa de vida ',
    numberGuests: 2,
    name: 'Au',
  },
  {
    id: 'YOEVMG',
    message:
      'Mae Santi, primero que todo quería darte gracias por tu gran amistad, por tantos años que hemos tenido desde que estabamos en Shalom intentando hacer una maquina de algodon de azucar manualmente y sirviendo juntos por tantos años y ahora en esta nueva etapa de vida, gracias por tu gran hermandad y me alegra muchisimo que vayas a poder ser parte del inicio de esta gran aventura',
    numberGuests: 2,
    name: 'Santiago  Barrantes',
  },
  {
    id: 'JEYWGX',
    message:
      'Irenita querida, gracias por tu amistad, nos alegra mucho poder tenerte en este momento tan especial para nosotros ',
    numberGuests: 1,
    name: 'Irene Campos',
  },
  {
    id: 'HRLYSQ',
    message:
      'Annie queríamos darte gracias por tu gran amistad, desde que Paloma viajo por primera vez a CR haz sido la mejor. Y estamos demasiado alegres de que puedas ser parte de este inicio de una gran aventura :)',
    numberGuests: 1,
    name: 'Annie ',
  },
  {
    id: 'IZDQXE',
    message:
      'Mae Javi quien se hubiera imaginado hace 11 años que estábamos en Managua (escapandonos a Granada) esperando a un retiro de los Siervos de la Palabra que hoy ibas a estar casado y yo a punto de jajajaja gracias por todos estos años de amistad y de aventuras locas que hemos tenido. Nos emociona muchísimo que seas parte de el inicio de esta nueva aventura 🤩',
    numberGuests: 2,
    name: 'Javi',
  },
  {
    id: 'IOUVPG',
    message:
      'Mae Ale, queria darle gracias a Dios por tu vida, soy sumamente afortunado de poder llamarte mi amigo y por lo tanto estoy super feliz y agradecido con que podas acompañarnos en este día tan importante para nosotros. Te queremos mucho',
    numberGuests: 1,
    name: 'Ale',
  },
  {
    id: 'KQKDFQ',
    message:
      'Natalia, que gozó es ser tu amiga y que alegría es que ahora puedas compartir con nosotros este momento, te queremos.',
    numberGuests: 2,
    name: 'Natalia Mancha',
  },
  {
    id: 'ISGUBJ',
    message:
      'Brenda, gracias por quererme tanto, que alegría poder compartir contigo este momento.',
    numberGuests: 1,
    name: 'Brenda  Martinez',
  },
  {
    id: 'ASUYJS',
    message:
      'Mi Bro (JDG) quería agradecerte por tu hermandad todos estos años la verdad para mí ha sido todo un honor poder compartir en grupo con vos y ahora que tengamos esta aventura de relaciones a distancia regioticas. Estamos muy felices Paloma y yo de poder contar con Tigo en el inicio de esta Gran Aventura.',
    numberGuests: 1,
    name: 'Jose Daniel Gadea',
  },
  {
    id: 'LGRVHR',
    message:
      'Sam, mi amiga más iconic, te quiero mucho y me llena el corazón compartir este momento de alegría contigo, que nunca se nos acaben los reencuentros anuales y el chismesito.',
    numberGuests: 1,
    name: 'Samantha Medina',
  },
  {
    id: 'SEOBNY',
    message:
      'Carito, soy demasiado feliz de tenerte como prima, siempre le pones demasiada alegría a la vida y a toda la dinámica de los Quesada y estamos muy felices de que Antonio y vos vayan a poder ser parte de este momento tan especial de nuestra vida.',
    numberGuests: 2,
    name: 'Carolina Gomez',
  },
  {
    id: 'AWXAEZ',
    message:
      'Tío Jorge, estoy muy agradecido por todo tu cariño y por todo lo que hemos compartido juntos y tanto Paloma y yo esperamos poder compartir con vos este día tan especial para nosotros',
    numberGuests: 1,
    name: 'Tío Jorge Madrigal',
  },
  {
    id: 'MCXLZX',
    message:
      'Mae Jorge estoy muy agradecido de poder tenerte como primo y aun que llevamos varios años sin vernos ni poder compartir mucho, quiero que sepas que te quiero muchisimo y espero que puedas compartir con nosotros de este día tan importante para nuestra vida',
    numberGuests: 1,
    name: 'Jorge Eduardo Madrigal',
  },
  {
    id: 'FVLWRW',
    message:
      'Miriam, gracias por formar parte de este momento tan especial en mi vida.',
    numberGuests: 2,
    name: 'Miriam Medina',
  },
  {
    id: 'WILFUM',
    message:
      'Natalia, prima querida, estoy muy agradecido con Dios por que nos puso en la misma familia, sos sumamente especial para mi y sobretodo estos últimos años en que hemos podido compartir más y más. Por eso estoy super feliz de que nos vayas a poder acompañar en este día tan tan importante para nosotros',
    numberGuests: 1,
    name: 'Natalia Madrigal',
  },
  {
    id: 'VYNWGY',
    message:
      'Tía querida, estoy demasiado agradecido con Dios de poder tenerte como tía, a pesar de la distancia y estar en países diferentes sos increíble y haz roto las barreras y la distancia para mantenerte parte de nuestras vidas y ahora que he podido viajar allá y verte varias veces, por eso estoy muy feliz que puedas acompañarnos en este día tan importante ',
    numberGuests: 1,
    name: 'Rocío Madrigal',
  },
  {
    id: 'GKVSTN',
    message:
      'Gaby estoy muy agradecido por tu vida y queremos poder compartir con vos de este día tan especial para nuestra vida',
    numberGuests: 1,
    name: 'Gabriela Madrigal',
  },
  {
    id: 'DGXNCI',
    message:
      'Verito querida, primero quería decirte que te quiero muchísimo y que estoy demasiado feliz con el Señor por haberte puesto en mi vida. Cada aventura que hemos tenido desde muy niños hasta ya viajes de adultos y me alegra muchísimo que vayas a ser parte de esta nueva aventura que estamos por empezar Paloma y yo ',
    numberGuests: 1,
    name: 'Veronica Gomez',
  },
  {
    id: 'ZGFAVQ',
    message:
      'Anita mi hermanita quería aprovechar esta oportunidad para agradecerte por tu amistad todo este tiempo y más recientemente hemos podido compartir Cris y vos con Paloma y conmigo. Para nosotros es un gusto increíble poder contar con ustedes en este día tan especial y nos va a ser muy feliz que podamos seguir poniendo recuerdos conjuntos con este momento tan importante para nosotros',
    numberGuests: 2,
    name: 'Anita (y cris)',
  },
  {
    id: 'SCNPQO',
    message:
      'Mitad que dificil poner en un espacio tan pequeño todo lo que te quiero, cuantos años de amistad (y ser mitades) y en los cuales hemos vivido tantas aventuras locas y diferentes desde que eramos shalomitas, pasamos a ser lideres, enseñarte a manejar jajajaja irnos a montañas y quedarnos varados varias veces hsata ya entrar a la adultez. Y en medio de todo eso siempre haz estado ahi para apoyarme y tambien aconsejarme, tener conversaciones serias cuando es necesario pero tambien solo chillear y ver peliculas. Enserio creo que de las cosas que mas me esta costando asimilar es el que vayamos a estar en paises diferentes por tanto tiempo. Pero me alegra muchisimo poder compartir con vos de el inicio de esta gran aventura y aunque me adelate un poco ya espero con ansias todo lo que el Señor tiene para nosotros en los años por venir. Te quiero mucho mitad',
    numberGuests: 1,
    name: 'Mitad',
  },
  {
    id: 'AOYBJR',
    message:
      'Nats primero que todo quería darte gracias por tu amistad en esta más de una década de tiempo que tenemos de ser hermanitos y decirte que para nosotros es sumamente especial el poder contar contigo en este día tan importante para nosotros.',
    numberGuests: 1,
    name: 'Nathalie Horvilleur',
  },
  {
    id: 'PMUPKB',
    message:
      'Mae Jeffrey quería aprovechar este momento para agradecerte por tu amistad y compañerismo realmente soy muy afortunado de haber estado con vos en el científico pero también en todas las otras aventuras que tuvimos olimpiadas de robótica aprender a dar clases de programación aprender a lidiar con niños y aunque no hemos estado tan cercanos últimamente desde que yo me fui a México para mí es sumamente especial el poder contar con vos en este día tan importante de mi vida',
    numberGuests: 1,
    name: 'Jeffry Luque',
  },
  {
    id: 'KTYQZS',
    message:
      'Silvi queria aprovechar para darte las gracias por tantos años de amistad (atte Pablo), realmente sos super especial para nosotros como pareja, la manera en que acogiste a Paloma desde la primera vez que fue a Costa Rica y todo lo que nos hemos acercado este tiempo, por eso es sumamente especial que puedas acompañarnos en este inicio de nuestro matrimonio',
    numberGuests: 2,
    name: 'Silvia Marin',
  },
  {
    id: 'NTWWIQ',
    message:
      'Sra Lidia, gracias por todas sus atenciones en diferentes momentos de mi vida, me alegra compartir este día con usted.',
    numberGuests: 2,
    name: 'Sra Lidia Montelongo',
  },
  {
    id: 'LEZOAY',
    message:
      'Tixi, me es complicado poder describir la increíble amistad que tenemos, eres una grandiosa amiga que siempre busca como ayudar y apoyar. Enserio nos alegra mucho que vayas a ser parte de nuestra vida y de esta nueva etapa que estamos empezando.',
    numberGuests: 1,
    name: 'Tixiana',
  },
  {
    id: 'FXEEZN',
    message:
      'Mi querido RP, la verdad es que no se que hubiera hecho durante este último año y medio sin vos, el apoyo a la distancia (y presencialmente) los consejos de relaciones, el tranquilizarme cuando me estaba desesperando un poco, cada uno de los grupos pastorales y sobretodo el apoyo ahora con la boda civil y los tramites legales, nada de esto hubiera sido posible sin vos, por eso sería muy importante para nosotros poder compartir con ustedes de este día tan especial',
    numberGuests: 2,
    name: 'Juan Carlos Montero',
  },
  {
    id: 'BUMMMO',
    message:
      'Mae Eddy quería aprovechar para darte gracias y honrarte por este tiempo que he podido conocerte en GP, sos un hombre increíble y un cristiano radical, gracias por tu amistad sincera. Para nosotros es de mucha alegría poder contar con vos en nuestra boda y que nos acompañes en este día tan especial ',
    numberGuests: 2,
    name: 'Eddy Nuñez',
  },
  {
    id: 'CKRSPR',
    message:
      'Rey Dav, mi querido hermano, realmente sos un gran mae, y estoy muy agradecido con Dios por haber podido compartir mi formación con los siervos contigo, te quiero muchisimo y aunque no hemos compartido tanto ultimamente (por estar en paises diferentes) espero que ahora estando en el mismo sea mas facil vernos, realmente sos un ejemplo en muchas cosas y por eso estamos muy felices de compartir contigo el inicio de esta gran aventura del matrimonio',
    numberGuests: 1,
    name: 'Rey David Morales',
  },
  {
    id: 'HDVOHJ',
    message:
      'Mariale, queria darte las gracias por tantos años de amistad, por que desde hace más de una decada que estamos juntos en la aventura de la vida y de caminar con el Señor y la verdad es que me cuesta mucho imaginar como van a ser los proximos años en que voy a estar en Monterrey sin tenerlos a una escapada de distancia :S pero también me emociona mucho poder pensar en los increibles planes que tiene el Señor y que vamos a estar entrando a este nuevo estado de vida casi que al mismo tiempo jajajaja Gracias por siempre estar ahi para apoyarme en las buenas y en las malas, por cuidarme como una mamá cuando haciamos paseos y era un poco mas tonto y loco. Por tener las conversaciones serias que ocupaba que alguien tuviera conmigo pero también apuntarte a loqueras como ser responsables de los menores de edad en Panamá o irnos ida y vuelta a Bahia Ballena solo por que si. En fin enserio gracias por tu amistad y por estar presente en este día tan importante para mi. Te quiero mucho',
    numberGuests: 2,
    name: 'Mariale  Muñoz',
  },
  {
    id: 'VYIYNV',
    message:
      'Sofi, muchas gracias por tantos años de amistad y de crecer juntos, desde adolescentes medio locos hasta ya casados (aunque tú te adelantaste muchísimo) queria que supieras que es muy especial que podas acompañarnos en este día tan importante y seguir sumando grandiosos recuerdos a los muchos que hemos acumulado ',
    numberGuests: 2,
    name: 'Sofia  Perez',
  },
  {
    id: 'HEUUAJ',
    message:
      'Vicky gracias por tantos años de amistad :D y por qué haz buscado también ser amiga de Paloma y estamos super felices de que vayas a poder parte del inicio de esta gran aventura ',
    numberGuests: 1,
    name: 'Victoria  Portuguez',
  },
  {
    id: 'TVNXHQ',
    message:
      'Mae Quintero le doy demasiadas gracias a Dios por tu vida y por tantos años de amistad, hermandad, servicio juntos, etc. Realmente haz sido una bendición en mi vida, un hombre en quien se que puedo confiar plenamente y estoy muy feliz de por compartir contigo del inicio de esta nueva aventura ',
    numberGuests: 1,
    name: 'Jose David Quintero',
  },
  {
    id: 'GDYNHD',
    message:
      'Mae Paolo, gracias por siempre alegrarte con nosotros y por tu amistad genuina, nos hace muy felices poder compartir contigo este momento.',
    numberGuests: 1,
    name: 'Paolo Rimolo',
  },
  {
    id: 'SOVCIJ',
    message:
      'Mari amiga querida, quería darte gracias por todos estos años de amistad :) y nos alegraría que puedas ser parte de este inicio de mi nueva familia :D',
    numberGuests: 1,
    name: 'Mariana Rivas',
  },
  {
    id: 'QBNRHF',
    message:
      'Jacquie, gracias por acompañarme en diferentes momentos de mi vida, valoro mucho nuestra amistad y te quiero demasiado, no me imagino este día especial sin ti. ',
    numberGuests: 2,
    name: 'Jacqueline Montemayor',
  },
  {
    id: 'GIWOAX',
    message:
      'Irenita hace poco estaba revisando y limpiando mi WhatsApp y me di cuenta que el mensaje más viejo que tengo es una receta de brownie de chocolate en microondas que me mandaste a inicios del 2015 por que ocupaba con urgencia llevar algo a una actividad 😂 y eso es un buen ejemplo de como eres, siempre buscando como ayudar, como servir, que detalle especial y personal regalar. Quiero darte gracias por todos estos años de amistad, Paloma y yo estamos muy alegres de que vayas a formar parte de nuestra vida y que nos puedas acompañar en este inicio de una nueva etapa',
    numberGuests: 2,
    name: 'Irenita',
  },
  {
    id: 'PUWQRE',
    message:
      'Magui, me hace muy feliz que formes parte de mi vida, desde que estuvimos en Brecha juntos he admirado mucho tu dedicación y entrega al Señor en todo lo que haces y a pesar de que una vez que se termino el tiempo de Brecha casi no hemos compartido tanto (sobretodo por estar en paises o estados diferentes) sigues siendo una persona sumamente especial y por eso nos gustaría que pudieras acompañarnos en este día tan importante para nosotros',
    numberGuests: 2,
    name: 'Magui Perez',
  },
  { id: 'N/A', message: 'N/A', numberGuests: 1, name: 'Paloma Ruiz' },
  {
    id: 'KSYEGS',
    message:
      'Mae Alex, le doy muchas gracias a Dios por tu vida y por el gran compartir que tuvimos el tiempo que estuvimos juntos en GP y estoy muy feliz por qué puedas acompañarnos en el inicio de esta gran aventura que es el matrimonio.',
    numberGuests: 2,
    name: 'Alex Sequeira',
  },
  {
    id: 'BQGUVS',
    message:
      'Mae Jhonny quería darte mil gracias por todos estos años de amistad, desde que llegaste a CR en el 2018 super que en ti había encontrado un buen amigo, pero sobretodo cuando volví de los siervos descubrí que era más real de lo que había esperado. Compartir con vos en GP es increíble, he aprendido mucho de ti y me alegra que vayas a ser parte del este paso a una nueva etapa',
    numberGuests: 1,
    name: 'Jhonny  Sobalvarro',
  },
  {
    id: 'BUAKSB',
    message:
      'Tía querida de mi corazón, estoy muy muy agradecido con Dios por tenerte como mi tía, enserio muchísimas gracias por todo lo que haz hecho por nosotros desde que empezamos a salir, desde hospedar a Paloma y sus amigas, el ser tan presente en nuestra relación, por eso estamos super alegres de poder compartir con vos de este día tan especial ',
    numberGuests: 1,
    name: 'Evelyn  Quesada',
  },
  {
    id: 'YABSLF',
    message:
      'Tío Jose y Tía Jey estoy super agradecido con Dios por poder ser parte de la misma familia, siempre han sido para mi un verdadero ejemplo de matrimonio cristiano y de que como seguidores de Cristo también se puede aspirar por una excelencia en la parte profesional. Y ahora con el curso prematrimonial aún mas hemos podido ver la calidad de personas y de pareja que son. Enserio nos alegra mucho poder contar con ustedes en esta nueva etapa de la vida',
    numberGuests: 4,
    name: 'Jose Julio  Quesada',
  },
  {
    id: 'HMNPXR',
    message:
      'Mae Chue luego de una vida de crecer juntos y vivir cada uno de las etapas de la vida, desde CCC, Shalom, CEM, etc. Y ahora el poder compartir mi brinco a esta nueva etapa contigo es súper alegre para mí :D ',
    numberGuests: 1,
    name: 'Chue',
  },
  {
    id: 'EPDCHH',
    message:
      'Familia Nolasco, le damos queriamos dar muchisimas gracias por todo el apoyo que nos han brindado, conocerlos es una bendición y son un ejemplo de familia para nosotros, los queremos mucho y nos hace muy felices compartir este día con ustedes. ',
    numberGuests: 4,
    name: 'Carlos Nolasco',
  },
  {
    id: 'ADQYEF',
    message:
      'Chris, nos alegra el corazón que formes parte de nuestra vida, gracias por querernos tanto y alegrarte con nosotros, es una alegría poder compartir este día contigo',
    numberGuests: 1,
    name: 'Chris Ochoa',
  },
  {
    id: 'RXBSXS',
    message:
      'Nana, te queremos mucho y tu amistad es muy valiosa para nosotros, es muy padre poder ver hacia atrás y recordar todos los buenos momentos que hemos vivido juntos (y los no tan buenos también, perdón por haberte olvidado) realmente es una bendición tenerte en nuestras vidas, gracias por ser parte de esta alegría que sentimos.',
    numberGuests: 1,
    name: 'Mariana  Olivares',
  },
  {
    id: 'WGIZJI',
    message:
      'Lolis, gracias por tu amistad, gracias por cada consejo honesto que me haz brindado y gracias por hacer mi ramo de ensueño realidad, me hace muy feliz que formes parte de este día. ',
    numberGuests: 2,
    name: 'Lolis Ordaz',
  },
  {
    id: 'JGPZHJ',
    message:
      'Fany, me hace muy feliz que formes parte de este momento, te quiero. ',
    numberGuests: 2,
    name: 'Fany Pequeño',
  },
  {
    id: 'MQQRHT',
    message:
      'Rafita querido, estoy super agradecido con Dios por tu vida y me cuesta ponerlo todo en un espacio tan pequeño, pero al menos quiero que sepas que te quiero muchisimo, tenemos mas de 28 de caminar (o gatear) juntos y me va a costar mucho estos primeros años en que no vamos a poder compartir tanto, ya que incluso cuando estuve con los siervos estabas vos en MTY jajajaja pero enserio soy super super afortunado de poder tenerte en mi vida y de que vayamos a poder compartir juntos este día tan especial para mi.',
    numberGuests: 2,
    name: 'Rafael Regidor',
  },
  {
    id: 'NQJRIY',
    message:
      'Familia Pequeño, los quiero mucho, gracias por siempre demostrarme su cariño, me hace muy feliz que formen parte de este momento. ',
    numberGuests: 4,
    name: 'Daniel Pequeño',
  },
  {
    id: 'XBZDHH',
    message:
      'Querido Ivan significa mucho para nosotros que estes presente en este momento tan alegre de nuestras vidas, no nos imaginaríamos este día de otra manera más que rodeados de las personas que apreciamos.',
    numberGuests: 1,
    name: 'Ivan',
  },
  {
    id: 'POUFPP',
    message:
      'Bri, gracias por cada consejo y por ser una amistad que me acerca al Señor, me hace muy feliz compartir este momento contigo.',
    numberGuests: 1,
    name: 'Brisia Ramos',
  },
  {
    id: 'SGGCST',
    message:
      'Tia Juany y Tio Manuel, los quiero mucho y me hace muy feliz que compartan conmigo este momento. ',
    numberGuests: 2,
    name: 'Tia Juany Ramos',
  },
  {
    id: 'MWLSFL',
    message:
      'Katy, Hassan, Mila y Manara, los quiero mucho, gracias por siempre estar para mi cuando lo he necesitado, me hace muy feliz compartir este momento con ustedes. ',
    numberGuests: 4,
    name: 'Katia  Rangel',
  },
  {
    id: 'FNJOSG',
    message:
      'Erika, gracias por ser el hada madrina que resuelve cualquier situación, me hace feliz poder compartir este momento contigo. ',
    numberGuests: 2,
    name: 'Erika Rangel',
  },
  {
    id: 'ZFEPNT',
    message:
      'Roberto y Yareli, que alegría poder compartir este momento tan importante con ustedes, gracias por alegrarse con nosotros. ',
    numberGuests: 2,
    name: 'Roberto Rangel',
  },
  {
    id: 'BLPNNU',
    message:
      'Lizy, nuestra bailarina estrella, gracias por formar parte de este momento, te queremos mucho. ',
    numberGuests: 2,
    name: 'Lizy Regules',
  },
  {
    id: 'MIVMSI',
    message:
      'Nadia, te quiero mucho y me hace muy feliz que sigas formando parte de mi vida, te agradezco todo lo que me enseñaste, gracias por formar parte de este momento tan especial. ',
    numberGuests: 2,
    name: 'Nadia Reyes',
  },
  {
    id: 'AEPTVJ',
    message:
      'Angie, nuestra colombiana mexicana, te queremos mucho y nos hace muy felices que estes viviendo esto con nosotros, gracias por tu calida amistad y cariño.',
    numberGuests: 1,
    name: 'Angie  Rincon',
  },
  {
    id: 'AFECWK',
    message:
      'Andrea, tu amistad es un regalo, gracias por siempre alegrarte con nosotros y también brindarnos tu apoyo cuando lo hemos necesitado, te queremos mucho y ya te queremos ver gozandola en la pista. ',
    numberGuests: 1,
    name: 'Andrea Rivera',
  },
  {
    id: 'BQZDOD',
    message:
      'Tia Cecy, le agradezco todo su amor y atenciones que siempre tiene conmigo, la quiero mucho y me hace muy feliz que sea parte de este momento de mi vida. ',
    numberGuests: 1,
    name: 'Cecilia  Ruiz',
  },
  {
    id: 'CODGXL',
    message:
      'Tio Carlos, gracias por todo su amor y por siempre ser tan generoso con mi familia, le agradezco todo lo que ha hecho por nosotros, me hace muy feliz que me pueda acompañar en este gran momento de mi vida.',
    numberGuests: 1,
    name: 'Carlos  Ruiz',
  },
  {
    id: 'ICMASO',
    message:
      'Myrthala, gracias por alegrarte con nosotros, te quiero mucho y me hace feliz que seas parte de este momento. ',
    numberGuests: 1,
    name: 'Myrthala  Ruiz',
  },
  {
    id: 'TSGUHB',
    message:
      'Miryanisima, queria darte gracias por todos estos años de amistad, en realidad casi no he mantenido el contacto con casi nadie del CCC desde que me fui a Mexico por primera vez, pero contigo ha sido diferente y a pesar de que no hablamos a diario puedo decir que sos de los pocos amigos que me quedan de esa etapa y estoy muy feliz de poder contar contigo y con Lennon de este momento tan especial de mi vida, y ojalá que sea solo el primero de muchos viajes a Mexico',
    numberGuests: 2,
    name: 'Miryana Sancez',
  },
  {
    id: 'OUTIXF',
    message:
      'Mae Ángel estoy súper agradecido con Dios por tu vida y especialmente por tu hermandad, por qué has sido un gran apoyo y no solo cuando estuve con los siervos, sino en esta nueva etapa y eso habla mucho de vos. Por eso es que estoy muy feliz de poder tenerte conmigo en el inicio de esta nueva aventura ',
    numberGuests: 1,
    name: 'Ángel Santiago',
  },
  {
    id: 'EYGPCY',
    message:
      'Said, nos hace muy felices que puedas vivir esto con nosotros, gracias por tu amistad generosa y por alegrarte desde el primer dia por nosotros, gracias por adoptar a Pablo en su primera venida y por todo lo que haz hecho por nosotros te queremos.',
    numberGuests: 1,
    name: 'Emilio Said',
  },
  {
    id: 'NMXKFE',
    message:
      'Hola Sam, estamos muy agradecidos con Dios por tu vida y por lo que ha hecho en nuestras vidas por medio tuyo, ambos te queremos mucho y por eso estamos muy felices de poder compartir contigo este día tan importante para nosotros ',
    numberGuests: 1,
    name: 'Samantha  Samaniego ',
  },
  {
    id: 'MCOSYM',
    message:
      'Lucy, quién diría que nos enamorariamos de ticos haha, significa mucho para mi poder compartir este momento contigo, gracias por siempre alegrarte con nosotros, te quiero mucho. ',
    numberGuests: 1,
    name: 'Lucy Sancristobal',
  },
  {
    id: 'VFTTNK',
    message:
      'Karen, te quiero mucho y le doy gracias a Dios por todos estos años de amistad, nos alegra mucho poder compartir este momento contigo.',
    numberGuests: 1,
    name: 'Karen Siller',
  },
  {
    id: 'MODKJD',
    message:
      'Beto, gracias por tu amistad tan honesta y siempre dispuesta a servir, bro te queremos un chingo y nos hace muy felices compartir este momento contigo, gracias por tu amistad y por todas las aventuras que hemos tenido y esperando tener muchisimas aventuras (y acampadas atte Pablo) por muchisimos años más',
    numberGuests: 1,
    name: 'Humberto Soto',
  },
  {
    id: 'MGEYIS',
    message:
      'Pepe y Lupita, su amistad es un regalo que nos alegra el corazón, gracias por formar parte de este momento. ',
    numberGuests: 2,
    name: 'Pepe  Tellez',
  },
  {
    id: 'MBGVOP',
    message:
      'Hillary, nuestra hermandad es para siempre, no puedo agradecerte suficiente todo lo que haces por mi con tal de que yo sea feliz, tu amistad es un regalo y un tesoro para mi, te amo y recuerda que podemos seguir llendo a misa juntas aunque este casada haha. ',
    numberGuests: 1,
    name: 'Hillary Terrazas',
  },
  {
    id: 'GGVVAC',
    message:
      'Luis Diego y Melanie, nada nos hace más felices que estén de regreso en mty y puedan formar parte de este momento tan especial, gracias por cada consejo que nos han brindado y por toda la amistad, los queremos muchisimo. ',
    numberGuests: 2,
    name: 'Melanie Terrazas',
  },
  {
    id: 'CBJWKX',
    message:
      'Anyely, gracias por querernos tanto y siempre demostrarnoslo, que alegría es poder compartir este momento contigo, a partir de ahora te quedas como presidenta del club de los noviazgos a distancia con ticos hahaha te queremos. ',
    numberGuests: 1,
    name: 'Anyely Terrones',
  },
  {
    id: 'GJIVND',
    message:
      'Alice, gracias por siempre alegrarte con nosotros y por tu amistad genuina, nos hace muy felices poder compartir contigo este momento.',
    numberGuests: 1,
    name: 'Alice Treviño',
  },
  {
    id: 'YWHMZW',
    message:
      'Mae Jaan es dificil poner en un espacio tan pequeño lo mucho que te quiero, enserio sos mas que un amigo para mi, por mas de 10 años hemos podido compartir, reir, lamentarnos, hacer tonteras (legales e ilegales) y viajar cientos de kilometros para poder vernos. Por eso me alegra muchisimo que puedas estar conmigo en el inicio de esta gran aventura ',
    numberGuests: 2,
    name: 'Jaan Valerio',
  },
  {
    id: 'RBJQXW',
    message:
      'Mony, gracias por cada consejo que me haz brindado, me hace muy feliz compartir este momento contigo.',
    numberGuests: 1,
    name: 'Monica Vargas',
  },
  {
    id: 'NYYTMM',
    message:
      'Jessi, gracias por alegrarte con nosotros, no hace muy felices que puedas ser parte de este momento.',
    numberGuests: 1,
    name: 'Jessica Vargas',
  },
  {
    id: 'UFTFYN',
    message:
      'Mae Leo, estoy super agradecido con Dios por tu vida y por permitirme ser parte de ella, quiero que sepas que te quiero muchisimo y te admiro de gran manera por tu forma de ser, por lo radical para con el Señor, por lo sencillo de corazón y lo fiel para con tus amigos y tu familia. Enserio es un honor poder llamarte mi amigo y me parece demasiado chiva y loco que ya estemos entrando a este nuevo estado de vida. Por eso me alegra mucho poder compartir de este día tan especial para mi y el inicio de esta gran aventura',
    numberGuests: 2,
    name: 'Leo',
  },
  {
    id: 'EAMJSE',
    message:
      'Vale, gracias por tantos años de amistad que hemos compartido, que nunca se acabe el chismesito y los reencuentros anuales haha, te quiero mucho y me hace muy feliz que formes parte de este momento.',
    numberGuests: 1,
    name: 'Valeria Vega',
  },
  {
    id: 'SBUUYD',
    message:
      'Mega y Araly, gracias por ser parte de mi familia, por siempre estar para nosotros, por su generosidad y atenciones, los quiero mucho.',
    numberGuests: 4,
    name: 'Araly Villarreal',
  },
  {
    id: 'TWGRMW',
    message:
      'Mariela, gracias por tu amistad por todos estos años que nos ha llevado juntos hasta Costa Rica, te queremos mucho y estamos muy felices de poder compartir contigo este día tan importante',
    numberGuests: 1,
    name: 'Mariela  Villarreal',
  },
  {
    id: 'CVYMUY',
    message:
      'Salmita, nuestra Dra fav, gracias por tu amistad tan bonita y sincera, te queremos mucho y nos alegra poder compartir esto contigo.',
    numberGuests: 2,
    name: 'Salma Villeda',
  },
  {
    id: 'TAULDL',
    message:
      'Natalia Zapiain, gracias por todos estos años de amistad, me hace muy feliz que estemos creciendo juntas y compartir estos momentos tan felices contigo.',
    numberGuests: 1,
    name: 'Natalia Zapiain',
  },
  {
    id: 'DHJKMA',
    message:
      'Yare, gracias por tu amistad, nos hace muy felices que compartas este momento con nosotros.',
    numberGuests: 1,
    name: 'Yaresi  Zavala',
  },
  {
    id: 'NLKELA',
    message:
      'Padre Borre, muchas gracias por brindarnos su guía y sobretodo su amistad, gracias por cada consejo y salidas a comer que ha terminado en sesion pastoral haha lo queremos mucho, gracias por ser parte de nuestra unión. ',
    numberGuests: 1,
    name: 'Padre Borre ',
  },
  {
    id: 'OTCWTX',
    message:
      'Dani y Cris, los queremos muchisimo y la verdad han sido un gran apoyo para nosotros como pareja desde que Paloma vino por primera vez a Costa Rica. Y por eso sería super especial para nosotros poder compartir de este día tan importante con ustedes',
    numberGuests: 2,
    name: 'Daniel Calderón',
  },
  {
    id: 'YSURTN',
    message:
      'Rebequita !!! Muchisimas gracias por todos estos años de amistad y por ser esa amiga con la que puedo hablar cosas profundas cuando sea jajajaja estoy muy agradecido con Dios por tu vida y muy feliz de poder compartir contigo de este día tan especial',
    numberGuests: 1,
    name: 'Rebeca Calvo',
  },
  {
    id: 'NIJKUI',
    message:
      'Tutti !!! Le doy demasiadas gracias a Diosito por tu vida y por permitirme ser parte de ella. Hace poco que estabamos recordando el inicio de nuestra amistad y de todas las locuras y aventruas que tuvimos, no podia mas que agradecer por tenerte y pensar en las muchas aventuras que vamos a tener cuando vuelva a CR y estemos en esta nueva etapa de nuestras vidas. Por eso es que es demasiado especial para mi poder contar contigo en este gran paso que estoy dando',
    numberGuests: 2,
    name: 'Susana Espinoza',
  },
  {
    id: 'HQSNKJ',
    message:
      'Ross Estoy demasiado agradecido con Dios por tu vida y por este tiempo post pandemia que nuestra amistad ha crecido aún más, incluso empezar a emprender juntos y tener nuevas aventuras de adultos jeje por eso estoy muy muy feliz de poder contar con vos en este día tan especial para mi',
    numberGuests: 2,
    name: 'Rosscelly Larios',
  },
  {
    id: 'NLZPRJ',
    message:
      'Memish!! Primero que todo quería darle gracias a Dios por tu vida y por haberte puesto en la mía, es dificil poner tantos años de amistad en estas pequeñas lineas pero realmente te agradezco por estos últimos años en que hemos compartido esta aventura de una relación (y ahora boda) regio-tica. Por eso es sumamente especial para nosotros poder contar con vos y con Richi en este día tan importante',
    numberGuests: 2,
    name: 'Memy',
  },
  {
    id: 'ABHJUH',
    message:
      'Ia !!! Le doy muchisimas gracias a Dios por tu vida y tu amistad todos estos años, por que no haz sido nada mas "la hermana de mi mejor amigo" sino que sos una amiga para mi y ahora tambien haz podido serlo para Paloma. Por eso es muy importante para nosotros poder contar contigo este día tan especial',
    numberGuests: 1,
    name: 'Estefanía Regidor',
  },
]

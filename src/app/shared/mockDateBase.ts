import {Appointment} from './appointment';

export class MockDateBase {
  static schedule: Array<Appointment> = [
    {title: 'Європейські університетські ігри з волейболу',
      dateOfStart: new Date(2021, 7, 14),
      participants: 'students',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHallName: '',
        address: ''
      },
      organiser: 'СССУ'
    },
    {title: 'Європейські університетські ігри з регбі-7',
      dateOfStart: new Date(2021, 7, 14),
      participants: 'students',
      sportKind: 'регбі-7',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHallName: '',
        address: ''
      },
      organiser: 'СССУ'
    },
    {title: 'Чемпіонат України з волейболу серед учнів',
      dateOfStart: new Date(2021, 1, 23),
      participants: 'schoolchild',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Івано-Франківська обл.',
        town: 'Івано-Франківськ',
        sportHallName: 'Олімп',
        address: 'вул. Паркова 12'
      },
      organiser: 'КФВС МОН'
    },
    {title: 'Літня Гімназіада України з волейболу (відбіркові)',
      dateOfStart: new Date(2021, 3, 12),
      participants: 'schoolchild',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Волинська обл.',
        town: 'Луцьк',
        sportHallName: 'Спорткомплекс "Атлет"',
        address: 'вул. Мохова, 23'
      },
      organiser: 'УФУС'
    },
    {title: 'ІІІ Всеукраїнські Cool Games',
      dateOfStart: new Date(2021, 4, 27),
      participants: 'schoolchild',
      sportKind: 'Cool Games',
      direction: 'physical culture',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Меридіан-Венето',
        address: 'бул. Героїв Севастополя, 11В'
      },
      organiser: 'КФВС МОН'
    },
    {title: 'Літня Універсіада України з веслування академічного',
      dateOfStart: new Date(2021, 4, 20),
      participants: 'students',
      sportKind: 'веслування академічне',
      direction: 'sport',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Гребний канал',
        address: 'Труханів острів'
      },
      organiser: 'СССУ'
    },
    {title: 'Літня Гімназіада України з тхеквондо ВТФ (відбіркові)',
      dateOfStart: new Date(2021, 4, 20),
      participants: 'schoolchild',
      sportKind: 'тхеквондо ВТФ',
      direction: 'sport',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Івано-Франківська обл.',
        town: 'Івано-Франківськ',
        sportHallName: 'Спорткомплекс Прикарпатського національного уніврситету',
        address: 'вул. Прикарпатська 90'
      },
      organiser: 'УФУС'
    },
    {title: 'Всесвітня літня Гімназіада з велоспорту',
      dateOfStart: new Date(2021, 9, 14),
      participants: 'schoolchild',
      sportKind: 'велоспорт',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'КНР',
        region: '',
        town: 'Ченду',
        sportHallName: '',
        address: ''
      },
      organiser: 'УФУС'
    },
    {title: 'Літня Універсіада України з гандболу',
      dateOfStart: new Date(2021, 5, 19),
      participants: 'students',
      sportKind: 'гандбол',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Дніпропетровська обл.',
        town: 'Дніпропетровськ',
        sportHallName: 'спорткомплекс НУХТУ',
        address: 'Дніпровська набережна 25'
      },
      organiser: 'СССУ'
    },
    {title: 'Всеукраїнські Combat Games1 з карате',
      dateOfStart: new Date(2021, 11, 13),
      participants: 'schoolchild',
      sportKind: 'карате',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН'
    },
    {title: 'Всеукраїнські Combat Games1 з боротьби греко-римської',
      dateOfStart: new Date(2021, 11, 13),
      participants: 'schoolchild',
      sportKind: 'боротьба греко-римська',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН'
    },
    {title: 'Всеукраїнські Combat Games1 з тхеквондо ВТФ',
      dateOfStart: new Date(2021, 11, 13),
      participants: 'schoolchild',
      sportKind: 'тхеквондо ВТФ',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН'
    },
    {title: 'Всеукраїнські Combat Games1 з боротьби вільної',
      dateOfStart: new Date(2021, 11, 13),
      participants: 'schoolchild',
      sportKind: 'боротьба вільна',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН'
    },
    {title: 'Всеукраїнські Combat Games1 з дзюдо',
      dateOfStart: new Date(2021, 11, 13),
      participants: 'schoolchild',
      sportKind: 'дзюдо',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН'
    },
    {title: 'Шкільна баскетбольна ліга',
      dateOfStart: new Date(2021, 8, 26),
      participants: 'schoolchild',
      sportKind: 'баскетбол',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Запорізька обл.',
        town: 'Запоріжжа',
        sportHallName: 'Юність',
        address: 'Центральний бульвар 96'
      },
      organiser: 'КФВС МОН'
    },
    {title: 'Чемпіонат України з фрі-файту серед учнів',
      dateOfStart: new Date(2021, 10, 9),
      participants: 'schoolchild',
      sportKind: 'фрі-файт',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Тернопільска обл.',
        town: 'Збараж',
        sportHallName: 'Палац Спорту',
        address: 'вул. Б. Хмельницького, 1'
      },
      organiser: 'КФВС МОН'
    },
    {title: 'Міжнародний день студентського спорту',
      dateOfStart: new Date(2021, 8, 20),
      participants: 'students',
      direction: 'physical culture',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Вінницька обл.',
        town: 'Вінниця',
        sportHallName: 'Стадіон ДЮСШ № 5',
        address: 'Центральний Парк'
      },
      organiser: 'СССУ'
    }
  ];
}

import {Appointment} from './appointment';

export class MockDateBase {
  static schedule: Array<Appointment> = [
    {title: 'Європейські університетські ігри',
      dateOfStart: new Date(2021, 7, 14),
      participants: 'students',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'international'
    },
    {title: 'Чемпіонат України з волейболу серед учнів',
      dateOfStart: new Date(2021, 1, 23),
      participants: 'schoolchild',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'ukrainian'
    },
    {title: 'Літня Гімназіада України з волейболу (відбіркові)',
      dateOfStart: new Date(2021, 3, 12),
      participants: 'schoolchild',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'regional'
    },
    {title: 'ІІІ Всеукраїнські Cool Games',
      dateOfStart: new Date(2021, 4, 27),
      participants: 'schoolchild',
      sportKind: 'Cool Games',
      direction: 'physical culture',
      status: 'ukrainian'
    },
    {title: 'Літня Універсіада України з веслування академічного',
      dateOfStart: new Date(2021, 4, 20),
      participants: 'students',
      sportKind: 'веслування академічне',
      direction: 'sport',
      status: 'regional'
    },
    {title: 'Літня Гімназіада України з тхеквондо ВТФ',
      dateOfStart: new Date(2021, 4, 20),
      participants: 'schoolchild',
      sportKind: 'тхеквондо ВТФ',
      direction: 'sport',
      status: 'regional'
    },
    {title: 'Всесвітня літня Гімназіада з велоспорту',
      dateOfStart: new Date(2021, 9, 14),
      participants: 'schoolchild',
      sportKind: 'велоспорт',
      direction: 'sport',
      status: 'international'
    },
    {title: 'Літня Універсіада України з гандболу',
      dateOfStart: new Date(2021, 5, 19),
      participants: 'students',
      sportKind: 'гандбол',
      direction: 'sport',
      status: 'ukrainian'
    },
    {title: 'Всеукраїнські Combat Games1 з карате',
      dateOfStart: new Date(2021, 11, 13),
      participants: 'schoolchild',
      sportKind: 'карате',
      direction: 'sport',
      status: 'ukrainian'
    },
    {title: 'Шкільна баскетбольна ліга',
      dateOfStart: new Date(2021, 8, 26),
      participants: 'schoolchild',
      sportKind: 'баскетбол',
      direction: 'sport',
      status: 'ukrainian'
    },
    {title: 'Чемпіонат України з фрі-файту серед учнів',
      dateOfStart: new Date(2021, 10, 9),
      participants: 'schoolchild',
      sportKind: 'фрі-файт',
      direction: 'sport',
      status: 'ukrainian'
    },
    {title: 'Міжнародний день студентського спорту',
      dateOfStart: new Date(2021, 8, 20),
      participants: 'students',
      direction: 'physical culture',
      status: 'ukrainian'
    }
  ];
}

import awatar from 'assets/my.jpg';

const initialState = {
  workers: [
    {
      id: 0,
      title: 'Rafał W',
      awatarUrl: awatar,
      mail: 'Gmail@gmail.com',
      positionJob: 'fullStack',
      relationWords: [
        {
          id: 0,
          word: 'Rafal',
        },
        {
          id: 1,
          word: 'Warzynski',
        },
      ],
    },
    {
      id: 1,
      title: 'Rafał W',
      awatarUrl:
        'https://avatars3.githubusercontent.com/u/12779984?s=460&u=bd7db8429aee0fa72d76fafd02a6edcdea784789&v=4',
      mail: 'Gmail@gmail.com',
      positionJob: 'fullStack',
      relationWords: [
        {
          id: 0,
          word: 'Rafal',
        },
      ],
    },
    {
      id: 2,
      title: 'Rafał W',
      awatarUrl:
        'https://avatars1.githubusercontent.com/u/29249406?s=460&u=f730e38902b82734907e5d535cc3e5335988d5fe&v=4',
      mail: 'Gmail@gmail.com',
      positionJob: 'fullStack',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_PERSON':
      return {
        ...state,
        workers: state.workers.filter((item) => item.id !== action.payload.id),
      };

    case 'ADD_PERSON':
      const personContent = {
        id: state.workers.length,
        ...action.payload,
      };

      return {
        ...state,
        workers: [...state.workers, personContent],
      };

    default:
      return state;
  }

  return state;
};

export default rootReducer;

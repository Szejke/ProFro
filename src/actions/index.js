export const removePersonAction = (id) => {
  return {
    type: 'REMOVE_PERSON',
    payload: {
      id,
    },
  };
};

export const addPersonAction = (personContent) => {
  return {
    type: 'ADD_PERSON',
    payload: {
      ...personContent,
    },
  };
};

// id: 2,
// title: 'Rafał W',
// awatarUrl:
//   'https://avatars3.githubusercontent.com/u/12779984?s=460&u=bd7db8429aee0fa72d76fafd02a6edcdea784789&v=4',
// mail: 'Gmail@gmail.com',
// positionJob: 'fullStack',
// relationWords: ['Rafał'],

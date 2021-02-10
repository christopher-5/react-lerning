import createActionName from './columnsRedux';
// selectors

// action name creator

// actions types

// action creators
const reducerName = 'searchString';

export const CHANGE = createActionName('CHANGE');

export const getSearchString = (state) => state.searchString;

export const createActionSendString = (payload) => ({ payload: payload , type: CHANGE });

export const countAllCards = ({cards}) => cards.length;

export const countVisibleCards  = ({cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}


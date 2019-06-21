// manage band will take one action and concat a new band each time the action is dispatched

export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.band] }
    default:
      return state;
  }
};

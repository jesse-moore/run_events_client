import ui, { uiState, uiInitialState } from './ui';

const reducer = { ui };
export default reducer;

const rootState = { ui: uiInitialState };
export type RootState = typeof rootState;

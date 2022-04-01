import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.action';
import { filtrosValidos } from './filtro.action';

const estadoInicial: filtrosValidos = 'todos';

export const _filtroReducer = createReducer(
  estadoInicial,
  on(actions.setFiltro, (state, { filtro }) => filtro),
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}

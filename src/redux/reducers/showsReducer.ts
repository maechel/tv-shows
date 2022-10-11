import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../action-types';
import { TvShow, TvShowItem } from '../../custom-types';

export interface ShowsState {
    loading: boolean;
    error: string | null;
    shows: TvShow[] | null;
    show: TvShowItem | null;
}

const initialState: ShowsState = {
    loading: false,
    error: null,
    shows: null,
    show: null,
};

export const showsReducer = produce((state: ShowsState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_ALL_START:
            state.shows = null;
            state.error = null;
            state.loading = true;
            return state;
        case ActionType.FETCH_ALL_COMPLETE:
            state.shows = action.payload;
            state.error = null;
            state.loading = false;
            return state;
        case ActionType.FETCH_ALL_ERROR:
            state.error = action.payload;
            state.loading = false;
            return state;
        case ActionType.FETCH_SHOW_START:
            state.show = null;
            state.error = null;
            state.loading = true;
            return state;
        case ActionType.FETCH_SHOW_COMPLETE:
            state.show = action.payload;
            state.error = null;
            state.loading = false;
            return state;
        case ActionType.FETCH_SHOW_ERROR:
            state.error = action.payload;
            state.loading = false;
            return state;
        default:
            return state;
    }
}, initialState);
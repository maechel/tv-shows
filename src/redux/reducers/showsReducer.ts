import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../action-types';
import { TvShow } from '../../custom-types';

export interface ShowsState {
    loading: boolean;
    error: string | null;
    shows: TvShow[] | null;
    show: TvShow | null;
    favourites: TvShow[];
}

const initialState: ShowsState = {
    loading: false,
    error: null,
    shows: null,
    show: null,
    favourites: [],
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
        case ActionType.FETCH_ALL_FAVOURITES_START:
            state.error = null;
            state.loading = true;
            return state;
        case ActionType.FETCH_ALL_FAVOURITES_COMPLETE:
            state.favourites = action.payload;
            state.error = null;
            state.loading = false;
            return state;
        case ActionType.FETCH_ALL_FAVOURITES_ERROR:
            state.error = action.payload;
            state.loading = false;
            return state;
        case ActionType.ADD_TO_FAVORITES_START:
            state.error = null;
            state.loading = false;
            return state;
        case ActionType.ADD_TO_FAVORITES_COMPLETE:
            state.favourites = action.payload
                ? state.favourites.concat(action.payload)
                : state.favourites;
            state.error = null;
            state.loading = false;
            return state;
        case ActionType.ADD_TO_FAVORITES_ERROR:
            state.error = action.payload;
            state.loading = false;
            return state;
        case ActionType.REMOVE_FROM_FAVORITES_START:
            state.error = null;
            state.loading = true;
            return state;
        case ActionType.REMOVE_FROM_FAVORITES_COMPLETE:
            state.favourites = state.favourites.filter((favourite) => {
                return favourite.show.id !== action.payload;
            });
            state.error = null;
            state.loading = false;
            return state;
        case ActionType.REMOVE_FROM_FAVORITES_ERROR:
            state.error = action.payload;
            state.loading = false;
            return state;
        case ActionType.CLEAR_ERROR:
            state.error = null;
            state.loading = false;
            return state;
        default:
            return state;
    }
}, initialState);
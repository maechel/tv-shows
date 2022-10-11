import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';

export const fetchAllShows = (searchInput: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: ActionType.FETCH_ALL_START});
                const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput}`);
                dispatch({ type: ActionType.FETCH_ALL_COMPLETE, payload: res.data });
        } catch (e: any) {
            console.error('error');
            dispatch({ type: ActionType.FETCH_ALL_ERROR, payload: e.message });
        }
    };
};

export const fetchShowById = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: ActionType.FETCH_SHOW_START});
            const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
            dispatch({ type: ActionType.FETCH_SHOW_COMPLETE, payload: res.data });
        } catch (e: any) {
            console.error('error');
            dispatch({ type: ActionType.FETCH_SHOW_ERROR, payload: e.message });
        }
    };
};


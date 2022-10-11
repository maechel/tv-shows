import axios from 'axios';
import { Dispatch } from 'redux';
import flatten from 'lodash/flatten';
import { ActionType } from '../action-types';
import { TvShow, TvShowItem } from '../../custom-types';

const normalizeStr = (str: string) => str.trim().toLowerCase();
const dbUrl = 'http://localhost:4000';

interface CachedShowsResult {
    data: TvShowItem[] | null;
}

const getCachedShowById = async (id: string) => {
    try {
        const { data } = await axios.get(`${dbUrl}/searches`);
        const flattened = flatten(Object.values(data)) as TvShow[];
        const found =  flattened.find((tvShow: TvShow) => tvShow.show.id.toString() === id);

        if (found) {
            return { data: found };
        } else {
            return { data: null };
        }
    } catch (err: any) {
        console.error(err.message);
        return { data: null };
    }
};

const getCachedShows = async (searchInput: string): Promise<CachedShowsResult> => {
    try {
        const { data } = await axios.get(`${dbUrl}/searches`);
        const normalizedSearchInput = normalizeStr(searchInput);
        if (data[normalizedSearchInput]) {
            return {  data: data[normalizedSearchInput] };
        }

        return { data: null };

    } catch (err: any) {
        console.error(err.message);
        return { data: null };
    }
};

const setCachedShows = async (searchInput: string, fetchedData: TvShow): Promise<void> => {
    try {
        const normalizedSearchInput = normalizeStr(searchInput);
        const { data } = await axios.get(`${dbUrl}/searches`);
        data[normalizedSearchInput] = fetchedData;
        await axios.post(`${dbUrl}/searches`, data);
    } catch (err: any) {
        console.error(err.message);
    }
};

export const fetchAllShows = (searchInput: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: ActionType.FETCH_ALL_START});
            const { data } = await getCachedShows(searchInput);

            if (data) {
                dispatch({ type: ActionType.FETCH_ALL_COMPLETE, payload: data });
            } else {
                const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput}`);
                await setCachedShows(searchInput, res.data);
                dispatch({ type: ActionType.FETCH_ALL_COMPLETE, payload: res.data });
            }
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
            const { data } = await getCachedShowById(id);
            if (data) {
                dispatch({ type: ActionType.FETCH_SHOW_COMPLETE, payload: data.show });
            } else {
                const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                dispatch({ type: ActionType.FETCH_SHOW_COMPLETE, payload: res.data });
            }
        } catch (e: any) {
            console.error('error');
            dispatch({ type: ActionType.FETCH_SHOW_ERROR, payload: e.message });
        }
    };
};


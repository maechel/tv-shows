import { ActionType } from '../action-types';
import { TvShow, TvShowItem } from '../../custom-types';

export interface FetchAllStartAction {
    type: ActionType.FETCH_ALL_START;
}

export interface FetchAllCompleteAction {
    type: ActionType.FETCH_ALL_COMPLETE;
    payload: TvShow[];
}

export interface FetchAllErrorAction {
    type: ActionType.FETCH_ALL_ERROR,
    payload: string;
}

export interface FetchShowStartAction {
    type: ActionType.FETCH_SHOW_START;
}

export interface FetchShowCompleteAction {
    type: ActionType.FETCH_SHOW_COMPLETE;
    payload: TvShowItem;
}

export interface FetchShowErrorAction {
    type: ActionType.FETCH_SHOW_ERROR,
    payload: string;
}

export type Action =
    | FetchAllStartAction
    | FetchAllCompleteAction
    | FetchAllErrorAction
    | FetchShowStartAction
    | FetchShowCompleteAction
    | FetchShowErrorAction;
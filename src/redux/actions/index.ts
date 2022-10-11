import { ActionType } from '../action-types';
import { TvShow } from '../../custom-types';

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
    payload: TvShow;
}

export interface FetchShowErrorAction {
    type: ActionType.FETCH_SHOW_ERROR,
    payload: string;
}

export interface FetchAllFavouritesStartAction {
    type: ActionType.FETCH_ALL_FAVOURITES_START;
}

export interface FetchAllFavouritesCompleteAction {
    type: ActionType.FETCH_ALL_FAVOURITES_COMPLETE;
    payload: TvShow[];
}

export interface FetchAllFavouritesErrorAction {
    type: ActionType.FETCH_ALL_FAVOURITES_ERROR,
    payload: string;
}

export interface AddToFavoritesStartAction {
    type: ActionType.ADD_TO_FAVORITES_START;
}

export interface AddToFavoritesCompleteAction {
    type: ActionType.ADD_TO_FAVORITES_COMPLETE;
    payload: TvShow | null;
}

export interface AddToFavoritesErrorAction {
    type: ActionType.ADD_TO_FAVORITES_ERROR,
    payload: string;
}

export interface RemoveFromFavoritesStartAction {
    type: ActionType.REMOVE_FROM_FAVORITES_START;
}

export interface RemoveFromFavoritesCompleteAction {
    type: ActionType.REMOVE_FROM_FAVORITES_COMPLETE;
    payload: number;
}

export interface RemoveFromFavoritesErrorAction {
    type: ActionType.REMOVE_FROM_FAVORITES_ERROR,
    payload: string;
}

export type Action =
    | FetchAllStartAction
    | FetchAllCompleteAction
    | FetchAllErrorAction
    | FetchShowStartAction
    | FetchShowCompleteAction
    | FetchShowErrorAction
    | FetchAllFavouritesStartAction
    | FetchAllFavouritesCompleteAction
    | FetchAllFavouritesErrorAction
    | AddToFavoritesStartAction
    | AddToFavoritesCompleteAction
    | AddToFavoritesErrorAction
    | RemoveFromFavoritesStartAction
    | RemoveFromFavoritesCompleteAction
    | RemoveFromFavoritesErrorAction;
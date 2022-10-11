
export interface TvShow {
    score: number;
    show: TvShowItem,
}

export type Link = {
    previousepisode: string;
    self: {
        href: string;
    }
}

export type Network = {
    name: string;
    officialSite: string;
};

export type Rating = {
    average: number;
};

export type Image = {
    medium: string;
    original: string;
};

export type Schedule = {
    days: string[],
    time: string;
};

export interface TvShowItem {
    id: number;
    name: string;
    summary: string;
    runtime: number;
    language: string;
    premiered: string;
    network: Network,
    genres: string[],
    rating: Rating,
    _links: Link,
    image: Image,
    ended: string;
    schedule: Schedule,
    status: string;
}

export type ErrorMessageTypes = 'error' | 'info';

export interface ErrorMessageProps {
    type: ErrorMessageTypes;
    title: string;
    msg: string;
}

export interface SpinnerProps {
    size?: 'sm' | 'normal' | 'lg';
    color?: 'primary' | 'secondary';
}
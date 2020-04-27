import * as React from 'react';
import { default as IAction } from './action.interface';
import { LoaderBannerActions } from '../stores/loader-banner/loader-banner.actions';

export interface ILoaderBanner {
    text?: string;
    isLoading: boolean;
}

export interface ILoaderBannerContext {
    loaderBanner: ILoaderBanner;
    dispatchIsLoading: React.Dispatch<IAction<LoaderBannerActions, ILoaderBanner>>;
}
import * as React from 'react';
import { loaderBannerReducer } from './loader-banner.reducer';
import { ILoaderBannerContext, ILoaderBanner } from '../../interfaces/loader-banner.interface';

const initialState: ILoaderBanner = {
    text: undefined,
    isLoading: false,
};

const LoaderBannerContext = React.createContext<ILoaderBannerContext>({ loaderBanner: initialState, dispatchIsLoading: () => { } });

export const LoaderBannerStoreProvider: React.FC<{}> = ({ children }) => {
    const [loaderBanner, dispatchIsLoading] = React.useReducer(loaderBannerReducer, initialState);

    return (
        <LoaderBannerContext.Provider value={{ loaderBanner, dispatchIsLoading }}>
            {children}
        </LoaderBannerContext.Provider>
    );
}

export const useLoaderBannerStore = () => React.useContext(LoaderBannerContext);

export * from './loader-banner.actions';
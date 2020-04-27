import { IAction } from '../../interfaces';
import { LoaderBannerActions } from './loader-banner.actions';
import { ILoaderBanner } from '../../interfaces/loader-banner.interface';

export const loaderBannerReducer = (state: ILoaderBanner, action: IAction<LoaderBannerActions, ILoaderBanner>): ILoaderBanner => {
    switch (action.type) {
        case LoaderBannerActions.START:
            return {
                isLoading: true,
                text: action.payload.text || 'Loading...'
            };

        case LoaderBannerActions.STOP:
            return {
                isLoading: false,
            }

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}
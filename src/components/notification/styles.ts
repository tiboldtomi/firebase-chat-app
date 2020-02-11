import { theme } from '../../utils';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { NotificationType } from '../../interfaces/notification.interface';

interface INotificationContainerProps {
    type: NotificationType;
}

const NotificationContainer = styled.div<INotificationContainerProps>`
    position: absolute;
    z-index: 100;
    top: .5rem;
    left: 50%;
    width: 94vw;
    height: 3.5rem;
    background: ${({ type }) => type === NotificationType.Danger
        ? theme.dangerBackgroundColor
        : type === NotificationType.Success
            ? theme.successBackgroundColor
            : theme.warningBackgroundColor};
    border-radius: 5px;
    border: 2px solid;
    border-color: ${({ type }) => type === NotificationType.Danger
        ? theme.dangerBorderColor
        : type === NotificationType.Success
            ? theme.successBorderColor
            : theme.warningBorderColor};
    color: ${({ type }) => type === NotificationType.Danger
        ? theme.dangerFontColor
        : type === NotificationType.Success
            ? theme.successFontColor
            : theme.warningFontColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-right: 2rem;
`;

const NotificationText = styled.p<{ strLenght: number }>`
    font-size: ${({ strLenght }) => strLenght > 27 ? '.75rem' : '1rem'};
`;

const IconContainer = styled.div<INotificationContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1.8rem;
    min-height: 1.8rem;
    border: 2px solid;
    border-color: ${({ type }) => type === NotificationType.Danger
        ? theme.dangerFontColor
        : type === NotificationType.Success
            ? theme.successFontColor
            : theme.warningFontColor};
    border-radius: 50%;
    background: transparent;
    color: ${({ type }) => type === NotificationType.Danger
        ? theme.dangerFontColor
        : type === NotificationType.Success
            ? theme.successFontColor
            : theme.warningFontColor};
    margin: 0 .5rem 0 .3rem;
`;

const DeleteIconContainer = styled.button`
    all: unset;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 1px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
`;

const AIconContainer = animated(IconContainer);
const ANotificationText = animated(NotificationText);
const ADeleteIconContainer = animated(DeleteIconContainer);
const ANotificationContainer = animated(NotificationContainer);

export {
    IconContainer,
    AIconContainer,
    NotificationText,
    ANotificationText,
    DeleteIconContainer,
    ADeleteIconContainer,
    NotificationContainer,
    ANotificationContainer,
};
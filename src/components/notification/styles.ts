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
    top: 1vh;
    left: 50%;
    width: 94vw;
    height: 7vh;
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
`;

const NotificationText = styled.p<{ strLenght: number }>`
    font-size: ${({ strLenght }) => strLenght > 25 ? '.8rem' : '1rem'};
    padding: 0 .5rem;
    font-weight: 400;
`;

const IconContainer = styled.div<INotificationContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
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
    margin-left: .5rem;
`;

const AIconContainer = animated(IconContainer);
const ANotificationText = animated(NotificationText);
const ANotificationContainer = animated(NotificationContainer);

export {
    IconContainer,
    AIconContainer,
    NotificationText,
    ANotificationText,
    NotificationContainer,
    ANotificationContainer,
};
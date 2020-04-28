import { theme } from '../../utils';
import styled from 'styled-components';
import { animated } from 'react-spring';

const UserCircularPicture = styled.div<{ url: string, size: string }>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    border: 5px solid ${theme.defaultFontColor};
    background-image: url(${({ url }) => url});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export default animated(UserCircularPicture);
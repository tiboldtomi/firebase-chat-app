import { theme } from '../../utils';
import styled from 'styled-components';
import { animated } from 'react-spring';

const _RatingContainer = styled.div`
    width: 3rem;
    height: 1.5rem;
    border-radius: 20px;
    background: ${theme.goldColor};
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const _Text = styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    color: ${theme.defaultFontColor};
`;

export const Text = animated(_Text);
export const RatingContainer = animated(_RatingContainer);
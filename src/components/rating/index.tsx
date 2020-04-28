import * as React from 'react';
import { theme } from '../../utils';
import { RatingContainer, Text } from './styles';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IRatingProps {
    value: number;
}

const Rating: React.FC<IRatingProps> = ({ value }) => (
    <RatingContainer>
        <Text>{value}</Text>
        <FontAwesomeIcon
            icon={faStar}
            style={{
                width: '0.9rem',
                height: '0.9rem',
                color: theme.defaultFontColor,
            }}
        />
    </RatingContainer>
);

export default Rating;


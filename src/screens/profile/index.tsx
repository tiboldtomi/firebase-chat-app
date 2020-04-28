import * as React from 'react';
import { theme } from '../../utils';
import { useSpring } from 'react-spring';
import { UserCircularPicture, Rating } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ProfileContainer, HeaderContainer, H1, HeaderNavContainer, UserAvatar, UsernameText } from './styles';

interface IProfileProps { }

const Profile: React.FC<IProfileProps> = () => {

    const { vw, vh } = theme;

    const [{ transform, opacity }, set] = useSpring(() => ({ transform: `translate3d(0,${vw > vh ? '-150vw' : '-150vh'},0)`, opacity: 1 }));
    set({ transform: `translate3d(0,${vw > vh ? '-75vw' : '-40vh'},0)` });

    return (
        <ProfileContainer>
            <HeaderContainer
                style={{ transform, opacity }}
            >
                <HeaderNavContainer>
                    <FontAwesomeIcon
                        size={'2x'}
                        icon={faEdit}
                        style={{ color: theme.defaultFontColor }}
                    />
                    <H1>{'Profile'}</H1>
                    <FontAwesomeIcon
                        size={'2x'}
                        icon={faSignOutAlt}
                        style={{ color: theme.defaultFontColor }}
                    />
                </HeaderNavContainer>
                <UserAvatar>
                    <UserCircularPicture
                        size={'8rem'}
                        url={'https://randomuser.me/api/portraits/men/85.jpg'}
                    />
                    <UsernameText>{'John Doe'}</UsernameText>
                    <Rating value={4.3} />
                </UserAvatar>
            </HeaderContainer>
        </ProfileContainer>
    );
}

export default Profile;
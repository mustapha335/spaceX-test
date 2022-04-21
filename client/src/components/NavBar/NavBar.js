import React, { useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
//components
import Error from '../Error';
import Loader from '../Loader';
import TopMenu from '../TopMenu';
import SideMenu from '../SideMenu';
//hooks
import useNavigation from '../../hooks/useNavigation';
//styles
import './style.scss';
//queries
const Get_Rocket_Names = gql`
    {
        rockets(offset: 1) {
            id
            name
        }
    }
`;

const NavBar = () => {
    const navRef = useRef(null);
    const { isMobileView, isMenuOpen, setIsMenuOpen } = useNavigation(navRef);
    const { data, loading, error } = useQuery(Get_Rocket_Names);

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return (
        <div className="container-fluid" ref={navRef}>
            <div className="row">
                <TopMenu
                    isMenuOpen={isMenuOpen}
                    isMobileView={isMobileView}
                    rockets={data.rockets}
                    toggleMenu={setIsMenuOpen}
                />
                <SideMenu
                    isMenuOpen={isMenuOpen}
                    isMobileView={isMobileView}
                    rockets={data.rockets}
                    toggleMenu={setIsMenuOpen}
                />
            </div>
        </div>
    );
};

export default NavBar;

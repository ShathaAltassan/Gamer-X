import React, { useState, useEffect } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Link } from 'react-router-dom';

const Main = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
       
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); 
        };

        handleResize(); 
        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`test-background ${isMobile ? 'test-mobile-background' : 'test-laptop-background'}`}>
            <MainLayout>
                <div className="test-badge">
                    <h1 style={{ fontFamily: 'PixelArabic' }}>مرحبا بكم في متجر GamerX</h1>
                </div>
                <Link to="/GameList" className="test-button">
                    اطلب الآن
                </Link>
            </MainLayout>
        </div>
    );
};

export default Main;

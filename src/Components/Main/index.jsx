import React from 'react';
import AboutUs from '../AboutUs';
import Command from '../Command';
import Comments from '../Comments';
import Gallery from '../Gallery';
import VideoComponent from '../Video/Video';
import Clubs from '../Clubs';
import News from '../News';
import Preview from '../Header/Preview/Preview';

const Main = () => {
    return (
        <main>
            <Preview />
            <AboutUs />
            <VideoComponent />
            <Command />
            <Gallery />
            <Comments />
            <Clubs />
            <News />
        </main>
    );
};

export default Main;
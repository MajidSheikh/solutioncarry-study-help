import React from 'react';
import SolutionCatogaries from './SolutionCatogaries';
import SolutionsList from './SolutionsList/SolutionsList';
import HowItWorks from './HowItWorks';
import Cta from './Cta';
import Testimonal from './Testimonal';
import Blog from '../Home/Blog';
import Client from './Client';


const Home = () => {
    return (
        <React.Fragment>
            <SolutionCatogaries/>
            <SolutionsList/>
            <HowItWorks/>
            <Cta/>
            <Testimonal/>
            <Blog/>
            <Client/>
        </React.Fragment>
    )
}

export default Home;

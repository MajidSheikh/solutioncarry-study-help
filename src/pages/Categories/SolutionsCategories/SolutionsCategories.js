import React from 'react'
import Categories from './Categories';
import Cta from './Cta';
import Section from './Section';
import MetaTags from "react-meta-tags";

const JobsCategories = () => {
    return (
        <React.Fragment>
            <MetaTags>
            <title>Solution Carry | Online Study Library</title>
            </MetaTags>
            <Section/>
            <Categories/>
            <Cta/>
        </React.Fragment>
    )
}

export default JobsCategories;

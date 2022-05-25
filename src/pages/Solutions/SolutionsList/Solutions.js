import React from 'react'
import SolutionsList from './SolutionsList';
// import Cta from './Cta';
import Section from './Section';
import MetaTags from "react-meta-tags";

const JobsCategories = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Solution Carry | Online Study Library</title>
            </MetaTags>
            <Section />
            <SolutionsList />
            {/* <Cta /> */}
        </React.Fragment>
    )
}

export default JobsCategories;
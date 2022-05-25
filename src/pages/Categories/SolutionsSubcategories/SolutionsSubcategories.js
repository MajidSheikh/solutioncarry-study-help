import React from 'react'
import { Row, Container, Col } from 'reactstrap';
import Section from './Section';
import MetaTags from "react-meta-tags";
import SolutionFilters from './SolutionFilters';
import Features from './Features';
import Solutions from '../../Home/SolutionsList/TopSolutions';
import Pagination from '../../Jobs/JobList2/Pagination';

const JobsCategories = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Subcategories | Study Resources | Solution Carry</title>
            </MetaTags>
            <Section />
            <section>
                <Container>
                    <SolutionFilters />
                    <Row>
                        <Col lg={12}>
                            <Features />
                        </Col>
                    </Row>
                    <hr />
                </Container>
                <div className='bg-light py-5'>
                    <div className='container'>
                    <Solutions />
                    </div>
                <Pagination />
                </div>

            </section>
        </React.Fragment>
    )
}

export default JobsCategories;

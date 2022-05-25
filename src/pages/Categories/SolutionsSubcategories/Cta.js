import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import TopSolutions from '../../Home/SolutionsList/TopSolutions'

const Cta = () => {
    return (
        <React.Fragment>            
                    <section className="section bg-light">
                        <Container>
                            <Row className="justify-content-center">
                                <div className="section-title">
                            <h3 className="title mb-4 pb-2 text-center">Top Study Documents</h3>
                            <TopSolutions/>
                                    {/* <p className="para-desc text-muted mx-auto">Start working with Jobcy that can provide everything you need to generate awareness, drive traffic, connect.</p> */}
                            <div className="mt-4 text-center">
                                        <Link to="#" className="btn btn-primary btn-hover mt-2"><i className="uil uil-rocket"></i> Explore More</Link>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </section>
                    
        </React.Fragment>
    )
}

export default Cta

import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Col, Input, Row } from 'reactstrap';

const SolutionFilters = () => {
    return (
        <React.Fragment>
            <Row className="justify-content-center">
                <Col lg={12} >
                    <div className="candidate-list-widgets mb-4">
                        <Form action="#">
                            <Row className="g-2">
                                <Col lg={10}>
                                    <div className="filler-job-form">
                                        <i className="uil uil-briefcase-alt"></i>
                                        <Input type="search" className="form-control filler-job-input-box" id="exampleFormControlInput1" placeholder="Job, Company name... " />
                                    </div>
                                </Col>
                                <Col lg={2}>
                                    <div>
                                        <Link to="#" className="btn btn-primary"><i className="uil uil-filter"></i> Filter</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SolutionFilters

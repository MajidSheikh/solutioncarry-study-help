import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

//Components Imports
import RecentSolutions from "./RecentSolutions";
import SolutionFilters from './SolutionFilters';

const SolutionList = () => {

  return (
    <React.Fragment>
      <div className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="section-title mb-4 pb-2">
                <h4 className="title">Business Development</h4>
                <p className="text-muted mb-1">
                  You can avail top study resources on Business Development homework help by using our online library. our resources contain various assignments, dissertations, essays, reports, literature reviews, complete homework solutions from top universities around the world.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <SolutionFilters />
            <Col lg={12}>
              <RecentSolutions />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default SolutionList;

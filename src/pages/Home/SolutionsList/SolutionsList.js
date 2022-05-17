import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

//Components Imports
import RecentJobs from "./RecentSolutions";

const SolutionList = () => {

  return (
    <React.Fragment>
      <div className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title">Most viewed homework solutions</h4>
                <p className="text-muted mb-1">
                  Check out the most popular and recent documents add by other students.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <RecentJobs />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default SolutionList;

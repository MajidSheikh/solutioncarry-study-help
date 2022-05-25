import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, Col, Row } from 'reactstrap';

//Import images
import userImage1 from '../../../assets/images/user/img-01.jpg';
import userImage2 from '../../../assets/images/user/img-02.jpg';
import userImage3 from '../../../assets/images/user/img-03.jpg';
import userImage4 from '../../../assets/images/user/img-04.jpg';
import userImage5 from '../../../assets/images/user/img-05.jpg';
import userImage6 from '../../../assets/images/user/img-06.jpg';
import userImage7 from '../../../assets/images/user/img-07.jpg';
import userImage8 from '../../../assets/images/user/img-08.jpg';




const CandidateDetails = () => {
    const candidateDetails = [
        {
            id: 1,
            userImg: userImage1,
            candidateName: "Charles Dickens",
            candidateDesignation: "Project Manager",
            location: "Oakridge Lane Richardson",
            salary: "$650 / hours",
            rating: 4.8,
            ratingClass: "badge bg-success ms-1",
            addclassNameBookmark: false,
            badges: [
                {
                    id: 1,
                    badgeName: "Leader"
                },
                {
                    id: 2,
                    badgeName: "Manager"
                },
                {
                    id: 2,
                    badgeName: "Developer"
                }
            ]
        },
        {
            id: 2,
            userImg: userImage2,
            candidateName: "Gabriel Palmer",
            candidateDesignation: "HTML Developer",
            location: "Oakridge Lane California",
            salary: "$250 / hours",
            rating: 3.4,
            ratingClass: "badge bg-warning ms-1",
            addclassNameBookmark: true,
            badges: [
                {
                    id: 1,
                    badgeName: "Design"
                },
                {
                    id: 2,
                    badgeName: "Developer"
                }

            ]
        },
        {
            id: 3,
            userImg: userImage3,
            candidateName: "Rebecca Swartz ",
            candidateDesignation: "Graphic Designer",
            location: "Oakridge Lane Richardson",
            salary: "$380 / hours",
            rating: 4.3,
            ratingClass: "badge bg-success ms-1",
            addclassNameBookmark: false,
            badges: [
                {
                    id: 1,
                    badgeName: "Design"
                },
                {
                    id: 2,
                    badgeName: "Developer"
                }

            ]
        },
        {
            id: 4,
            userImg: userImage4,
            candidateName: "Betty Richards",
            candidateDesignation: "Education Training",
            location: "Oakridge Lane Richardson",
            salary: "$650 / hours",
            rating: 4.5,
            ratingClass: "badge bg-success ms-1",
            addclassNameBookmark: true,
            badges: [
                {
                    id: 1,
                    badgeName: "Trainer"
                },
                {
                    id: 2,
                    badgeName: "Adobe illustrator"
                }
            ]
        },
        {
            id: 5,
            userImg: userImage5,
            candidateName: "Jeffrey Montgomery",
            candidateDesignation: "Restaurant Team Member",
            location: "Oakridge Lane Richardson",
            salary: "$125 / hours",
            rating: 4.9,
            ratingClass: "badge bg-success ms-1",
            addclassNameBookmark: false,
            badges: [
                {
                    id: 1,
                    badgeName: "Trainer"
                },
                {
                    id: 2,
                    badgeName: "Adobe illustrator"
                }
            ]
        },
        {
            id: 6,
            userImg: userImage6,
            candidateName: "Milton Osborn",
            candidateDesignation: "Assistant / Store Keeper",
            location: "Oakridge Lane Richardson",
            salary: "$455 / hours",
            rating: 2.5,
            ratingClass: "badge bg-danger ms-1",
            addclassNameBookmark: false,
            badges: [
                {
                    id: 1,
                    badgeName: "Trainer"
                },
                {
                    id: 2,
                    badgeName: "Adobe illustrator"
                }
            ]
        },
        {
            id: 7,
            userImg: userImage7,
            candidateName: "Harold Jordan",
            candidateDesignation: "Executive, HR Operations",
            location: "Oakridge Lane Richardson",
            salary: "$799 / hours",
            rating: 4.9,
            ratingClass: "badge bg-success ms-1",
            addclassNameBookmark: false,
            badges: [
                {
                    id: 1,
                    badgeName: "Trainer"
                },
                {
                    id: 2,
                    badgeName: "Adobe illustrator"
                }
            ]
        },
        {
            id: 8,
            userImg: userImage8,
            candidateName: "MichaeL Drake ",
            candidateDesignation: "Full Stack Engineer",
            location: "Oakridge Lane Richardson",
            salary: "$240 / hours",
            rating: 3.9,
            ratingClass: "badge bg-warning ms-1",
            addclassNameBookmark: false,
            badges: [
                {
                    id: 1,
                    badgeName: "Trainer"
                },
                {
                    id: 2,
                    badgeName: "Adobe illustrator"
                }
            ]
        },

    ]
    return (

        <React.Fragment>

            <div className="candidate-list">
                {candidateDetails.map((candidateDetailsNew, key) => (
                    <div
                        key={key}
                        className={
                            candidateDetailsNew.addclassNameBookmark === true
                                ? "candidate-list-box bookmark-post card mt-4"
                                : "candidate-list-box card mt-4"
                        }
                    >
                        <CardBody className="p-4">
                            <Row className="align-items-center">
                                <Col lg={5}>
                                    <div className="candidate-list-content mt-3 mt-lg-0">
                                        <h5 className="fs-19 mb-0"><Link to="/candidatedetails" className="primary-link">{candidateDetailsNew.candidateName}</Link>

                                            <span className={candidateDetailsNew.ratingClass}><i className="mdi mdi-star align-middle"></i>
                                                {candidateDetailsNew.rating}
                                            </span>
                                        </h5>
                                        <p className="text-muted mb-2"> {candidateDetailsNew.candidateDesignation}</p>
                                        <ul className="list-inline mb-0 text-muted">
                                            <li className="list-inline-item">
                                                <i className="mdi mdi-map-marker"></i> {candidateDetailsNew.location}
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="uil uil-wallet"></i> {candidateDetailsNew.salary}
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default CandidateDetails;

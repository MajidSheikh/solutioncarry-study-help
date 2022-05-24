import React,{useState} from 'react';
import { Col, Row ,Modal,ModalBody,Input,Label} from 'reactstrap';
import { Link } from 'react-router-dom';

//jobImages
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";

const RecentSolutions = () => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const recentJob = [
    {
      id: 1,
      companyImg: jobImage1,
      jobDescription: "Covert The Following Program With Switch And Ternary Operator #Include &Lt;Iostream&Gt; Using Namespace Std; Int Main()",
      salary: "1000",
      addclassNameBookmark: false,
    },
    {
      id: 2,
      companyImg: jobImage2,
      jobDescription: "Business Associate",
      companyName: "Pixel Technology pvt.Ltd",
      location: "Dodge City, Louisiana",
      salary: "800-1800/m",
      partTime: true,
      timing: "Part Time",
      catogary: "Recent Jobs",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-soft-info",
          badgeName: "Private",
        },
        {
          id: 2,
          badgeclassName: "bg-soft-warning",
          badgeName: "Urgent",
        },
      ],
      experience: "0 - 1 years",
      Notes: "languages only differ in their grammar.",
    },
    {
      id: 3,
      companyImg: jobImage3,
      jobDescription: "Digital Marketing Manager",
      companyName: "Jobcy Technology Pvt.Ltd",
      location: "Phoenix, Arizona",
      salary: "1500-2400/m",
      freelancer: true,
      timing: "Freelancer",
      catogary: "Recent Jobs",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-soft-info",
          badgeName: "Private",
        },
      ],
      experience: "0 - 1 years",
      Notes: null,
    },
    {
      id: 4,
      companyImg: jobImage4,
      jobDescription: "Product Director",
      companyName: "Creative Agency",
      location: "Escondido, California",
      salary: "1500-2400/m",
      fullTime: true,
      timing: "Full Time",
      catogary: "Recent Jobs",
      badges: [
        {
          id: 1,
          badgeclassName: "bg-soft-warning",
          badgeName: "Urgent",
        },
      ],
      experience: "0 - 1 years",
      Notes: null,
    },
  ];

  return (
    <React.Fragment>
      {recentJob.map((recentJobDetails, key) => (
        <div
          key={key}
          className={
            recentJobDetails.addclassNameBookmark === true
              ? "job-box bookmark-post card mt-4"
              : "job-box card mt-4"
          }
        >
          <div className="bookmark-label text-center">
            <Link to="#" className="text-white align-middle">
              <i className="mdi mdi-star"></i>
            </Link>
          </div>
          <div className="p-4">
            <Row className="align-items-center p-4">

              <Col md={8}>
                <div className="mb-4 mb-md-0 mb-md-0">
                  <h5 className="fs-18 mb-1">
                    <Link to="/jobdetails" className="text-dark">
                      <strong>Question: </strong>{recentJobDetails.jobDescription}
                    </Link>
                  </h5>
                </div>
              </Col>

              <Col md={2}>
                <div>
                  <p className="text-muted mb-2">
                    <span className="text-primary">$</span>
                    {recentJobDetails.salary}
                  </p>
                </div>
              </Col>

              <Col lg={2} md={2}>
                <div className="text-start text-md-end">
                  <Link to="#" onClick={openModal} className="primary-link">
                    View Answer <i className="mdi mdi-chevron-double-right"></i>
                  </Link>
                </div>
              </Col>

            </Row>
          </div>
        </div>
      ))}
      <div className="text-center mt-4 pt-2">
        <Link to="/joblist" className="btn btn-primary">
          View More <i className="uil uil-arrow-right"></i>
        </Link>
      </div>
        <div className="modal fade" id="applyNow" tabIndex="-1" aria-labelledby="applyNow" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
              <Modal isOpen={modal} toggle={openModal} centered>
                  <ModalBody className="modal-body p-5">
                      <div className="text-center mb-4">
                          <h5 className="modal-title" id="staticBackdropLabel">Apply For This Job</h5>
                      </div>
                      <div className="position-absolute end-0 top-0 p-3">
                          <button type="button" onClick={openModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="mb-3">
                          <Label for="nameControlInput" className="form-label">Name</Label>
                          <Input type="text" className="form-control" id="nameControlInput" placeholder="Enter your name"/>
                      </div>
                      <div className="mb-3">
                          <Label for="emailControlInput2" className="form-label">Email Address</Label>
                          <Input type="email" className="form-control" id="emailControlInput2" placeholder="Enter your email"/>
                      </div>
                      <div className="mb-3">
                          <Label for="messageControlTextarea" className="form-label">Message</Label>
                          <textarea className="form-control" id="messageControlTextarea" rows="4" placeholder="Enter your message"></textarea>
                      </div>
                      <div className="mb-4">
                          <Label className="form-label" for="inputGroupFile01">Resume Upload</Label>
                          <Input type="file" className="form-control" id="inputGroupFile01"/>
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Send Application</button>
                  </ModalBody>
              </Modal>
          </div>
      </div>
    </React.Fragment>
  );
};

export default RecentSolutions;

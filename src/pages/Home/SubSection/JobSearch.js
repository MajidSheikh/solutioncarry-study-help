import React from 'react';
import { Input } from "reactstrap";

const JobSearch = () => {
    return (
        <React.Fragment>
            <Input type="search" id="job-title" className="form-control filter-input-box" placeholder="Search for textbooks, step-by-step explanations to homework questions, and more..." />
        </React.Fragment>
    )
}

export default JobSearch;

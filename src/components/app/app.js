import React from "react";
import { dataMock } from '../../services/api/data';
import JobDetail from '../job-detail/job-detail';
import './app.scss';

const App = () => {
    return (
        <div>
            <JobDetail data={dataMock} />
        </div>);
}

export default App;

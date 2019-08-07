import React from "react";
import { dataMock } from '../../services/api/data';
import './app.scss';

const App = () =>
    <div>
        <header className="header">
            <div className="header-item"></div>
            <div className="header-item header-item--title">Jobs Available</div>
        </header>
        <body>
            <div className="detail">
                <div className="detail-header">
                    <div><img src={dataMock.company.logo} className="detail-header logo" alt="logo" /></div>
                    <div className="detail-header title">{dataMock.title}</div>
                    <div className="detail-header company">{dataMock.company.name}</div>
                    <div className="detail-header wage">{'$' + (dataMock.wagePerHourInCents / 100).toFixed(2) + '/hour'}</div>
                    <div className="detail-header date bold">Mon, Sep 5 - Fri Sep 16</div>
                </div>
                <div>If you take this job you are agreeing to work ALL DAYS.</div>
                <div className="workingDays">
                    <p>Mon, Sep 5 8:00 AM PST</p>
                    <p>Mon, Sep 5 8:00 AM PST</p>
                    <p>Mon, Sep 5 8:00 AM PST</p>
                </div>
                <hr />
                <div>Location</div>
                <div>{dataMock.company.address}</div>
                <hr />
                <div>Branch:</div>
                <div>{dataMock.branch}</div>
                <div>{dataMock.branchPhoneNumber}</div>
                <hr />
                <input type="button" value="NO THANKS" />
                <input type="button" value="I'LL TAKE IT" />
            </div>
        </body>
    </div>;

export default App;

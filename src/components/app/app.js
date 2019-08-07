import React from "react";
import { dataMock } from '../../api/data';
import './app.scss';

const App = () =>
    <div className="app">
        <header className="app-header">
            <div className="app-header--top"></div>
            <div className="app-header--title">Jobs Available</div>
        </header>
        <body>
            <div className="details">
                <div className="details-header">
                    <div><img src={dataMock.company.logo} className="details-logo" alt="logo" /></div>
                    <div className="details--title">{dataMock.title}</div>
                    <div className="details--company">{dataMock.company.name}</div>
                    <div className="details--wage">{'$' + (dataMock.wagePerHourInCents / 100).toFixed(2) + '/hour'}</div>
                    <div className="details--date">Mon, Sep 5 - Fri Sep 16</div>
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

import React from "react";
import Shifts from '../shifts/shifts';
import Utils from '../utils/utils';
import './job-detail.scss';

const JobDetail = props => {
    return (
        <div>
            <header className="header">
                <div className="header-item"></div>
                <div className="header-item header-item--title">Jobs Available</div>
            </header>
            <section className="detail">
                <div className="detail-header__row ptb-5">
                    <img src={props.data.company.logo} className="detail-header logo" alt="logo" />
                    <div className="detail-header">
                        <div className="detail-header__row text-large black bold">{props.data.title}</div>
                        <div className="detail-header__row sub-title bold">{props.data.company.name}</div>
                        <div className="detail-header__row text-small text-gray bold">{Utils.FormatWage(props.data.wagePerHourInCents)}</div>
                        <div className="detail-header__row text-medium text-gray bold">{Utils.FormatPeriod(props.data.shifts.map(e => e.startDate), Utils.DateFormats.short)}</div>
                    </div>
                </div>
                <div className="text-large text-black bold ptb-5">If you take this job you are agreeing to work ALL DAYS.</div>
                <div className="shifts">
                    <Shifts dateFormat={Utils.DateFormats.full} startDates={props.data.shifts.map(e => e.startDate)} />
                </div>
                <hr />
                <div className="sub-title">Location</div>
                <div className="highlighted-blue bold">{props.data.company.address}</div>
                <hr />
                <div className="sub-title">Branch:</div>
                <div className="text-gray bold">{props.data.branch}</div>
                <div className="highlighted-blue">{props.data.branchPhoneNumber}</div>
                <hr />
                <div className="footer">
                    <input type="button" className="text-blue" value="NO THANKS" />
                    <input type="button" className="text-blue" value="I'LL TAKE IT" />
                </div>
            </section>
        </div>);
}

export default JobDetail;

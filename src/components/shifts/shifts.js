import React from 'react';
import Utils from '../utils/utils'
import './shifts.scss';

const Shifts = props => {

    const DateParts = props => props.dateString.split(' ').map(elem => <span className="date-part-item">{elem}</span>)

    if (props.startDates && props.startDates.length > 0) {
        return props.startDates.map(startDate => {
            const formatedDate = Utils.FormatDateTime(startDate, props.dateFormat);

            return (
                <div className="text-gray text-small bold date-part-row">
                    <DateParts dateString={formatedDate} />
                </div>
            )
        });
    }
}

export default Shifts;

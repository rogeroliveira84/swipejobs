import React from 'react';
import utils from '../utils/utils'
import './shifts.scss';

const Shifts = props => {

    const DateParts = props => props.dateString.split(' ').map(elem => <span className="date-part-item">{elem}</span>)

    if (props.startDates && props.startDates.length > 0) {
        return props.startDates.map(startDate => {
            const formatedDate = utils.formatDateTime(startDate, props.dateFormat);

            return (
                <div className="text-gray text-small bold date-part-row">
                    <DateParts dateString={formatedDate} />
                </div>
            )
        });
    }
}

export default Shifts;

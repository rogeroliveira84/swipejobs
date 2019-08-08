import moment from 'moment-timezone';

const Utils = {
    DateFormats: {
        full: 'ddd, MMM DD h:mm A z',
        short: 'ddd, MMM DD'
    },
    FormatDateTime: function (value, dateFormat) {
        // todo: needs to implement a location based on job address, for now I put moment.tz.guess()
        const prepValue = value.replace(/\s+/g, '');           // because spaces are invalid (remove all spaces)
        const date = moment.tz(prepValue, moment.tz.guess()); // converts to local timezone 
        const dateString = date.format(dateFormat);           // and apply format e.g: 'Mon, Sep 5 8:00 AM AEST'
        return dateString;
    },
    FormatPeriod: function (periods, dateFormat) {
        if (periods && periods.length > 0) {
            const start = Utils.FormatDateTime(periods[0], dateFormat);
            const end = Utils.FormatDateTime(periods[periods.length - 1], dateFormat);
            return `${start} - ${end}`;
        }
    },
    FormatWage: value => `${(value / 100).toFixed(2)}/hour`
}

export default Utils;
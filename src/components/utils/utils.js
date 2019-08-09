import moment from 'moment-timezone';

const utils = {
    dateFormats: {
        full: 'ddd, MMM DD h:mm A z',
        short: 'ddd, MMM DD'
    },
    formatDateTime: function (value, dateFormat) {
        if (!value || !dateFormat) {
            return null;
        }

        // todo: needs to implement a location based on job address, for now I put moment.tz.guess()
        const prepValue = value.replace(/\s+/g, '');          // because spaces are invalid (remove all spaces)
        const date = moment.tz(prepValue, moment.tz.guess()); // converts to local timezone 
        const dateString = date.format(dateFormat); // and apply format e.g: 'Mon, Sep 5 8:00 AM AEST'

        if (!date.isValid()) {
            return null;
        }

        return dateString;
    },
    formatPeriod: function (periods, dateFormat) {
        if (periods && periods.length > 0) {
            const start = this.formatDateTime(periods[0], dateFormat);
            const end = this.formatDateTime(periods[periods.length - 1], dateFormat);
            return (start && end) ? `${start} - ${end}` : '';
        }
        return '';
    },
    formatWage: value => `${((value ? Math.max(0, value) : 0) / 100).toFixed(2)}/hour`
}

export default utils;

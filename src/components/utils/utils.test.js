import React from 'react';
import ReactDOM from 'react-dom';
import utils from './utils';

describe('utils Object tests...', () => {

    test('formatWage method', () => {
        expect(utils.formatWage(1050080)).toBe('10500.80/hour');
        expect(utils.formatWage(1050)).toBe('10.50/hour');
        expect(utils.formatWage(1000)).toBe('10.00/hour');
        expect(utils.formatWage(100)).toBe('1.00/hour');
        expect(utils.formatWage(1)).toBe('0.01/hour');
        expect(utils.formatWage(null)).toBe('0.00/hour');
        expect(utils.formatWage(0)).toBe('0.00/hour');
        expect(utils.formatWage(-1)).toBe('0.00/hour');
        expect(utils.formatWage(undefined)).toBe('0.00/hour');
        expect(utils.formatWage(NaN)).toBe('0.00/hour');
    });

    test('formatDateTime method', () => {
        expect(utils.formatDateTime('2016-09-04T21: 00: 00Z', utils.dateFormats.full)).toBe('Mon, Sep 05 7:00 AM AEST');
        expect(utils.formatDateTime('2016-09-15T21: 00: 00Z', utils.dateFormats.full)).toBe('Fri, Sep 16 7:00 AM AEST');
        expect(utils.formatDateTime(null, null)).toBe(null);
        expect(utils.formatDateTime(undefined, undefined)).toBe(null);
        expect(utils.formatDateTime(NaN, NaN)).toBe(null);
    });

    test('formatPeriod method', () => {
        const period1 = ['2016-09-04T21: 00: 00Z', '2016-09-15T21: 00: 00Z'];
        const period2 = ['2016-09-04T21: 00: 00Z'];

        expect(utils.formatPeriod(period1, utils.dateFormats.short)).toBe('Mon, Sep 05 - Fri, Sep 16');
        expect(utils.formatPeriod(period2, utils.dateFormats.short)).toBe('Mon, Sep 05 - Mon, Sep 05');
        expect(utils.formatPeriod([], utils.dateFormats.short)).toBe('');
        expect(utils.formatPeriod(null, utils.dateFormats.short)).toBe('');
        expect(utils.formatPeriod(undefined, utils.dateFormats.short)).toBe('');
        expect(utils.formatPeriod(NaN, utils.dateFormats.short)).toBe('');
    });
});
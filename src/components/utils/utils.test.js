import React from 'react';
import ReactDOM from 'react-dom';
import Utils from './utils';

describe('Utils Object tests...', () => {

    test('FormatWage method', () => {
        expect(Utils.FormatWage(1050080)).toBe('10500.80/hour');
        expect(Utils.FormatWage(1050)).toBe('10.50/hour');
        expect(Utils.FormatWage(1000)).toBe('10.00/hour');
        expect(Utils.FormatWage(100)).toBe('1.00/hour');
        expect(Utils.FormatWage(1)).toBe('0.01/hour');
        expect(Utils.FormatWage(null)).toBe('0.00/hour');
        expect(Utils.FormatWage(0)).toBe('0.00/hour');
        expect(Utils.FormatWage(-1)).toBe('0.00/hour');
        expect(Utils.FormatWage(undefined)).toBe('0.00/hour');
        expect(Utils.FormatWage(NaN)).toBe('0.00/hour');
    });

    test('FormatDateTime method', () => {
        expect(Utils.FormatDateTime('2016-09-04T21: 00: 00Z', Utils.DateFormats.full)).toBe('Mon, Sep 05 7:00 AM AEST');
        expect(Utils.FormatDateTime('2016-09-15T21: 00: 00Z', Utils.DateFormats.full)).toBe('Fri, Sep 16 7:00 AM AEST');
        expect(Utils.FormatDateTime(null, null)).toBe(null);
        expect(Utils.FormatDateTime(undefined, undefined)).toBe(null);
        expect(Utils.FormatDateTime(NaN, NaN)).toBe(null);
    });

    test('FormatPeriod method', () => {
        const period1 = ['2016-09-04T21: 00: 00Z', '2016-09-15T21: 00: 00Z'];
        const period2 = ['2016-09-04T21: 00: 00Z'];

        expect(Utils.FormatPeriod(period1, Utils.DateFormats.short)).toBe('Mon, Sep 05 - Fri, Sep 16');
        expect(Utils.FormatPeriod(period2, Utils.DateFormats.short)).toBe('Mon, Sep 05 - Mon, Sep 05');
        expect(Utils.FormatPeriod([], Utils.DateFormats.short)).toBe('');
        expect(Utils.FormatPeriod(null, Utils.DateFormats.short)).toBe('');
        expect(Utils.FormatPeriod(undefined, Utils.DateFormats.short)).toBe('');
        expect(Utils.FormatPeriod(NaN, Utils.DateFormats.short)).toBe('');
    });
});
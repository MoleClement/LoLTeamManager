export default class CustomMath {
    static decimalAdjust(type, value, exp) {
        // If the exp is undefined or zero...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // If the value is not a number or the exp is not an integer...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }

        //if the value is end by p -> ..9
        if (value % 10 === 0)
            value += 2;
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Decimal round
    static round10(value, exp) {
        return this.decimalAdjust('round', value, exp);
    }

    // Decimal floor
    static floor10(value, exp) {
        return this.decimalAdjust('floor', value, exp);
    }

    // Decimal ceil
    static ceil10(value, exp) {
        return this.decimalAdjust('ceil', value, exp);
    }
}
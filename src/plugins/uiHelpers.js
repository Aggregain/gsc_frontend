import moment from 'moment';

export default {
    install(app) {

        // Price Format
        app.config.globalProperties.$formatPrice = function (value, currency = '$') {
            if (value === null || value === undefined) return '-';
            const number = parseInt(value);
            if (isNaN(number)) return '-';
            return `${currency}${number.toLocaleString('en-US')}`;
        };


        // Date Format
        const knownFormats = [
            moment.ISO_8601,
            'DD/MM/YYYY',
            'MM/DD/YYYY',
            'YYYY-MM-DD',
            'YYYY/MM/DD',
            'DD.MM.YYYY',
            'MMMM D, YYYY',
            'D MMMM YYYY'
        ];

        app.config.globalProperties.$formatDate = function (dateString, outputFormat = 'DD.MM.YYYY') {
            if (!dateString) return '-';

            const parsed = moment(dateString, knownFormats, true);
            return parsed.isValid() ? parsed.format(outputFormat) : '';
        };
    }
};

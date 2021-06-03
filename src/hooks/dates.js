import moment from 'moment';

const dateFormat = 'M/D/YYYY';

export const formatDate = (date) => moment(date, 'YYYY-MM-DD').format(dateFormat);

export const formatDateInput = (date) => moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');

export const formatDateTimestamp = (date) => moment.unix(date).utc().format(dateFormat);

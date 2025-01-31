const {languages, locales, default_country} = require("../config");
const i18n = require('../i18n');
module.exports = function (request, reply, done) {

    const headers = request.headers;

    var locale = headers['locale'] || 'en';

    let localeExists = locales.includes(locale);

    if (!localeExists) {
        locale = 'en';
    }

    const countryIso = headers['country-iso'] || default_country;

    request.i8ln = {
        locale: languages[locale],
        countryIso: countryIso.toUpperCase(),
        cofeCustomerToken: headers['cofe-customer-token'] || null,
        xAppVersion: headers['x-app-version'] || null,
        xAppClient: headers['x-app-os'] || null,
        city: headers['city'] || 'Others'
    }

    request.pagination = {
        perPage: headers['per-page'] || 10,
        currentPage: headers['current-page'] || 1,
        paginate: (headers['pagination']) ? JSON.parse(headers['pagination']) : false,
    }

    i18n.setLocale(locale)

    done();
}

/**
 * 리팩토링 해주세요!
 */
const CONSTANTS = {
	SEASON: {
		SUMMER: 'summer',
		WINTER: 'winter',
	},
	RATE: {
		SUMMER: 10,
		WINTER: 20,
	},
	PERIOD: {
		SUMMER: {
			START: 1561075200,
			END: 1569196800,
		},
	},
	SERVICE_CHARGE: {
		WINTER: 30,
	},
};

const before = (date, limit) => date < limit;
const after = (date, limit) => limit < date;
const isDateWinter = (date) =>
	before(date, CONSTANTS.PERIOD.SUMMER.START) ||
	after(date, CONSTANTS.PERIOD.SUMMER.END);
const getSeasonCharge = (quantity, season) => {
	if (season === CONSTANTS.SEASON.SUMMER)
		return quantity * CONSTANTS.RATE.SUMMER;
	if (season === CONSTANTS.SEASON.WINTER)
		return quantity * CONSTANTS.RATE.WINTER + CONSTANTS.SERVICE_CHARGE.WINTER;
};

const getCharge = (quantity, date) => {
	if (isDateWinter(date))
		return getSeasonCharge(quantity, CONSTANTS.SEASON.WINTER);
	else return getSeasonCharge(quantity, CONSTANTS.SEASON.SUMMER);
};

const charge = getCharge(3, new Date().getTime());
console.log(charge);

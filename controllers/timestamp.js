const timestamp = (req, res) => {
	const { date } = req.params;

	let resDate;

	//checking if the user send date as params, if not a new date is created
	if (!date) {
		resDate = new Date();
	} else {

        //check if the value is a string number (e.g: '1451001600000') if yes, we parse the string into a number
        resDate = isNaN(Date.parse(date)) ? Number(date) : date

	}

	//if date is invalid, error msg is returned
	if (new Date(resDate) == "Invalid Date") {
		return res.json({ error: "Invalid Date" });
	}

	res.json({ unix: new Date(resDate).getTime(), utc: new Date(resDate).toUTCString() });

};

module.exports = {
	timestamp,
};

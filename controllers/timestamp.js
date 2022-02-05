const timestamp = (req, res) => {
	const { date } = req.params;

	if (!isNaN(Date.parse(date))) {
		const unix_parsed = Math.floor(new Date(date).getTime() / 1000);
		const utc_parsed = new Date(date).toUTCString();

		return res.status(200).json({ unix: unix_parsed, utc: utc_parsed });
	} else if (!isNaN(date)) {
		const unix_parsed = Math.floor(new Date(Number(date)).getTime() / 1000);
		const utc_parsed = new Date(Number(date)).toUTCString();

		return res.status(200).json({ unix: unix_parsed, utc: utc_parsed });
	} else {
		return res.json({ error: "Invalid Date" });
	}
};

const isValidDate = (d) => {
	return d instanceof Date && !isNaN(d);
};

module.exports = {
	timestamp,
};

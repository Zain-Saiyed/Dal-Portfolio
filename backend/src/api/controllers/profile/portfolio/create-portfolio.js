export default async (req, res) => {
	const { error, value, warning } = validateCreatePortfolio(req.body);
	if (error) {
		return res
			.status(400)
			.json(errorHelper("00025", req, error.details[0].message));
	}

	const exists = await Portfolio.exists({ name: req.body.name }).catch(
		(err) => {
			return res.status(500).json(errorHelper("00031", req, err.message));
		}
	);

	if (exists) return res.status(409).json(errorHelper("00032", req));

	let portfolio = new Portfolio({
		...value,
	});

	portfolio = await portfolio.save().catch((err) => {
		return res.status(500).json(errorHelper("00034", req, err.message));
	});

	return res.status(200).json({
		resultMessage: { en: getText("en", "00035"), fr: getText("fr", "00035") },
		resultCode: "00035",
		portfolio,
	});
};
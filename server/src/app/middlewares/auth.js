import jwt from 'jsonwebtoken'

export default (req, res, next) => {
	const { authorization } = req.headers

	if (!authorization) {
		return res.status(401).json({ msg: 'No token provided' })
	}

	const parts = authorization.split(' ')

	if (parts.length !== 2) {
		return res.status(401).json({ msg: 'Malformatted token' })
	}

	const [scheme, token] = parts

	if (!/^Bearer$/i.test(scheme)) {
		return res.status(401).json({ msg: 'Malformatted token' })
	}

	jwt.verify(token, process.env.JWT_AUTH_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({ msg: 'No valid token' })
		}

		req.ongId = decoded.id
		return next()
	})
}

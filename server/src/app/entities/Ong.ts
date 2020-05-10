export default class Ong {
	private id: string
	private name: string
	private email: string
	private whatsapp: string
	private city: string
	private uf: string

	public constructor(
		id: string,
		name: string,
		email: string,
		whatsapp: string,
		city: string,
		uf: string
	) {
		this.id = id
		this.name = name
		this.email = email
		this.whatsapp = whatsapp
		this.city = city
		this.uf = uf
	}

	public get _id() {
		return this.id
	}

	public get _name() {
		return this.name
	}

	public get _email() {
		return this.email
	}

	public get _whatsapp() {
		return this.whatsapp
	}

	public get _city() {
		return this.city
	}

	public get _uf() {
		return this.uf
	}
}

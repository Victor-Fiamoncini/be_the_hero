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

	public get _id(): string {
		return this.id
	}

	public get _name(): string {
		return this.name
	}

	public get _email(): string {
		return this.email
	}

	public get _whatsapp(): string {
		return this.whatsapp
	}

	public get _city(): string {
		return this.city
	}

	public get _uf(): string {
		return this.uf
	}
}

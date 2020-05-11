export default class Ong {
	public id: string
	public name: string
	public email: string
	public whatsapp: string
	public city: string
	public uf: string

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
}

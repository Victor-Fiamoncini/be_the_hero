export default class Incident {
	public title: string
	public description: string
	public value: string
	public ongId: string

	public constructor(
		title: string,
		description: string,
		value: string,
		ongId: string
	) {
		this.title = title
		this.description = description
		this.value = value
		this.ongId = ongId
	}
}

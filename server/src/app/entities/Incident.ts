export default class Incident {
	private title: string
	private description: string
	private value: string
	private ongId: string

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

	public get _title(): string {
		return this.title
	}

	public get _description(): string {
		return this.description
	}

	public get _value(): string {
		return this.value
	}

	public get _ongId(): string {
		return this.ongId
	}
}

export default abstract class BaseDAO<T> {
	protected tableName: string

	public constructor(tableName: string) {
		this.tableName = tableName
	}

	public abstract async create(entity: T): Promise<string | T>

	public abstract async update(id: string, entity: T): Promise<string | T>

	public abstract async delete(id: string): Promise<string | T>

	public abstract async find(): Promise<T[]>

	public abstract async findOne(id: string): Promise<T>
}

import IRead from '../interfaces/IRead'
import IWrite from '../interfaces/IWrite'

export default abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
	public abstract async create(entity: T): Promise<T | boolean>

	public abstract async update(id: string, entity: T): Promise<T | boolean>

	public abstract async delete(id: string): Promise<T | boolean>

	public abstract async find(entity: T): Promise<T[]>

	public abstract async findOne(id: string): Promise<T>
}

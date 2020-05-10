export default interface IWrite<T> {
	create(entity: T): Promise<T | boolean>
	update(id: string, entity: T): Promise<T | boolean>
	delete(id: string): Promise<T | boolean>
}

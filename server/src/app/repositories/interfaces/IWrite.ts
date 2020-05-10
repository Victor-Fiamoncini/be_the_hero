export default interface IWrite<T> {
	create(entity: T): Promise<string | T>
	update(id: string, entity: T): Promise<string | T>
	delete(id: string): Promise<string | T>
}

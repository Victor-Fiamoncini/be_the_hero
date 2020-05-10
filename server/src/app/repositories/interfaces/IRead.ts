export default interface IRead<T> {
	find(entity: T): Promise<T[]>
	findOne(id: string): Promise<T>
}

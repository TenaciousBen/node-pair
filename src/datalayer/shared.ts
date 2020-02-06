export async function lag<T>(body: () => T, ms: number): Promise<T> {
	return new Promise<T>((resolve, reject) => {
		setTimeout(() => {
			const result = body();
			resolve(result);
		}, ms);
	});
}
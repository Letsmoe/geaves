class NotImplementedError extends Error {
	public constructor(message?: string) {
		super(message);
	}

	public toString(): string {
		return `NotImplementedError: ${this.message}`;
	}

	public toJSON(): object {
		return {
			message: this.message,
			name: this.name,
			stack: this.stack
		};
	}
}

export { NotImplementedError }
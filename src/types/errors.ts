export class NotImplementedError extends Error {
  constructor(message: string = "This feature is not implemented.") {
    super(message);
  }
}

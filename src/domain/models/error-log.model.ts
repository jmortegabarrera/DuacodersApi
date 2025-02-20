export class ErrorLog {
  id: number;
  message: string;
  stackTrace: object | null;
  type: string;
  createdAt: Date;

  constructor(message: string, stackTrace: object | null, type: string) {
    this.message = message;
    this.stackTrace =stackTrace;
    this.type = type;
    this.createdAt = new Date();
  }
}

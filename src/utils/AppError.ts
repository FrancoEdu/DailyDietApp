export class AppError {
  private message: string;

  constructor(message: string){
    this.message = message;
  }

  getMessage(): string{
    return this.message;
  }
}
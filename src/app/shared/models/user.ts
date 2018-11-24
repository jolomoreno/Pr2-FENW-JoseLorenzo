export class User {
  constructor(username: string, email: string, password: string, passwordRepeated: string, birthdate: number) {}

  username: string;
  email: string;
  password: string;
  passwordRepeated: string;
  birthdate?: number;
}

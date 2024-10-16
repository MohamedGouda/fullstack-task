
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly users = [
    { username: 'user1', password: 'user1' },
    { username: 'user2', password: 'user2' },
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      const payload = { username: user.username };
      return { accessToken: jwt.sign(payload, 'secretKey', { expiresIn: '1h' }) };
    }
    return null;
  }
}

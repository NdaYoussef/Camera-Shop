// src/app/interfaces/auth.interface.ts

export interface Loginrequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
}


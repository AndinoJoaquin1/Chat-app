export type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export type User = {
  _id: string,
  nickname: string,
  email: string,
  password: string,
  token: string
}

export type LoginCredential = {
  email: string,
  password: string

}

export type AuthState = {
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
  user: User|null;
}
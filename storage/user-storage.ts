import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid'; // Biblioteca para gerar UUIDs

interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  register: (
    user: Omit<User, 'id' | 'passwordHash'>,
    password: string,
    callback: (success: boolean) => void
  ) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      // Função para registro de usuários
      register: (user, password, callback) => {
        const state = get();

        // Verificar se já existe um usuário registrado
        if (state.user && state.user.email === user.email) {
          alert('E-mail já cadastrado.');
          callback(false); // Indicar erro no callback
          return;
        }

        // Gerar hash da senha
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        // Criar novo usuário com UUID
        const userId = typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : uuidv4(); // Use `uuidv4` caso `crypto.randomUUID` não esteja disponível

        const newUser = { ...user, id: userId, passwordHash };
        set({ user: newUser, isAuthenticated: true });

        alert('Cadastro realizado com sucesso!');
        callback(true); // Indicar sucesso no callback
      },

      // Função para login
      login: (email, password) => {
        const state = get();

        // Verificar se o usuário existe e validar a senha
        if (state.user && state.user.email === email) {
          const isValidPassword = bcrypt.compareSync(password, state.user.passwordHash);

          if (isValidPassword) {
            set({ isAuthenticated: true });
            alert('Login realizado com sucesso!');
            return true;
          } else {
            alert('Senha inválida.');
            return false;
          }
        } else {
          alert('Usuário não encontrado.');
          return false;
        }
      },

      // Função para logout
      logout: () => {
        set({ user: null, isAuthenticated: false });
        alert('Você foi deslogado.');
      },
    }),
    {
      name: 'auth-storage', // Nome do armazenamento persistente
    }
  )
);

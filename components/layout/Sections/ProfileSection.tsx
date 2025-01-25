"use client";

import React from "react";
import ProfileCard from "../Cards/ProfileCard";
import { useAuthStore } from "@/storage/user-storage";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ProfileSection() {
  const user = useAuthStore((state) => state.user); // Pegando o usuário direto do Zustand
  const logout = useAuthStore((state) => state.logout); // Pegando a função logout
  const logged = useAuthStore((state) => state.isAuthenticated); // Verifica se está autenticado
  const router = useRouter(); // Para redirecionar após o logout

  // Função de logout com redirecionamento
  const handleLogout = () => {
    logout();
    router.push("/login"); // Redireciona para a página de login após logout
  };

  return (
    <section className="w-full flex justify-center">
      <div className="container flex gap-8 py-8 items-center">
        {/* Card de Perfil */}
        <div>
          <ProfileCard />
        </div>

        {/* Botão de Logout */}
        <div>
          <Button onClick={handleLogout}>Sair</Button>
        </div>

        {/* Exibição do usuário logado */}
        <div>
          {logged && user ? (
            <div>
              <p>Bem-vindo, {user.name}!</p>
              <p>Email: {user.email}</p>
            </div>
          ) : (
            <p>Você não está autenticado.</p>
          )}
        </div>
      </div>
    </section>
  );
}

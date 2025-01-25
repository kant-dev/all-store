import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

type AvatarProfileProps = {
  name?: string; // O nome é opcional
  imageUrl?: string; // Caminho opcional para a imagem
};

export default function AvatarProfile({ name = 'Usuário', imageUrl }: AvatarProfileProps) {
  // Função para extrair as iniciais do nome
  const getInitials = (fullName: string): string => {
    const names = fullName.split(' ');
    const initials = names.map((n) => n[0].toUpperCase()).slice(0, 2).join('');
    return initials;
  };

  return (
    <Avatar>
      {/* Imagem do avatar */}
      <AvatarImage src={imageUrl || ''} alt={name} />
      
      {/* Fallback para exibir as iniciais ou uma alternativa */}
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );
}

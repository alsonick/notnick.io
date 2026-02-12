export interface Props {
  session: Session | null;
  messages: Message[];
  hasPosted: boolean;
}

export interface Message {
  discordId: string;
  createdAt: string;
  username: string;
  message: string;
  avatar: string;
  name: string;
  id: string;
}

export interface Session {
  discordId: string;
  username: string;
  avatar: string;
  name: string;
}

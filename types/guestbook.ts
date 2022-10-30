import { Message as M } from "@prisma/client";

export interface Body {
  id: string;
  userId: string;
  text: string;
  sender: string;
  avatar: string;
  date: Date;
}

export interface Response {
  success: boolean;
  error?: string | undefined;
}

export interface MessagesResponse {
  success: boolean;
  messages: M[];
  error?: string | undefined;
}

export interface Message {
  id?: string;
  userId: string;
  text: string;
  sender: string;
  avatar: string;
  date: Date;
}

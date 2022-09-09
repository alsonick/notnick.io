export interface Subscribers {
  data: Subscriber[];
}

export interface Subscriber {
  id: number;
  list_id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  last_changed: string;
}

export interface Error {
  error?: {
    email: string[];
  };
}

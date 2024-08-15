export interface Subscribers {
  success: boolean;
  count: number;
}

export interface Issues {
  success: boolean;
  count: number;
}

export interface Subscriber {
  first_name: string | null;
  last_name: string | null;
  last_changed: string;
  list_id: number;
  email: string;
  id: number;
}

export interface Error {
  error?: {
    email: string[];
  };
}

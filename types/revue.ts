export interface Subscribers {
  success: boolean;
  count: number;
}

export interface Issues {
  success: boolean;
  count: number;
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

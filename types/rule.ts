export interface SingleRuleResponse {
  success: boolean;
  rule: Rule;
}

export interface ErrorResponse {
  success: boolean;
  error: string;
}

export interface Rule {
  number: number;
  title: string;
  text: string;
  id: number;
}

export interface Response {
  success: boolean;
  rules: Rule[];
  count: number;
}

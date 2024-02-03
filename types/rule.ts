export interface SingleRuleResponse {
  success: boolean;
  rule: Rule;
}

export interface ErrorResponse {
  success: boolean;
  error: string;
}

export interface Rule {
  id: number;
  number: number;
  title: string;
  text: string;
}

export interface Response {
  success: boolean;
  rules: Rule[];
  count: number;
}

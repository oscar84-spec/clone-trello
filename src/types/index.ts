export type NavLinks = string[];

export type FooterLinks = {
  title: string;
  links: string[];
  gridArea: string;
};

export type ValidationForm = {
  name: {
    required: {
      value: boolean;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
    maxLength: {
      value: number;
      message: string;
    };
  };
  lastName?: {
    minLength: {
      value: number;
      message: string;
    };
    maxLength: {
      value: number;
      message: string;
    };
  };
  email: {
    required: {
      value: boolean;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };
  password: {
    required: {
      value: boolean;
      message: string;
    };
    minLength: {
      value: number;
      message: string;
    };
    maxLength: {
      value: number;
      message: string;
    };
    pattern: {
      value: RegExp;
      message: string;
    };
  };
};

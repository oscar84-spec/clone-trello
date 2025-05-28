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

export type ValidationFormLogin = {
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

export type ValidationFormBoard = {
  title: {
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
};

export type ValidationFormList = {
  title: {
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
};

export type ValidationFormCard = {
  title: {
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
  description: {
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
  priority: {
    required: {
      value: boolean;
      message: string;
    };
  };
};

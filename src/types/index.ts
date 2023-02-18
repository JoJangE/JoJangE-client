export type childrenProps = {
  children: React.ReactNode;
};

export type StringType = Record<string, string>;
// ===  [key:string]: string

export type ValueOf<T> = T[keyof T];

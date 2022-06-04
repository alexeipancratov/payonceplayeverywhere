type VariableName = "BACKEND";

type CRAEnv = {
  [s in `REACT_APP_${VariableName}`]: string;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends CRAEnv {
      REACT_APP_FIREBASE_API_KEY: string;
      NODE_ENV: "development" | "production" | "test";
    }
  }
}

export {};

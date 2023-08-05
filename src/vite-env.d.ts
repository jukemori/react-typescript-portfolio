/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    SERVICE_ID: string;
    TEMPLATE_ID: string;
    PUBLIC_KEY: string;
    // Add more environment variables as needed
  }
}

declare module "*.css";

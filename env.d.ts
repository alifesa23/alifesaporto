/// <reference types="node" />

declare namespace NodeJS {
    export interface ProcessEnv {
      OPENAI_API_KEY: string;
      NEXT_PUBLIC_OPENAI_API_KEY?: string; // Jika ingin digunakan di frontend
    }
  }
  
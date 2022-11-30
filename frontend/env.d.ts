declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GRAPHQL_URL: string;
      STRAPI: string;
    }
  }
}

export {}

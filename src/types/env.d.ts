declare namespace NodeJS {
  interface ProcessEnv {
    readonly MICRO_SERVICE_DOMAIN: string
    readonly MICRO_API_KEY: string
    readonly TWITTER_BEARER_TOKEN: string
    readonly TWITTER_ID: string
  }
}

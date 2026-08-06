/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_COMPANY_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

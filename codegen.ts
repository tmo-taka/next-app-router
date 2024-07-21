import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: process.env.API_URL,
  documents: './app/graphql/**.ts',
  generates: {
    './types/': {
      preset: 'client',
    }
  },
}

export default config

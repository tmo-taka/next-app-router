import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: process.env.API_URL,
  documents: './app/graphql/**.ts',
  generates: {
    './graphql/': {
      preset: 'client',
    },
    // './types/hygraph-d.ts': {
    //   plugins: ['typescript'],
    // }
  },
}

export default config

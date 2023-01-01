import type { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'

dotenv.config()

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_ENDPOINT,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config
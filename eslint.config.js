import { defineConfig, globalIgnores } from 'eslint/config'

import useAgnostic, {
  useAgnosticPluginName,
  agnostic20ConfigName,
} from 'eslint-plugin-use-agnostic'

export default defineConfig([
  globalIgnores(['.next', '.react-router', 'node_modules', '.vscode']),
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      [useAgnosticPluginName]: useAgnostic,
    },
    extends: [`${useAgnosticPluginName}/${agnostic20ConfigName}`],
  },
])

import { fileURLToPath } from 'url'
import esbuild from 'esbuild'

export default function tailwind() {
  const virtualModuleId = 'virtual:tailwind'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'tailwind-config',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const result = esbuild.buildSync({
          entryPoints: [
            fileURLToPath(
              new URL('./src/lessons/11-solution/tailwind.config.cjs', import.meta.url)
            ),
          ],
          outfile: 'out.js',
          write: false,
          bundle: true,
          format: 'esm',
        })
        return { code: result.outputFiles[0].text }
      }
    },
  }
}

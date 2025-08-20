import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function stripVersionFromBareImports() {
  return {
    name: 'strip-version-from-imports',
    enforce: 'pre',
    resolveId(source: string, importer: string | undefined) {
      if (!source) return null
      if (source.startsWith('.') || source.startsWith('/') || source.includes(':')) return null
      const lastAt = source.lastIndexOf('@')
      if (lastAt > 0) {
        const base = source.slice(0, lastAt)
        if (base) {
          // @ts-ignore
          return this.resolve(base, importer, { skipSelf: true })
        }
      }
      return null
    },
  }
}

function figmaAssetResolver() {
  const placeholderImage = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="16">Image</text></svg>'
  )
  
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id && id.startsWith('figma:asset/')) {
        return id // Return the id to make it a virtual module
      }
      return null
    },
    load(id: string) {
      if (id && id.startsWith('figma:asset/')) {
        return `export default "${placeholderImage}";`
      }
      return null
    }
  }
}

export default defineConfig({
  plugins: [stripVersionFromBareImports(), figmaAssetResolver(), react()],
  build: {
    rollupOptions: {
      external: (id) => {
        // Don't externalize figma:asset imports
        if (id.startsWith('figma:asset/')) {
          return false
        }
        return false
      }
    }
  }
})



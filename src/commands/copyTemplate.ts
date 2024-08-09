import path from 'node:path'
import fs from 'fs/promises'
import { CustomError } from '../errors/CustomError.js'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copyTemplate = async (
  language: string,
  destDir: string
): Promise<void> => {
  try {
    const nameDirTemplate =
      language === 'TypeScript' ? 'node-ts-api' : 'node-js-api'

    const srcDir = path.join(
      __dirname,
      '..',
      '..',
      'templates',
      nameDirTemplate
    )

    const entries = await fs.readdir(srcDir, { withFileTypes: true })

    for (const entry of entries) {
      const srcPath = path.join(srcDir, entry.name)
      const destPath = path.join(destDir, entry.name)
      await fs.cp(srcPath, destPath, { recursive: true })
    }
  } catch (error) {
    throw new CustomError('Error copying files.', 'COPY_TEMPLATE_ERROR')
  }
}
export default copyTemplate

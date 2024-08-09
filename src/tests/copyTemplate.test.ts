import fs from 'node:fs/promises'
import path from 'node:path'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import copyTemplate from '../commands/copyTemplate.js'
import { CustomError } from '../errors/CustomError.js'
const srcDirTypeScript = path.join(
  __dirname,
  '..',
  '..',
  'templates',
  'node-ts-api'
)
const destDirTypeScript = path.join(
  __dirname,
  'test_folder',
  'test-destination-ts'
)
const srcDirJavaScript = path.join(
  __dirname,
  '..',
  '..',
  'templates',
  'node-js-api'
)
const destDirJavaScript = path.join(
  __dirname,
  'test_folder',
  'test-destination-js'
)
vi.mock('fs/promises')

describe('copyTemplate', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  test('should copy TypeScript template files to destination directory', async () => {
    const entries = [{ name: 'file1.ts', isDirectory: () => false }]
    vi.mocked(fs.readdir).mockResolvedValue(entries as any)
    await copyTemplate('TypeScript', destDirTypeScript)
    expect(fs.readdir).toHaveBeenCalledWith(srcDirTypeScript, {
      withFileTypes: true
    })
    for (const entry of entries) {
      const srcPath = path.join(srcDirTypeScript, entry.name)
      const destPath = path.join(destDirTypeScript, entry.name)
      expect(fs.cp).toHaveBeenCalledWith(srcPath, destPath, {
        recursive: true
      })
    }
  })

  test('should copy JavaScript template files to destination directory', async () => {
    const entries = [{ name: 'file1.js', isDirectory: () => false }]
    vi.mocked(fs.readdir).mockResolvedValue(entries as any)
    await copyTemplate('JavaScript', destDirJavaScript)
    expect(fs.readdir).toHaveBeenCalledWith(srcDirJavaScript, {
      withFileTypes: true
    })
    for (const entry of entries) {
      const srcPath = path.join(srcDirJavaScript, entry.name)
      const destPath = path.join(destDirJavaScript, entry.name)
      expect(fs.cp).toHaveBeenCalledWith(srcPath, destPath, {
        recursive: true
      })
    }
  })

  test('should throw a CustomError when an error occurs', async () => {
    vi.mocked(fs.readdir).mockRejectedValue(
      new Error('Failed to read directory')
    )
    await expect(copyTemplate('TypeScript', destDirJavaScript)).rejects.toThrow(
      new CustomError('Error copying files.', 'COPY_TEMPLATE_ERROR')
    )
  })
})

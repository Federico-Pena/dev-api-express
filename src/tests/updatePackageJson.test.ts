import { describe, it, expect, vi, beforeEach, test } from 'vitest'
import path from 'node:path'
import fs from 'node:fs/promises'
import updatePackageJson from '../commands/updatePackageJson.js'
import { CustomError } from '../errors/CustomError.js'

vi.mock('node:fs/promises')
const projectDir = path.join(__dirname, 'test_folder')
const packageJsonPath = path.join(projectDir, 'package.json')

describe('updatePackageJson', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should update package name based on provided projectName', async () => {
    const projectName = 'My Project'
    const packageJson = { name: 'old-name' }
    vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify(packageJson))

    await updatePackageJson(projectDir, projectName)

    expect(fs.readFile).toHaveBeenCalledWith(packageJsonPath, 'utf-8')
    expect(fs.writeFile).toHaveBeenCalledWith(
      packageJsonPath,
      JSON.stringify({ name: 'my-project' }, null, 2)
    )
  })

  test('should update package name based on projectDir when projectName is not provided', async () => {
    const packageJson = { name: 'old-name' }
    vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify(packageJson))

    await updatePackageJson(projectDir, '')

    expect(fs.readFile).toHaveBeenCalledWith(packageJsonPath, 'utf-8')
    expect(fs.writeFile).toHaveBeenCalledWith(
      packageJsonPath,
      JSON.stringify({ name: 'test_folder' }, null, 2)
    )
  })

  test('should throw a CustomError when reading package.json fails', async () => {
    vi.mocked(fs.readFile).mockRejectedValue(new Error('Failed to read file'))

    await expect(updatePackageJson(projectDir, 'Project')).rejects.toThrow(
      CustomError
    )
    await expect(updatePackageJson(projectDir, 'Project')).rejects.toThrow(
      'Error updating package.json'
    )
  })

  test('should throw a CustomError when writing to package.json fails', async () => {
    const packageJson = { name: 'old-name' }
    vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify(packageJson))
    vi.mocked(fs.writeFile).mockRejectedValue(new Error('Failed to write file'))

    await expect(updatePackageJson(projectDir, 'Project')).rejects.toThrow(
      new CustomError(
        'Error updating package.json',
        'UPDATE_PACKAGE_JSON_ERROR'
      )
    )
  })
})

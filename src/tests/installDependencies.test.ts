import { describe, expect, vi, beforeEach, test } from 'vitest'
import { execSync } from 'node:child_process'
import { chdir } from 'node:process'
import installDependencies from '../commands/installDependencies.js'
import { CustomError } from '../errors/CustomError.js'
import path from 'node:path'

vi.mock('node:child_process')
vi.mock('node:process')

const projectDir = path.join(__dirname, 'test_folder')

describe('installDependencies', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should change directory and install dependencies', () => {
    installDependencies(projectDir)
    expect(chdir).toHaveBeenCalledWith(projectDir)
    expect(execSync).toHaveBeenCalledWith('npm install', { stdio: 'inherit' })
  })

  test('should throw a CustomError when changing directory fails', () => {
    vi.mocked(chdir).mockImplementationOnce(() => {
      throw new Error('Failed to change directory')
    })
    expect(() => installDependencies(projectDir)).toThrow(
      new CustomError(
        'Failed to change directory',
        'INSTALL_DEPENDENCIES_ERROR'
      )
    )
  })

  test('should throw a CustomError when installing dependencies fails', () => {
    vi.mocked(execSync).mockImplementationOnce(() => {
      throw new Error('Failed to install dependencies')
    })
    expect(() => installDependencies(projectDir)).toThrow(
      new CustomError(
        'Failed to install dependencies',
        'INSTALL_DEPENDENCIES_ERROR'
      )
    )
  })
})

import { describe, expect, test } from 'vitest'
import path from 'node:path'
import validateProjectName from '../utils/validateProjectName.js'
import { CustomError } from '../errors/CustomError.js'

export default describe('validateProjectName', () => {
  test('should return the projectDir for valid folder names', async () => {
    expect(await validateProjectName('')).toStrictEqual(process.cwd())
    expect(await validateProjectName('valid-folder')).toStrictEqual(
      `${process.cwd()}${path.sep}valid-folder`
    )
    expect(await validateProjectName('valid_folder123')).toStrictEqual(
      `${process.cwd()}${path.sep}valid_folder123`
    )
  })
  test('should return a instanceof CustomError for invalid folder names', async () => {
    expect(validateProjectName('.')).rejects.toThrow(
      new CustomError('Invalid directory name!', 'INVALID_DIRECTORY_NAME_ERROR')
    )
    expect(validateProjectName('.invalid/folder')).rejects.toThrow(
      new CustomError('Invalid directory name!', 'INVALID_DIRECTORY_NAME_ERROR')
    )
    expect(validateProjectName('invalid/folder')).rejects.toThrow(
      new CustomError('Invalid directory name!', 'INVALID_DIRECTORY_NAME_ERROR')
    )
  })
  test('should throw a CustomError if the directory already exists', async () => {
    expect(validateProjectName('src')).rejects.toThrow(
      new CustomError(
        'Directory already exists!',
        'INVALID_DIRECTORY_NAME_ERROR'
      )
    )
  })
})

import { describe, test, expect } from 'vitest'

import { CustomError } from '../errors/CustomError.js'

describe('CustomError', () => {
  test('should create a CustomError instance with message and code', () => {
    const error = new CustomError('Test error', 'TEST_ERROR_CODE')
    expect(error.message).toStrictEqual('Test error')
    expect(error.code).toStrictEqual('TEST_ERROR_CODE')
    expect(error).toBeInstanceOf(CustomError)
    expect(error).toBeInstanceOf(Error)
  })
})

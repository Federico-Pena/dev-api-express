export class CustomError extends Error {
  public code: errorType

  constructor(message: string, code: errorType) {
    super(message)
    this.code = code
  }
}

export type errorType =
  | 'INQUIRER_ERROR'
  | 'INVALID_NAME_ERROR'
  | 'INVALID_DIRECTORY_NAME_ERROR'
  | 'CLI_ERROR'
  | 'COPY_TEMPLATE_ERROR'
  | 'TEST_ERROR_CODE'
  | 'INSTALL_DEPENDENCIES_ERROR'
  | 'UPDATE_PACKAGE_JSON_ERROR'

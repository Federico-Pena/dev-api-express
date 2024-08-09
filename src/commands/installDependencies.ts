import { execSync } from 'node:child_process'
import { chdir } from 'node:process'
import { CustomError } from '../errors/CustomError.js'

const installDependencies = (projectDir: string) => {
  try {
    chdir(projectDir)
  } catch (error) {
    throw new CustomError(
      'Failed to change directory',
      'INSTALL_DEPENDENCIES_ERROR'
    )
  }
  try {
    execSync('npm install', { stdio: 'inherit' })
  } catch (error) {
    throw new CustomError(
      'Failed to install dependencies',
      'INSTALL_DEPENDENCIES_ERROR'
    )
  }
}

export default installDependencies

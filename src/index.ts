#!/usr/bin/env node
import copyTemplate from './commands/copyTemplate.js'
import { performance } from 'node:perf_hooks'
import inquirerAnswers from './config/inquirerAnswers.js'
import ora from 'ora'
import { CustomError } from './errors/CustomError.js'
import validateProjectName from './utils/validateProjectName.js'
import updatePackageJson from './commands/updatePackageJson.js'
import installDependencies from './commands/installDependencies.js'
import successMessage from './utils/successMessage.js'

const run = async (): Promise<void> => {
  const spinner = ora({
    text: ' Copying project...',
    spinner: 'bouncingBall',
    interval: 80
  })

  try {
    const { projectName, language } = await inquirerAnswers()
    const projectDir = await validateProjectName(projectName.trim())

    const start = performance.now()
    spinner.info(' Copying project...')
    await copyTemplate(language, projectDir)
    spinner.succeed(' Project copied successfully!')

    spinner.info(' Installing dependencies...')
    await updatePackageJson(projectDir, projectName)
    installDependencies(projectDir)
    const end = performance.now()
    const duration = ((end - start) / 1000).toFixed(2)
    spinner.succeed(` Proyect ready in ${duration} seconds!`)

    successMessage({
      projectName,
      spinner
    })
    process.exit(1)
  } catch (error: any) {
    if (error instanceof CustomError) {
      spinner.fail(error.message)
      process.exit(1)
    } else {
      spinner.fail('An error occurred.')
    }
    spinner.stop()
  }
}

run().catch((error) => {
  if (error instanceof CustomError) {
    console.error(error)
    process.exit(1)
  } else {
    const cliError = new CustomError('An error occurred.', 'CLI_ERROR')
    console.error(cliError)
    process.exit(1)
  }
})

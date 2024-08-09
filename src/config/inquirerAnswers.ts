import inquirer from 'inquirer'
import { CustomError } from '../errors/CustomError.js'

const inquirerAnswers = async (): Promise<{
  projectName: string
  language: string
}> => {
  try {
    const { projectName, language } = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name (leave empty to use the current directory)'
      },
      {
        type: 'list',
        name: 'language',
        message: 'What language do you want to use?',
        choices: [
          { name: 'TypeScript', value: 'TypeScript' },
          { name: 'JavaScript', value: 'JavaScript' }
        ]
      }
    ])

    return { projectName, language }
  } catch (error) {
    throw new CustomError('Failed to get inquirer answers', 'INQUIRER_ERROR')
  }
}

export default inquirerAnswers

import { Ora } from 'ora'

const successMessage = ({
  projectName,
  spinner
}: {
  projectName: string
  spinner: Ora
}) => {
  console.log()
  console.log('To start run the following commands:')
  if (projectName.length > 0) {
    spinner.info(` cd ${projectName}`)
  }
  spinner.info(' npm run dev')
  console.log('Happy coding!')
  console.log()
}
export default successMessage

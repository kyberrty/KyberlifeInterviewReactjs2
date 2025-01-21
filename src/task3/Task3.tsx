import { Divider, Stack, Typography } from "@mui/material";
import Layout from "../Layout";

const Task3 = () => {
  return (
    <Layout>
      <Stack spacing={2}>
        <TaskDescription />
        <Divider />
        {/* IMPLEMENT JSX HERE (BEGIN) */}
        {/* IMPLEMENT JSX HERE (END) */}
      </Stack>
    </Layout>
  )
}

const TaskDescription = () => {
  return (
    <>
      <Typography variant='h1'>
        Task 3: Form Validation
      </Typography>
      <Typography variant='h2'>
        Instructions
      </Typography>
      <Typography>
        In this exercise, you are to create a form with the following fields:
      </Typography>
      <Typography>
        <ul>
          <li>
            Name (required)
          </li>
          <li>
            Email (required)
          </li>
          <li>
            Password (required, minimum of 8 characters)
          </li>
          <li>
            Confirm Password (required, must match the Password field)
          </li>
        </ul>
      </Typography>
      <Typography>
        The form should have a submit button that is disabled if the form is
        invalid. The form should also display an error message if the form is
        invalid.
      </Typography>
    </>
  )
}

export default Task3;

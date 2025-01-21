import { Divider, Stack, Typography } from "@mui/material"
import Layout from "../Layout"

const Task2 = () => {
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
        Task 2: Fetching Data from an API
      </Typography>
      <Typography variant='h2'>
        Instructions
      </Typography>
      <Typography>
        In this exercise, you are to fetch data from an API to display on the
        page. You are to fetch two posts. The first post should be displayed
        on the first render. The second post should be displayed when a button
        is clicked.
      </Typography>
      <Typography>
        Use the following API endpoint to fetch the data:
      </Typography>
      <Typography>
        <ol>
          <li>
            <Typography>
              <a href='https://jsonplaceholder.typicode.com/posts/1'>https://jsonplaceholder.typicode.com/posts/1</a> (for the first post)
            </Typography>
          </li>
          <li>
            <Typography>
              <a href='https://jsonplaceholder.typicode.com/posts/2'>https://jsonplaceholder.typicode.com/posts/2</a> (for the second post)
            </Typography>
          </li>
        </ol>
      </Typography>
    </>
  )
}

export default Task2

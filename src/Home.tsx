import { List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router'
import Layout from './Layout'

const Home = () => {
  return (
    <Layout>
      <Typography variant='h1'>
        Kyberlife Interview ReactJS
      </Typography>
      <Typography>
        Welcome to Kyberlife's front-end interview. You will be completing a
        series of tasks to demonstrate your front-end development skills.
      </Typography>
      <Typography>
        Click the links below to get started.
      </Typography>
      <Typography>
        <ol>
          <li>
            <Link to='/task1'>
              <Typography>
                Task 1: List filtering
              </Typography>
            </Link>
          </li>
          <li>
            <Link to='/task2'>
              <Typography>
                Task 2: Data fetching
              </Typography>
            </Link>
          </li>
          <li>
            <Link to='/task3'>
              <Typography>
                Task 3: Form validation
              </Typography>
            </Link>
          </li>
        </ol>
      </Typography>
    </Layout>
  )
}

export default Home

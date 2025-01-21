import { List, ListItem, Typography } from '@mui/material'
import Layout from './Layout'
import { Link } from 'react-router'

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
      <List>
        <ListItem>
          <Link to='/task1'>
            <Typography>
              Task 1: List filtering
            </Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/task2'>
            <Typography>
              Task 2: Data fetching
            </Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/task3'>
            <Typography>
              Task 3
            </Typography>
          </Link>
        </ListItem>
      </List>
    </Layout>
  )
}

export default Home

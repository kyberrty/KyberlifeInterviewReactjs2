import { Typography } from '@mui/material'
import Layout from './Layout'

const Home = () => {
  return (
    <Layout>
      <Typography variant='h1'>
        Kyberlife Interview ReactJS
      </Typography>
      <Typography variant='h2'>
        Overview
      </Typography>
      <Typography>
        Welcome to Kyberlife's front-end interview. You will be completing a
        series of tasks to demonstrate your front-end development skills.
      </Typography>
    </Layout>
  )
}

export default Home

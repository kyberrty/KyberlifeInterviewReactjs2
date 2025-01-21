import { Divider, Stack, TextField, Typography } from "@mui/material"
import Layout from "../Layout"

export type Item = {
  name: string
  description: string
  quantity: number
  price: number
}

const data: Item[] = [
  {
    name: 'Apple',
    description: 'A fruit that keeps the doctor away',
    quantity: 10,
    price: 1.5
  },
  {
    name: 'Banana',
    description: 'A fruit that monkeys love',
    quantity: 5,
    price: 2.0
  },
  {
    name: 'Orange',
    description: 'A fruit that is orange',
    quantity: 3,
    price: 1.0
  },
  {
    name: 'Grapes',
    description: 'A fruit that is in bunches',
    quantity: 2,
    price: 3.0
  }
]

const Task1 = () => {
  return (
    <Layout>
      <Stack spacing={2}>
        <Typography variant='h1'>
          Task 1: List Filtering
        </Typography>
        <Typography variant='h2'>
          Instructions
        </Typography>
        <Typography>
          You are given a list of items (see <code>data</code>). You are to create a search bar
          that filters the list of items based on the search query. The search should match
          any part of the item based on a simple, case-insensitive sub-string match.
        </Typography>
        <Typography>
          Implement the search functionality in the Textbox below. Render the list of items below
          the Textbox as required.
        </Typography>
        <Divider />
        {/* IMPLEMENT JSX HERE (BEGIN) */}
        <TextField
          label='Search'
          variant='outlined'
          fullWidth
        />
        {/* IMPLEMENT JSX HERE (END) */}
      </Stack>
    </Layout>
  )
}

export default Task1

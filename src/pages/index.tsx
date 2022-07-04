import type { NextPage } from 'next'
import {Counter} from './components/Counter'
import { List } from './components/List/List'

const Home: NextPage = () => {
  return (
    <>
    <Counter />
    <List />
    </>
  )
}

export default Home

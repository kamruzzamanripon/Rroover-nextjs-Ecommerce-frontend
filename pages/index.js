import Home from '../components/Home'
import Layout from '../components/layout/Layout'


export default function Index(props) {
  //console.log("Index",props)
  return (
    <Layout title='Home Layout'>
       <Home title='props' />
    </Layout>
  )
}

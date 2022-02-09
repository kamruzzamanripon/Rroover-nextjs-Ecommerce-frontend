import Layout from '../components/layout/Layout'
import Register from '../components/Register'


export default function Index(props) {
  //console.log("Index",props)
  return (
    <Layout title='Home Layout'>
       <Register />
    </Layout>
  )
}

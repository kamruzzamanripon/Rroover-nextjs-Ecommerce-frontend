import Layout from '../components/layout/Layout'
import Login from '../components/Login'


export default function Index(props) {
  //console.log("Index",props)
  return (
    <Layout title='Home Layout'>
       <Login />
    </Layout>
  )
}

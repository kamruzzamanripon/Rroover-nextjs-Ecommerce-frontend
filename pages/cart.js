import Cart from '../components/Cart'
import Layout from '../components/layout/Layout'


export default function Index(props) {
  //console.log("Index",props)
  return (
    <Layout title='Home Layout'>
       <Cart />
    </Layout>
  )
}

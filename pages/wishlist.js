import Layout from '../components/layout/Layout'
import WishList from '../components/WishList'


export default function cart(props) {
  //console.log("Index",props)
  return (
    <Layout title='wish list'>
       <WishList />
    </Layout>
  )
}

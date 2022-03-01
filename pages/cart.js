/* eslint-disable react-hooks/rules-of-hooks */
import Cart from '../components/Cart'
import Layout from '../components/layout/Layout'
import usePrivateRoute from '../hook/usePrivateRoute'
import { wrapper } from '../store/store'


const cart = (props)=> {
  //console.log("Index",props)
  return (
    <Layout title='Home Layout'>
       <Cart />
    </Layout>
  )
}

export default  usePrivateRoute(cart)

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
 
})
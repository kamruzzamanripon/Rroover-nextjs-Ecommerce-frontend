import Layout from '../components/layout/Layout';
import Login from '../components/Login';
import { wrapper } from '../store/store';


export default function login(props) {
  //console.log("Index",props)
  return (
    <Layout title='Home Layout'>
       <Login />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
   
   

})

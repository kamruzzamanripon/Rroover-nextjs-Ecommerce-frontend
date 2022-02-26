import Layout from '../components/layout/Layout';
import Login from '../components/Login';
import ifLogIn from '../hook/ifLogIn';
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
  //If login than go to home page, when you hit login page. 
  ifLogIn(ctx)

})

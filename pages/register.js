import Layout from '../components/layout/Layout';
import Register from '../components/Register';
import ifLogIn from '../hook/ifLogIn';
import { wrapper } from '../store/store';


export default function register(props) {
  //console.log("Index",props)
  return (
    <Layout title='Home Layout'>
       <Register />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
  //If login than go to home page, when you hit login page.  
  ifLogIn(ctx)

})


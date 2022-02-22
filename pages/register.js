import Layout from '../components/layout/Layout';
import Register from '../components/Register';
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
   
   

})


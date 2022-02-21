import Home from '../components/Home'
import Layout from '../components/layout/Layout'
import MiniCart from '../components/MiniCart'
import { wrapper } from '../store/store'
import { brandData, categoryData, dealOfTheWeek, mainSliderData } from '../store_slices/data_fetch/homePageFetch'


export default function Index(props) {
  //console.log("Index",props)
  return (
    <Layout title='Home Layout'>
       <MiniCart />
       <Home />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
       
          await store.dispatch(mainSliderData())
          //await store.dispatch(categoryData())
          await store.dispatch(brandData())
          await store.dispatch(dealOfTheWeek())
     
  
 })

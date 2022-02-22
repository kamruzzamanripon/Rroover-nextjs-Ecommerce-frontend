import { wrapper } from '../store/store';
import { categoryData } from '../store_slices/data_fetch/homePageFetch';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps })=> {
  
  return (
    <Component {...pageProps} />
  )
}


MyApp.getInitialProps  = wrapper.getInitialAppProps( store => async (ctx)=>{
  //console.log("app root page")    
  await store.dispatch(categoryData())

})


export default wrapper.withRedux(MyApp)

import Cookies from "js-cookie";

class LocalStorageHelper {

    static SetRedirectFromDetails(urlLocation){
        sessionStorage.setItem("urlLocation",urlLocation)
    }

    static GetRedirectFromDetails(){
        return sessionStorage.getItem("urlLocation");
    }

    static userLoginStatus(){
        return Cookies.get('passport_frontend');
    }

    static userInfo(){
        return Cookies.get('user_info') 
    }
}
export default LocalStorageHelper;
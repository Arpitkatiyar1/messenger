import axios from 'axios';
import { REGISTER_FAIL } from '../type/authType';

export const userRegister = (data) => {
     return async (dispatch) => {
          const config = {
               headers: {
                    
               }
          }
          try{
               const response = await axios.post('/api/messenger/user-register',data,config);
               

          } catch (error) {
               console.log(`From axios library`,error);
               dispatch({
                    type: REGISTER_FAIL,
                    payload:{
                         error : error.response.data.error.errorMessage 
                    }
               })
          }

     }
}
import { HomeInitialState } from "./initialState";
import axios from 'axios';

export const ImageDetails = {
  url:"",
  title:"",
  desc:"",
  author:"",
};
export const actionCreators = {

    getUnsplashImages: () => async (dispatch, getState) => {
      let imageResponse={
        imageList:[],
      }
        const url="https://api.unsplash.com/search/photos?page=1&query=office&client_id=a8LPtd2FV4A-97NVp9LnYEFCrTczbd2KfIcpbrjHFyc"
        const response = await axios.get(url);
        if(response.data!=null && response.data.results.length>0){
       
          response.data.results.forEach(element => {
              const image={
                  imageUrl:element.urls.small, 
                  title:element.alt_description,
                  description:  element.description,
                  author:element.user.first_name
              }
              imageResponse.imageList.push(image);
          });
        }

        const resData = {
            type: "GET_IMAGE",
            data: imageResponse              
        }
        dispatch(resData);
      }
};


export const HomeReducer = (state = HomeInitialState, action) => {
  switch (action.type) {
    case "GET_IMAGE":
        return { ...state, ...action.data };
    default:
      return { ...state, errorMessage: null };
  }
};

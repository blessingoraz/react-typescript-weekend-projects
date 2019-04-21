import axios from 'axios';

const videoURL = '';
export function getVideos() {
    return (dispatch) => {
      return axios.get(`${videoURL}`)
        .then((response) => {
            console.log('response ===', response)
  
        //   return RESPONSE_MESSAGES.SUCCESS;
        }).catch(() => {
        //   dispatch(setErrorMessage(RESPONSE_MESSAGES.FAILED_REQUEST));
        //   return Promise.reject({
        //     message: RESPONSE_MESSAGES.FAILED_REQUEST,
        //     response: {
        //       status: 400
        //     }
        //   });
        });
    };
  }
  
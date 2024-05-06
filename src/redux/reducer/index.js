const initialState = {
    jobs: {
      content: [],
    },
    jobsForCompany: {
      content: [],
    },
    favouriteCompany: {
      content: [],
    },
  };
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_JOBS":
        return {
          ...state,
          jobs: {
            content: action.payload,
          },
        };
        
      case "JOBS_FOR_COMPANY":
        return {
          ...state,
          jobsForCompany: {
            content: action.payload,
          },
        };

      case "ADD_TO_FAVOURITE":
        return {
          ...state,
          favouriteCompany: {
            ...state.favouriteCompany,
            content: [...state.favouriteCompany.content, action.payload],
          },
        };

        case "REMOVE_FROM_FAVOURITE":
          return {
            ...state,
            favouriteCompany: {
              ...state.favouriteCompany,
              content: state.favouriteCompany.content.filter(
                (company) => company !== action.payload
              ),
            },
          };
      
      default:
        return state;
    }
  };
  
  export default mainReducer;
const initialState = {
  
}

export default function form(state = initialState, action) {
  if (action.type === '') {
    return {
      ...state,
      currentCategory: action.payload,
    } 
  } else if (action.type === '') {
    return {
      ...state,
      imagesLoading: true,
    }
  } else if (action.type === '') {
    const newImages = {
      ...state.images,
      [action.payload.key]: action.payload.imgListForState,
    }
    const newName = action.payload.key
    return {
      ...state,
      images: newImages,
      currentCategory: newName,
      imagesLoading: false,
      resourceCounter: action.payload.nextCounter,
      disableLoader: action.payload.disableLoader
    }
  } else if (action.type === '') {
    return {
      ...state,
      images: action.payload.images,
      currentCategory: action.payload.setCategory
    }
  }
  return state;
}
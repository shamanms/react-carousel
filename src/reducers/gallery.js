const initialState = {
  images: {
    default: ["http://via.placeholder.com/640x480", "http://via.placeholder.com/640x480", "http://via.placeholder.com/640x480", "http://via.placeholder.com/640x480", "http://via.placeholder.com/640x480", "http://via.placeholder.com/640x480"],
    nature: ['https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/nature'],
    animals: ['http://placecorgi.com/640/480','https://placeimg.com/640/480/animals', 'http://placecorgi.com/640/480','https://placeimg.com/640/480/animals', 'http://placecorgi.com/640/480','https://placeimg.com/640/480/animals'],
    architecture: ['https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch', 'https://placeimg.com/640/480/arch'],
    tech: ['https://placeimg.com/640/480/tech', 'https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech','https://placeimg.com/640/480/tech']
  },
  resources: ['https://5a2e6f220e07b70012083a6a.mockapi.io/img/reduxGalleryMountains','https://5a2e6f220e07b70012083a6a.mockapi.io/img/reduxGalery'],
  currentCategory: 'default',
  imagesLoading: false,
  resourceCounter: 0,
  disableLoader: false,
}

export default function theme(state = initialState, action) {
  if (action.type === 'CHOOSE_IMG') {
    return {
      ...state,
      currentCategory: action.payload,
    } 
  } else if (action.type === 'ADD_IMAGE_INIT') {
    return {
      ...state,
      imagesLoading: true,
    }
  } else if (action.type === 'ADD_IMAGE_SUCCESS') {
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
  } else if (action.type === 'REMOVE_IMG') {
    return {
      ...state,
      images: action.payload.images,
      currentCategory: action.payload.setCategory
    }
  }
  return state;
}

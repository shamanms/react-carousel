export const galleryActions = {
  selectCategory,
  addNewCategory,
  getCategory,
  removeCategory
}

export function selectCategory (categoryInfo) {
  return (dispatch) => {
    dispatch({type: 'CHOOSE_IMG', payload: categoryInfo})
  }
}

export function addNewCategory (counter, resources)  {
  return (dispatch) => {
    dispatch({type: 'ADD_IMAGE_INIT'})
    getImages(counter, resources).then(
      imageList => {
        let imgListForState = imageList.map((el,id) => {
          return el.image
        })
        
        let key = imageList[0].name;

        let nextCounter = ++counter;
        const disableLoader = nextCounter === resources.length ? true : false;

        const updatedData = {
          key,
          imgListForState,
          nextCounter,
          disableLoader
        }

        dispatch({type: 'ADD_IMAGE_SUCCESS', payload: updatedData})
      }
    )
  }
}

function getImages(counter, resources) {
  return fetch(resources[counter])
    .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        return response.json()
    })
    .then(data => {
      return data;
    });
}

export function getCategory (category, categories, type) {
  return (dispatch) => {

    let nextCategory = category;

    let categoryId = categories.findIndex((e) => {return e === category});

    if(type === '+') {
      categoryId !== categories.length -1 
        ? nextCategory = categories[++categoryId]
        : nextCategory = categories[0]
    } else if (type === '-') {
      categoryId === 0
        ? nextCategory = categories[categories.length -1]
        : nextCategory = categories[--categoryId]
    }

    dispatch({type: 'CHOOSE_IMG', payload: nextCategory});
  }
}

export function removeCategory (category, categories, images) {
  return (dispatch) => {
    
    let setCategory;

    let categoryId = categories.findIndex((e) => {return e === category});

    if (categories.length -1 === categoryId) {
      setCategory = categories[0];
    } else {
      setCategory = categories[categoryId+1];
    }

    images[category] = [];

    const updatedData = {
      images,
      setCategory
    }
    
    dispatch({type: 'REMOVE_IMG', payload: updatedData });
  }
}
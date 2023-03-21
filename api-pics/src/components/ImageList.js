import '../css/ImageList.css'
import ImageShow from "./ImageShow";

function ImageList({images}){
    const renderedImages = images.map((image, index) =>{
        return <ImageShow key={image.id} image={image}/>
    })
    console.log(images);
    return (
        <div className='image-list'>{renderedImages}</div>
    );
}

export default ImageList;

/*
    Use and Importance of key in React.
    In React, a "key" is a special attribute that needs to be assigned to each element in an array that is being rendered. 
    The key attribute is used to help React identify which items have been added, changed, or removed from a list of components.
   
    The importance of keys in React lies in their ability to improve the performance and maintainability of React components. 
    When React renders a list of components, it needs a way to keep track of each item in the list so that it can update the 
    DOM efficiently. Without keys, React may end up re-rendering the entire list of components, even if only one item has changed.
 
    By using keys, React can identify which items have been added, removed, or changed in a list of components, and only update those 
    specific items in the DOM. This helps to improve the performance of the application and reduce unnecessary re-renders.

    Additionally, keys can be useful in optimizing the performance of React's reconciliation algorithm. By providing a unique identifier 
    for each item in a list of components, React can more easily determine the correct order of elements in the DOM and reduce the number 
    of operations needed to update the UI.

    In summary, the use of keys in React is important for optimizing performance and maintaining the integrity of the UI, particularly 
    when rendering lists of components.

    Requirements for key
    Use whenever we have a list of elements (so every time we do a 'map')
    Add the key to the top-most JSX element in the list
    Must be a string or number
    Should be unique for this list
    Should be consistent across re-renders
*/
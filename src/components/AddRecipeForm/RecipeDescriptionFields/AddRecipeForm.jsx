
const AddRecipeForm = () => {

  return (
    <form >
      <label >
        <input        
          type="text"
          name="title"     
          placeholder="Enter item title"
        />
      </label>
      <label >
        <input       
          type="text"
          name="name"            
          placeholder="Enter about recipe"
        />
      </label>
      <label >
        <input        
          type="text"
          name="about"                
          placeholder="Category"
        />
      </label>
      <label >
        <input        
          type=""
          name=""                  
          placeholder="Cooking time"
        />
      </label>
      <button >
        Add 
      </button>
    </form>
  );
}


export default AddRecipeForm
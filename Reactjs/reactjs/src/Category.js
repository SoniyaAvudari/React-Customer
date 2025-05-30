

function Category(){
    let count=0;

    const handleClick = () => {
    alert('Submitted successfully');
      count = count + 1;    // Calculate the incremented value
               // Update the state
    alert(`Incremented value: ${count}`); // Show the alert
  };
  return (
    <div>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

    

export default Category;
function Button(props){
    const {buttonText} = props
    // var count = 0;
    // function handleClick(){
    //     count=count+1;
    //     alert(`${count}`);
    // }
    function handleClick(){
      alert('Form Submitted');
    }
    return (
    <>
      <button onClick={handleClick}>
        {buttonText}
      </button>
    </>
    )
};
export default Button;
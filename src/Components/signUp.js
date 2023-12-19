import Button from "./button";

export default function Signup(){
    return(
        <>
         <input type="text" placeholder="First Name"/>
         <input type="text" placeholder="Last Name"/>
         <Button buttonText={'Submit'}></Button>
        </>
    )
}
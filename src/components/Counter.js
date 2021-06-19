import React,{useState} from 'react'

const Counter = () => {
   const[counterValue, setCounterValue] = useState(1);

   const handleInput = (e) => {
    setCounterValue(e.target.value);
   }
    //decreasing Counter value
   const decCounter = () => {
       let count = counterValue;
       if(count<=0){
           count = 0;
           setCounterValue(count);
       }
       else if(count>1000){
           setCounterValue(1000)
       }
       else{
        count--;
       setCounterValue(count);
       }
   }
   //increasing Counter value
   const incCounter = () => {
    let count = counterValue;
    if(count>=1000){
        count = 1000;
        setCounterValue(count);
    }
    else if(count<0){
        setCounterValue(0);
    }
    else{
    count++;
    setCounterValue(count);
    }
}

    return (
        <>
            <div className="outer-div">
            <div className="inner-div">
                <div className="first-div" onClick= {decCounter}>
                    -
                </div>
                <div className="second-div">
                <input type="text" onChange={handleInput} value= {counterValue} />
                    
                </div>
                <div className="third-div" onClick= {incCounter}>
                    +
                </div>
                
                </div>

            </div>
        </>
    )
}

export default Counter

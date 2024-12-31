import React,{useState} from 'react'
import './ColorPicker.css'
function ColorPicker(){
    const [Color,setColor] = useState("#ffffff")
   
    const changeColor =(event)=>{
        setColor(event.target.value)
        
    }
    return(
        <div className='main-container'>
            <p className='heading'>Color Picker</p>
            <p className='color-displayer1' style={{color:Color}}>Color:{Color}</p>
            <input className='color-picker'type='color' value={Color} onChange={changeColor}/> 
            <p className='color-displayer2' style={{color:Color}}>Color:{Color}</p>  
        </div>
    )
}
export default ColorPicker
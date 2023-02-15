import React, { useEffect } from 'react';
import './home.css';
import Header from '../../component/header';
import {useState} from 'react';



const Home = () => {
  const [style, setStyle] = useState(localStorage.getItem('background'))
  const [color, setColor] = useState(localStorage.getItem('color'))
  const [dis,setDis] = useState('relative')
  const [name, setName] = useState()
  const [duration, setDuration] = useState()
  const [fill, setFill] = useState()
  const [index, setIndex] = useState()
  const [darkDis, setDarkDis] = useState(localStorage.getItem('darkDis'))
  const [direction, setDirection] = useState('')
  const [lightDis, setLightDis] = useState(localStorage.getItem('lightkDis'))
  const [lightz, setLightz] = useState(localStorage.getItem('lightz'))



  const becomeBlack = ()=>{
    // 设置背景过渡的动画
    setName('hd')
    setDuration('1s')
    setFill('forwards')
    setIndex('1')
    setColor('white')

    // 字体颜色改为白色
    localStorage.setItem('color','white')
    setTimeout(() => {
      setStyle('black')
      localStorage.setItem('background','black')  
      // setDarkDis('none') 
      // localStorage.setItem('darkDis', 'none')

      
      
      //然后设置日间模式index为2，叠在圆的上方
      setLightz(2)
      localStorage.setItem('lightz',2)
      // 首先显示日间模式按钮
      setLightDis('block')
      localStorage.setItem('lightkDis', 'block')
    }, 500);
    
  }


  const imageback = ()=>{
    
    setTimeout(() => {
      setStyle('rgb(31,73,224)')
      localStorage.setItem('background','rgb(31,73,224)')  
      setLightDis('none')
    localStorage.setItem('lightkDis', 'none')
    }, 500);

    setName('another')
    setDuration('1s')
    setFill('forwards')
    setIndex('1')
    setColor('white')

    
  }
  
  return (
    <div className='wrapper'>
      <div className='content-wrapper' style = {{backgroundColor:style}}>
        {/* <div style = {{color:color}} className = 'textpage'>This is home page</div> */}
        
        <div className='btnWrapper'>
            <div className='test' tabIndex="1" onClick={becomeBlack} style = {{
              animationName:name, 
              animationDuration:duration, 
              animationFillMode:fill, 
              zIndex:index, 
              display:darkDis, 
              animationDirection: direction
            }}></div>
        </div>
        
        <div className = 'lightWrapper'>
          <div className='test2' tabIndex="2" onClick={imageback} style = {{display:lightDis, zIndex:parseInt(lightz)}}></div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
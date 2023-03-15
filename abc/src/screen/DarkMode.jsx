
import React, { useEffect,ReactDOM } from 'react';
import './dark.css';
import { useState } from 'react';
import filledBanner from "../../src/screen/AboutPage/assets/banner_filled.svg";
import partners from "../../src/screen/AboutPage/assets/partners.svg";





const Dark = () => {
    const [style, setStyle] = useState(localStorage.getItem('background'))
    const [color, setColor] = useState(localStorage.getItem('color'))
    const [dis, setDis] = useState('relative')
    const [name, setName] = useState()
    const [duration, setDuration] = useState()
    const [fill, setFill] = useState()
    const [index, setIndex] = useState()
    const [darkDis, setDarkDis] = useState(localStorage.getItem('darkDis'))
    const [direction, setDirection] = useState('')
    const [lightDis, setLightDis] = useState(localStorage.getItem('lightkDis'))
    const [lightz, setLightz] = useState(localStorage.getItem('lightz'))
    const [width, setWidth] = useState("100%")




    const para1 = `Australian blockchain club (ABC) is an all-inclusive hybrid (online & offline) club brought to you by individuals who have been involved in blockchain for many years. We are launching with the goal of providing a lively, communicative, and intellectually enriching platform for web3 and blockchain enthusiasts, regardless of whether you are new to all this or know the ins and outs thoroughly.`;

    const para2 = `At ABC, our motto of ‘Learn, Grow, and Co-operate' stems from our belief in web3 and blockchain technology as a whole. Over the past few years, this nascent industry has driven innovation, disrupted traditional ideologies, all with the intention of bringing forth a fairer and more inclusive world. All things we believe we can achieve, with the help of you- our
	Join us today on our expedition of uncovering the unlimited possibilities that web3 has to offer.`;

    const para3 = `We will be offering regular offline web3 activities and classes, all in preparation of our online web3 academy courses and certifications- to be unveiled at a later date. Our meet-ups either in person or the internet will be run with the intention of creating a friendly and inclusive environment that will allow individuals to tap into their potential and make some friends too.`;


    const becomeBlack = () => {

        // 设置背景过渡的动画
        setName('hd')
        setDuration('1s')
        setFill('forwards')
        setIndex('1')
        setColor('white')

        // 字体颜色改为白色
        localStorage.setItem('color', 'white')
        setTimeout(() => {
            setStyle('black')
            localStorage.setItem('background', 'black')
            // setDarkDis('none') 
            // localStorage.setItem('darkDis', 'none')



            //然后设置日间模式index为2，叠在圆的上方
            setLightz(2)
            localStorage.setItem('lightz', 2)
            // 首先显示日间模式按钮
            setLightDis('block')
            localStorage.setItem('lightkDis', 'block')
        }, 500);

    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    })

    const handleScroll = (e)=>{
        let scrollTop = document.documentElement.scrollTop
        // let senderName = ReactDOM.findDOMNode(this.refs['line-mask']);
        // let nwidth = senderName.style.width;
        console.log(scrollTop)
        if(scrollTop < 1000){
            var per = '100%'
            setWidth(per)
        }
        if(scrollTop>1000){
            var pers = 100-(scrollTop-1000)+"%"
            setWidth(pers)
        }
        
    }

    const imageback = () => {

        setTimeout(() => {
            setStyle('rgb(31,73,224)')
            localStorage.setItem('background', 'rgb(31,73,224)')

        }, 500);

        setTimeout(() => {
            setLightDis('none')
            localStorage.setItem('lightkDis', 'none')
        }, 1000);

        setName('another')
        setDuration('1s')
        setFill('forwards')
        setIndex('1')
        setColor('white')
    }

    return (
        <div className='wrapper'>
            <div className='content-wrapper-mainpage' style={{ backgroundColor: style }}>

                <div className='btnWrapper'>
                    <div className='test-com' tabIndex="1" onClick={becomeBlack} style={{
                        animationName: name,
                        animationDuration: duration,
                        animationFillMode: fill,
                        zIndex: index,
                        display: darkDis,
                        animationDirection: direction,
                        width: '233px',
                        height: '233px',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        zIndex: '1',
                        position: 'absolute',
                        right: '-80px',
                        top: "-90px",
                        cursor: 'pointer'
                    }}></div>
                </div>
               {/* <button onClick={handleScroll}>Test</button> */}
                <div className='lightWrapper'>
                    <div className='test2-com' tabIndex="2" onClick={imageback} style={{
                        display: lightDis,
                        zIndex: parseInt(lightz),
                        width: '233px',
                        height: '233px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        position: 'absolute',
                        right: '-80px',
                        top: '-90px',
                        cursor: 'pointer'
                    }}></div>
                </div>





                {/* ------------------content---------------------- */}
                <div className='mainContent'>
                    {/* <Header /> */}
                    <div className="page-wrapper">
                        <img
                            className="about-banner"
                            src={filledBanner}
                            alt="ABC Banner"
                        />
                        <main className='main' data-scroll-container = '1' data-barba = "container" data-scroll-section-id = "section0" data-scroll-section-inview>
                            <p className='p--48px split-lines col--black'>
                                <div className='line' style = {{display:'block', textAlign:'start', position:'relative'}}>
                                    <strong></strong>
                                    {/* <div className='line-mask' >???</div> */}
                                </div>


                                <div className='line' style = {{display:'block', textAlign:'start', position:'relative'}}>
                                    <div style = {{position:'relative', display:'inline-block'}}>Aaron</div>
                                    <div style = {{position:'relative', display:'inline-block'}}>Aaron</div>
                                    <div style = {{position:'relative', display:'inline-block'}}>Aaron</div>
                                    <div style = {{position:'relative', display:'inline-block'}}>Aaron</div>
                                    <div style = {{position:'relative', display:'inline-block'}}>Aaron</div>
                                    <div className='line-mask' style={{width:width}}></div>
                                </div>

                            </p>
                        </main>
                        
                                <p className="about-para"><h1 data-text="Geeks">Geeks+mask:linear-gradient(-180deg,rgba(255,255,255,1),rgba(255,255,255,.5));CodePen Demo -- 使用 mask 搭配滤镜 contrast 我们叠加了一个线性渐变的 masklinear-gradient(-1.</h1></p>
                                <h2
                                    className="about-h2"
                                    style={{ marginLeft: "auto", textAlign: "right" }}>
                                    Strategic <br /> Collaborators
                                </h2>
                                <img
                                    style={{ marginTop: "-100px", marginBottom: "100px" }}
                                    src={partners}
                                    alt="partners"
                                />

                                {/* <Footer /> */}
                            </div>
                    </div>
                    {/* ---------------------Content---------------------- */}








                </div>
            </div>
            )
}

            export default Dark
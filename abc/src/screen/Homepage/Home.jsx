// This is class component.

// import React from 'react';
// import './home.css'



// class Home extends React.Component {
//   state = {

//   }


//   componentDidMount(){

//     }

//   getlandingData = async () =>{

//   }




//   render () {
//     return(
//         <div className='wrapper'>
//             <div className='content-wrapper'>

//             </div>
//         </div>
//     )

// }
// }

// export default Home



import React from 'react';
import './home.css';
import Header from '../../component/header';



const Home = () => {
  return (
    <div className='wrapper'>
      <div className='content-wrapper'>
        This is home page
      </div>
    </div>
  )
}

export default Home
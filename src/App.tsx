import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import CommentBox from './Component/CommentBox';
import Header from './Component/Header';
import Main from './Component/Main';

function App() {

  const [comments,setComments] = useState([] as Comment[])
  const [errorMessage, setErrorMessage] = useState('');
  

  async function load(){
    try{
      const response = await fetch('http://localhost:3000/api/comments');
      if(!response.ok){
         setErrorMessage('Hiba a letöltéskor')
         return;
      }
      const content = await response.json() as Comment[]
      setComments(content);
     }catch{
       setErrorMessage('Hiba a letöltéskor')
     }
    }
   useEffect(()=>{
    
    load();
   },[])
  


  return (
    <div className='color'>
    <>
   <Header/>
   <Main/><br />
    <div>
      <h2>Comments</h2><br />
      <div>
        {
          comments.map(a=> <CommentBox key={a.id} comment={a}/>) 
        }
      </div>
    </div>
    
    </>
    </div>
  )

}
export default App

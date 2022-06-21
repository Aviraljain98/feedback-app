import React,{useState} from 'react'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackData from './Data/feedBackData.js'
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import { v4 as uuidv4} from 'uuid';

function App() {
        
    const [feedback,setFeedback] =useState(FeedbackData);
    const deleteFeedback = (id)=>{
      if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item)=> item.id!==id))
      }
     }


     const addFeedback =(newFeedback)=>{
     newFeedback.id=uuidv4()
     setFeedback([newFeedback, ...feedback]);
    }
  return (
    <>
     <Header />
     <div className='container'>
         <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback}/>
         <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
     </div>
    </>
   
  )
}

export default App
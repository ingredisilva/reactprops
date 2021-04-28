import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
        <CommentDetail 
        author="Sam" 
        timeAgo="Today at 5:55pm" 
        text="Somos o que Repetidamente Fazemos"
        avatar={faker.image.avatar()}
        />
       </ApprovalCard>
       <ApprovalCard>
       <CommentDetail 
       author="Alloy" 
       timeAgo="Today at 3:66am" 
       text="Clássico"
       avatar={faker.image.avatar()}
       />
       </ApprovalCard>
       <ApprovalCard>
       <CommentDetail 
       author="Joxer" 
       timeAgo="Today at 10:58am" 
       text="I dont Know What is this"
       avatar={faker.image.avatar()}
       />
       </ApprovalCard>    
      </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));

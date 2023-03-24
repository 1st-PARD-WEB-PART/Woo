
import './App.css';
import React, { useState } from 'react'; // useState hook을 호출한다

// Name이라는 component 함수 생성
// props로 입력값을 설정
function Name(props){
  const [name, setName] = useState('');
  // 지정 값으로 name, 업데이트 값으로 setName을 설정
  // 이를 useState를 통해서 설정하며 초기값을 ''으로 둔다
  return( 
    
  <label> {/*label로 사용자 인터페이스 항목을 설명한다*/}
    {props.name}: {/* 입력값에 대한 호출값으로서 설정*/}
    <input 
    name='name'
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
    {/*label태그 안에 input태그를 중첩시킨다 
       이때 input 태그의 이름을 name으로 지정하고 type은 text, 
       value값은 앞서 우리가 설정한 state 지정값으로 둔다.
        state로 value값을 둬야 수정이 가능하므로 props는 변경이 불가능
        onChane라는 입력한 값으로 변하는 함수에서 setName을 통해 
        현재 태그에서의 name의 값으로 name을 변경한다.  */}
  </label>)
}

function Email(props){
  const [email, setEmail] = useState('');
  return(      
  <label> {/*label로 사용자 인터페이스 항목을 설명한다*/}
    {props.email}: {/* 입력값에 대한 호출값으로서 설정*/}
    <input 
   
    name='email'
      type="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      />
       {/*label태그 안에 input태그를 중첩시킨다 이때 input 태그의 이름을 email로 지정하고 type은 email로 설정,*/} 
       {/*value값은 앞서 우리가 설정한 state 지정값으로 둔다.*/}
        {/*onChane라는 입력한 값으로 변하는 함수에서 setEmail을 통해*/} 
        {/*현재 태그에서의 email의 값으로 email을 변경한다.  */}

  </label>)
}

function Message(props){ 
  const [message, setMessage] = useState('');
  return(      
  <label>  
    {props.message}:
    
    <input
      name='message'
      
      value={message}
      onChange={(event) => setMessage(event.target.value)}
    />
          {/*label태그 안에 input태그를 중첩시킨다 이때 input 태그의 이름을 message로 지정*/} 
       {/*value값은 앞서 우리가 설정한 state 지정값으로 둔다.*/}
        {/*onChane라는 입력한 값으로 변하는 함수에서 setMessage을 통해*/} 
        {/*현재 태그에서의 message의 값으로 message을 변경한다.  */}
    </label> 
    
 )
}



function App() {
  

  /**   useEffect(()=>{
    document.title=`Submitted: ${name}, ${email}, ${message}`
    console.log(document.title)
  })
  렌더링할때마다 즉 입력할때마다 나옴
  **/


  function handleSubmit(event) { 
  
    event.preventDefault(); // 이벤트가 발생했을 때 브라우저가 기본적으로 실행하는 동작을 취소하고, 자바스크립트에서 지정한 동작을 실행할 수 있도록 한다. => 폼이 제출될 때 브라우저가 페이지를 새로고침하지 않고, console.log()를 호출하도록 합니다.
    console.log('Submitted:', event.target.name.value,event.target.email.value, event.target.message.value);
    // 
    alert(`Name:${event.target.name.value} \nEmail: ${event.target.email.value} \nMessage:${event.target.message.value}`)
  }
   
    
  

  return (
    <div className='app-container'>
    <form onSubmit={handleSubmit} className='form-container'  > {/* submit을 눌렀을 때 앞서 설정한 handleSubmit함수를 실행*/}
      <Name name='Name' ></Name> {/*Name 컴포넌트를 불러오거 props입력값으로 Name설정 */}
      <Email email='Email'></Email> {/*Email component를 불러오고 props 입력값으로 Email 설정 */}
      <Message message='Message'></Message>{/*Message component를 불러오고 Props입력값으로 Message설정*/}
      <button type="submit">Submit</button> {/* submit하는 button 만듬*/}
    </form>
    </div>
    
    
  );
}

export default App;

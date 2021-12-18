import React, { useState } from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
        age: ''
    });
    
    const { username, message, age } = form;
    const onChange = e => {
        const nextForm = { ...form, [e.target.name]: e.target.value};
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message + ': ' + age);
        setForm({
            username: '',
            message: '',
            age: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name={"message"}
                placeholder = "아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <input
                type="text"
                name={"age"}
                placeholder = "나이를 입력해 보세요"
                value={age}
                onChange={onChange}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};
export default EventPractice;
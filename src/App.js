import logo from './logo.svg';
import './App.css';
import React, {Component } from 'react';
import Customer from './components/Customer';


const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이순신',
    'birthday': '461020',
    'gender': '남자',
    'job': '군인'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '하루',
    'birthday': '031201',
    'gender': '여자',
    'job': '고등학생'
  }
  ]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
            <Customer
              key={c.id} // map 키값 줘야됨
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
      </div>  
    );
  }
}


export default App;

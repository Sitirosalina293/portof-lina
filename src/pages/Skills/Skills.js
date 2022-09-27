import React from 'react'
import '../Skills/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default class Skills extends React.Component {
  render(){
  return (
    <div className='container'>
          <div className='box mx-auto'>
            <h3 className='fw-bold'>SKILLS</h3>
            <div className='d-flex mt-4'>
            <div className='col1 d-block'>
              <h3><FontAwesomeIcon icon={faCircleCheck}/> Html</h3>
              <h3><FontAwesomeIcon icon={faCircleCheck}/> PHP</h3>
              <h3><FontAwesomeIcon icon={faCircleCheck}/> Javascript</h3>
            </div>
            <div className='col2 d-block'>
              <h3><FontAwesomeIcon icon={faCircleCheck}/> Laravel</h3>
              <h3><FontAwesomeIcon icon={faCircleCheck}/> CodeIgnither</h3>
              <h3><FontAwesomeIcon icon={faCircleCheck}/> React</h3>
            </div>
          </div>
          </div>
          
        </div>
  )
}
}
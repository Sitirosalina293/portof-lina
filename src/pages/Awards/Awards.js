import React from 'react';
import '../Awards/Awards.css';

export default class Awards extends React.Component {
  render(){
  return (
    <div className='container'>
          <div className='box mx-auto'>
            <div className='item mb-5 p-3'>
                <h3 className='fw-bold'>GITHUB CAMPUS EXPERT</h3>
                <h5 className='mt-3'>GITHUB</h5>
                <h6>
                    Sit ullamco cupidatat proident fugiat sit exercitation et reprehenderit commodo nisi culpa excepteur.
                </h6>
            </div>
            <div className='item my-5 p-3'>
                <h3 className='fw-bold'>OPENSOURCE DEVELOPER INTERN</h3>
                <h5>FOSSASIA</h5>
                <h6>
                    Sit ullamco cupidatat proident fugiat sit exercitation et reprehenderit commodo nisi culpa excepteur.
                </h6>
            </div>
            <div className='item mt-5 p-3'>
                <h3 className='fw-bold'>SOFTWARE DEVELOPER INTERN</h3>
                <h5>HASURA</h5>
                <h6>
                    Sit ullamco cupidatat proident fugiat sit exercitation et reprehenderit commodo nisi culpa excepteur.
                </h6>
            </div>
          </div>
        </div>
  )
}
}

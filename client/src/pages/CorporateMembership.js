import React from 'react';
import './Corporate.css';
import logos from '../assets/images/corporate.jpg'

function CorporateMembership(props) {
    return (
        <div className='container'>
        <div className='head'>
            <h1>Corporate Membership</h1>

        </div>
        <div className='corp'>
         <p>ICT Academy of Kerala is pleased to offer ‘ICTAK Corporate Membership’ to a select set of leading organizations in the country. Through this membership, ICTAK would like to unlock the value of a Corporate – Academia collaboration through its wide network of corporate and academic partners.</p>
        </div>
        <div class="d-grid gap-2 d-md-block">
         <button  class="contactbtn btn btn-primary" type="button">CONTACT US</button>
         <button  class="registerbtn btn btn-primary" type="button">REGISTER NOW</button>
         <div className='image'>
        <img src={logos} class="img-fluid" alt="image" align="center"></img>
        </div>

         <br/>

         <div className='sub'>
         <h1>Benefits</h1>
         </div>
         <br/>
         <div className='collaborate'>
         <h3>Collaborate</h3>
         </div>
         <div className='collab'>
          <ul class="list-group">
           <li class="list-group-item">Collaborate with the flagship skills development organization in the state supported Govt. of India and partnered by Govt. of Kerala. </li>
           
           </ul>
           
        </div>
        <br/>
        <div className='training'>
            <h3>Corporate trainings benefits</h3>
            </div>
        <div className='train'>
            <ul className="list-group">
             <li className="list-group-item">Participate in our corporate trainings and workshops at ‘Member rates’ (up to 20% discount)</li>
            
            </ul>
        </div>
        <br/>
        <div className='interaction'>
            <h3>Interactions</h3>
            </div>
            <div className='inter'>
         <ul className="list-group">
         
         <li className="list-group-item">Access to over hundred Engineering and Non-engineering educational institutions in the state of Kerala for campus recruitment/internships and for collaborative research with Academia.</li>
        
             </ul>

            </div>
            <br/>

            <div className='recruitment'>
            <h3>Recruitments</h3>
            </div>
        <div className='recruit'>
            <ul className="list-group">
             <li className="list-group-item">Access to ICT Academy trained pool of candidates for your manpower requirements.</li>
            
            </ul>
        </div>
         
        </div>

        <br/>
        <div className='subhead'>
            <h1>Commercial and Validity Period</h1>
        </div>
        <div className=''>
        <p class="para">The industry membership programme will be offered based on an internal accreditation process and shall be valid for three years. The membership will be free for selected industry partners.</p>
        </div>

        </div>
    );
}

export default CorporateMembership;
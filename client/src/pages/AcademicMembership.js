import React from 'react';
import './Academic.css';
import logs from '../assets/images/membership.jpg'

function Academic(props) {
    return (
        <div className='container'>
        <div className='head'>
            <h1>Premium Membership</h1>

        </div>
        <div>
        <p class="paragraph">ICT Academy of Kerala (ICTAK) is pleased to offer its Premium Memberships to selected Engineering , Science & Management Institutions and Polytechnics in the state. Through the programme, ICTAK will support its members institution’s Faculty members, Students and Staffs with quality training resources, certifications and Industry immersions on IR4.0 Technologies, and thereby enabling them to reach their Academic and Career potential.</p>
        </div>
        <div className='image'>
        <img src={logs} class="img-fluid" alt="image"></img>
        </div>
        <div class="d-grid gap-2 d-md-block">
         <button class="membersbtn btn btn-primary" type="button">VIEW MEMBERS</button>
         
        </div>
        
        <div className='sub'>
         <h1>Benefits</h1>
         </div>
         <br/>
         <div className='students'>
         <h3>For Students</h3>
         </div>
         <div className='lists'>
          <ul class="list-group">
           <li class="list-group-item">Free training on industrial skills with global leaders like Microsoft, Oracle Academy, Google, Salesforce, AWS, and AAU in IR 4.0 technology domain.</li>
           <li class="list-group-item">Students from partner institutions benefit from the learning enrichment programs like ICSET, Techathlon, and Student Top 10.</li>
           </ul>
           
        </div>
        <br/>
        <div className='institute'>
            <h3>For Institutions</h3>
            </div>
        <div className='inst'>
            <ul className="list-group">
             <li className="list-group-item">Access to ICTAK corporate partner pre-programs and events.</li>
             <li className="list-group-item">Employability Quotient Test (EQT) to all the students to know their industrial skills.</li>
             <li className="list-group-item">Support for educators on partner program curriculum delivery and integration.</li>
             <li className="list-group-item">Connection and support to virtual and on-campus events.</li>
             <li className="list-group-item">Joint PR opportunities with ICT Academy of Kerala.</li>
            </ul>
        </div>
        <br/>
        <div className='faculty'>
            <h3>For Faculty</h3>
            </div>
            <div className='fac'>
         <ul className="list-group">
         
         <li className="list-group-item">Faculty Benefits Access to Partner Curriculum.</li>
         <li className="list-group-item">Faculty development program from Salesforce, Oracle Academy, Google, and Microsoft.</li>
         <li className="list-group-item">Industrial visit. Opportunity to see, interact, and experience the industry innovations.</li>
         <li className="list-group-item">Opportunity to publish their works in our international magazine.</li>
             </ul>

            </div>
            <br/>
        <div className='subhead'>
            <h1>Commercial and Validity Period</h1>
        </div>
        <div className=''>
        <p class="para">ICT Academy of Kerala is forming a Premium membership programme with selected Engineering/ Science/ Management institutions in the state. The institutions will be selected based on a set of criteria, through an online application form from the interested colleges. The submission will be scrutinized by the ICTAK administration office and if required, will interact with the applying institutions for obtaining clarifications. Selected institutions will be provided with one year membership and will be provided with one year membership and will be supported by the ICTAK on a set of activities that will help the students, teachers and institutions at large.
        The membership will be free for selected institutions.</p>
        </div>

        
        </div>
    );
}

export default Academic;
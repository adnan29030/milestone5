const resumeForm = document.getElementById(`form`) as HTMLInputElement|null;
const resumeOutput = document.getElementById(`resumeOutput`) as HTMLDivElement;
const slink =document.getElementById(`s_link`) as HTMLDivElement;
const alink =document.getElementById(`a_link`) as HTMLAnchorElement;
const pushbtn =document.getElementById(`btn`) as HTMLButtonElement;

// form.addEventListener('submit', (event:Event)=>{ 
// event.preventDefault();

// })
// function to generate resume

    if(resumeForm && resumeOutput){
        resumeForm.addEventListener('submit',(event)=>{event.preventDefault();

            let username =(document.getElementById(`username`)as HTMLInputElement).value;
            let myName =(document.getElementById(`name`)as HTMLInputElement).value;
            let myDesignation =(document.getElementById(`des`)as HTMLInputElement).value;
            let myPhone =(document.getElementById(`phone`)as HTMLInputElement).value;
            let myEmail =(document.getElementById(`email`)as HTMLInputElement).value;
            let myAddress =(document.getElementById(`add`)as HTMLInputElement).value;
            let myPassing_Years =(document.getElementById(`pss`)as HTMLInputElement).value;
            let myDegree =(document.getElementById(`degree`)as HTMLInputElement).value;
            let myBoard =(document.getElementById(`bu`)as HTMLInputElement).value;
            let myskill1 =(document.getElementById(`skill`)as HTMLInputElement).value;
            let mylang1 =(document.getElementById(`lang`)as HTMLInputElement).value;
            let mystartyear =(document.getElementById(`sy`)as HTMLInputElement).value;
            let myendingyear =(document.getElementById(`ey`)as HTMLInputElement).value;
            let myCompany =(document.getElementById(`comadd`)as HTMLInputElement).value;
            let myJob =(document.getElementById(`jobt`)as HTMLInputElement).value;
            let myReward1 =(document.getElementById(`rew`)as HTMLInputElement).value;
            
            // save data in localStorage
            const resumedata ={
                username,
                myName,
                myDesignation,
                myPhone,
                myEmail,
                myAddress,
                myPassing_Years,
                myDegree,
                myBoard,
                myskill1,
                mylang1,
                mystartyear,
                myendingyear,
                myCompany,
                myJob,
                myReward1,
            };
            localStorage.setItem(username, JSON.stringify(resumedata));
            
            
            const resumeHTML =`
            <h2> Generate Editable Resume </h2>
            <p> <b> Name : </b> <span: contenteditable="true"> ${myName} </span> </p>
            <p>  <b> Designation : </b><span: contenteditable="true">${myDesignation}</span></p>
            <p>  <b>Phone No : </b><span: contenteditable="true">${myPhone}</span></p>
            <p>  <b>Email : </b><span: contenteditable="true">${myEmail}</span></p>
            <p>  <b>Address : </b><span: contenteditable="true">${myAddress}</span></p>
            <p>  <b>Passing_Years : </b><span: contenteditable="true">${myPassing_Years}</span></p>
            <p>  <b>Degree : </b><span: contenteditable="true">${myDegree}</span></p>
            <p> <b>Board : </b><span: contenteditable="true">${myBoard}</span></p>
            <p> <b>skill1 : </b><span: contenteditable="true">${myskill1}</span></p>
            <p> <b>language : </b><span: contenteditable="true">${mylang1}</span></p>
            <p> <b>Admission : </b><span: contenteditable="true">${mystartyear}</span></p>
            <p> <b>Passing Year : </b><span: contenteditable="true">${myendingyear}</span></p>
            <p> <b>Company : </b><span: contenteditable="true">${myCompany}</span></p>
            <p> <b>Job : </b><span: contenteditable="true">${myJob}</span></p>
            <p> <b>Reward : </b><span: contenteditable="true">${myReward1}</span></p>
            `;
            resumeOutput.innerHTML=resumeHTML
            const shareableURL =`${window.location.origin}?username=${encodeURIComponent(username)}`; 
            slink.style.display ='block';           
            alink.href = shareableURL;
            alink.textContent =shareableURL;

        });
        pushbtn.addEventListener(`click`, ()=>{
            window.print();
        });
        window.addEventListener('DOMContentLoaded', ()=>{
            const urlParams = new URLSearchParams(window.location.search);
            const username = urlParams.get('username');
            if(username){
                const savedResumeData =localStorage.getItem(username);
                if (savedResumeData){
                    const resumeData = JSON.parse(savedResumeData);
                    (document.getElementById(`username`)as HTMLInputElement).value=username;
                    (document.getElementById(`name`)as HTMLInputElement).value=resumeData.myName;
                    (document.getElementById(`des`)as HTMLInputElement).value=resumeData.myDesignation;
                    (document.getElementById(`phone`)as HTMLInputElement).value=resumeData.myPhone;
                    (document.getElementById(`email`)as HTMLInputElement).value=resumeData.myEmail;
                    (document.getElementById(`add`)as HTMLInputElement).value=resumeData.myAddress;
                    (document.getElementById(`pss`)as HTMLInputElement).value=resumeData.myPassing_Years;
                    (document.getElementById(`degree`)as HTMLInputElement).value=resumeData.myDegree;
                    (document.getElementById(`bu`)as HTMLInputElement).value=resumeData.myBoard;
                    (document.getElementById(`skill`)as HTMLInputElement).value=resumeData.myskill1;
                    (document.getElementById(`lang`)as HTMLInputElement).value=resumeData.mylang1;
                    (document.getElementById(`sy`)as HTMLInputElement).value=resumeData.mystartyear;
                    (document.getElementById(`ey`)as HTMLInputElement).value=resumeData.myendingyear;
                    (document.getElementById(`comadd`)as HTMLInputElement).value=resumeData.myCompany;
                    (document.getElementById(`jobt`)as HTMLInputElement).value=resumeData.myJob;
                    (document.getElementById(`rew`)as HTMLInputElement).value=resumeData.myReward1;

    
                }
            }
        })
    }
        
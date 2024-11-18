var resumeForm = document.getElementById("form");
var resumeOutput = document.getElementById("resumeOutput");
var slink = document.getElementById("s_link");
var alink = document.getElementById("a_link");
var pushbtn = document.getElementById("btn");
// form.addEventListener('submit', (event:Event)=>{ 
// event.preventDefault();
// })
// function to generate resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var myName = document.getElementById("name").value;
        var myDesignation = document.getElementById("des").value;
        var myPhone = document.getElementById("phone").value;
        var myEmail = document.getElementById("email").value;
        var myAddress = document.getElementById("add").value;
        var myPassing_Years = document.getElementById("pss").value;
        var myDegree = document.getElementById("degree").value;
        var myBoard = document.getElementById("bu").value;
        var myskill1 = document.getElementById("skill").value;
        var mylang1 = document.getElementById("lang").value;
        var mystartyear = document.getElementById("sy").value;
        var myendingyear = document.getElementById("ey").value;
        var myCompany = document.getElementById("comadd").value;
        var myJob = document.getElementById("jobt").value;
        var myReward1 = document.getElementById("rew").value;
        // save data in localStorage
        var resumedata = {
            username: username,
            myName: myName,
            myDesignation: myDesignation,
            myPhone: myPhone,
            myEmail: myEmail,
            myAddress: myAddress,
            myPassing_Years: myPassing_Years,
            myDegree: myDegree,
            myBoard: myBoard,
            myskill1: myskill1,
            mylang1: mylang1,
            mystartyear: mystartyear,
            myendingyear: myendingyear,
            myCompany: myCompany,
            myJob: myJob,
            myReward1: myReward1,
        };
        localStorage.setItem(username, JSON.stringify(resumedata));
        var resumeHTML = "\n            <h2> Generate Editable Resume </h2>\n            <p> <b> Name : </b> <span: contenteditable=\"true\"> ".concat(myName, " </span> </p>\n            <p>  <b> Designation : </b><span: contenteditable=\"true\">").concat(myDesignation, "</span></p>\n            <p>  <b>Phone No : </b><span: contenteditable=\"true\">").concat(myPhone, "</span></p>\n            <p>  <b>Email : </b><span: contenteditable=\"true\">").concat(myEmail, "</span></p>\n            <p>  <b>Address : </b><span: contenteditable=\"true\">").concat(myAddress, "</span></p>\n            <p>  <b>Passing_Years : </b><span: contenteditable=\"true\">").concat(myPassing_Years, "</span></p>\n            <p>  <b>Degree : </b><span: contenteditable=\"true\">").concat(myDegree, "</span></p>\n            <p> <b>Board : </b><span: contenteditable=\"true\">").concat(myBoard, "</span></p>\n            <p> <b>skill1 : </b><span: contenteditable=\"true\">").concat(myskill1, "</span></p>\n            <p> <b>language : </b><span: contenteditable=\"true\">").concat(mylang1, "</span></p>\n            <p> <b>Admission : </b><span: contenteditable=\"true\">").concat(mystartyear, "</span></p>\n            <p> <b>Passing Year : </b><span: contenteditable=\"true\">").concat(myendingyear, "</span></p>\n            <p> <b>Company : </b><span: contenteditable=\"true\">").concat(myCompany, "</span></p>\n            <p> <b>Job : </b><span: contenteditable=\"true\">").concat(myJob, "</span></p>\n            <p> <b>Reward : </b><span: contenteditable=\"true\">").concat(myReward1, "</span></p>\n            ");
        resumeOutput.innerHTML = resumeHTML;
        var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
        slink.style.display = 'block';
        alink.href = shareableURL;
        alink.textContent = shareableURL;
    });
    pushbtn.addEventListener("click", function () {
        window.print();
    });
    window.addEventListener('DOMContentLoaded', function () {
        var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get('username');
        if (username) {
            var savedResumeData = localStorage.getItem(username);
            if (savedResumeData) {
                var resumeData = JSON.parse(savedResumeData);
                document.getElementById("username").value = username;
                document.getElementById("name").value = resumeData.myName;
                document.getElementById("des").value = resumeData.myDesignation;
                document.getElementById("phone").value = resumeData.myPhone;
                document.getElementById("email").value = resumeData.myEmail;
                document.getElementById("add").value = resumeData.myAddress;
                document.getElementById("pss").value = resumeData.myPassing_Years;
                document.getElementById("degree").value = resumeData.myDegree;
                document.getElementById("bu").value = resumeData.myBoard;
                document.getElementById("skill").value = resumeData.myskill1;
                document.getElementById("lang").value = resumeData.mylang1;
                document.getElementById("sy").value = resumeData.mystartyear;
                document.getElementById("ey").value = resumeData.myendingyear;
                document.getElementById("comadd").value = resumeData.myCompany;
                document.getElementById("jobt").value = resumeData.myJob;
                document.getElementById("rew").value = resumeData.myReward1;
            }
        }
    });
}

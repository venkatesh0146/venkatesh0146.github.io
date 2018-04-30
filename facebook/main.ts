class FaceBook{
    work:string;
    professionalSkills:string;
    university:string;
    highSchool:string;
    currentCity:string;
    contactInfo:number;
    emailId:string;
    socialLinks:string;
    dob:string;
    yearOfBirth:number;
    gender:string;
    interestedIn:string;
    languages:string;
    isInRelation:boolean;
    constructor(work:string,professionalSkills:string,university:string,highSchool:string,currentCity:string,contactInfo:number,emailId:string,socialLinks:string,dob:string,yearOfBirth:number,gender:string,interestedIn:string,languages:string,isInRelation:boolean){
        this.work=work;
        this.professionalSkills=professionalSkills;
        this.university=university;
        this.highSchool=highSchool;
        this.currentCity=currentCity;
        this.contactInfo=contactInfo;
        this.emailId=emailId;
        this.socialLinks=socialLinks;
        this.dob=dob;
        this.yearOfBirth=yearOfBirth;
        this.gender=gender;
        this.interestedIn=interestedIn;
        this.languages=languages;
        this.isInRelation=isInRelation;
    }


    getWork =() => {
        return this.work;
    }
    getProfessionalSkills =() =>{
        return this.professionalSkills;
    }
    getUniversity =() =>{
        return this.university;
    }
    getHighSchool = () =>{
        return this.highSchool;
    }
    getCurrentCity =()=>{
        return this.currentCity;
    }
    getContactInfo =() =>{
        return this.contactInfo;
    }
    getEmailId = () =>{
        return this.emailId;
    }
    getSocialLinks = () =>{
        return  this.socialLinks;
    }
    getDob =() =>{
       return this.dob;
    }
    getYearOfBirth =() =>{
        return this.yearOfBirth
    }
    getGender = () =>{
        return this.gender;
    }
    getInterestedIn = () =>{
        return this.interestedIn;
    }
    getLanguage =() =>{
        return this.languages
    }
    getIsInReation =() =>{
        return this.isInRelation
    }
    
}

    let fbInfo = new FaceBook('capgemini','javaScript,html,css,bootstrap,typescript','JNTUK','Aditya Public School','chennai',8919646575,'tantravahivenkatesh@gmail.com','facebook.com/venky146','06-08-1994',1994,'male','women','telugu,english,Hindi',true);

    let woork = fbInfo.getWork();
    let skills = fbInfo.getProfessionalSkills();
    let univ = fbInfo.getUniversity();
    let School = fbInfo.getHighSchool();
    let city = fbInfo.getCurrentCity();
    let ph = fbInfo.getContactInfo();
    let email = fbInfo.getEmailId();
    let links = fbInfo.getSocialLinks();
    let birth = fbInfo.getDob();
    let year = fbInfo.getYearOfBirth();
    let gen = fbInfo.getGender();
    let interest = fbInfo.getInterestedIn();
    let lang = fbInfo.getLanguage();
    let relation = fbInfo.getIsInReation();

    console.log('working in'+ ' ' + woork)
    console.log('skill set is '+ ' ' + skills)
    console.log('studied in university'+ ' ' + univ)
    console.log('Highschool Name'+ ' ' + School)
    console.log('current Location'+ ' '+ city)
    console.log('contact info'+ ' '+ ph)
    console.log('email id'+ ' '+ email)
    console.log('connect me here'+ ' '+ links)
    console.log('date of birth'+ ' '+ birth)
    console.log('year of birth'+ ' '+ year)
    console.log('gender'+ ' '+ gen)
    console.log('interested in'+ ' '+ interest)
    console.log('languages known'+ ' '+ lang)
    console.log('reationShip Status'+ ' '+ relation)

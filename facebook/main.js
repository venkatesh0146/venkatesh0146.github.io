var FaceBook = /** @class */ (function () {
    function FaceBook(work, professionalSkills, university, highSchool, currentCity, contactInfo, emailId, socialLinks, dob, yearOfBirth, gender, interestedIn, languages, isInRelation) {
        var _this = this;
        this.getWork = function () {
            return _this.work;
        };
        this.getProfessionalSkills = function () {
            return _this.professionalSkills;
        };
        this.getUniversity = function () {
            return _this.university;
        };
        this.getHighSchool = function () {
            return _this.highSchool;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.getContactInfo = function () {
            return _this.contactInfo;
        };
        this.getEmailId = function () {
            return _this.emailId;
        };
        this.getSocialLinks = function () {
            return _this.socialLinks;
        };
        this.getDob = function () {
            return _this.dob;
        };
        this.getYearOfBirth = function () {
            return _this.yearOfBirth;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        this.getLanguage = function () {
            return _this.languages;
        };
        this.getIsInReation = function () {
            return _this.isInRelation;
        };
        this.work = work;
        this.professionalSkills = professionalSkills;
        this.university = university;
        this.highSchool = highSchool;
        this.currentCity = currentCity;
        this.contactInfo = contactInfo;
        this.emailId = emailId;
        this.socialLinks = socialLinks;
        this.dob = dob;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.languages = languages;
        this.isInRelation = isInRelation;
    }
    return FaceBook;
}());
var fbInfo = new FaceBook('capgemini', 'javaScript,html,css,bootstrap,typescript', 'JNTUK', 'Aditya Public School', 'chennai', 8919646575, 'tantravahivenkatesh@gmail.com', 'facebook.com/venky146', '06-08-1994', 1994, 'male', 'women', 'telugu,english,Hindi', true);
var woork = fbInfo.getWork();
var skills = fbInfo.getProfessionalSkills();
var univ = fbInfo.getUniversity();
var School = fbInfo.getHighSchool();
var city = fbInfo.getCurrentCity();
var ph = fbInfo.getContactInfo();
var email = fbInfo.getEmailId();
var links = fbInfo.getSocialLinks();
var birth = fbInfo.getDob();
var year = fbInfo.getYearOfBirth();
var gen = fbInfo.getGender();
var interest = fbInfo.getInterestedIn();
var lang = fbInfo.getLanguage();
var relation = fbInfo.getIsInReation();
console.log('working in' + ' ' + woork);
console.log('skill set is ' + ' ' + skills);
console.log('studied in university' + ' ' + univ);
console.log('Highschool Name' + ' ' + School);
console.log('current Location' + ' ' + city);
console.log('contact info' + ' ' + ph);
console.log('email id' + ' ' + email);
console.log('connect me here' + ' ' + links);
console.log('date of birth' + ' ' + birth);
console.log('year of birth' + ' ' + year);
console.log('gender' + ' ' + gen);
console.log('interested in' + ' ' + interest);
console.log('languages known' + ' ' + lang);
console.log('reationShip Status' + ' ' + relation);

class YouTube{
    videoTitle:string;
    numberOfViews:number;
    numberOfLikes:number;
    numberofDislikes:number;
    channelName:String;
    publishedDate:String;
    numberOfSubscribers:number;
    videoDiscription:string;
    numberOfComments:number;
    relatedVideos:string[];
    constructor(videoTitle:string,numberOfViews:number,numberOfLikes:number,numberofDislikes:number,channelName:String,publishedDate:String,numberOfSubscribers:number,videoDiscription:string,numberOfComments:number,...relatedVideos:string[])
{
    this.videoTitle=videoTitle;
    this.numberOfViews=numberOfViews;
    this.numberOfComments=numberOfComments;
    this.numberOfLikes=numberOfLikes;
    this.numberofDislikes=numberofDislikes;
    this.numberOfSubscribers=numberOfSubscribers;
    this.channelName=channelName;
    this.publishedDate=publishedDate;
    this.videoDiscription=videoDiscription;
    this.relatedVideos=relatedVideos;
}
getVideoTitle =() =>{
    return this.videoTitle
}
getNumberOfViews =() =>{
    return this.numberOfViews
}
getRelatedVideos =() =>{
  return  this.relatedVideos=this.relatedVideos;
}

getNumberOfComments = () => {
    return this.numberOfComments
}
getNumberOfLikes = () => {
    return this.numberOfLikes
}
getNumberOfDislikes = () =>{
    return this.numberofDislikes
}
getNumberOfSubscribers =() =>{
    return this.numberOfSubscribers
}
getChannelName =()=>{
    return this.channelName
}
getPublishedDate=()=>{
    return this.publishedDate
}
getVideoDiscription=()=>{
    return this.videoDiscription
}
}

let youTubeVideo = new YouTube('Rangamma Mangamma Lyrical Video Song || Rangasthalam Songs || Ram Charan, Samantha, Devi Sri Prasad',63055677,336000,37000,'T-series Telugu','Mar 8, 2018',130000000,'T-Series Telugu presents Rangamma Mangamma Video Song With Lyrics sung by MM Manasi from New Telugu Movie Rangasthalam starring Ram Charan,Samantha,Jagapathi Babu,Aadhi Pinisetty. Music by Devi Sri Prasad lyrics by Chandrabose',22262,'https://www.youtube.com/watch?v=-xgy9rTzUnw','https://www.youtube.com/watch?v=D4uWz6rm0RQ','https://www.youtube.com/watch?v=6kXymlb7fLU')

let video_Title           =    youTubeVideo.getVideoTitle()
let number_OfViews        =    youTubeVideo.getNumberOfViews()
let number_OfLikes		 =     youTubeVideo.getNumberOfLikes()
let number_ofDislikes	 =     youTubeVideo.getNumberOfDislikes()
let channel_Name		 =     youTubeVideo.getChannelName()
let published_Date		 =     youTubeVideo.getPublishedDate()
let number_OfSubscribers =     youTubeVideo.getNumberOfSubscribers()
let video_Discription	 =     youTubeVideo.getVideoDiscription()
let number_OfComments	 =     youTubeVideo.getNumberOfComments()
 let related_Videos       =     youTubeVideo.getRelatedVideos()

console.log('Title of The Video is'+ ' ' + video_Title)
console.log('Total Number of Views'+'='+number_OfViews)
console.log('Number of likes'+'='+(number_OfLikes))
console.log('Number of Dislikes'+'='+number_ofDislikes)
console.log('Name Of The Channel is'+ ' ' +channel_Name)
console.log('Video is Published on' + ' ' +published_Date)
console.log('Number Of Subscribers ='+' ' +number_OfSubscribers)
console.log('Video Discription'+' ' +video_Discription)
console.log('Number of Comments '+ '='+number_OfComments)
console.log('related Videos ='+' ' +youTubeVideo.getRelatedVideos())

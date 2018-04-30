var YouTube = /** @class */ (function () {
    function YouTube(videoTitle, numberOfViews, numberOfLikes, numberofDislikes, channelName, publishedDate, numberOfSubscribers, videoDiscription, numberOfComments) {
        var relatedVideos = [];
        for (var _i = 9; _i < arguments.length; _i++) {
            relatedVideos[_i - 9] = arguments[_i];
        }
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getNumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.getRelatedVideos = function () {
            return _this.relatedVideos = _this.relatedVideos;
        };
        this.getNumberOfComments = function () {
            return _this.numberOfComments;
        };
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.getNumberOfDislikes = function () {
            return _this.numberofDislikes;
        };
        this.getNumberOfSubscribers = function () {
            return _this.numberOfSubscribers;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getPublishedDate = function () {
            return _this.publishedDate;
        };
        this.getVideoDiscription = function () {
            return _this.videoDiscription;
        };
        this.videoTitle = videoTitle;
        this.numberOfViews = numberOfViews;
        this.numberOfComments = numberOfComments;
        this.numberOfLikes = numberOfLikes;
        this.numberofDislikes = numberofDislikes;
        this.numberOfSubscribers = numberOfSubscribers;
        this.channelName = channelName;
        this.publishedDate = publishedDate;
        this.videoDiscription = videoDiscription;
        this.relatedVideos = relatedVideos;
    }
    return YouTube;
}());
var youTubeVideo = new YouTube('Rangamma Mangamma Lyrical Video Song || Rangasthalam Songs || Ram Charan, Samantha, Devi Sri Prasad', 63055677, 336000, 37000, 'T-series Telugu', 'Mar 8, 2018', 130000000, 'T-Series Telugu presents Rangamma Mangamma Video Song With Lyrics sung by MM Manasi from New Telugu Movie Rangasthalam starring Ram Charan,Samantha,Jagapathi Babu,Aadhi Pinisetty. Music by Devi Sri Prasad lyrics by Chandrabose', 22262, 'https://www.youtube.com/watch?v=-xgy9rTzUnw', 'https://www.youtube.com/watch?v=D4uWz6rm0RQ', 'https://www.youtube.com/watch?v=6kXymlb7fLU');
var video_Title = youTubeVideo.getVideoTitle();
var number_OfViews = youTubeVideo.getNumberOfViews();
var number_OfLikes = youTubeVideo.getNumberOfLikes();
var number_ofDislikes = youTubeVideo.getNumberOfDislikes();
var channel_Name = youTubeVideo.getChannelName();
var published_Date = youTubeVideo.getPublishedDate();
var number_OfSubscribers = youTubeVideo.getNumberOfSubscribers();
var video_Discription = youTubeVideo.getVideoDiscription();
var number_OfComments = youTubeVideo.getNumberOfComments();
var related_Videos = youTubeVideo.getRelatedVideos();
console.log('Title of The Video is' + ' ' + video_Title);
console.log('Total Number of Views' + '=' + number_OfViews);
console.log('Number of likes' + '=' + (number_OfLikes));
console.log('Number of Dislikes' + '=' + number_ofDislikes);
console.log('Name Of The Channel is' + ' ' + channel_Name);
console.log('Video is Published on' + ' ' + published_Date);
console.log('Number Of Subscribers =' + ' ' + number_OfSubscribers);
console.log('Video Discription' + ' ' + video_Discription);
console.log('Number of Comments ' + '=' + number_OfComments);
console.log('related Videos =' + ' ' + youTubeVideo.getRelatedVideos());

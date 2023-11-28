class Media {
  
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
      return this._title
    }
  
    get isCheckedOut(){
      return this._isCheckedOut
    }
  
    set isCheckedOut(checkOut){
      this._isCheckedOut = checkOut;
    }
  
    get ratings(){
      return this._ratings
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut 
    }
  
     getAverageRating(){
      let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)
      return ratingSum/this._ratings.length
    }
  
    addRating(newRate){
      this.ratings.push(newRate)
    }
  
  }
  
  class Book extends Media{
    constructor(title, author, pages){
      super(title)
      this._author = author;
      this._pages = pages;
    }
  
    get author (){
      return this._author
    }
  
    get pages (){
      return this._pages
    }
  
  }
  
  class Movie extends Media{
    constructor(title, director, runTime){
      super(title)
    this._director = director;
    this._runtime = runTime;
    }
    
  }
  
  const historyOfEverything = new Book("A Short History of Nearly Everything", "Bill Bryson",  544)
  
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  
  historyOfEverything.getAverageRating()
  
  console.log(historyOfEverything.getAverageRating())
  
  
  const speed = new Movie("Jan de Bont", "Speed", 116)
  
  speed.toggleCheckOutStatus
  
  console.log(speed.isCheckedOut)
  
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  
  console.log(speed.getAverageRating())
  
  class CD extends Media{
    constructor(artist, title, songs){
      super(title)
      this._artist = "";
      this._songs = []
    }
  
    get artist(){
      return this._artist
    }
  
    get songs(){
      return this._songs
    }
  
    shuffle(){
      return Math.floor(Math.random()*this.songs.length)
    }
  }
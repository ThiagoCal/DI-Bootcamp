class Video {
  constructor(title, uploader, time){
    this.videoTitle = title,
    this.videoUploader = uploader,
    this.videoTime = time
  }

  watch(){
    return `${this.videoUploader} watched all ${this.videoTime} of ${this.videoTitle}`
  }
}

let david = new Video("Star Wars", "Kimel", 45)

console.log(david.watch())
console.log(david)
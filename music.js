class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title;
    }

}

const musicList = [
    new Music("DAİMA","EZHEL","1.webp","1.mp3"),
    new Music("ISABELLA","SEFO","2.webp","2.mp3"),
    new Music("No risk No fun","Defkhan ft. Sehinsah & Zmn","3.webp","3.mp3"),
    new Music("UNUTTUM","UZİ","4.webp","4.mp3")
];
class Sentence {
    constructor (data) {
        this.data = data;
    }
    wordCount(){
        const words = this.data.split(' ');
        return words.length;
    }
    hasLetter(letter){
        return this.data.includes(letter);
    }
    countLetter(letter){
        let count = 0;
        for (let i = 0; i < this.data.length; i++){
            if(this.data[i] === letter){
                count++;
            }
        } 
        return count;  
    }
    stats(){
        const obj={};
        const words = this.data.split(' ');
        for (let i = 0; i < words.length; i++){
            if(obj[words[i]]){
                obj[words[i]]++;
            } else {
                obj[words[i]] = 1;
            }
        }
        return obj;
    }
}

const data = window.prompt('enter a sentence');
console.log(data);
const s1 = new Sentence(data);
console.log(s1);
console.log(s1.wordCount());
console.log(s1.hasLetter('a'));
console.log(s1.countLetter('a'));
console.log(s1.stats());




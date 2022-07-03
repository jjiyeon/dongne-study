type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }

  wordDelete(word: Word) {
    if (this.words[word.term]) {
      delete this.words[word.term];
    }
  }

  wordUpdate(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }

  wordShowAll() {
    return Object.keys(this.words);
  }

  wordCount() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const jetom = new Word("jetom", "🐶");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");

dict.add(jetom);
dict.def("jetom");

dict.wordUpdate(new Word("kimchi", "jetom이 귀여워용"));
dict.wordShowAll();
dict.wordCount();
dict.wordDelete(jetom);

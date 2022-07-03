// add: 단어를 추가함.
// get: 단어의 정의를 리턴함.
// delete: 단어를 삭제함.
// update: 단어를 업데이트 함.
// showAll: dictionary 의 단어를 모두 프린트함.
// count: dict 단어들의 총 count 를 리턴함.
// ejy11105
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
  update(term: string, def: string) {
    if (this.words[term]) {
      this.words[term] = def;
    }
  }
  deleteTerm(term: string) {
    return delete this.words[term];
  }
  showAll() {
    return this.words;
  }
  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("김치", "한국 고유의 음식");
const dict = new Dict();
dict.add(kimchi);
dict.def("김치");

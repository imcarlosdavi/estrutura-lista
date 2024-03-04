class Node {
    constructor(data){
      this.data = data;
      this.next = 0;
    }
  }

  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    push(elem){
      let node = new Node(elem)
      
      if(this.last === null){
        this.last = node;
      }else{
        this.last.next = node;
        this.last = node;
      }

      if(this.first === null){
        this.first = node;
      }
      this.size += 1
    }

    pop(){
        if(this.size === 0) return "Lista está vazia";

        let elem = this.first.data;
        this.first = this.first.next;
        if(this.first === null){ this.last = null};
        return elem;
    }

    empty(){
      if(this.size === 0) return "Lista vazia";
      else return this.size;
    }

    read(){
      if(this.size === 0){return "Nada na Lista."}

      let s = '';
      let l = this.first;
      while(l){
        s += l.data + ', ';
        l = l.next;
      }
      return s;
    }
  }

  let fila = new Queue();
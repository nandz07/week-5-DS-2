class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        let index=this.hash(key)
        return this.table[index]
    }
    remove(key){
        let index=this.hash(key)
        this.table=undefined
    }
    print(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

let table=new HashTable(50)
table.set("name","nandu")
table.set("mane","appu")
table.set("age",23)
table.print()
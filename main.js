(()=>{"use strict";class t{constructor(){this.keys=["toDo","Done"]}setData(t,e){e?localStorage.setItem(t,JSON.stringify(e)):localStorage.removeItem(t)}getData(t){const e=localStorage.getItem(t);return e?JSON.parse(e):null}getAllKeys(){return this.keys.map((t=>({name:t,data:this.getData(t)})))}}class e{constructor(t,e){this.onClick=()=>{this.item.classList.add("out"),setTimeout((()=>{this.destroy(),this.updatePerent(this.itemData)}),850)},this.item=document.createElement("li"),this.item.classList.add("list-item"),this.itemData=t,this.item.textContent=this.itemData.content,this.item.onclick=this.onClick,this.updatePerent=e}animationIn(){return this.item.animate({transform:["translate(-130%)","translateX(-130%)","translateX(0%)"],height:["0px","20px","20px"]},{duration:1e3,easing:"linear"}).finished}animationOut(){this.item.animate({transform:["translate(0%)","translateX(-130%)","translateX(-130%)"],height:["20px","20px","0px"]},{duration:1e3,easing:"linear"}).finished.then((()=>{this.destroy()}))}destroy(){this.item.onclick=null,this.item.remove()}}class i{constructor(e,i,s){this.localStorage=new t,this.updateListInfoInPerent=t=>{this.updateItemsInMain(t)},this.wrapper=document.createElement("div"),this.wrapper.classList.add("list-wrap"),this.listName=i,this.title=document.createElement("h3"),this.title.textContent=i,this.list=document.createElement("ul"),this.list.classList.add("list-wrap__list"),this.wrapper.append(this.title,this.list),e.append(this.wrapper),this.todoData=this.localStorage.getData(i),this.updateItemsInMain=s,this.createtodoList()}createtodoList(){this.todoData&&this.todoData.forEach((t=>{const i=new e(t,this.updateListInfoInPerent.bind(this));this.list.append(i.item)}))}addItemInList(t){t.perentList=this.listName;const i=new e(t,this.updateListInfoInPerent);this.list.append(i.item),i.animationIn()}}const s=[{content:"shopping",id:0,perentList:"toDo"},{content:"visit to petsvet",id:1,perentList:"toDo"},{content:"visit to the doctor",id:2,perentList:"toDo"}],a=[{content:"going to the cinema",id:3,perentList:"Done"},{content:"something else",id:4,perentList:"Done"}];(()=>{const e=new t;e.setData("toDo",s),e.setData("Done",a)})();class n{constructor(){this.toDoTitle="toDo",this.doneTitle="Done",this._localStorge=new t,this.updateItemsInList=t=>{const e=t.perentList,i=this.changePerent(e),s=this._localStorge.getData(e).filter((e=>e.id!==t.id));this._localStorge.setData(e,s),t.perentList=i;const a=this._localStorge.getData(i);a.push(t),this._localStorge.setData(i,a),"toDo"==e&&this.doneList.addItemInList(t),"Done"===e&&this.toDoList.addItemInList(t)},this.body=document.querySelector("body"),this.main=document.createElement("main"),this.main.classList.add("page"),this.wrapper=document.createElement("div"),this.wrapper.classList.add("wrapper"),this.body.append(this.wrapper),this.wrapper.append(this.main),this.toDoList=new i(this.main,this.toDoTitle,this.updateItemsInList),this.doneList=new i(this.main,this.doneTitle,this.updateItemsInList)}changePerent(t){return"toDo"===t?"Done":"toDo"}}window.addEventListener("load",(()=>new n))})();
//# sourceMappingURL=main.js.map
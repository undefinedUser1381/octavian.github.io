import { saveData , getData } from "./utils.js"

let categoryValue = -1;
let fileValue = null;
let allCart = [];


// Prepare category before click on the button
const prepareCategory = () => {
  const selectBox = document.querySelector("#select");
  const fileElem = document.querySelector(".file");

  // Get change value with global variable and reassign it in addNewCart
  fileElem.addEventListener("change" , (e) => {
      fileValue = e.target.files[0].name
  });

  selectBox.addEventListener("change",(e) => {
    categoryValue = e.target.value;
  });

}


// Add news 
const addNewCart = () => {
  const titleElem = document.querySelector("#title"); 
  const creatorElem = document.querySelector("#creator"); 
  const textAreaElem = document.querySelector(".textarea");

  let studyTime = "10:10";

  const newCart = {
      id : allCart.length + 1,
      title : titleElem.value.trim(),
      creator : creatorElem.value.trim(),
      text : textAreaElem.value.trim(),
      studyTime : studyTime,
      category : categoryValue,
      imgSrc : fileValue
  }

  titleElem.value = "";
  creatorElem.value = "";
  textAreaElem.value = "";
  

  allCart.push(newCart);
  saveData("allNews",allCart);
  
}


// Show data in DOM
const showAllNewsToDom = () => {
  let allNewsSection = document.querySelector(".news-section__wrapper");
  allCart = getData("allNews");
  console.log(allCart);
  if(!allCart.length){
    allCart = [];
    allNewsSection.insertAdjacentHTML("beforeend",`
    <div class="error">هیچ دیتایی وحود ندارد !!</div>
 `)
  }else{
 allCart.forEach(data => {
  allNewsSection.insertAdjacentHTML("beforeend",`
  <div class="news__cart">
  <div class="news-image__holder">
    <img src="../../../images/${data.imgSrc}" class="news__img" alt="">
  </div>
  <div class="news__details">
    <h3 class="news__text">${data.title}</h3>
    <div class="news-writter__detials">
      <div class="writter__details">
        <span>نویسنده</span>
        <span>${data.creator}</span>
      </div>
      <div class="study-time__box">
        <span>زمان مطالعه</span>
        <span>${data.studyTime}</span>
      </div>
      <div class="category">
        <span>دسته بندی</span>
        <span>${data.category}</span>
      </div>
    </div>
  </div>
</div>
  `);
 });
  }
}

// Delete news
const deleteCart = () => {
  const wrapperSection = document.querySelector(".delete__section");
  if(!allCart.length){
    allCart = [];
    wrapperSection.insertAdjacentHTML("beforeend",`
    <div class="error">هیچ دیتایی وحود ندارد !!</div>
 `)
  }else{
   allCart.forEach(data => {
   wrapperSection.insertAdjacentHTML("beforeend",`
    <div class="news__cart">
     <div class="news-image__holder">
     <img src="../../../images/${data.imgSrc}" class="news__img" alt="">
     </div>
     <div class="news__details">
     <h3 class="news__text">${data.title}</h3>
      <div class="news-writter__detials">
      <div class="writter__details">
        <span>نویسنده</span>
        <span>${data.creator}</span>
      </div>
      <div class="study-time__box">
        <span>زمان مطالعه</span>
        <span>${data.studyTime}</span>
      </div>
      <div class="category">
        <span>دسته بندی</span>
        <span>${data.category}</span>
      </div>
    </div>
    <div class="remove">
       <button class="remove__btn" onclick=removeCart(${data.id})>حذف خبر</button>
    </div>
  </div>
</div>
  `);
 });
  }
}

// Remove cart
const removeCart = (dataID) => {
  const deletedCart = allCart.findIndex(cart => {
    return dataID === cart.id;
  });
   allCart.splice(deletedCart,1);
   saveData("allNews",allCart);
   alert("با موفقیت حذف شد");
   window.history.go(0);
};

// Edit news
const editCart = () => {

}



export {showAllNewsToDom,addNewCart,deleteCart,removeCart,editCart,prepareCategory};
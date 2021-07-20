parseInput = () =>{
  let input = document.getElementsByClassName("container__input")[0].value;
  let arr = input.trim().split(' ').map(Number);
  console.log(arr);
  globalThis.myArr = arr;
  let n = arr.length;
  let container = document.getElementById("container");
  container.innerHTML = "";
  for(let i = 0; i<n; ++i){
    if(arr[i] != 0){
      let ele = document.createElement("div");
      ele.style.display = "inline-block";
      ele.className = "card";
      ele.id = "card_" + i;
      ele.innerHTML = arr[i];
      console.log(ele);
      container.append(ele);
    }
  }
}

swapit = () => {
  let arr = globalThis.myArr;
  let n = arr.length;
  for(let i=1; i<n; ++i){
    <!-- swap(myArr[i-1], myArr[i]); -->
    [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
    console.log(arr);
  }
}

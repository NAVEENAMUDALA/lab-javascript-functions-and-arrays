// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  if (num1>num2) 
    return num1;
    
   else 
     return num2;
  
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words){
  if( words.length==0)
   return (null)
 else if (words.length==1)
   return (words[0])
 else if(words.length==2)
     if(words[0].length==words[1].length)
     return (words[0]);
 
 else if(words.length>2) 
    for (let i=0; i<=words.length;i++){
      if(words[0].length <words[i].length){
        words[0]=words[i];
      }
    
    return words[0];
    }
 }

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(arr,sum){
  sum=0
  if(arr.length==0){
    return (0);
  }
  else  if (arr.length==1){
    return (arr[0]);
  }
  else if (arr.length>2){
    for( let i=0; i<arr.length; i++)
      {
        sum=sum+arr[i] ;
      }
    return (sum);
    
  }
  

}
function add(arr,sum){
  sum=0
  if(arr.length==0){
    return (0);
  }
  else  if (arr.length==1)
    return (arr[0]);
  else if (arr.length>2){
    for( let i=0; i<arr.length; i++)
    if (typeof arr[i] == "number") {
      sum += arr[i];
    }
    else if (typeof arr[i] == "string") {
      sum += arr[i].length;
    }
    else if (typeof arr[i] == "boolean") {
      if (arr[i] == true) {
        sum += 1;
      } 
      else {
        sum = sum + 0;
      }
    }
    else if (typeof arr[i] == "object") {
      
      throw new Error("Unsupported data type sir or ma'am");
      return;
    }
  }
  //console.log(sum)
  return sum;
}


// Progression #4: Calculate the average
function midPointOfLevels(arr,avg,sum){
  sum=0
  if(arr.length==0){
    return null;
  }
  else 
    for( let i=0; i<arr.length; i++)
        {
          sum=sum+arr[i] ;
        }
    var avg =parseInt(sum/arr.length);
    return (avg);
  }




   
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(array,avg){
  sum=0
  if(array.length==0)
   return null;
  else 
   for (let i=0;i<array.length;i++)
    sum=sum+array[i]
   return (sum/array.length)

}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
 function averageWordLength(array){
    var lengtharray;
    var sum=0
    if (array.length==0)
     return null;
    else 
      for(let i=0;i<array.length;i++)
        sum=sum+array[i].length
      return (sum/array.length)
 }
  function avg(arr){
    var sum=0
    if (arr.length==0)
     return null;
    else 
       for (let i=0;i<arr.length;i++)
           if(typeof arr[i]=="number")
             sum=sum+arr[i]
           else if(typeof arr[i]=="string")
             sum=sum+arr[i].length
           else if (typeof arr[i]=="boolean")
             if(arr[i]=="true")
               sum=sum+1
              else(arr[i]=="false")
                sum=sum+0
        return parseFloat((sum/arr.length).toFixed(2));
  }

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(arr) {
  let newArr = [];
  if (arr.length == 0) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (newArr.includes(arr[i]) === false) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
    return newArr;
    // let set = new Set(arr);
    // newArr = [...set];
    // return newArr;
  }
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr, searchWord) {
  let exists = false;
  if (arr.length === 0) {
    return null;
  } else {
    arr.includes(searchWord) ? (exists = true) : (exists = false);
    return exists;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(array,key) 
 
{
 var count=0
 if (array.length == 0) {
 return 0;
 } 
 else if (array.length > 0)
  {
   for (let i = 0; i < array.length; i++) 
     if (array[i] == key)
      {
       count = count + 1;
      }
   return count;
  }

}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix){
   var count=0
   for (let i=0;i<matrix.length;i++){
      var innerArrayLength = matrix[i].length;
          for(let j=0;j<innerArrayLength;j++)
              if(matrix[i][j]===1)
                count=count+1
    }
    if (count==matrix.length)
       return 1;
    else 
        return null;
}
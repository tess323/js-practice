// function declaration
// does not need a ';'

function isGreaterThan (numberOne, numberTwo){
	if(numberOne>numberTwo) {
    return (true);
  }else {
    return(false);
  }
}

isGreaterThan (6,809);


// function expression using arrow syntax
// function acts like a variable
// needs a ';'


const isGreaterThan = (numberOne, numberTwo) =>{
    if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
};

isGreaterThan(4,809);
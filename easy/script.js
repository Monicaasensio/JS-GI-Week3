function exerciseOfTheDay() { //main function creates closure for managing exercise of the day
    let exerciseName = ""; //declares variable and initializes to empty string
  
    function setExercise(name) { //takes arg of name, sets exercise of the day
      exerciseName = name; //when func is called name assigns its value to exerciseName
    }
  
    function getExercise() { //func defined w/in main func. when called logs message to console
        console.log(`Today's exercise: ${exerciseName}`); //template literal to modify daily
    }
  
    return { //object is returned with 2 functions as propeties. allows you to access and modify 
        setExercise,
        getExercise
      };

  }
  
  // Creating a closure to set and get the exercise for the day
  //able to call both functions (closures)
  const exerciseClosure = exerciseOfTheDay();
  
  // Set the exercise for the day
  exerciseClosure.setExercise("swimming");
  
  // Get and print the exercise for the day
  exerciseClosure.getExercise();



//   let todaysExercise = document.getElementsByClassName(".update-exercise");
//   todaysExercise.innerHTML  = `Today's exercise: ${exerciseName}`;
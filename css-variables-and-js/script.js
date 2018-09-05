const inputs = document.querySelectorAll('.controllers input');

function handleUpdate(){
  //console.log(this.value);
  //console.log(this.dataset); shows you anything that has data- and puts it into an object for you
  const suffix = this.dataset.sizing || ''; //this grabs the px
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  console.log(this.name);
  //grabs the name element from the html file that matches the variables in the css file under 'root' and updates the value of it with the 'px' at the end from (suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
//listens for the change event and then runs the handleUpdate function

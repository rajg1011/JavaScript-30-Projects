const controls = document.querySelectorAll('.control input')

function handleUpdate() {
    //    console.log(this); See jb bhi function create kro sbse phle 'this' ko check kro bcz function main koibhi value jo uske pss nii h bo sirf this ke jariye se aa skti h
    const suffix = this.dataset.sizing || "";  // dataset will give u the property that has data-(like data-sizing here in html) in html
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // document.documentElement will get u <html> tag and this tag contain all root values under style section.
    // this.value will take u to the html page where value=0, but when u change value by scroller then this.value also change 
}

controls.forEach(input => input.addEventListener('change', handleUpdate)); //Change event- when u change ur input tag to other input then something will change in size or color.
controls.forEach(input => input.addEventListener('mousemove', handleUpdate));
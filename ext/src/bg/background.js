//originals
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("never", "g"), "always");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Never", "g"), "Always");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("shouldn't", "g"), "should");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Shouldn't", "g"), "Should");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("don't", "g"), "do");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Don't", "g"), "Do");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("bad", "g"), "good");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Bad", "g"), "Good");
//secondary
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("aren't", "g"), "are");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Aren't", "g"), "Are");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("wouldn't", "g"), "would");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Wouldn't", "g"), "Would");
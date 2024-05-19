let btnList = document.querySelectorAll(".read-more");
//alert(btnList.length);

//alert(btnList[0].parentElement.parentElement.nextElementSibling.nextElementSibling.getElementsByTagName('li')[0].innerHTML);

btnList.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        let descriptionDiv = btn.parentElement.parentElement.nextElementSibling.nextElementSibling;

        let title = descriptionDiv.getElementsByClassName("title")[0].innerHTML;
        let intro = descriptionDiv.getElementsByClassName("intro")[0].innerHTML;
        let goals = descriptionDiv.getElementsByClassName("goals")[0].innerHTML;
        let governance = descriptionDiv.getElementsByClassName("governance")[0].innerHTML;
        let objectives = descriptionDiv.getElementsByClassName("objectives")[0].innerHTML;

        localStorage.setItem('title', title);
        localStorage.setItem('intro', intro);
        localStorage.setItem('goals', goals);
        localStorage.setItem('governance', governance);
        localStorage.setItem('objectives', objectives);
        
        window.location.href = "../Pages/project.html";

    });  
});
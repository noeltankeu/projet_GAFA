let btnList = document.querySelectorAll(".read-more");
//alert(btnList.length);

//alert(btnList[0].parentElement.parentElement.nextElementSibling.nextElementSibling.getElementsByTagName('li')[0].innerHTML);

btnList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const descriptionDiv = btn.parentElement.parentElement.nextElementSibling.nextElementSibling;

        const image = descriptionDiv.previousElementSibling.previousElementSibling.getElementsByTagName("img")[0].getAttribute("src");
        const title = descriptionDiv.getElementsByClassName("title")[0].innerHTML;
        const intro = descriptionDiv.getElementsByClassName("intro")[0].innerHTML;
        const goals = descriptionDiv.getElementsByClassName("goals")[0].innerHTML;
        const governance = descriptionDiv.getElementsByClassName("governance")[0].innerHTML;
        const objectives = descriptionDiv.getElementsByClassName("objectives")[0].innerHTML;

        localStorage.setItem('image', image);
        localStorage.setItem('title', title);
        localStorage.setItem('intro', intro);
        localStorage.setItem('goals', goals);
        localStorage.setItem('governance', governance);
        localStorage.setItem('objectives', objectives);

        window.location.href = "../Pages/project.html";

    });
});
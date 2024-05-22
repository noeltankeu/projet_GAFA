
window.addEventListener("load", () => {

    const image = localStorage.getItem('image');
    const title = localStorage.getItem('title');
    const intro = localStorage.getItem('intro');
    const goals = localStorage.getItem('goals');
    const governance = localStorage.getItem('governance');
    const objectives = localStorage.getItem('objectives');

    const imageDiv = document.querySelector('.header-container');
    const titleDiv = document.querySelector('.title');
    const introDiv = document.querySelector('.introduction');
    const goalsDiv = document.querySelector('.goals');
    const governanceDiv = document.querySelector('.governance');
    const objectivesDiv = document.querySelector('.objectives');


    imageDiv.style.background = "url(" + image + ")";
    titleDiv.innerHTML = title;
    introDiv.getElementsByTagName("p")[0].innerHTML = intro;
    goalsDiv.getElementsByTagName("p")[0].innerHTML = goals;
    governanceDiv.getElementsByTagName("p")[0].innerHTML = governance;
    objectivesDiv.getElementsByTagName("p")[0].innerHTML = objectives;

    //alert(introDiv);
});


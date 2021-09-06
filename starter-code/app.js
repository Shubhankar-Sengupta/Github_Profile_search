//selecting the elements

const image = document.querySelector('.js-split');
const avatarImg = document.querySelector('.rounded-circle');
const header = document.querySelector('.h2');
const versionLight = document.querySelector('.version-lg');
const versionDark = document.querySelector('.version-dk');
const inputBox = document.querySelector('.form-control');
const searchIcon = document.querySelector('#basic-addon1');
const searchButton = document.querySelector('.btn-js'); 
const lastRow = document.querySelector('.last-row');
const desclastRow = document.querySelector('.desc-lst-row');
const updateDate = document.querySelector('.update');
const Loremcontent = document.querySelectorAll('.lor-content');
const profileInfo = document.querySelectorAll('.profile-info');
const btnClickable = document.querySelector('.btn-sm');
const footerImages = document.querySelectorAll('.svg-footer-img');


// manipulating elements

btnClickable.addEventListener('click', async (evt) => {

    evt.preventDefault();

    const data = await axios.get('https://api.github.com/users/Shubhankar-Sengupta');
    Loremcontent[0].innerHTML = data.data.bio;
    // avatarImg.src = data.data.avatar_url;

});


function toggleContent() {

    document.body.classList.toggle('body-background');
    header.classList.toggle('header');
    versionDark.classList.toggle('display-dark');
    versionLight.classList.toggle('display-light');
    inputBox.classList.toggle('frm-control-add', 'input-box');
    searchIcon.classList.toggle('search-icon-background');
    lastRow.classList.toggle('last-row-adjustments');
    updateDate.classList.toggle('date-update');
    searchButton.classList.toggle('search-button');
    desclastRow.classList.toggle('desc-lst-rowColor');
    // image.classList.toggle('image-src-toggle');


    for (let cont of Loremcontent) {
        cont.classList.toggle('lorem-cont');
    }


    for (let prof of profileInfo) {
        prof.classList.toggle('prof-color');
        prof.children[0].classList.toggle('prof-color');
    }

    // document.body.style.backgroundColor = `var(--dark-blue-black)`;
    // header.style.color = `var(--dark-pure-white)`;
    
    // versionDark.style.display = `none`;
    // versionLight.style.display = `inline-block`;
    // versionLight.style.color = `var(--dark-pure-white)`;
    // inputBox.style.backgroundColor = `var(--dark-blue)`;
    // inputBox.classList.add('frm-control-add');
    // searchIcon.style.backgroundColor = `var(--dark-blue)`;
    // lastRow.style.backgroundColor = `var(--dark-blue)`;
    // lastRow.style.color = `var(--dark-pure-white)`;
    // updateDate.style.color = `var(--dark-pure-white)`;


    // for (let svg of footerImages) {
    //     svg.firstElementChild.attributes.fill.nodeValue = `#fff`;
    // }
    

    // for (let cont of Loremcontent) {
    //     cont.style.color = `var(--dark-pure-white)`;
    // }

    // for (let prof of profileInfo) {
    //     prof.style.color = `var(--dark-pure-white)`;
    //     prof.children[0].style.color = `var(--dark-pure-white)`;
    // }

    // image.src = `file:///F:/FrontEndMentorChallange4/github-user-search-app/starter-code/assets/icon-sun.svg`;
    // searchButton.style.backgroundColor = `var(--dark-blue)`;
    // desclastRow.style.backgroundColor = `var(--dark-blue-black)`;
    // inputBox.style.color =`var(--dark-pure-white)`;
    // document.body.style.transition = `all 1s ease-out`;

}


image.addEventListener('click', toggleContent)
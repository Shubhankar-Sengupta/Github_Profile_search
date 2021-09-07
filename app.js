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
const spansInfo = document.querySelectorAll('.d-block');
const footergitinfo = document.querySelectorAll('.footer-info');

// manipulating elements

btnClickable.addEventListener('click', async (evt) => {

    evt.preventDefault();

    try {
        const inpValue = inputBox.value;
        const data = await axios.get(`https://api.github.com/users/${inpValue}`);

        const profileImg = data.data.avatar_url;
        const bioData = data.data.bio;
        const repos = data.data.public_repos;
        const followers = data.data.followers;
        const following = data.data.following;
        const location = data.data.location;
        const twitter = data.data.twitter_username;
        const company = data.data.company;
        const githubProfile = data.data.html_url;

        avatarImg.src = profileImg;

        if (location === null) {
            footergitinfo[0].innerHTML = "Not Available";
        }

        else footergitinfo[0].innerHTML = location;

        if (twitter === null) {
            footergitinfo[1].innerHTML = "Not Available";
        }

        else footergitinfo[1].innerHTML = twitter;

        if (githubProfile === null) {
            footergitinfo[2].innerHTML = "Not Available";
        }

        else footergitinfo[2].innerHTML = githubProfile;

        if (company === null) {
            footergitinfo[3].innerHTML = "Not Available";
        }
        
        else footergitinfo[3].innerHTML = company;



        if (bioData === null) {
            Loremcontent[0].innerHTML = "profile has no bio";
        }

        else Loremcontent[0].innerHTML = bioData;

        spansInfo[0].innerHTML = repos;
        spansInfo[1].innerHTML = followers;
        spansInfo[2].innerHTML = following;
    }


    catch (err) {
        "";
    }

});


function toggleContent() {

    document.body.classList.toggle('body-background');
    header.classList.toggle('header');
    versionDark.classList.toggle('display-dark');
    versionLight.classList.toggle('display-light');
    inputBox.classList.toggle('frm-control-add');
    inputBox.classList.toggle('control-back');
    searchIcon.classList.toggle('search-icon-background');
    lastRow.classList.toggle('last-row-adjustments');
    updateDate.classList.toggle('date-update');
    searchButton.classList.toggle('search-button');
    desclastRow.classList.toggle('desc-lst-rowColor');
    image.classList.toggle('icon-src-alt');


    for (let cont of Loremcontent) {
        cont.classList.toggle('lorem-cont');
    }


    for (let prof of profileInfo) {
        prof.classList.toggle('prof-color');
        prof.children[0].classList.toggle('prof-color');
    }



    for (let svg of footerImages) {

        let container = svg.firstElementChild.attributes.fill;

        if (container.nodeValue === "#4b6a9b") {
            container.nodeValue = '#fff';
        }

        else {
            container.nodeValue = "#4b6a9b";
        }

    }

}


image.addEventListener('click', toggleContent)
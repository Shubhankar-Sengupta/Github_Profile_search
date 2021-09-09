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
const dateOfJoining = document.querySelector('.joining');
const noResults = document.querySelector('.no-result');
const octocat_name = document.querySelector(`.octocat-update`);


// manipulating elements.

inputBox.addEventListener('change', (evt) => {

    if (inputBox.value === "") {
        refresh();
    }

    else return;
})


btnClickable.addEventListener('click', async (evt) => {

    evt.preventDefault(); // prevents sending default request.

    try {
        const inpValue = inputBox.value;

        if (inputBox.value === "") {
            noResults.style.display = `flex`;
            return;
        }

        else {

            noResults.style.display = `none`;
            const data = await axios.get(`https://api.github.com/users/${inpValue}`);

            footergitinfo[2].href = `https://github.com/${inpValue}`;

            const joining = data.data.created_at;
            const j_date = joining.slice(0, 10);
            const profileImg = data.data.avatar_url;
            const bioData = data.data.bio;
            const repos = data.data.public_repos;
            const followers = data.data.followers;
            const following = data.data.following;
            const location = data.data.location;
            const twitter = data.data.twitter_username;
            const company = data.data.company;
            const githubProfile = data.data.html_url;
            const year = j_date.slice(0,4);
            const day = j_date.slice(8,10);

            const array = [];
            const dateForm = new Date(j_date);
            const options = {month:'long'};
            const month = new Intl.DateTimeFormat('en-US', options).format(dateForm);
            const shortMonth = month.slice(0,3);
            array.push(day, shortMonth, year)
            const newDate = array.join(' ');
            
            
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
            dateOfJoining.innerHTML = newDate;
            octocat_name.innerHTML = `@${data.data.name}`;
            octocat_name.style.fontSize = `.8rem`;

        }
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
    noResults.classList.toggle('search-button');


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



function refresh() {
    avatarImg.src = "./assets/Bitmap.svg";
    footergitinfo[0].innerHTML = 'San Francisco';
    footergitinfo[1].innerHTML = 'Not Available';
    footergitinfo[2].innerHTML = 'https://github.blog';
    footergitinfo[3].innerHTML = '@github';

    spansInfo[0].innerHTML = 8;
    spansInfo[1].innerHTML = 1908;
    spansInfo[2].innerHTML = 200;
    dateOfJoining.innerHTML = `25/6/2021`;
    Loremcontent[0].innerHTML = `Lorem ipsum dolor sit amet, consectetuer
    adipiscing elit.
    Donec odio.
    Quisque
    volutpat mattis eros`;
}
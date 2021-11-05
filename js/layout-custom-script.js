function initialConfig() {

    const pageUrl = window.location.href;
    const homePage = "https://zoltan-baba.github.io/";
    const jpHomePage = "https://zoltan-baba.github.io/ja/index-ja.html";

    function homePageConfig() {
    
        if (pageUrl !== homePage && pageUrl !== jpHomePage) {
            document.querySelector(".breadcrumb-container").style.display = "block";
            document.querySelector(".feedback-panel").style.display = "block";
        }
    };

    function breadCrumbFix() {
        let breadCrumbHome = document.querySelector(".breadcrumb-link");
        let breadCrumbLink = breadCrumbHome.querySelector("a[href*='index-en.html']");
        breadCrumbLink.href = "/";
        breadCrumbLink.textContent = "Home";
    };

    function searchInput() {
        let searchBar = document.querySelector(".tool-search");
        let searchParent = searchBar.parentNode;
        searchParent.insertBefore(searchBar, searchParent.firstChild.nextSibling);

        let newDiv = document.createElement('div');
        newDiv.setAttribute("class", "adv-search");
    
        let newA = document.createElement('a');
        newA.setAttribute("href", "/search.html");
        newA.setAttribute("class", "adv-search-link");
        newA.textContent = "Advanced search";
    
        newDiv.appendChild(newA);
        searchBar.insertAdjacentElement("afterend", newDiv);
    };

    /*
    function languageSelector() {
        let langParent = document.querySelector("div.toolbar-tools");
        let jaSelector = langParent.querySelectorAll("li")[1];
        let enSelector = langParent.querySelectorAll("li")[0];

        enSelector.querySelector("a").setAttribute("target", "_self");
        jaSelector.querySelector("a").setAttribute("target", "_self");

        if (pageUrl.indexOf("/ja/") > -1) {
            jaSelector.classList.add("active-lang");
        }
        else {
            enSelector.classList.add("active-lang");
        }
    };
    */

    searchInput()
    homePageConfig();
    breadCrumbFix();
};

initialConfig();

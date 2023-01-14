// notification
{
  let notIcon = document.getElementById("notification_icon");
  let notiBox = document.getElementById("notification_box");

  notIcon.addEventListener("click", function () {
    notiBox.classList.toggle("showNotiBox");
  });
}

// sideba toggole
{
  let sidebar = document.getElementById("sidebar");
  let headerToggle = document.getElementById("header_toggle");
  headerToggle.addEventListener("click", function () {
    sidebar.classList.toggle("sidebarActive");
  });
}

// nav toggler
{
  let nav_link = document.getElementsByClassName("nav_link");

  [...nav_link].forEach((currentItem, i) => {
    let navItem = document.getElementsByClassName("nav_item")[i];

    currentItem.addEventListener("click", () => {
      let showClass = document.querySelector(".nav_item_active");

      if (!navItem.classList.contains("nav_item_active") && showClass) {
        showClass.classList.remove("nav_item_active");
      }
      navItem.classList.toggle("nav_item_active");
    });
  });
}

// table three doted
{
  let threeDoted = document.getElementsByClassName("postable_threedoted_icon");

  [...threeDoted].forEach((innerItem, index) => {
    let posDotBox = document.getElementsByClassName("posthreedot_box")[index];

    innerItem.addEventListener("click", () => {
      let activeDot = document.querySelector(".posthreedot_box_show");

      if (!posDotBox.classList.contains("posthreedot_box_show") && activeDot) {
        activeDot.classList.remove("posthreedot_box_show");
      }
      posDotBox.classList.toggle("posthreedot_box_show");
    });
  });
}

// tab

let tabsBtn = document.getElementsByClassName("reportTab_btn");

[...tabsBtn].forEach((currentItem, i) => {
  let tabContent = document.querySelectorAll(".tabReportcontent")[i];

  currentItem.addEventListener("click", () => {
    [...tabsBtn].forEach((innertItem) => {
      innertItem.classList.remove("activeReportBtn");
    });
    currentItem.classList.add("activeReportBtn");

    let showClassReport = document.querySelector(".showReportTable");

    if (!tabContent.classList.contains("showReportTable") && showClassReport) {
      showClassReport.classList.remove("showReportTable");
    }

    tabContent.classList.add("showReportTable");
  });
});

// user form nav

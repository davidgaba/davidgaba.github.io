"use strict";

$(".stat-vector").attr("fill", "#000000");

const colorThemeBtn = $("#color-theme-btn");
colorThemeBtn.click(colorThemeToggle);

$(".fa-sun").css({ display: "none" });
let currentTheme = "dark";

function colorThemeToggle() {
  const $colorThemeBtn = $("#color-theme-btn");
  const $colorThemeSlider = $("#color-theme-slider");

  if ($colorThemeSlider.css("right") === "20.5px") {
    $colorThemeSlider.css("right", "45px");
  } else {
    $colorThemeSlider.css("right", "20.5px");
  }

  if (currentTheme === "dark") {
    // Change to light
    $("html").css({
      "--bg-color": "#ffffff",
      "--text-color": "#000000",
      "--skills-bg-color": "#d8d8d883",
    });
    $(".fa-moon").css({ display: "none" });
    $(".fa-sun").css({ display: "block" });
    $("footer").css({ backgroundColor: "var(--quinary-color)" });
    $(".stat-vector").css({ filter: "invert(0)" });
    $(".stat-item").css({ backgroundColor: "#e2e2e2a2" });
    $("#github-logo").css({ filter: "none" });
    currentTheme = "light";
  } else {
    // Change to dark
    $("html").css({
      "--bg-color": "#000000",
      "--text-color": "#ffffff",
      "--skills-bg-color": "#46474783",
    });
    $(".fa-moon").css({ display: "block" });
    $(".fa-sun").css({ display: "none" });
    $("footer").css({ backgroundColor: "var(--tertiary-color)" });
    $(".stat-vector").css({ filter: "invert(1)" });
    $(".stat-item").css({ backgroundColor: "#272727a2" });
    $("#github-logo").css({ filter: "invert(1)" });
    currentTheme = "dark";
  }
}

const $menuBtn = $("#menu-btn");
const $closeBtn = $(".fa-x");
$menuBtn.click(menuToggle);
$closeBtn.click(menuToggle);

let menuState = "closed";

function menuToggle() {
  $("nav").toggle();

  if (menuState === "closed") {
    $("nav").css({ marginLeft: "0px" });
    $("body").attr("disabled", "true");
    menuState = "opened";
  } else {
    $("nav").css({ marginLeft: "-100lvw" });
    $("body").attr("disabled", "false");
    menuState = "closed";
  }
}

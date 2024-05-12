"use strict";

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
    currentTheme = "light";
  } else {
    // Change to dark
    $("html").css({
      "--bg-color": "#000000",
      "--text-color": "#ffffff",
      "--skills-bg-color": "#46474783",
    });
    $(".fa-sun").css({ display: "none" });
    $(".fa-moon").css({ display: "block" });
    currentTheme = "dark";
  }
}

const $menuBtn = $("#menu-btn");
$menuBtn.click(menuToggle);

let menuState = "closed";

function menuToggle() {
  $("nav").toggle();

  if (menuState === "closed") {
    $("body").attr("disabled", "disabled");
    menuState = "opened";
  } else {
    menuState = "closed";
  }
}

"use strict";

$("#color-theme-btn").click(colorThemeToggle);

function colorThemeToggle() {
  const $colorThemeBtn = $("#color-theme-btn");
  const $colorThemeSlider = $("#color-theme-slider");

  if ($colorThemeSlider.css("right") === "20.5px") {
    $colorThemeSlider.css("right", "45px");
  } else {
    $colorThemeSlider.css("right", "20.5px");
  }
}

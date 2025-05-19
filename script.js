$(document).ready(function () {
  const audio = $("#bg-audio")[0];
  const $toggle = $("#audio-toggle");
  const $icon = $("#audio-icon");
  const $text = $("#audio-text");
  const $prompt = $("#click-prompt");

  // Wait for user to click anywhere
  $(window).one("click", function () {
    $prompt.fadeOut(500, () => $prompt.remove());
    audio.currentTime = 0;
    audio.muted = false;
    audio.play();
    $toggle.removeClass("d-none");

    audio.onended = function () {
      audio.currentTime = 0;
      audio.play();
    };
  });

  // Toggle mute/unmute
  $toggle.on("click", function () {
    audio.muted = !audio.muted;
    if (audio.muted) {
      $icon.removeClass("bi-volume-up-fill").addClass("bi-volume-mute-fill");
      $text.text("Click here to unmute");
    } else {
      $icon.removeClass("bi-volume-mute-fill").addClass("bi-volume-up-fill");
      $text.text("Click here to mute");
      audio.play();
    }
  });

  // Auto-mute on scroll
  $(window).on("scroll", function () {
    if (!audio.muted) {
      audio.muted = true;
      $icon.removeClass("bi-volume-up-fill").addClass("bi-volume-mute-fill");
      $text.text("Click here to unmute");
    }
  });
});

let navigations = $("#main-nav");

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    navigations.addClass("bg-dark bg-gradient");
  } else {
    navigations.removeClass("bg-dark bg-gradient");
  }
});

let sectionHilights = $("#hilights-section");
sectionHilights.on("hover", function () {
  sectionHilights.addClass("modal");
});

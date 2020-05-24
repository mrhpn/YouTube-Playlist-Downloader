const domStrings = {
  formPlaylist: "#form_playlist",
  formSingle: "#form_single",

  inputPlaylist: ".input_playlist",
  inputSingle: ".input_single",

  errorPlaylist: ".error-playlist",
  successPlaylist: ".success-playlist",
  errorSingle: ".error-single",
  successSingle: ".success-single",

  loadingDiv: ".single-loading",
  playlistLoadingDiv: ".playlist-loading",
};

const formPlaylist = document.querySelector(domStrings.formPlaylist);
const formSingle = document.querySelector(domStrings.formSingle);
const inputPlaylist = document.querySelector(domStrings.inputPlaylist);
const inputSingle = document.querySelector(domStrings.inputSingle);

const errorPlaylist = document.querySelector(domStrings.errorPlaylist);
const successPlaylist = document.querySelector(domStrings.successPlaylist);
const errorSingle = document.querySelector(domStrings.errorSingle);
const successSingle = document.querySelector(domStrings.successSingle);

const loading = document.querySelector(domStrings.loadingDiv);
const playlistLoading = document.querySelector(domStrings.playlistLoadingDiv);

if (formPlaylist) {
  formPlaylist.addEventListener("submit", function (e) {
    e.preventDefault();

    if (errorPlaylist) errorPlaylist.textContent = "";
    if (successPlaylist) successPlaylist.textContent = "";
    playlistLoading.classList.remove("hidden");

    const link = inputPlaylist.value;
    let payload = { link: link };
    fetch("http://localhost:3000/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        response.json().then((data) => {
          if (data.error) {
            playlistLoading.classList.add("hidden");
            errorPlaylist.textContent = data.message;
            return;
          }

          if (data.success) {
            playlistLoading.classList.add("hidden");
            inputPlaylist.value = "";
            successPlaylist.textContent = data.message;
            return;
          }
        });
      })
      .catch((error) => console.log("here is error---", error));
  });
}

if (formSingle) {
  formSingle.addEventListener("submit", function (e) {
    e.preventDefault();

    if (errorSingle) errorSingle.textContent = "";
    if (successSingle) successSingle.textContent = "";
    loading.classList.remove("hidden");

    const link = inputSingle.value;
    let payload = { link: link };
    fetch("http://localhost:3000/single", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        response.json().then((data) => {
          if (data.error) {
            loading.classList.add("hidden");
            errorSingle.textContent = data.message;
            return;
          }

          if (data.success) {
            loading.classList.add("hidden");
            inputSingle.value = "";
            successSingle.textContent = data.message;
            return;
          }
        });
      })
      .catch((error) => console.log("here is error---", error));
  });
}

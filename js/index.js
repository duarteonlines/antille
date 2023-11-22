const showOnPx = window.innerHeight;
const voltarAoTopoButton = document.getElementById("voltarAoTopo");
const form = $("#form");

$(window).on("scroll", () => {
  if (window.pageYOffset > showOnPx) {
    voltarAoTopoButton.classList.remove("hidden");
  } else {
    voltarAoTopoButton.classList.add("hidden");
  }
});

voltarAoTopoButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

form.on("submit", function (e) {
  e.preventDefault();
  const data = Array.from(e.target).filter((el) => el.tagName !== "BUTTON");
  const result = data.reduce(function (obj, input) {
    obj[input.name] = $(input).val();
    return obj;
  }, {});

  $.ajax({
    url: "http://localhost:8080/contato",
    method: "POST",
    data: JSON.stringify(result),
    dataType: "application/json",
    contentType: "application/json",
    complete: function ({ status }) {
      switch (status) {
        case 200:
          alert("E-mail enviado com sucesso !");
          break;
        case 400:
          return alert("Revise seus dados e tente novamente.");
        case 500:
          return alert(
            "Algo de errado não está certo. Por favor, contate o suporte."
          );
        default:
          break;
      }
    },
  });
});

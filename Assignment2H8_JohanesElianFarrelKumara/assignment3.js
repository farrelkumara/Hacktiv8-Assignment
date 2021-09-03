function TampilkanData() {
  var fnama = document.getElementById("nama");
  var frole = document.getElementById("role");
  var favailability = document.getElementById("availability");
  var fage = document.getElementById("age");
  var flokasi = document.getElementById("lokasi");
  var fexperience = document.getElementById("experience");
  var femail = document.getElementById("email");
  var nama = document.getElementById("pnama").innerHTML;
  var role = document.getElementById("prole").innerHTML;
  var availability = document.getElementById("pavail").innerHTML;
  var age = document.getElementById("pusia").innerHTML;
  var lokasi = document.getElementById("plokasi").innerHTML;
  var experience = document.getElementById("pexp").innerHTML;
  var email = document.getElementById("pemail").innerHTML;
  //   console.log(nama, role, availability, age, lokasi, experience, email);
  fnama.value = nama;
  frole.value = role;
  favailability.value = availability;
  fage.value = age;
  flokasi.value = lokasi;
  fexperience.value = experience;
  femail.value = email;
}

function SimpanForm() {
  document.getElementById("pnama").innerHTML =
    document.getElementById("nama").value;
  document.getElementById("prole").innerHTML =
    document.getElementById("role").value;
  document.getElementById("pavail").innerHTML =
    document.getElementById("availability").value;
  document.getElementById("pusia").innerHTML =
    document.getElementById("age").value;
  document.getElementById("plokasi").innerHTML =
    document.getElementById("lokasi").value;
  document.getElementById("pexp").innerHTML =
    document.getElementById("experience").value;
  document.getElementById("pemail").innerHTML =
    document.getElementById("email").value;
  document.getElementById("nama").value = "";
  document.getElementById("role").value = "";
  document.getElementById("availability").value = "";
  document.getElementById("age").value = "";
  document.getElementById("lokasi").value = "";
  document.getElementById("experience").value = "";
  document.getElementById("email").value = "";
  SimpanValueUpdate();
}

function SimpanValueUpdate() {
  localStorage.setItem("nama", document.getElementById("pnama").innerHTML);
  localStorage.setItem("role", document.getElementById("prole").innerHTML);
  localStorage.setItem("avail", document.getElementById("pavail").innerHTML);
  localStorage.setItem("usia", document.getElementById("pusia").innerHTML);
  localStorage.setItem("lokasi", document.getElementById("plokasi").innerHTML);
  localStorage.setItem("exp", document.getElementById("pexp").innerHTML);
  localStorage.setItem("email", document.getElementById("pemail").innerHTML);
}

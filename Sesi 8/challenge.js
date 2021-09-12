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

function validateForm() {
  var valnama = document.getElementById("nama");
  var valrole = document.getElementById("role");
  var valavail = document.getElementById("availability");
  var valage = document.getElementById("age");
  var vallokasi = document.getElementById("lokasi");
  var valexp = document.getElementById("experience");
  var valemail = document.getElementById("email");

  if (
    valnama.value == "" ||
    valrole.value == "" ||
    valavail.value == "" ||
    valage.value == "" ||
    vallokasi.value == "" ||
    valexp.value == "" ||
    valemail.value == ""
  ) {
    alert("Formulir tidak boleh kosong");
  } else if (
    !validateRegex(
      valnama,
      valrole,
      valavail,
      vallokasi,
      valage,
      valemail,
      valexp
    )
  ) {
    SimpanForm();
  }
}

function validateRegex(nama, role, availability, lokasi, age, email, exp) {
  const regex = /^[a-zA-Z ]+$/;
  const regexlokasi = /^[a-zA-Z ,]+$/;
  const regexage = /^[0-9]+$/;
  const regexemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!regex.test(nama.value)) {
    alert("Nama tidak boleh menggunakan angka");
    return true;
  } else if (!regex.test(role.value)) {
    alert("Role tidak boleh menggunakan angka");
    return true;
  } else if (!regex.test(availability.value)) {
    alert("Availibility tidak boleh menggunakan angka");
    return true;
  } else if (!regexlokasi.test(lokasi.value)) {
    alert("Lokasi tidak boleh menggunakan angka");
    return true;
  } else if (!regexage.test(age.value)) {
    alert("Age hanya boleh menggunakan angka");
    return true;
  } else if (!regexage.test(exp.value)) {
    alert("Years Experience hanya boleh menggunakan angka");
    return true;
  } else if (!regexemail.test(email.value)) {
    alert("Format email salah");
    return true;
  } else {
    return false;
  }
}

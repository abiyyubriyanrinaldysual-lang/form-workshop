const form = document.querySelector("#registration-form");
const nama = document.querySelector("#nama");
const email = document.querySelector("#email");
const telepon = document.querySelector("#telepon");
const tanggal = document.querySelector("#tanggal");
const statusBox = document.querySelector("#form-status");

const fields = [
  { input: nama, error: document.querySelector("#nama-error") },
  { input: email, error: document.querySelector("#email-error") },
  { input: telepon, error: document.querySelector("#telepon-error") },
  { input: tanggal, error: document.querySelector("#tanggal-error") }
];

// Format tanggal lokal YYYY-MM-DD, tanpa masalah pergeseran zona waktu UTC.
function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

tanggal.min = localDateString();

function showError(input, message) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = message;
  input.classList.toggle("invalid", Boolean(message));
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateName() {
  const value = nama.value.trim();
  if (!value) {
    showError(nama, "Nama wajib diisi.");
    return false;
  }
  if ([...value].length < 3) {
    showError(nama, "Nama minimal 3 huruf.");
    return false;
  }
  showError(nama, "");
  return true;
}

function validateEmail() {
  const value = email.value.trim();
  // Validasi format dasar: teks sebelum @, domain, dan ekstensi.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!value || !emailPattern.test(value)) {
    showError(email, "Masukkan email dengan format yang valid, contoh nama@email.com.");
    return false;
  }
  showError(email, "");
  return true;
}

function validatePhone() {
  const value = telepon.value.trim();
  // Nomor Indonesia: 08 diikuti 8–11 digit, atau 628 diikuti 8–11 digit.
  const phonePattern = /^(08\d{8,11}|628\d{8,11})$/;
  if (!phonePattern.test(value)) {
    showError(telepon, "Format nomor tidak valid. Gunakan 08xxxxxxxxxx (10–13 digit) atau 628xxxxxxxxxx.");
    return false;
  }
  showError(telepon, "");
  return true;
}

function validateDate() {
  const value = tanggal.value;
  if (!value) {
    showError(tanggal, "Tanggal pendaftaran wajib diisi.");
    return false;
  }
  if (value < localDateString()) {
    showError(tanggal, "Tanggal paling cepat hari ini.");
    return false;
  }
  showError(tanggal, "");
  return true;
}

const validators = [
  validateName,
  validateEmail,
  validatePhone,
  validateDate
];

function hideStatus() {
  statusBox.hidden = true;
  statusBox.textContent = "";
  statusBox.className = "status";
}

fields.forEach(({ input }) => {
  input.addEventListener("input", () => {
    hideStatus();
    const index = fields.findIndex(field => field.input === input);
    validators[index]();
  });
  input.addEventListener("change", () => {
    const index = fields.findIndex(field => field.input === input);
    validators[index]();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  hideStatus();

  const results = validators.map(validate => validate());
  const firstInvalidIndex = results.findIndex(result => !result);

  if (firstInvalidIndex !== -1) {
    statusBox.textContent = "Periksa kembali data yang ditandai. Semua field wajib diisi dengan benar.";
    statusBox.className = "status failure";
    statusBox.hidden = false;
    fields[firstInvalidIndex].input.focus();
    return;
  }

  statusBox.textContent = "Validasi berhasil! Data pendaftaran siap diproses.";
  statusBox.className = "status success";
  statusBox.hidden = false;
  // Demo front-end: data belum dikirim ke server atau disimpan ke database.
});

// Atur batas tanggal sejak halaman dibuka.
tanggal.min = localDateString();

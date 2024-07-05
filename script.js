const form = document.getElementById('input');

form.addEventListener('submit', function(event) {
    const nama = document.getElementById('nama').value;
    const nomor = document.getElementById('nomor').value;
    const buku = document.getElementById('buku').value;
    const tgl = document.getElementById('tgl').value;

    if (nama === '' || nomor === '' || buku === '' || tgl === '') {
        alert('Harap Lengkapi Semua Kolom Sebelum Mengirimkan Form.');
        event.preventDefault();
    }
});

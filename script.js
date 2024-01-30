
function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

const mulai = async () => {

    const tampilkanJawaban = (angkaRandom) => {
        Swal.fire(`Jawaban yang benar adalah ${angkaRandom}`, '', 'info');
    };

    const lihatJawabanElemen = document.getElementById('lihat');
    lihatJawabanElemen.addEventListener('click', () => tampilkanJawaban(angkaRandom));



    let nilai = await Swal.fire({
        title: 'Masukkan nilai untuk diacak:',
        input: 'text',
        inputValidator: (value) => {
            return value ? undefined : 'Input is required!';
        },
        showCancelButton: true,
    });

    // Cek jika pengguna membatalkan (cancel)
    if (nilai.dismiss === Swal.DismissReason.cancel) {
        return Swal.fire('Game dihentikan', '', 'info');
    }

    while (!nilai.value) {
        nilai = await Swal.fire({
            title: 'Masukkan nilai untuk diacak:',
            input: 'text',
            inputValidator: (value) => {
                return value ? undefined : 'Input is required!';
            },
            showCancelButton: true,
        });

        // Cek jika pengguna membatalkan (cancel)
        if (nilai.dismiss === Swal.DismissReason.cancel) {
            return Swal.fire('Game dihentikan', '', 'info');
        }
    }

    let angkaRandom = Math.floor(Math.random() * parseInt(nilai.value)) + 1;

    Swal.fire(`Angka yang diacak: ${angkaRandom}`);

    let tebak = await Swal.fire({
        title: 'Tebak angka sekarang:',
        input: 'text',
        inputValidator: (value) => {
            return value ? undefined : 'Input is required!';
        },
        showCancelButton: true,
    });

    // Cek jika pengguna membatalkan (cancel)
    if (tebak.dismiss === Swal.DismissReason.cancel) {
        return Swal.fire('Game dihentikan', '', 'info');
    }

    while (parseInt(tebak.value) !== angkaRandom) {
        if (parseInt(tebak.value) > angkaRandom) {
            tebak = await Swal.fire({
                title: 'Angka terlalu besar, tebak lagi:',
                input: 'text',
                inputValidator: (value) => {
                    return value ? undefined : 'Input is required!';
                },
                showCancelButton: true,
            });

            // Cek jika pengguna membatalkan (cancel)
            if (tebak.dismiss === Swal.DismissReason.cancel) {
                return Swal.fire('Game dihentikan', '', 'info');
            }
        } else if (parseInt(tebak.value) < angkaRandom) {
            tebak = await Swal.fire({
                title: 'Angka terlalu kecil, tebak lagi:',
                input: 'text',
                inputValidator: (value) => {
                    return value ? undefined : 'Input is required!';
                },
                showCancelButton: true,
            });

            // Cek jika pengguna membatalkan (cancel)
            if (tebak.dismiss === Swal.DismissReason.cancel) {
                return Swal.fire('Game dihentikan', '', 'info');
            }
        }
    }

    Swal.fire('Yehh, tebakan benar!');
};

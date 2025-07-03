document.addEventListener('DOMContentLoaded', () => {
    // DATA UTAMA APLIKASI
    // Data ini diambil dari file dataset_usada_bali.csv Anda
    const usadaData = [
    {
        No: 1,
        Kegunaan: `Obat bayi cacingan`,
        Bahan: `Bunga mengkudu (Morinda citrifolia) 8 biji, Bawang putih (Allium sativum) 8 buah, Jangu (Acorus calamus Linn) 8 iris`,
        "Cara pengolahan": `Direndang (dinyahnyah), campur, giling halus, dibulatkan jadi 7 butir, jemur hingga kering`,
        "Cara penggunaan": `Diminum 1 biji setiap 3 hari`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 2,
        Kegunaan: `Obat badan sakit berdenyut, menusuk, lumpuh`,
        Bahan: `Tangkai bunga cengkeh (Syzygium aromaticum), Mesui(Cryptocarya massoy), Garam uku (garam tradsional bali)`,
        "Cara pengolahan": `Digiling, disaring`,
        "Cara penggunaan": `Minum `,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 3,
        Kegunaan: `Obat ambeien`,
        Bahan: `Gaganan kacemcem (Spondias pinnata (L.f.) Kurz), Asam(Tamarindus indica L) yang telah dimasak, Kunir (Curcuma longa) yang kemerahan, Bawang merah (Allium ascalonicum), Ketumbar (Coriandrum sativum), Garam (Natrium klorida)`,
        "Cara pengolahan": `Dimasak hingga matang`,
        "Cara penggunaan": `Dioleskan pada perut`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 4,
        Kegunaan: `Obat mata merah`,
        Bahan: `Sampar watu dibakar(Sindora sumatrana Miq), Anak pisang saba  (Musa acuminata × Musa balbisiana ), `,
        "Cara pengolahan": `Bakar dalam abu panas, peras`,
        "Cara penggunaan": `Gunakan untuk cuci mata`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 5,
        Kegunaan: `Obat mata berair dan terasa bengkak`,
        Bahan: `Asem yang telah dimasak (amarindus indica), Masui (Cryptocarya massoy (Oken) Kosterm), Sumanggi (Marsilea crenata Presl), Garam uku, Air cendana(Santalum album)`,
        "Cara pengolahan": `Digiling dengan air cendana`,
        "Cara penggunaan": `Tetesi matanya`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 6,
        Kegunaan: `Obat luka gatal di sela jari`,
        Bahan: `Daun delima(Punica granatum), Sejumput beras (Oryza sativa)`,
        "Cara pengolahan": `Digiling, di campur air hangat`,
        "Cara penggunaan": `Diparemkan`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 7,
        Kegunaan: `Obat dipatuk ular`,
        Bahan: `Akar paspasan ( Coccinia cordifolia Gogn ) , Adas (Foeniculum vulgare), Air cucian beras`,
        "Cara pengolahan": `Adas dan akar paspasan di giling lalu di campur air cucian beras`,
        "Cara penggunaan": `Disemirkan pada lokasi gigitan`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 8,
        Kegunaan: `Obat panu`,
        Bahan: `Lengkuas (Alpinia galanga)`,
        "Cara pengolahan": `Dipotong`,
        "Cara penggunaan": `Dioles di kulit yang terjangkit`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 9,
        Kegunaan: `Obat meningkatkan imunitas, mengatasi masalah pencernaan`,
        Bahan: `Kunyit (Curcuma longa), Gula aren (Arenga saccharifera)`,
        "Cara pengolahan": `Diparut, dicampur ke air, saring `,
        "Cara penggunaan": `Minum airnya`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 10,
        Kegunaan: `Sakit dan kaku dibahu`,
        Bahan: `Temutis(Curcuma purpurascens Bl. syn. C. soloensis Val.) , Buah sirih (Piper betle) , Ginten hitam(Nigella sativa Linn)`,
        "Cara pengolahan": `Parem`,
        "Cara penggunaan": `Dipakai parem`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 11,
        Kegunaan: `Obat antibakteri`,
        Bahan: `Melati putih (Jasminum sambac)`,
        "Cara pengolahan": `Rendam di air hangat`,
        "Cara penggunaan": `Kompres dengan air tersebut`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 12,
        Kegunaan: `Obat Meredakan flu`,
        Bahan: `Beras, Kencur (kaempferia galanga), Gula aren (Arenga saccharifera)`,
        "Cara pengolahan": `Ditumbuk, rebus, dan disaring`,
        "Cara penggunaan": `Diminum hangat 100 ml`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 13,
        Kegunaan: `Obat meredakan nyeri sendi`,
        Bahan: `Bangle (zingiber brevifolium), Jahe (Zingiber officinale), Air`,
        "Cara pengolahan": `Eebus ramuan hingga harum, disaring`,
        "Cara penggunaan": `Diminum pag dan sore hari`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 14,
        Kegunaan: `Obat boreh anget`,
        Bahan: `Jahe (Zingiber officinale), Kayu manis (Cinnamomum verum), Cengkeh (Syzygium aromaticum), dan Pala (Mysristica fragrans)`,
        "Cara pengolahan": `Tumbuk halus, bakar, hangatkan sambil oleskan`,
        "Cara penggunaan": `Oleskan di dada/punggung`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 15,
        Kegunaan: `Obat tolak angin`,
        Bahan: `Jahe(Zingiber officinale) , Mint  (Mentha piperita L.), Jintan (Cuminum cyminum), Adas manis (Pimpinella anisum), Cengkeh (Syzygium aromaticum), Madu`,
        "Cara pengolahan": `Tumbuk halus, larutkan ke air hangat`,
        "Cara penggunaan": `Diminum saat masuk angin`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 16,
        Kegunaan: `Obat liver tonic`,
        Bahan: `Temulawak (curcuma xanthorrhiza), Air, Madu`,
        "Cara pengolahan": `Rebus, saring, tambahkan madu`,
        "Cara penggunaan": `Diminum 50-100 ml 2x sehari`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 17,
        Kegunaan: `Obat mengurangi nyeri haid`,
        Bahan: `Kunyit (Curcuma longa), Asam jawa (tamarindus indica L), Gula merah, Air`,
        "Cara pengolahan": `Direbus`,
        "Cara penggunaan": `1x sehari sebanyak 150-200 ml`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 18,
        Kegunaan: `Obat kepala terasi sakit, disertai kelluar air dari hidungnya `,
        Bahan: `Temutis (Curcuma purpurascens Bl. syn. C. soloensis Val.), garam, minyak kelapa (Cocos nucifera L.)`,
        "Cara pengolahan": `diremas-remas`,
        "Cara penggunaan": `Air remasannya ditetesi di hidung`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 19,
        Kegunaan: `Obat mencret`,
        Bahan: `Pucuk muda pandan (Pandanus amaryllifolius) , gula aren (Arenga saccharifera), kemiri (Aleurites moluccana)`,
        "Cara pengolahan": `Digerus`,
        "Cara penggunaan": `Airnya diminum`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 20,
        Kegunaan: `Obat tertindih barang berat hingga memar`,
        Bahan: `Beras, Kencur (kaempferia galanga), Gula aren (Arenga saccharifera)`,
        "Cara pengolahan": `Dikunyah`,
        "Cara penggunaan": `Disembur pada memar`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 21,
        Kegunaan: `Tidak bisa buang air besar dan kencing`,
        Bahan: `Kulit batang kemiri (Aleurites moluccana), air cuka`,
        "Cara pengolahan": `Diolah untuk obat luar`,
        "Cara penggunaan": `Semirkan atau dilumaskan pada perut luar`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 22,
        Kegunaan: `Dada sakit ditusuk-tusuk tembus ke punggung, serta batuk-batuk`,
        Bahan: `Temutis(Curcuma purpurascens Bl. syn. C. soloensis Val.), Pulasari (Alyxia oliviformis), Adas (Foeniculum vulgare) dan Kemiri(Aleurites moluccana)`,
        "Cara pengolahan": `Diolah untuk disembur`,
        "Cara penggunaan": `Disembur `,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 23,
        Kegunaan: `Sukar buang air besar, hingga perut terasa sakit tertusuk-tusuk`,
        Bahan: `Liligundi ( Vitex trifolia L.) 3 pucuk, Kapur Bubuk`,
        "Cara pengolahan": `Diolah untuk parem`,
        "Cara penggunaan": `Diparemkan`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 24,
        Kegunaan: `Obat batuk tetapi riaknya sukar keluar`,
        Bahan: `Lengkuas (Alpinia galanga), Bangle (Zingiber montanum), Garam`,
        "Cara pengolahan": `Diolah untuk parem`,
        "Cara penggunaan": `Diparemkan pada tenggorokan sampai ke dada`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    },
    {
        No: 25,
        Kegunaan: `Obat ulat berbisa `,
        Bahan: `Daun cempedak yang belum berbunga(Artocarpus integer (Thunb.) Merr ), bawang merah(Allium ascalonicum), adas (Foeniculum vulgare)`,
        "Cara pengolahan": `Dihancurkan `,
        "Cara penggunaan": `Sembur`,
        Sumber: `Usada - Bali`,
        Gambar: ``,
        "Referensi gambar": `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
    }
];
    
    // Elemen DOM
    const elements = {
        homeSection: document.getElementById('home-section'),
        gallerySection: document.getElementById('gallery-section'),
        detailSection: document.getElementById('detail-section'),
        btnHome: document.getElementById('btn-home'),
        btnGallery: document.getElementById('btn-gallery'),
        btnGoToGallery: document.getElementById('btn-go-to-gallery'),
        usadaGallery: document.getElementById('usada-gallery'),
        searchBar: document.getElementById('search-bar')
    };

    // --- FUNGSI-FUNGSI ---

    function showSection(sectionId) {
        // Sembunyikan semua section dulu
        elements.homeSection.classList.remove('active');
        elements.gallerySection.classList.remove('active');
        elements.detailSection.classList.remove('active');

        const activeSection = document.getElementById(`${sectionId}-section`);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        // Update tombol navigasi
        elements.btnHome.classList.toggle('nav-active', sectionId === 'home');
        elements.btnGallery.classList.toggle('nav-active', sectionId === 'gallery');
    }

    function renderGallery(filter = '') {
        elements.usadaGallery.innerHTML = '';
        const searchTerm = filter.toLowerCase();

        const filteredData = usadaData.filter(usada => 
            usada.nama_usada.toLowerCase().includes(searchTerm) ||
            usada.deskripsi.toLowerCase().includes(searchTerm) ||
            usada.tanaman_herbal.toLowerCase().includes(searchTerm)
        );

        if (filteredData.length === 0) {
            elements.usadaGallery.innerHTML = '<p>Data tidak ditemukan.</p>';
            return;
        }

        filteredData.forEach(usada => {
            const card = document.createElement('div');
            card.className = 'usada-card';
            card.dataset.id = usada.id;
            card.innerHTML = `
                <h3>${usada.nama_usada}</h3>
                <p>${usada.deskripsi}</p>
            `;
            card.addEventListener('click', () => showDetail(usada.id));
            elements.usadaGallery.appendChild(card);
        });
    }

    function showDetail(id) {
        const usada = usadaData.find(u => u.id === id);
        if (!usada) return;

        elements.detailSection.innerHTML = `
            <div class="usada-detail">
                <button class="back-button">&larr; Kembali ke Daftar Usada</button>
                <h2>${usada.nama_usada}</h2>
                
                <h3>Deskripsi</h3>
                <p>${usada.deskripsi}</p>
                
                <h3>Tanaman Herbal</h3>
                <p>${usada.tanaman_herbal}</p>
                
                <h3>Cara Pengolahan</h3>
                <p>${usada.cara_pengolahan}</p>
                
                <h3>Aturan Pemakaian</h3>
                <p>${usada.aturan_pemakaian}</p>
                
                <h3>Pantangan</h3>
                <p>${usada.pantangan}</p>
                
                <h3>Referensi</h3>
                <p><i>${usada.referensi}</i></p>
            </div>
        `;

        elements.detailSection.querySelector('.back-button').addEventListener('click', () => {
            showSection('gallery');
        });

        showSection('detail');
    }

    // --- EVENT LISTENERS ---
    elements.btnHome.addEventListener('click', () => showSection('home'));
    elements.btnGallery.addEventListener('click', () => showSection('gallery'));
    elements.btnGoToGallery.addEventListener('click', () => showSection('gallery'));
    
    elements.searchBar.addEventListener('keyup', (e) => {
        renderGallery(e.target.value);
    });

    // Inisialisasi Aplikasi
    renderGallery(); // Render galeri pertama kali
    showSection('home'); // Tampilkan halaman home saat pertama dibuka
});
document.addEventListener('DOMContentLoaded', () => {
    // DATA UTAMA APLIKASI
    // Data ini diambil dari file dataset_usada_bali.csv Anda
    const usadaData = [
        {
            id: 1,
            nama_usada: `Obat bayi cacingan`,
            deskripsi: `Obat bayi cacingan`,
            tanaman_herbal: `Bunga mengkudu (Morinda citrifolia) 8 biji, Bawang putih (Allium sativum) 8 buah, Jangu (Acorus calamus Linn) 8 iris`,
            cara_pengolahan: `Direndang (dinyahnyah), campur, giling halus, dibulatkan jadi 7 butir, jemur hingga kering`,
            aturan_pemakaian: `Diminum 1 biji setiap 3 hari`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 2,
            nama_usada: `Obat badan sakit berdenyut, menusuk, lumpuh`,
            deskripsi: `Obat badan sakit berdenyut, menusuk, lumpuh`,
            tanaman_herbal: `Tangkai bunga cengkeh (Syzygium aromaticum), Mesui(Cryptocarya massoy), Garam uku (garam tradsional bali)`,
            cara_pengolahan: `Digiling, disaring`,
            aturan_pemakaian: `Minum `,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 3,
            nama_usada: `Obat ambeien`,
            deskripsi: `Obat ambeien`,
            tanaman_herbal: `Gaganan kacemcem (Spondias pinnata (L.f.) Kurz), Asam(Tamarindus indica L) yang telah dimasak, Kunir (Curcuma longa) yang kemerahan, Bawang merah (Allium ascalonicum), Ketumbar (Coriandrum sativum), Garam (Natrium klorida)`,
            cara_pengolahan: `Dimasak hingga matang`,
            aturan_pemakaian: `Dioleskan pada perut`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 4,
            nama_usada: `Obat mata merah`,
            deskripsi: `Obat mata merah`,
            tanaman_herbal: `Sampar watu dibakar(Sindora sumatrana Miq), Anak pisang saba  (Musa acuminata × Musa balbisiana ), `,
            cara_pengolahan: `Bakar dalam abu panas, peras`,
            aturan_pemakaian: `Gunakan untuk cuci mata`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 5,
            nama_usada: `Obat mata berair dan terasa bengkak`,
            deskripsi: `Obat mata berair dan terasa bengkak`,
            tanaman_herbal: `Asem yang telah dimasak (amarindus indica), Masui (Cryptocarya massoy (Oken) Kosterm), Sumanggi (Marsilea crenata Presl), Garam uku, Air cendana(Santalum album)`,
            cara_pengolahan: `Digiling dengan air cendana`,
            aturan_pemakaian: `Tetesi matanya`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 6,
            nama_usada: `Obat luka gatal di sela jari`,
            deskripsi: `Obat luka gatal di sela jari`,
            tanaman_herbal: `Daun delima(Punica granatum), Sejumput beras (Oryza sativa)`,
            cara_pengolahan: `Digiling, di campur air hangat`,
            aturan_pemakaian: `Diparemkan`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 7,
            nama_usada: `Obat dipatuk ular`,
            deskripsi: `Obat dipatuk ular`,
            tanaman_herbal: `Akar paspasan ( Coccinia cordifolia Gogn ) , Adas (Foeniculum vulgare), Air cucian beras`,
            cara_pengolahan: `Adas dan akar paspasan di giling lalu di campur air cucian beras`,
            aturan_pemakaian: `Disemirkan pada lokasi gigitan`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 8,
            nama_usada: `Obat panu`,
            deskripsi: `Obat panu`,
            tanaman_herbal: `Lengkuas (Alpinia galanga)`,
            cara_pengolahan: `Dipotong`,
            aturan_pemakaian: `Dioles di kulit yang terjangkit`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 9,
            nama_usada: `Obat meningkatkan imunitas, mengatasi masalah pencernaan`,
            deskripsi: `Obat meningkatkan imunitas, mengatasi masalah pencernaan`,
            tanaman_herbal: `Kunyit (Curcuma longa), Gula aren (Arenga saccharifera)`,
            cara_pengolahan: `Diparut, dicampur ke air, saring `,
            aturan_pemakaian: `Minum airnya`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 10,
            nama_usada: `Sakit dan kaku dibahu`,
            deskripsi: `Sakit dan kaku dibahu`,
            tanaman_herbal: `Temutis(Curcuma purpurascens Bl. syn. C. soloensis Val.) , Buah sirih (Piper betle) , Ginten hitam(Nigella sativa Linn)`,
            cara_pengolahan: `Parem`,
            aturan_pemakaian: `Dipakai parem`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 11,
            nama_usada: `Obat antibakteri`,
            deskripsi: `Obat antibakteri`,
            tanaman_herbal: `Melati putih (Jasminum sambac)`,
            cara_pengolahan: `Rendam di air hangat`,
            aturan_pemakaian: `Kompres dengan air tersebut`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 12,
            nama_usada: `Obat Meredakan flu`,
            deskripsi: `Obat Meredakan flu`,
            tanaman_herbal: `Beras, Kencur (kaempferia galanga), Gula aren (Arenga saccharifera)`,
            cara_pengolahan: `Ditumbuk, rebus, dan disaring`,
            aturan_pemakaian: `Diminum hangat 100 ml`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 13,
            nama_usada: `Obat meredakan nyeri sendi`,
            deskripsi: `Obat meredakan nyeri sendi`,
            tanaman_herbal: `Bangle (zingiber brevifolium), Jahe (Zingiber officinale), Air`,
            cara_pengolahan: `Eebus ramuan hingga harum, disaring`,
            aturan_pemakaian: `Diminum pagi dan sore hari`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 14,
            nama_usada: `Obat boreh anget`,
            deskripsi: `Obat boreh anget`,
            tanaman_herbal: `Jahe (Zingiber officinale), Kayu manis (Cinnamomum verum), Cengkeh (Syzygium aromaticum), dan Pala (Mysristica fragrans)`,
            cara_pengolahan: `Tumbuk halus, bakar, hangatkan sambil oleskan`,
            aturan_pemakaian: `Oleskan di dada/punggung`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 15,
            nama_usada: `Obat tolak angin`,
            deskripsi: `Obat tolak angin`,
            tanaman_herbal: `Jahe(Zingiber officinale) , Mint  (Mentha piperita L.), Jintan (Cuminum cyminum), Adas manis (Pimpinella anisum), Cengkeh (Syzygium aromaticum), Madu`,
            cara_pengolahan: `Tumbuk halus, larutkan ke air hangat`,
            aturan_pemakaian: `Diminum saat masuk angin`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 16,
            nama_usada: `Obat liver tonic`,
            deskripsi: `Obat liver tonic`,
            tanaman_herbal: `Temulawak (curcuma xanthorrhiza), Air, Madu`,
            cara_pengolahan: `Rebus, saring, tambahkan madu`,
            aturan_pemakaian: `Diminum 50-100 ml 2x sehari`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 17,
            nama_usada: `Obat mengurangi nyeri haid`,
            deskripsi: `Obat mengurangi nyeri haid`,
            tanaman_herbal: `Kunyit (Curcuma longa), Asam jawa (tamarindus indica L), Gula merah, Air`,
            cara_pengolahan: `Direbus`,
            aturan_pemakaian: `1x sehari sebanyak 150-200 ml`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 18,
            nama_usada: `Obat kepala terasi sakit, disertai kelluar air dari hidungnya `,
            deskripsi: `Obat kepala terasi sakit, disertai kelluar air dari hidungnya `,
            tanaman_herbal: `Temutis (Curcuma purpurascens Bl. syn. C. soloensis Val.), garam, minyak kelapa (Cocos nucifera L.)`,
            cara_pengolahan: `diremas-remas`,
            aturan_pemakaian: `Air remasannya ditetesi di hidung`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 19,
            nama_usada: `Obat mencret`,
            deskripsi: `Obat mencret`,
            tanaman_herbal: `Pucuk muda pandan (Pandanus amaryllifolius) , gula aren (Arenga saccharifera), kemiri (Aleurites moluccana)`,
            cara_pengolahan: `Digerus`,
            aturan_pemakaian: `Airnya diminum`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 20,
            nama_usada: `Obat tertindih barang berat hingga memar`,
            deskripsi: `Obat tertindih barang berat hingga memar`,
            tanaman_herbal: `Beras, Kencur (kaempferia galanga), Gula aren (Arenga saccharifera)`,
            cara_pengolahan: `Dikunyah`,
            aturan_pemakaian: `Disembur pada memar`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 21,
            nama_usada: `Tidak bisa buang air besar dan kencing`,
            deskripsi: `Tidak bisa buang air besar dan kencing`,
            tanaman_herbal: `Kulit batang kemiri (Aleurites moluccana), air cuka`,
            cara_pengolahan: `Diolah untuk obat luar`,
            aturan_pemakaian: `Semirkan atau dilumaskan pada perut luar`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 22,
            nama_usada: `Dada sakit ditusuk-tusuk tembus ke punggung, serta batuk-batuk`,
            deskripsi: `Dada sakit ditusuk-tusuk tembus ke punggung, serta batuk-batuk`,
            tanaman_herbal: `Temutis(Curcuma purpurascens Bl. syn. C. soloensis Val.), Pulasari (Alyxia oliviformis), Adas (Foeniculum vulgare) dan Kemiri(Aleurites moluccana)`,
            cara_pengolahan: `Diolah untuk disembur`,
            aturan_pemakaian: `Disembur `,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 23,
            nama_usada: `Sukar buang air besar, hingga perut terasa sakit tertusuk-tusuk`,
            deskripsi: `Sukar buang air besar, hingga perut terasa sakit tertusuk-tusuk`,
            tanaman_herbal: `Liligundi ( Vitex trifolia L.) 3 pucuk, Kapur Bubuk`,
            cara_pengolahan: `Diolah untuk parem`,
            aturan_pemakaian: `Diparemkan`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 24,
            nama_usada: `Obat batuk tetapi riaknya sukar keluar`,
            deskripsi: `Obat batuk tetapi riaknya sukar keluar`,
            tanaman_herbal: `Lengkuas (Alpinia galanga), Bangle (Zingiber montanum), Garam`,
            cara_pengolahan: `Diolah untuk parem`,
            aturan_pemakaian: `Diparemkan pada tenggorokan sampai ke dada`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
        },
        {
            id: 25,
            nama_usada: `Obat ulat berbisa `,
            deskripsi: `Obat ulat berbisa `,
            tanaman_herbal: `Daun cempedak yang belum berbunga(Artocarpus integer (Thunb.) Merr ), bawang merah(Allium ascalonicum), adas (Foeniculum vulgare)`,
            cara_pengolahan: `Dihancurkan `,
            aturan_pemakaian: `Sembur`,
            pantangan: `-`,
            referensi: `Usada - Bali`,
            gambar: ``,
            referensi_gambar: `https://docs.google.com/document/d/1e4bqPcnku7AfTCbdIgqGChumywTNuvUJ/edit?usp=sharing&ouid=107390156108731673355&rtpof=true&sd=true`
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
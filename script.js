// js/script.js

document.addEventListener('DOMContentLoaded', function() {
  Papa.parse('dataset_usada_bali.csv', {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      const data = results.data;
      renderTable(data);
      renderGallery(data);
    },
    error: function(err) {
      console.error('Gagal memuat CSV:', err);
    }
  });
});

function renderTable(data) {
  const table = document.getElementById('data-table');
  if (!data.length) {
    table.tBodies[0].innerHTML = '<tr><td colspan="100%">Tidak ada data.</td></tr>';
    return;
  }

  // Header
  const headers = Object.keys(data[0]).map(h => h.trim());
  const thead = table.createTHead();
  const trHead = thead.insertRow();
  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    trHead.appendChild(th);
  });

  // Body
  const tbody = table.createTBody();
  data.forEach(row => {
    const tr = tbody.insertRow();
    headers.forEach(header => {
      const cell = tr.insertCell();
      const val = row[header] || '';

      // Jika kolom nama mengandung "gambar", tampilkan img dari folder 'images/'
      if (/gambar/i.test(header) && val) {
        const img = document.createElement('img');
        img.src = val.startsWith('http') ? val : 'images/' + val;
        img.alt = header;
        img.style.maxWidth = '100px';
        img.style.height = 'auto';
        cell.appendChild(img);

      // Jika kolom referensi gambar, buat link
      } else if (/referensi\s*gambar/i.test(header) && val) {
        const a = document.createElement('a');
        a.href = val;
        a.textContent = 'Link';
        a.target = '_blank';
        cell.appendChild(a);

      // Teks biasa
      } else {
        cell.textContent = val;
      }
    });
  });
}

function renderGallery(data) {
  const gallery = document.getElementById('gallery');
  data.forEach(row => {
    const imgFile = row['Gambar'] || row['gambar'] || '';
    const title = row['Nama'] || '';
    if (imgFile) {
      const col = document.createElement('div');
      col.className = 'col-sm-4 mb-4';

      const card = document.createElement('div');
      card.className = 'card';

      const imgPath = imgFile.startsWith('http') ? imgFile : 'images/' + imgFile;
      const img = document.createElement('img');
      img.src = imgPath;
      img.className = 'card-img-top';
      img.alt = title;

      const body = document.createElement('div');
      body.className = 'card-body';

      const cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = title;

      body.appendChild(cardTitle);
      card.appendChild(img);
      card.appendChild(body);
      col.appendChild(card);
      gallery.appendChild(col);
    }
  });
}

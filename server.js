const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Data Dummy 
let dataMahasiswa = [
    { id: 1, nim: '12345', nama: 'Budi Santoso', jurusan: 'Teknik Informatika' },
    { id: 2, nim: '67890', nama: 'Siti Aminah', jurusan: 'Sistem Informasi' }
];
let nextId = 3;

// API CRUD 

// Read
app.get('/api/mahasiswa', (req, res) => {
    res.json(dataMahasiswa);
});

app.get('/api/mahasiswa/:id', (req, res) => {
    const mhs = dataMahasiswa.find(m => m.id == req.params.id);
    res.json(mhs || {});
});

// Create
app.post('/api/mahasiswa', (req, res) => {
    const baru = { id: nextId++, ...req.body };
    dataMahasiswa.push(baru);
    res.json({ message: 'Data berhasil ditambahkan!' });
});

// Update
app.put('/api/mahasiswa/:id', (req, res) => {
    const index = dataMahasiswa.findIndex(m => m.id == req.params.id);
    if (index !== -1) {
        dataMahasiswa[index] = { id: parseInt(req.params.id), ...req.body };
        res.json({ message: 'Data berhasil diubah!' });
    }
});

// Delete
app.delete('/api/mahasiswa/:id', (req, res) => {
    dataMahasiswa = dataMahasiswa.filter(m => m.id != req.params.id);
    res.json({ message: 'Data berhasil dihapus!' });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
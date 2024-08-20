// HTML elementlerini seçme
const table = document.getElementById('userTable');
const form = document.getElementById('userForm');

// Kullanıcı listesini getirme
async function getUserList() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        renderTable(data.data);
    } catch (error) {
        console.error('Kullanıcı listesi alınamadı:', error);
    }
}

// Tabloyu render etme
function renderTable(users) {
    table.innerHTML = ''; // Önce tabloyu temizle
    users.forEach(user => {
        const row = `
            <tr>
                <td><input type="text" class="form-control" id="first_name_${user.id}" value="${user.first_name}"></td>
                <td><input type="text" class="form-control" id="last_name_${user.id}" value="${user.last_name}"></td>
                <td><input type="text" class="form-control" id="email_${user.id}" value="${user.email}"></td>
                <td>
                    <button class="btn btn-warning" onclick="updateUser(${user.id})">Güncelle</button>
                    <button class="btn btn-danger" onclick="deleteUser(${user.id})">Sil</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// Yeni kullanıcı oluşturma
async function createUser(event) {
    event.preventDefault();

    const data = {
        first_name: form.first_name.value || "deger yok",
        last_name: form.last_name.value || "deger yok",
        email: form.email.value || "deger yok",
    };

    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const newUser = await response.json();
        renderTable([newUser]); // Yeni kullanıcıyı tabloya ekle
        form.reset(); // Formu sıfırla
    } catch (error) {
        console.error('Kullanıcı oluşturulamadı:', error);
    }
}

// Kullanıcı güncelleme
async function updateUser(id) {
    const data = {
        first_name: document.getElementById(`first_name_${id}`).value || "gecersiz deger",
        last_name: document.getElementById(`last_name_${id}`).value || "gecersiz deger",
        email: document.getElementById(`email_${id}`).value || "gecersiz deger",
    };

    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const updatedUser = await response.json();
        console.log('Kullanıcı güncellendi:', updatedUser);
        await getUserList(); // Listeyi yenile
    } catch (error) {
        console.error('Kullanıcı güncellenemedi:', error);
    }
}

// Kullanıcı silme
async function deleteUser(id) {
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log(`Kullanıcı ${id} silindi`);
            await getUserList(); // Listeyi yenile
        } else {
            throw new Error('Silme işlemi başarısız oldu');
        }
    } catch (error) {
        console.error('Kullanıcı silinemedi:', error);
    }
}

// Sayfa yüklendiğinde kullanıcı listesini al
document.addEventListener('DOMContentLoaded', getUserList);

// Form gönderildiğinde yeni kullanıcı oluştur
form.addEventListener('submit', createUser);

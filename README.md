# QuizFlow Quiz Uygulaması

Bu proje, Node.js, Express ve Socket.IO kullanarak geliştirilmiş bir quiz uygulamasıdır. MySQL veritabanı ile etkileşim, Handlebars şablon motoru, dosya yükleme ve oturum yönetimi gibi özellikleri içerir.

## Özellikler

- Kullanıcı kaydı, girişi ve JWT tabanlı kimlik doğrulama
- MySQL veritabanı bağlantısı (`mysql2` kullanılarak)
- RESTful API ve klasik sunucu render (SSR) Handlebars tabanlı sayfalar
- Gerçek zamanlı quiz odası yönetimi için Socket.IO desteği
- Dosya yükleme (express-fileupload)
- Oturum yönetimi (express-session)
- `.env` ile kolay yapılandırma

## Önkoşullar

- Node.js v14 veya üzeri
- npm veya yarn
- MySQL sunucusu (uzaktan veya yerel)

## Kurulum ve Çalıştırma

1. Depoyu klonlayın:
   ```bash
   git clone <repo-url>
   cd QuizFlow
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   # veya
   yarn install
   ```

3. Ortam değişkenlerini ayarlayın:
   Proje kökünde bir `.env` dosyası oluşturun ve aşağıdaki değişkenleri tanımlayın:
   ```ini
   # .env örneği
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=quizdb
   JWT_SECRET=your_jwt_secret
   SESSION_SECRET=your_session_secret
   ```

4. MySQL tablolarını oluşturun:
   - Proje kökünde `tablolarım.txt` dosyasında örnek tablo tanımları mevcuttur.
   - MySQL konsolunda veya GUI aracında bu SQL komutlarını çalıştırarak tabloları oluşturun.

5. Uygulamayı başlatın:
   - Geliştirme modu (otomatik yeniden başlatma ile):
     ```bash
     npm run dev
     ```
   - Üretim modu:
     ```bash
     node src/app.js
     ```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Proje Yapısı

```
QuizFlow/
├── db/                    # Veritabanı bağlantı ve yardımcı fonksiyonlar
│   ├── connection.js      # MySQL bağlantı ayarları
│   ├── quizUtils.js       # Quiz ile ilgili DB işlemleri
│   └── socket.js          # Socket.IO olay tanımları
├── routes/                # Express router modülleri
│   └── auth.js            # Kayıt ve giriş rotaları
├── src/                   # Uygulama ana dosyası
│   └── app.js             # Express uygulaması kurulumu
├── public/                # Statik varlıklar (CSS, JS, resimler)
│   └── css/, js/...
├── templates/             # Handlebars şablonları
│   ├── partials/          # Ortak şablon parçaları (header, footer)
│   └── views/             # Sayfa şablonları (index, quiz, vs.)
├── .env                   # Ortam değişkenleri (gitignore'da)
├── tablolarım.txt         # MySQL tablo oluşturma SQL komutları
├── package.json           # Bağımlılıklar ve npm script’leri
├── package-lock.json
└── README.md              # Proje dokümantasyonu
```

## API ve Uç Noktalar

- `GET /` → Ana sayfa
- `GET /quiz` → Quiz listesi
- `POST /auth/register` → Yeni kullanıcı kaydı
- `POST /auth/login` → Kullanıcı girişi ve JWT token üretimi
- Socket.IO odaklı gerçek zamanlı quiz odaları: `/socket.io`
- Diğer route’lar ve kullanım örnekleri kodda açıklanmıştır.

## Çalıştırma ve Test

- `npm run dev`: Uygulamayı nodemon ile izleme modunda başlatır.
- `npm test`: (Henüz test betikleri eklenmedi.)

## Katkıda Bulunma

Pull request’ler ve issue bildirimleri hoş gelir. Projeye katkıda bulunmadan önce lütfen `CONTRIBUTING.md` dosyasını okuyun.

---

**Not:** Projede `node_modules/` klasörü yer almaktadır, çalıştırmadan önce `npm install` komutunu mutlaka çalıştırın.

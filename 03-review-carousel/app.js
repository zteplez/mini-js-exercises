class Person {
    constructor(name, job, description) {
      this.name = name;
      this.description = description;
      this.job = job;
    }
  
    introduce() {
      console.log(`Informations -> ${this.name}, ${this.description} -- ${this.job}`);
    }
  }

  const people = [
    new Person("Ahmet Kaya", "Yazılım Geliştirici", "Kod yazmayı, kahve içmeyi ve açık kaynak projelerle uğraşmayı seviyorum."),
    new Person("Zeynep Güler", "Grafik Tasarımcı", "Renklerle oynamak ve hayal gücünü dijital dünyaya taşımak benim işim."),
    new Person("Mehmet Yılmaz", "Veri Analisti", "Verilerde gizli kalmış hikayeleri bulmayı seviyorum."),
    new Person("Elif Demir", "İç Mimar", "Minimalist tasarımları ve doğal ışığı seviyorum."),
    new Person("Burak Can", "Sosyal Medya Uzmanı", "Trendleri takip ederim, içerik üretirim, markaları büyütürüm."),
    new Person("Aslı Aksoy", "Psikolog", "İnsanları dinlemeyi, anlamayı ve destek olmayı hayat felsefem olarak görüyorum."),
    new Person("Kaan Tunç", "Müzisyen", "Müziği bir yaşam biçimi olarak görüyorum, sahnede olmayı seviyorum."),
    new Person("Deniz Arslan", "Fotoğrafçı", "Anı yakalamak, ışığı kontrol etmek ve duyguyu karelere aktarmak benim tutkum."),
    new Person("Selin Aydın", "Öğretmen", "Bilgiyi aktarmak, ilham vermek ve çocuklarla çalışmak hayatımın anlamı."),
    new Person("Emre Uçar", "Girişimci", "Yeni fikirler üretmek, risk almak ve çözüm bulmak benim işim.")
  ];
  
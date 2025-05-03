class Person {
    constructor(name, job, description) {
      this.name = name;
      this.description = description;
      this.job = job;
      //person should has image this.img = img;
    }
  
    introduce() {
      console.log(`Informations -> ${this.name}, ${this.description} -- ${this.job}`);
    }
  }

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const supriseButton =  document.querySelector(".suprise-btn");

  let personIndex = 0;

  const persons = [
    new Person("Ahmet Kaya", "Yazilim Geliştirici", "Kod yazmayi, kahve içmeyi ve açik kaynak projelerle uğraşmayi seviyorum."),
    new Person("Zeynep Güler", "Grafik Tasarimci", "Renklerle oynamak ve hayal gücünü dijital dünyaya taşimak benim işim."),
    new Person("Mehmet Yilmaz", "Veri Analisti", "Verilerde gizli kalmiş hikayeleri bulmayi seviyorum."),
    new Person("Elif Demir", "İç Mimar", "Minimalist tasarimlari ve doğal işiği seviyorum."),
    new Person("Burak Can", "Sosyal Medya Uzmani", "Trendleri takip ederim, içerik üretirim, markalari büyütürüm."),
    new Person("Asli Aksoy", "Psikolog", "İnsanlari dinlemeyi, anlamayi ve destek olmayi hayat felsefem olarak görüyorum."),
    new Person("Kaan Tunç", "Müzisyen", "Müziği bir yaşam biçimi olarak görüyorum, sahnede olmayi seviyorum."),
    new Person("Deniz Arslan", "Fotoğrafçi", "Ani yakalamak, işiği kontrol etmek ve duyguyu karelere aktarmak benim tutkum."),
    new Person("Selin Aydin", "Öğretmen", "Bilgiyi aktarmak, ilham vermek ve çocuklarla çalişmak hayatimin anlami."),
    new Person("Emre Uçar", "Girişimci", "Yeni fikirler üretmek, risk almak ve çözüm bulmak benim işim.")
  ];


  nextBtn.addEventListener("click", () => {
    personIndex = (personIndex + 1)  % persons.length
    console.log(persons[personIndex]);
    updateModal();
  });
  prevBtn.addEventListener("click", () => {
    personIndex--;
    if(personIndex < 0) personIndex = persons.length - 1 ;
    console.log(persons[personIndex]);    
    updateModal();
  });

  supriseButton.addEventListener("click", () => {
    personIndex = Math.floor(Math.random() * persons.length);
    updateModal();
  });

  function updateModal(){
    //const personImg = document.querySelector(".person-img img");
    const personName = document.querySelector(".person-name");
    const personJob = document.querySelector(".person-job");
    const personDescription = document.querySelector(".person-description");

    let currentPerson = persons[personIndex];
    // personImg.src = currentPerson.img;
    personName.innerText = currentPerson.name;
    personJob.innerText = currentPerson.job;
    personDescription.innerText = currentPerson.description;
  }

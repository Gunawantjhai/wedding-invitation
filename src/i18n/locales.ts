import type {
  BankAccount,
  GalleryImage,
  LoveStoryMilestone,
  PersonProfile,
  WeddingEvent,
} from "@/types";

export const LOCALES = ["en", "id", "ch"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "id";

export type WeddingContent = {
  locale: Locale;
  couple: {
    groomFirstName: string;
    brideFirstName: string;
    hashtag: string;
    weddingDateISO: string;
    weddingDateDisplay: string;
    quote: string;
  };
  groom: PersonProfile;
  bride: PersonProfile;
  loveStory: LoveStoryMilestone[];
  events: WeddingEvent[];
  gallery: GalleryImage[];
  bankAccounts: BankAccount[];
  copy: {
    cover: {
      intro: string;
      openButton: string;
      soundHint: string;
      guestLabel: string;
      guestPrefix: string;
    };
    hero: {
      alt: string;
      opening: string;
    };
    countdown: {
      eyebrow: string;
      title: string;
      subtitleActive: string;
      subtitleComplete: string;
      labels: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
      };
    };
    coupleProfile: {
      eyebrow: string;
      title: string;
      subtitle: string;
      groomRole: string;
      brideRole: string;
      groomLabelCn: string;
      brideLabelCn: string;
    };
    loveStory: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    events: {
      eyebrow: string;
      title: string;
      subtitle: string;
      mapsButton: string;
    };
    gallery: {
      eyebrow: string;
      title: string;
      subtitle: string;
      openPreviewPrefix: string;
      closeLabel: string;
      prevLabel: string;
      nextLabel: string;
    };
    gift: {
      eyebrow: string;
      title: string;
      subtitle: string;
      scanLabel: string;
      qrAlt: string;
    };
    wishes: {
      eyebrow: string;
      title: string;
      subtitle: string;
      emptyState: string;
    };
    rsvp: {
      eyebrow: string;
      title: string;
      subtitle: string;
      successTitle: string;
      successSubtitle: string;
      submitAnother: string;
      nameLabel: string;
      namePlaceholder: string;
      attendanceLabel: string;
      attendingOption: string;
      declineOption: string;
      guestCountLabel: string;
      personSingular: string;
      personPlural: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
      sendingLabel: string;
      errorFallback: string;
    };
    footer: {
      thankYou: string;
    };
  };
};

const content: Record<Locale, WeddingContent> = {
  en: {
    locale: "en",
    couple: {
      groomFirstName: "Gunawan",
      brideFirstName: "Vyronika",
      hashtag: "#GunawanVyro2027",
      weddingDateISO: "2027-01-24T10:00:00+07:00",
      weddingDateDisplay: "January 24, 2027",
      quote:
        "Two hearts, one bond, a thousand prayers — from a simple meeting, love grew and brought us to this joyful day.",
    },
    groom: {
      fullName: "Gunawan",
      nickname: "Gunawan",
      childOrder: "The youngest son of",
      parents: {
        father: "Mr. Cua Hok Seng (Alm)",
        mother: "Mrs. Ng A Hiok (Alm)",
      },
      photo: "/images/groom.jpg",
      instagram: "@gunawan.w",
    },
    bride: {
      fullName: "Vyronika",
      nickname: "Vyro",
      childOrder: "The youngest daughter of",
      parents: {
        father: "Mr. Ng Se Leng",
        mother: "Mrs. Tan A Pin",
      },
      photo: "/images/bride.jpg",
      instagram: "@vyro.a",
    },
    loveStory: [
      {
        year: "2019",
        title: "First Meet",
        description:
          "We met through college friends at a family gathering in Pematangsiantar — a short conversation that felt unforgettable.",
        icon: "sparkles",
      },
      {
        year: "2023",
        title: "Started Relationship",
        description:
          "After years of keeping in touch, we chose to take the next step and build a serious relationship together.",
        icon: "heart",
      },
      {
        year: "2026",
        title: "Engagement",
        description:
          "The Hokkien engagement ceremony was filled with emotion, witnessed by our extended families as the blessing for the journey ahead.",
        icon: "ring",
      },
      {
        year: "2027",
        title: "Wedding Day",
        description:
          "The day we have long awaited — a sacred promise before God, family, and loved ones.",
        icon: "calendar",
      },
    ],
    events: [
      {
        id: "matrimony",
        name: "Holy Matrimony",
        subtitle: "Wedding Blessing",
        date: "2027-01-24T09:00:00+07:00",
        displayDate: "Sunday, January 24, 2027",
        time: "11:00 AM – 1:00 PM",
        venueName: "The Zuri Pekanbaru by ZHM",
        venueAddress: "Kompleks Transmart, Jl. Soekarno-Hatta, Pekanbaru - Riau",
        mapsUrl: "https://maps.app.goo.gl/hY1rGaRh65wPVKZR7",
      },
      {
        id: "reception",
        name: "Wedding Reception",
        subtitle: "Wedding Reception",
        date: "2027-01-24T09:00:00+07:00",
        displayDate: "Sunday, January 24, 2027",
        time: "07:00 PM – 10:00 PM",
        venueName: "Grand Ballroom - The Zuri Pekanbaru by ZHM",
        venueAddress: "Kompleks Transmart, Jl. Soekarno-Hatta, Pekanbaru - Riau",
        mapsUrl: "https://maps.app.goo.gl/hY1rGaRh65wPVKZR7",
      },
    ],
    gallery: [
      { id: "g1", src: "/images/gallery/1.jpg", width: 4, height: 5, alt: "Gunawan & Vyro pre-wedding photo 1" },
      { id: "g2", src: "/images/gallery/2.jpg", width: 4, height: 3, alt: "Gunawan & Vyro pre-wedding photo 2" },
      { id: "g3", src: "/images/gallery/3.jpg", width: 3, height: 4, alt: "Gunawan & Vyro pre-wedding photo 3" },
      { id: "g4", src: "/images/gallery/4.jpg", width: 4, height: 5, alt: "Gunawan & Vyro pre-wedding photo 4" },
      { id: "g5", src: "/images/gallery/5.jpg", width: 4, height: 4, alt: "Gunawan & Vyro pre-wedding photo 5" },
      { id: "g6", src: "/images/gallery/6.jpg", width: 3, height: 4, alt: "Gunawan & Vyro pre-wedding photo 6" },
      { id: "g7", src: "/images/gallery/7.jpg", width: 4, height: 3, alt: "Gunawan & Vyro pre-wedding photo 7" },
      { id: "g8", src: "/images/gallery/8.jpg", width: 4, height: 5, alt: "Gunawan & Vyro pre-wedding photo 8" },
    ],
    bankAccounts: [
      {
        bankName: "Bank Central Asia (BCA)",
        accountNumber: "1234567890",
        accountHolder: "Gunawan Wijaya",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "0987654321",
        accountHolder: "Vyro Anggraini",
      },
    ],
    copy: {
      cover: {
        intro: "The Wedding Of",
        openButton: "Open Invitation",
        soundHint: "Best viewed with sound on",
        guestLabel: "To Mr/Mrs/Family",
        guestPrefix: "Dear",
      },
      hero: {
        alt: "Gunawan and Vyronika",
        opening: "The bond of love",
      },
      countdown: {
        eyebrow: "Save The Date",
        title: "Counting Down To Forever",
        subtitleActive: "We can't wait to celebrate this moment with you.",
        subtitleComplete: "Today is the day — thank you for being part of our story.",
        labels: {
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds",
        },
      },
      coupleProfile: {
        eyebrow: "With Great Joy",
        title: "The Groom & Bride",
        subtitle: "With gratitude, we invite you to witness and bless our wedding.",
        groomRole: "Groom",
        brideRole: "Bride",
        groomLabelCn: "新郎",
        brideLabelCn: "新娘",
      },
      loveStory: {
        eyebrow: "Our Journey",
        title: "A Love Story",
        subtitle: "Every meeting is destiny, every step is a choice to keep walking together.",
      },
      events: {
        eyebrow: "Please Join Us",
        title: "Wedding Events",
        subtitle: "Your presence and prayers mean the world to us.",
        mapsButton: "Open Maps",
      },
      gallery: {
        eyebrow: "Our Moments",
        title: "Gallery",
        subtitle: "A glimpse of our love story, captured in frames.",
        openPreviewPrefix: "Open photo",
        closeLabel: "Close preview",
        prevLabel: "Previous photo",
        nextLabel: "Next photo",
      },
      gift: {
        eyebrow: "Wedding Gift",
        title: "Send Your Blessing",
        subtitle: "Your presence is the greatest gift. If you wish to give a token of love, we have prepared these options.",
        scanLabel: "Or Scan QR Code",
        qrAlt: "QR code for wedding gift transfer",
      },
      wishes: {
        eyebrow: "From Our Loved Ones",
        title: "Guest Wishes",
        subtitle: "Prayers and kind words from family and dear friends.",
        emptyState: "Be the first to leave a message for the couple.",
      },
      rsvp: {
        eyebrow: "Kindly Confirm",
        title: "RSVP",
        subtitle: "Please confirm your attendance before January 17, 2027 so we can prepare well.",
        successTitle: "Thank You!",
        successSubtitle: "Your response has been recorded. We truly appreciate you taking the time to confirm.",
        submitAnother: "Submit another response",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your full name",
        attendanceLabel: "Will you attend?",
        attendingOption: "Joyfully Attending",
        declineOption: "Regretfully Decline",
        guestCountLabel: "Number of Guests",
        personSingular: "Person",
        personPlural: "People",
        messageLabel: "Message For The Couple",
        messagePlaceholder: "Send your blessings and best wishes...",
        submitLabel: "Submit RSVP",
        sendingLabel: "Sending...",
        errorFallback: "Something went wrong. Please try again.",
      },
      footer: {
        thankYou: "Thank you for celebrating our special day with us.",
      },
    },
  },
  id: {
    locale: "id",
    couple: {
      groomFirstName: "Gunawan",
      brideFirstName: "Vyronika",
      hashtag: "#GunawanVyro2027",
      weddingDateISO: "2027-01-24T10:00:00+07:00",
      weddingDateDisplay: "24 Januari 2027",
      quote:
        "Dua hati, satu ikatan, seribu doa — dari pertemuan sederhana, tumbuh cinta yang membawa kami ke hari bahagia ini.",
    },
    groom: {
      fullName: "Gunawan",
      nickname: "Gunawan",
      childOrder: "Putra bungsu dari",
      parents: {
        father: "Bapak Cua Hok Seng (Alm)",
        mother: "Ibu Ng A Hiok (Alm)",
      },
      photo: "/images/groom.jpg",
      instagram: "@gunawan.w",
    },
    bride: {
      fullName: "Vyronika",
      nickname: "Vyro",
      childOrder: "Putri bungsu dari",
      parents: {
        father: "Bapak Ng Se Leng",
        mother: "Ibu Tan A Pin",
      },
      photo: "/images/bride.jpg",
      instagram: "@vyro.a",
    },
    loveStory: [
      {
        year: "2019",
        title: "First Meet",
        description:
          "Dipertemukan lewat teman kuliah di sebuah acara keluarga besar di Pematangsiantar — percakapan singkat yang berkesan lama.",
        icon: "sparkles",
      },
      {
        year: "2023",
        title: "Started Relationship",
        description:
          "Setelah bertahun-tahun menjaga komunikasi, keduanya memutuskan untuk melangkah bersama dalam sebuah hubungan yang serius.",
        icon: "heart",
      },
      {
        year: "2026",
        title: "Engagement",
        description:
          "Lamaran adat Hokkien digelar penuh haru, disaksikan keluarga besar dari kedua belah pihak sebagai restu awal perjalanan.",
        icon: "ring",
      },
      {
        year: "2027",
        title: "Wedding Day",
        description:
          "Hari yang telah lama dinantikan — janji suci di hadapan Tuhan, keluarga, dan sahabat tercinta.",
        icon: "calendar",
      },
    ],
    events: [
      {
        id: "matrimony",
        name: "Holy Matrimony",
        subtitle: "Pemberkatan Pernikahan",
        date: "2027-01-24T09:00:00+07:00",
        displayDate: "Minggu, 24 Januari 2027",
        time: "11:00 – 13:00 WIB",
        venueName: "The Zuri Pekanbaru by ZHM",
        venueAddress: "Kompleks Transmart, Jl. Soekarno-Hatta, Pekanbaru - Riau",
        mapsUrl: "https://maps.app.goo.gl/hY1rGaRh65wPVKZR7",
      },
      {
        id: "reception",
        name: "Wedding Reception",
        subtitle: "Resepsi Pernikahan",
        date: "2027-01-24T09:00:00+07:00",
        displayDate: "Minggu, 24 Januari 2027",
        time: "19:00 – 22:00 WIB",
        venueName: "Grand Ballroom - The Zuri Pekanbaru by ZHM",
        venueAddress: "Kompleks Transmart, Jl. Soekarno-Hatta, Pekanbaru - Riau",
        mapsUrl: "https://maps.app.goo.gl/hY1rGaRh65wPVKZR7",
      },
    ],
    gallery: [
      { id: "g1", src: "/images/gallery/1.jpg", width: 4, height: 5, alt: "Foto pra-pernikahan Gunawan & Vyro 1" },
      { id: "g2", src: "/images/gallery/2.jpg", width: 4, height: 3, alt: "Foto pra-pernikahan Gunawan & Vyro 2" },
      { id: "g3", src: "/images/gallery/3.jpg", width: 3, height: 4, alt: "Foto pra-pernikahan Gunawan & Vyro 3" },
      { id: "g4", src: "/images/gallery/4.jpg", width: 4, height: 5, alt: "Foto pra-pernikahan Gunawan & Vyro 4" },
      { id: "g5", src: "/images/gallery/5.jpg", width: 4, height: 4, alt: "Foto pra-pernikahan Gunawan & Vyro 5" },
      { id: "g6", src: "/images/gallery/6.jpg", width: 3, height: 4, alt: "Foto pra-pernikahan Gunawan & Vyro 6" },
      { id: "g7", src: "/images/gallery/7.jpg", width: 4, height: 3, alt: "Foto pra-pernikahan Gunawan & Vyro 7" },
      { id: "g8", src: "/images/gallery/8.jpg", width: 4, height: 5, alt: "Foto pra-pernikahan Gunawan & Vyro 8" },
    ],
    bankAccounts: [
      {
        bankName: "Bank Central Asia (BCA)",
        accountNumber: "1234567890",
        accountHolder: "Gunawan Wijaya",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "0987654321",
        accountHolder: "Vyro Anggraini",
      },
    ],
    copy: {
      cover: {
        intro: "Pernikahan",
        openButton: "Buka Undangan",
        soundHint: "Lihat dengan suara aktif",
        guestLabel: "Kepada Yth. Bapak/Ibu/Saudara/i",
        guestPrefix: "Kepada",
      },
      hero: {
        alt: "Gunawan dan Vyronika",
        opening: "Ikatan cinta",
      },
      countdown: {
        eyebrow: "Simpan Tanggal",
        title: "Menghitung Hari Menuju Satu Janji",
        subtitleActive: "Kami tidak sabar merayakan momen ini bersama Anda.",
        subtitleComplete: "Hari ini tiba — terima kasih telah menjadi bagian dari kisah kami.",
        labels: {
          days: "Hari",
          hours: "Jam",
          minutes: "Menit",
          seconds: "Detik",
        },
      },
      coupleProfile: {
        eyebrow: "Dengan Bahagia",
        title: "Pengantin Pria & Wanita",
        subtitle: "Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir merestui pernikahan kami.",
        groomRole: "Pengantin Pria",
        brideRole: "Pengantin Wanita",
        groomLabelCn: "新郎",
        brideLabelCn: "新娘",
      },
      loveStory: {
        eyebrow: "Perjalanan Kami",
        title: "Kisah Cinta",
        subtitle: "Setiap pertemuan adalah takdir, setiap langkah adalah pilihan untuk terus bersama.",
      },
      events: {
        eyebrow: "Silakan Hadir",
        title: "Acara Pernikahan",
        subtitle: "Kehadiran serta doa restu Anda adalah kebahagiaan tersendiri bagi kami.",
        mapsButton: "Buka Peta",
      },
      gallery: {
        eyebrow: "Kenangan Kami",
        title: "Galeri",
        subtitle: "Sekilas perjalanan cinta kami yang terabadikan dalam frame.",
        openPreviewPrefix: "Buka foto",
        closeLabel: "Tutup pratinjau",
        prevLabel: "Foto sebelumnya",
        nextLabel: "Foto berikutnya",
      },
      gift: {
        eyebrow: "Hadiah Pernikahan",
        title: "Kirim Doa Restu",
        subtitle: "Kehadiran Anda adalah hadiah terbesar bagi kami. Jika ingin memberikan tanda kasih, kami menyiapkan opsi berikut.",
        scanLabel: "Atau Pindai Kode QR",
        qrAlt: "Kode QR transfer hadiah pernikahan",
      },
      wishes: {
        eyebrow: "Dari Orang-Orang Tercinta",
        title: "Doa & Ucapan",
        subtitle: "Doa dan ucapan dari keluarga serta sahabat tercinta.",
        emptyState: "Jadilah orang pertama yang meninggalkan pesan untuk pasangan ini.",
      },
      rsvp: {
        eyebrow: "Mohon Konfirmasi",
        title: "RSVP",
        subtitle: "Mohon konfirmasi kehadiran Anda sebelum 17 Januari 2027 untuk membantu kami mempersiapkan acara dengan baik.",
        successTitle: "Terima Kasih!",
        successSubtitle: "Respons Anda telah tercatat. Kami sangat menghargai waktu Anda untuk mengonfirmasi.",
        submitAnother: "Kirim respons lain",
        nameLabel: "Nama Anda",
        namePlaceholder: "Masukkan nama lengkap Anda",
        attendanceLabel: "Apakah Anda hadir?",
        attendingOption: "Akan Hadir",
        declineOption: "Tidak Bisa Hadir",
        guestCountLabel: "Jumlah Tamu",
        personSingular: "Orang",
        personPlural: "Orang",
        messageLabel: "Pesan Untuk Pasangan",
        messagePlaceholder: "Kirim doa dan ucapan terbaik Anda...",
        submitLabel: "Kirim RSVP",
        sendingLabel: "Mengirim...",
        errorFallback: "Terjadi kesalahan. Silakan coba lagi.",
      },
      footer: {
        thankYou: "Terima kasih telah merayakan hari istimewa kami bersama kami.",
      },
    },
  },
  ch: {
    locale: "ch",
    couple: {
      groomFirstName: "Gunawan",
      brideFirstName: "Vyronika",
      hashtag: "#GunawanVyro2027",
      weddingDateISO: "2027-01-24T10:00:00+07:00",
      weddingDateDisplay: "2027年1月24日",
      quote:
        "两颗心，一份誓约，一千份祈愿——从一次简单的相遇开始，爱慢慢长大，带我们走到这一天。",
    },
    groom: {
      fullName: "Gunawan",
      nickname: "Gunawan",
      childOrder: "家中幼子",
      parents: {
        father: "Cua Hok Seng 先生（已故）",
        mother: "Ng A Hiok 女士（已故）",
      },
      photo: "/images/groom.jpg",
      instagram: "@gunawan.w",
    },
    bride: {
      fullName: "Vyronika",
      nickname: "Vyro",
      childOrder: "家中幼女",
      parents: {
        father: "Ng Se Leng 先生",
        mother: "Tan A Pin 女士",
      },
      photo: "/images/bride.jpg",
      instagram: "@vyro.a",
    },
    loveStory: [
      {
        year: "2019",
        title: "初次相遇",
        description: "在棉兰的一个大家庭聚会上，通过大学朋友相识——一次简短的谈话，留下了长久的印象。",
        icon: "sparkles",
      },
      {
        year: "2023",
        title: "开始恋爱",
        description: "多年保持联系后，我们决定携手走向更认真的关系。",
        icon: "heart",
      },
      {
        year: "2026",
        title: "订婚",
        description: "闽南式订婚仪式充满感动，双方家族共同见证，成为未来旅程的祝福。",
        icon: "ring",
      },
      {
        year: "2027",
        title: "婚礼之日",
        description: "我们期待已久的日子——在上帝、家人与挚爱的见证下，许下神圣的誓言。",
        icon: "calendar",
      },
    ],
    events: [
      {
        id: "matrimony",
        name: "圣礼婚礼",
        subtitle: "婚礼祝福仪式",
        date: "2027-01-24T09:00:00+07:00",
        displayDate: "2027年1月24日 星期日",
        time: "上午 11:00 – 13:00",
        venueName: "The Zuri Pekanbaru by ZHM",
        venueAddress: "Kompleks Transmart, Jl. Soekarno-Hatta, Pekanbaru - Riau",
        mapsUrl: "https://maps.app.goo.gl/hY1rGaRh65wPVKZR7",
      },
      {
        id: "reception",
        name: "婚宴",
        subtitle: "婚宴欢迎仪式",
        date: "2027-01-24T09:00:00+07:00",
        displayDate: "2027年1月24日 星期日",
        time: "晚上 07:00 – 10:00",
        venueName: "Grand Ballroom - The Zuri Pekanbaru by ZHM",
        venueAddress: "Kompleks Transmart, Jl. Soekarno-Hatta, Pekanbaru - Riau",
        mapsUrl: "https://maps.app.goo.gl/hY1rGaRh65wPVKZR7",
      },
    ],
    gallery: [
      { id: "g1", src: "/images/gallery/1.jpg", width: 4, height: 5, alt: "Gunawan 与 Vyro 婚前写真 1" },
      { id: "g2", src: "/images/gallery/2.jpg", width: 4, height: 3, alt: "Gunawan 与 Vyro 婚前写真 2" },
      { id: "g3", src: "/images/gallery/3.jpg", width: 3, height: 4, alt: "Gunawan 与 Vyro 婚前写真 3" },
      { id: "g4", src: "/images/gallery/4.jpg", width: 4, height: 5, alt: "Gunawan 与 Vyro 婚前写真 4" },
      { id: "g5", src: "/images/gallery/5.jpg", width: 4, height: 4, alt: "Gunawan 与 Vyro 婚前写真 5" },
      { id: "g6", src: "/images/gallery/6.jpg", width: 3, height: 4, alt: "Gunawan 与 Vyro 婚前写真 6" },
      { id: "g7", src: "/images/gallery/7.jpg", width: 4, height: 3, alt: "Gunawan 与 Vyro 婚前写真 7" },
      { id: "g8", src: "/images/gallery/8.jpg", width: 4, height: 5, alt: "Gunawan 与 Vyro 婚前写真 8" },
    ],
    bankAccounts: [
      {
        bankName: "Bank Central Asia (BCA)",
        accountNumber: "1234567890",
        accountHolder: "Gunawan Wijaya",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "0987654321",
        accountHolder: "Vyro Anggraini",
      },
    ],
    copy: {
      cover: {
        intro: "婚礼邀请",
        openButton: "开启邀请函",
        soundHint: "建议开启声音观看",
        guestLabel: "致亲爱的来宾",
        guestPrefix: "致",
      },
      hero: {
        alt: "Gunawan 与 Vyronika",
        opening: "缘分的开始",
      },
      countdown: {
        eyebrow: "记住日期",
        title: "倒计时，迎向永恒",
        subtitleActive: "我们期待与您一起见证这一时刻。",
        subtitleComplete: "今天就是这一天——感谢您成为我们故事的一部分。",
        labels: {
          days: "天",
          hours: "小时",
          minutes: "分钟",
          seconds: "秒",
        },
      },
      coupleProfile: {
        eyebrow: "满怀喜悦",
        title: "新郎与新娘",
        subtitle: "怀着感恩之心，我们诚挚邀请您见证并祝福我们的婚礼。",
        groomRole: "新郎",
        brideRole: "新娘",
        groomLabelCn: "新郎",
        brideLabelCn: "新娘",
      },
      loveStory: {
        eyebrow: "我们的旅程",
        title: "爱情故事",
        subtitle: "每一次相遇都是缘分，每一步都是继续走下去的选择。",
      },
      events: {
        eyebrow: "诚邀莅临",
        title: "婚礼活动",
        subtitle: "您的到来与祝福，是我们莫大的荣幸。",
        mapsButton: "打开地图",
      },
      gallery: {
        eyebrow: "我们的瞬间",
        title: "相册",
        subtitle: "一段爱的故事，被镶进每一帧画面。",
        openPreviewPrefix: "打开照片",
        closeLabel: "关闭预览",
        prevLabel: "上一张",
        nextLabel: "下一张",
      },
      gift: {
        eyebrow: "婚礼礼物",
        title: "送上祝福",
        subtitle: "您的到来就是最好的礼物。如果想表达心意，我们准备了以下方式。",
        scanLabel: "或扫码支付",
        qrAlt: "婚礼转账二维码",
      },
      wishes: {
        eyebrow: "来自亲友的祝福",
        title: "祝福留言",
        subtitle: "来自家人和亲爱的朋友们的祈祷与祝福。",
        emptyState: "成为第一个给这对新人留下留言的人。",
      },
      rsvp: {
        eyebrow: "请您确认",
        title: "回复函",
        subtitle: "请您于 2027 年 1 月 17 日前确认出席，我们将为此做好准备。",
        successTitle: "谢谢您！",
        successSubtitle: "您的回复已收到。感谢您抽出时间确认出席。",
        submitAnother: "再提交一次",
        nameLabel: "您的姓名",
        namePlaceholder: "请输入您的全名",
        attendanceLabel: "您会出席吗？",
        attendingOption: "我会出席",
        declineOption: "很遗憾，无法出席",
        guestCountLabel: "来宾人数",
        personSingular: "人",
        personPlural: "人",
        messageLabel: "给新人的一句话",
        messagePlaceholder: "送上您的祝福与美好愿望...",
        submitLabel: "提交回复",
        sendingLabel: "发送中...",
        errorFallback: "出现了点问题，请稍后再试。",
      },
      footer: {
        thankYou: "感谢您与我们一同庆祝这一天。",
      },
    },
  },
};

export function normalizeLocale(locale?: string | string[] | null): Locale {
  const value = Array.isArray(locale) ? locale[0] : locale;
  if (value && LOCALES.includes(value as Locale)) {
    return value as Locale;
  }
  return DEFAULT_LOCALE;
}

export function getWeddingContent(locale?: string | string[] | null): WeddingContent {
  return content[normalizeLocale(locale)];
}

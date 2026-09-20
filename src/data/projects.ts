export interface Project {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  category: string;
  categoryList: string[];
  year: string;
  tags: string[];
  description: string;
  alt: string;
}

export const CATEGORIES = [
  'Semua',
  'Web App',
  'Tools',
  'Game',
  'Event',
  'Keuangan',
  'Portofolio',
  'Keagamaan',
] as const;

export type CategoryType = (typeof CATEGORIES)[number];

export const PROJECTS: Project[] = [
  {
    id: 'balap-ketik',
    title: 'Game Balap Ketik',
    url: 'https://balap-ketik.netlify.app/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDV-456UxCy18Iz5RgdJoxyEd45U6vQINAajbiPiz8VnNwKqaarqBa13D2gvCJJO5euyBckvtOg2TFe0Q7A4hUs4agvFhiWPlYIwualKK1zZeZd7MY1uCt0PF0Y882OJVko7ioTftD0FYOcTMl4CENkY_mbtMJLRJhuszywdi470J5a2tgjuW5CvHlkTjFT291pHTuhoRs02KsiaRkJyIuHLvkqm8KDRPm31Y4DoyZpxo2GQWWbTzPEvQ',
    category: 'Game',
    categoryList: ['Game'],
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Game adu cepat jari mengetik secara real-time. Uji kecepatan mengetik dengan bahasa Indonesia dan dilengkapi animasi balapan mobil sesuai kecepatan mengetik. Pemain mendapatkan waktu terbaik di leaderboard global.',
    alt: 'Mockup Game Balap Ketik dengan animasi mobil dan speedometer digital',
  },
  {
    id: 'hyrox17an',
    title: 'Game HYROX17AN',
    url: 'https://hyrox17an.netlify.app/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzug1XlukLDHaPrA1h9k_iEBTrdSBUVgb0f78EfdfrZ7K285_9z4BvjQhOI7hNnW1kWGbG8mHm5ta6YUTll-tu94cDQZwgC8rfbtuE5b0M2GiZiA6xcNnNDf27wl8dgwNyagPudZuygivfAyN1qKcertpx96UNM54Twjb5pktMFur05273DXdkoJ3wlneDThRIPaLoknVXpJi3x3jEU92bcFVilLfRkkp4XYqBJpLJZIUERid7UnKRVg',
    category: 'Game · Event',
    categoryList: ['Game', 'Event'],
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Game online balap karung ala 17an, di tengah balapan ada lima pos tantangan, dan pemain mendapatkan waktu terbaik di leaderboard global,',
    alt: 'Tampilan antarmuka Game HYROX17AN dengan tipografi tebal merah dan putih',
  },
  {
    id: 'ngopi-bareng-kilang-kasim',
    title: 'Landing Page Aktivasi NGOPI Bareng Kilang Kasim',
    url: 'https://ngopibarengkilangkasim.netlify.app/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUnu5wicH2VyxI3HwGFyku9iE8ga7vfAK2oyMDjJ23fh8fmwz8PW2lq-lw_4bpHcbJwhQwyyBrIRsaA3UrkjtkwDnytqBSpt1XBvDHMeHLZdOag928iQ9X2FDWh0x3SEUpBltbikkSy0X3V8hkAwgukWW_XJZfoN8g18DNfY_FRerIqTeVUBIc4FPcDhfrb0XADvES2tDvEKhAn1syGjwCYPISj195e3yqw_Xln7TrnBCB8s8u-WMYYw',
    category: 'Event',
    categoryList: ['Event'],
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Aktivasi Kilang Kasim, partisipan datang ke tempat aktivasi berlangsung, dapatkan challenge dari landing page ini, dan membagikan cerita challenge di social media.',
    alt: 'Website event Ngopi Bareng Kilang Kasim dengan ilustrasi pekerja santai ngopi',
  },
  {
    id: 'balap-karung-tj',
    title: 'Game Balap Karung 17an Bareng Tresno Joyo',
    url: 'https://balapkarungtj.netlify.app/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGVmBn1L22FCXY-U3vLRygEM_EdqtyL66t4LZQDEaMbWeSK0rWzLLvPHAry_FHJPgiOHOtuisKEfcWHokNmcm3dHIkBNpDGvTLMhgCcLc1Ua2OgpMrHcEwBBtCDxNyVd-ksUJKhNqcv6VbV-HE-L_llT2j9ktcr8kySj_sej52-IFPAaeb9LAe21xhb76HpV9hOxcaworqAApASaZXkxbGAWEqoUW2Z8iF8JnpDpeYykn35JkhBfOpGQ',
    category: 'Game · Event',
    categoryList: ['Game', 'Event'],
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Mainkan Game Balap Karung 17an Bareng Tresno Joyo. Pilih keluarga Joy, lompat menuju garis finis, ambil Vapo Balm, simpan skor, dan bagikan hasilmu!',
    alt: 'Tampilan game Balap Karung Tresno Joyo 17an Bareng Tresno Joyo',
  },
  {
    id: 'freehandtools-giveaway',
    title: 'Instagram Giveaway Manager',
    url: 'https://freehandtools-giveaway.vercel.app/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBnNauFvB3pIjf24fOUDv4ShoekV2chfRlHX32TenXKhHcrgabK4jW7ATW5MPszFikzQ5Bw3iOuZb5E7xtPO1V8aoweeQ2VtiGVtmbJjcduAqrUg9CizFpzUKFngM6rD3sI-FMDW3pyu6nsAa9qr9PEHhh0Adge4RNtzMvXQLgocJEjGqYvBdt60DaIZ9i8OetVeoHKdUKCUviCRV8Vq9QzMFG8gY2r3fBn_tq-NsvCxAd0ECFZFjMCNQ',
    category: 'Tools · Web App',
    categoryList: ['Tools', 'Web App'],
    year: '2026',
    tags: ['React', 'Vite', 'Vercel'],
    description:
      'Skrining komentar peserta aktivasi/giveaway secara otomatis, cepat, dan transparan.',
    alt: 'Dashboard Instagram Giveaway Manager dengan tema gelap dan kartu statistik',
  },
  {
    id: 'freehandtools-dashboard',
    title: 'Creator Performance Intelligence Dashboard',
    url: 'https://freehandtools-dashboard.vercel.app/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9w5Ub-RWW1zwxbG8JXCYGaIjeDcfiHPXIs5Sf_GJM47MM8aIry33V_GuAhPuTrKKDqiUij9Wgq8cFaD6KD34vss3Ro5bc3xeTpkG18RFiSADQfXEwsUZZrlTgrYIPt6RvCS-gKd76pEHYE4lgLlL_q0_9k5CW6ivqCxLSmEu0BYctsdFDEXhpTa5rC4rGitaZWL7Vcpns6qPWJu0nG77Oq1BGH7QfpevsbTDBFClTVQ9KRdjeX8dHYg',
    category: 'Web App · Tools',
    categoryList: ['Web App', 'Tools'],
    year: '2026',
    tags: ['React', 'Vite', 'Vercel'],
    description:
      'Instagram analytics dashboard — content insights, followers, and AI recommendations.',
    alt: 'Creator Intelligence Dashboard dengan ilustrasi kreator dan grafik performa ungu',
  },
  {
    id: 'wildan-portofolio',
    title: 'Portofolio Wildan',
    url: 'https://wildanbachtiar.github.io/portofolio/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCw8wnmiBss1tpFU99O-zgNpbpckSsI1-GKuFritOsmk_-_D_QreHY20XLr8MdWV1ytSxDlF7c4hwvIM2Gwncf1x3astodSmvijKZWcA9AL3rHJxYxeaEDZ_qZB4FRktzY4YdVUmHxWjXNW9NG61ugpIq_LgISKD8DrC012PAVEbsCm5TmzLHD8Fn0VThsmQI1fX5LEdEJ9MWV3ohrjswxp4hZ3U8wyxKqwaHudIUT3hgKL-w4JW-KFww',
    category: 'Portofolio',
    categoryList: ['Portofolio'],
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Kumpulan personal project saya, baik yang sudah berjalan maupun yang sedang berjalan sampai saat ini.',
    alt: 'Tampilan homepage Porto Wildan dengan ilustrasi memoji 3D ramah',
  },
  {
    id: 'hut-81-ri',
    title: 'Landing Page Kegiatan HUT ke-81 RI - RT 09 RW 03 Rowosari',
    url: 'https://hutke81ri-rt09.netlify.app/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBetyePhv5-eSkPtcPxW197zGPOTBhpT26BZjHHlXAHvYWrxTJsykOaF44IuEmA3F5d5XR_QvjaSgoYB5z9JIUi-BJtaJCSccwXJOhwNqxOQ5XblQtuwNcdBw-9Q3Ds7EnE2wysFO6y0ndFbR8Bq-qumJQeWREIn-viOsFUJo5eOiDj67ltr2V4pTxh2NPO6A3syoS1w_xHi_MZT_TJK4dNpmA2Mq2eEGVeKW7RsHf_s2tKqsZmrvDfuA',
    category: 'Event',
    categoryList: ['Event'],
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Jadwal rangkaian kegiatan Semarang HUT ke-81 RI di lingkungan RT 09 RW 03 Rowosari, Tembalang, Semarang dan laporan keuangan kegiatan.',
    alt: 'Website Semarak Kemerdekaan HUT RI RT 09 Rowosari dengan ilustrasi pawai dan bendera',
  },
  {
    id: 'keuangan-renovasi-musholla',
    title: 'Laporan Keuangan Renovasi – Musholla Raudhatul Jannah',
    url: 'https://raudhatuljannahgpt.github.io/renovasi/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBn2XgBC1Ki8UbJvL9JJVfalBjqa8lnnO4_0vP6hRfTXj1_0p8TbwXLI17Vd_kImEeXWcTYOBFLzezHXl0jwQ9lm3I_s_8n8JEjvRisoW_R_OnERnb9nB--I_HagkaWSkR7KZ66Q6YnGr5pWAjWvBlIg7K9x4xNR8ubPXG-BSuS8dvNSZJjheHuQqg03JWY1-aCqexhlNi-bbxewCjv1NV5jJrVIDuXrNKegKZFIxXuys_8lxdJevFhjg',
    category: 'Keuangan · Keagamaan',
    categoryList: ['Keuangan', 'Keagamaan'],
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Informasi laporan keuangan untuk Program Renovasi Musholla Raudhatul Jannah Perumahan GPT Rowosari, Tembalang, Semarang.',
    alt: 'Laporan Keuangan Renovasi Musholla Raudhatul Jannah dengan background hijau elegan',
  },
  {
    id: 'laporan-kas-musholla',
    title: 'Laporan Keuangan – Musholla Raudhatul Jannah',
    url: 'https://raudhatuljannahgpt.github.io/laporan-keuangan/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0D-gIhztOxNSZNlBU7ONm2z0JvMgy28PZgGckSifFc5Lesnve9tkvatjpPAc8pwz01LGStQBgLhTOg12W9bErwve2T6l-UwbD6pattkSBqGV6S68ZaeMfzo3vGDT91AV31bULC_SMfHWsnhj0yptAaXJmRmxt3bY2rOc33CERc_i_CayfUKctcn2OTE6lW_2rl-D3N2XwXY3rMXpM0dLBaz48KYLpTj3-nUpZreF26xQRqHjCJvVsRw',
    category: 'Keuangan · Keagamaan',
    categoryList: ['Keuangan', 'Keagamaan'],
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Informasi laporan keuangan Musholla Raudhatul Jannah Perumahan GPT Rowosari, Tembalang, Semarang. Buku kas digital pekanan, bulanan, dan tahunan.',
    alt: 'Aplikasi pembukuan Laporan Kas Musholla dengan kartu saldo dan grafik transaksi',
  },
  {
    id: 'jadwal-imsakiah-sholat',
    title: 'Jadwal Imsakiah - Musholla Raudhatul Jannah',
    url: 'https://raudhatuljannahgpt.github.io/imsakiah/',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgHx4GWjeuA4wHIi4WcX-Z1UpVL83aAcMoXBawXWGvn22-RJJtYRN8v_SdY76iZt_hSVMa3YxTX6m2CwwZavmJcHZx2ljmBFkusuO1BWAoxTAZCP-KVugt1owV1QO8MHWjEKi-2lDrBK1YJkbssWhEualwJEsd1QBtTatYs7eQCam3Hcroy69G751eAzb5SPOAKAfjsQnItnPXBKrTuGB4Jka0egPNBzxEQkoLtagsuueTq1RURyZ1_A',
    category: 'Keagamaan',
    categoryList: ['Keagamaan'],
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Jadwal Imsakiah untuk seluruh wilayah Indonesia. Pantau waktu imsak, terbit, duha, dan salat lima waktu setiap hari di sini.',
    alt: 'Antarmuka Jadwal Imsakiah & Sholat dengan penunjuk waktu aktif dan countdown',
  },
];

export const MEMOJI_URLS = {
  laptop:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC4Vef8zyrwUnpe-DCqpm2Vj8Xls46V20MbD20OdtQTbIoMN6-jhM74KHb4240YA5H6AeZOJFD3DSB71fQQqJfmoXJ9r7FvT_n6wvQ02-dsSnopNS4saaBCUNy09q9HjRUbZCjiXzFWMTxtWmnwMLA7h9O6lg9XfeITrt-3oPqw1JXmzCUaNH5TU-p5JMrbAek7A9Py0NLD9Yl9BoHBSc-4ubVf0AqOr30Kfib-tNDvJCcpWVA7SvQlBg',
  thumbsUp:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA3DFJMkCeeszgwQrEMZp0xPrDTD7s66PPUfcIoQV6QZMkEPADCYRSrOMOkb5BpA1AzWT2mmRGimq6AhSHcLz8YnSUVTY5YvHfz1_R63DX572xNfyc543BQ6IMlM1ym_Ly28JiJ_nSj_xw_ugWCJrzW-JYCq3TRL3ioAcFEWRu0GcJtHzU11sDn2bHFEic12egkSV4Wx_O24M_ulh59n4d6y8k0UTSbJHcAPz_Cb63DqtXv1lM8x0nxLQ',
  contact:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBjwECvKhvOcPdQ2eGXxJoBgPvUYmM5Iki3T9-RY_mqoBIRcPNjZ8DPegyA8Lezg7vR482WAIX0LCz7O83BjEA8QZMkb9CJwHgPRscGMzLWHkYgOu5KTqJjV34WaLc4LTKVBIcVKYQCRSoxJWUeST0uQCM95HqD_ExzulbWOZHdRjGhrLzCMHvRGFbXHlVAaIPpQvKpez8_iA8rjFQXls5ZRtaDT3TJeBbVsQ-N6KR8fFhna16gRrT5rw',
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/katawebe',
  threads: 'https://www.threads.com/@katawebe',
  linkedin: 'https://www.linkedin.com/in/wilddan-bachtiar',
  githubSponsors: 'https://github.com/sponsors',
  support: 'https://lynk.id/wildanbachtiar/s/3erqxoypn3w0',
  email: 'freehandtools@gmail.com',
  mailto:
    'mailto:freehandtools@gmail.com?subject=Konsultasi%20Proyek%20Website&body=Halo%20Wildan,%0A%0ASaya%20ingin%20berdiskusi%20mengenai%20kebutuhan%20pembuatan%20website.',
};

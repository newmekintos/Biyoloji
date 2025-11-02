const topics = {
  dna: {
    id: 'dna',
    title: 'DNA (Deoksiribonükleik Asit)',
    icon: 'fa-dna',
    color: 'purple',
    sections: [
      {
        type: 'info',
        title: 'DNA Nedir?',
        content: 'Bir canlının sağlıklı ve DNA taşıyan her vücut hücresindeki DNA miktarı ile DNA\'yı oluşturan nükleotidlerin farklı olması, genetik süreçte farklı dokuların oluşturacak hücrelerin DNA\'ların farklı gen bölgelerinde aktif olmasından kaynaklanır. DNA yapısını oluşturan zincirlerde deoksiriboz şekerleri ters konumlanır.'
      },
      {
        type: 'nukleotit',
        title: 'Nükleotit Yapısı',
        content: 'Çift zincirli yapıda, DNA taşıyan her vücut hücresindeki DNA miktarı ile DNA\'yı oluşturan nükleotidlerin farklı olması, genetik süreçte farklı dokuların oluşturulacak hücrelerin DNA\'larının farklı gen bölgelerinde aktif olmasından kaynaklanır.',
        components: [
          'Şeker (Deoksiriboz): 5 karbonlu şeker molekülü',
          'Fosfat grubu: Nükleotidleri birbirine bağlar, şeker-fosfat omurgası oluşturur',
          'Organik baz (Azotlu baz): Adenin, Timin, Guanin, Sitozin'
        ],
        detail: 'Bir zincirin son kısmındaki deoksiriboz molekülüne fosfat bağlanırken, diğer zincirdeki hidroksil ve fosfat grubu taşıyan uçlar ise zit yönlerde yer alır. Zincirler antiparalel özellik gösterir.'
      },
      {
        type: 'structure',
        title: 'DNA\'nın Yapısı',
        components: [
          'Deoksiriboz şeker: 5 karbonlu şeker',
          'Fosfat grubu: Zincirleri bağlar, omurga oluşturur',
          'Azotlu bazlar (Organik bazlar): Adenin (A), Timin (T), Guanin (G), Sitozin (C)',
          'Nükleotid: Şeker + Fosfat + Baz'
        ],
        features: [
          'Çift sarmal yapı (Watson ve Crick modeli)',
          'DNA molekülü, sağa dönüşlü olarak çift sarmal yapı oluşturur',
          'Merdivenin basamakları organik bazlar, yan tarafları ise şeker ve fosfat molekülleri oluşturur',
          'Antiparalel (3\'→5\' ve 5\'→3\' yönleri zıt)',
          'Hidrojen bağları ile bağlanır (A-T: 2 bağ, G-C: 3 bağ)',
          'Fosfodiester bağları ile omurga oluşur',
          'Kalıtsal bilginin aktarılmasında bazı virus türlerinde kalıtsal bilginin aktarılması RNA sağlar'
        ]
      },
      {
        type: 'formula',
        title: 'Chargaff Kuralları',
        main: 'A = T  ve  G = C',
        formulas: [
          { name: 'Hidrojen Bağı', formula: '(2×A) + (3×G)' },
          { name: 'Pürin/Pirimidin', formula: '= 1' },
          { name: 'A+G / T+C', formula: '= 1' }
        ]
      },
      {
        type: 'tips',
        items: [
          'Bir zincirin son kısmındaki deoksiriboz molekülüne fosfat bağlanırken, diğer zincirdeki hidroksil ve fosfat grubu taşıyan uçlar ise zit yönlerde yer alır.',
          'Bir DNA\'da G+C/A+T > 1 ise bu DNA\'nın sıcaklık bağı çözünme oranı DÜŞÜKTÜR. İki ipliği birbirinden ayırmak için gerekli olan ISI MİKTARI YÜKSEK olur.',
          'G+C/A+T < 1 ise ikili bağ sayısı fazladır. Bu durumda sarmalın açılma olasılığının DAHA FAZLA olduğunu gösterir. İki ipliği birbirinden ayırmak için gerekli olan ISI MİKTARI DAHA DÜŞÜK olur.',
          'Ökaryot hücrelerde replikasyon sırasında çok sayıda replikasyon orijini oluşur. DNA molekülleri çok uzun olduğu için.',
          'DNA; ökaryot hücrelerde çekirdekte, mitokondride, kloroplastta bulunur. Prokaryot canlılarda ise sitoplazmada bulunur.'
        ]
      },
      {
        type: 'location',
        title: 'DNA Nerede Bulunur?',
        okaryot: ['Çekirdek (en fazla)', 'Mitokondri', 'Kloroplast'],
        prokaryot: ['Sitoplazma', 'Halksal DNA']
      }
    ]
  },
  rna: {
    id: 'rna',
    title: 'RNA (Ribonükleik Asit)',
    icon: 'fa-file-code',
    color: 'green',
    sections: [
      {
        type: 'info',
        title: 'RNA Nedir?',
        content: 'Tek iplikli polinükleotitlerden oluşan nükleik asittir. Ökaryotlerde çekirdek, kloroplast, mitokondri, sitoplazma ve ribozomda bulunur. Prokaryotlarda sitoplazmada ve ribozomda yer alır.'
      },
      {
        type: 'rna-structure',
        title: 'RNA\'nın Yapısı ve Özellikleri',
        components: [
          'Riboz şeker (DNA\'da deoksiriboz vardı)',
          'Fosfat grubu',
          'Azotlu bazlar: Adenin (A), Urasil (U), Guanin (G), Sitozin (C)',
          'DNA\'dan farkı: Timin YOK, yerine Urasil VAR'
        ],
        features: [
          'Tek iplikli yapı (DNA çift zincirli)',
          'Yapısında riboz şekeri ve urasil bazı bulunur',
          'RNA yapısında adenin, guanin, sitozin ve urasil bazlarının birbiriyle eşleşir',
          'RNA zinciri katlanmalar yaparsa guanin ile eşleşir',
          'Adenin, urasille eşleşir',
          'Ökaryot ve prokaryot hücrelerde mesajcı RNA, taşıyıcı RNA ve ribosomal RNA olarak üç çeşit RNA görev yapar',
          'DNA\'dan daha kısa ömürlü',
          'Fosfodiester bağları ile zincir oluşturur'
        ]
      },
      {
        type: 'types',
        title: 'RNA Çeşitleri',
        items: [
          {
            name: 'mRNA (Mesajcı RNA)',
            icon: 'fa-envelope',
            color: 'blue',
            desc: 'Genetik bilgiyi DNA\'dan ribozoma taşır',
            points: [
              'DNA üzerindeki genden aldığı bilgiye göre ribozom üzerinde protein sentezi gerçekleştirilir',
              'Yani protein sentezi için gerekli genetik bilgi taşır',
              'mRNA üzerindeki bilgi sentezlenecek proteinlerin amino asit dizilimini, sayısını ve dizilimlerini belirler',
              'mRNA sentezi sırasında kullanılan DNA zinciri KALIP ZİNCİR denir',
              'Bu zincirdeki gen bölgesinde uygun olarak mRNA sentezlenir',
              'Hücredeki mRNA çeşidi sayısı sentezlenen protein çeşit sayısı ile AYNIDIR',
              'Aynı proteinin sentezi sırasında mRNA TEKRAR TEKRAR kullanılabilir',
              'Sentez bittikten sonra mRNA parçalanır'
            ]
          },
          {
            name: 'rRNA (Ribosomal RNA)',
            icon: 'fa-circle-notch',
            color: 'green',
            desc: 'Ribozomun yapı taşı',
            points: [
              'Ökaryot hücrelerin çekirdekcik kısmında sentezlenir',
              'Protein molekülleri ile birlikte ribozomun yapısına katkı sağlar',
              'Hücrede EN ÇOK ORANDA bulunan RNA çeşididir',
              'Ribozomda mRNA ve tRNA arasında etkileşim kurar',
              'Hücre en çok oranda bulunan RNA çeşididir',
              'Ribozomda mRNA ya tRNA arasında etkileşim kurar',
              'Enzim işlevi görür',
              'Enzim aktivitesi göstererek amino asitler arasında peptit bağı kurulmasında görev yapar'
            ]
          },
          {
            name: 'tRNA (Taşıyıcı RNA)',
            icon: 'fa-truck',
            color: 'purple',
            desc: 'Amino asitleri ribozoma taşır',
            points: [
              'Protein sentezi sırasında amino asitleri ribozoma taşınmasını sağlar',
              'Çekirdekcik\'te sentezlenir, ANCAK sitoplazmada kendine özgü bölgelerde nükleotitler arasında hidrojen bağı kurulur',
              'Yonca yaprağı şekli - bu katlama nükleotitler arasında hidrojen bağı ile olur',
              'Bir ucu amino asit bağlanır, diğer ucunda antikodon bulunur',
              'Protein sentezinde TEKRAR TEKRAR kullanılabilir',
              'Canlı yapısındaki 20 çeşit amino aside özgü EN AZ bir tRNA vardır',
              'Ancak aynı amino asit çeşidinin taşınmasında farklı antikodonlu tRNA molekülleri görev yapabilir',
              'Canlı yapısındaki 20 çeşit amino asit özgü en az bir tRNA vardır'
            ]
          }
        ]
      },
      {
        type: 'genler',
        title: 'Genler ve Gen Türleri',
        content: 'DNA üzerinde belirli bir özelliği (ifade eden, karakterin ortaya çıkmasını sağlayan) amino asit dizilimini oluşturacak bölüme GEN denir. Bir genin yapısında çok sayıda nükleotit bulunur.',
        types: [
          {
            name: 'Protein Genleri',
            desc: 'mRNA sentezini şifreleyen genlerdir',
            detail: 'Protein yapımı için gerekli mRNA\'ları kodlar'
          },
          {
            name: 'RNA Genleri',
            desc: 'rRNA ve tRNA moleküllerini şifreler',
            detail: 'Protein sentezinde görevli RNA türlerini kodlar'
          }
        ],
        extra: 'Genler kendini kopyalayabilir (replikasyon ile) ve bu sayede oluşan hücrelere aktarılır. Genler, protein ve RNA genleri olarak iki gruba ayrılır.'
      },
      {
        type: 'tips',
        items: [
          'DNA üzerinde belirli bir özelliği ifade eden, karakterin ortaya çıkmasını sağlayan amino asit dizilimini oluşturacak bölüme GEN denir. Bir genin yapısında çok sayıda nükleotit bulunur.',
          'Genler kendini kopyalayabilir (replikasyon) ve bu sayede oluşan hücrelere aktarılır.',
          'Genler, protein ve RNA genleri olarak İKİ GRUBA ayrılır. Protein genleri mRNA sentezini şifreler. RNA genleri ise rRNA ve tRNA moleküllerini şifreler.',
          'Sonuç olarak DNA üzerinde bulunan genlerin ürünleri; protein, mRNA, rRNA ve tRNA olarak ifade edilebilir.',
          'mRNA sentezinde kullanılan DNA zinciri KALIP ZİNCİR denir. Bu zincirdeki gen bölgesinde uygun olarak mRNA sentezlenir.'
        ]
      }
    ]
  },
  rep: {
    id: 'rep',
    title: 'Replikasyon',
    icon: 'fa-sync-alt',
    color: 'red',
    sections: [
      {
        type: 'info',
        title: 'Replikasyon Nedir?',
        content: 'DNA\'nın gerekli olduğu durumlarda kendini eşleyerek bir kopyasını oluşturmasına REPLİKASYON denir. Bu olay bölünme öncesinde interfaz evresinde gerçekleşir. Bölünme evresinde olmayan hücrelerde mitokondri ve kloroplast çoğalması sırasında bu organellerin içindeki DNA\'lar replikasyon ile çoğalabilir.'
      },
      {
        type: 'process',
        title: 'Replikasyon Süreci',
        steps: [
          {
            name: 'A. Replikasyon Orijini',
            desc: 'Replikasyon sürecini başlatan noktalardır. Replikasyon için bir başlangıç noktası belirlenmelidir. Replikasyon orijini başlangıç noktasıdır ve belirlendikten sonra DNA çift zinciri açılmaya başlar. Ökaryot ve prokaryot hücrelerde replikasyon süreci BAŞLATAN replikasyon orijininin (replikasyon başlangıç noktası) belirlenmesidir.'
          },
          {
            name: 'B. Replikasyon Çatalı',
            desc: 'Orijin noktasındaki iki zincir TERS YÖNDE ayrılma başlaması ile REPLİKASYON ÇATALI adı verilen kısım oluşur. Replikasyon orijini başlangıç noktasıdır ve belirlendikten sonra bu DNA çift zinciri açılmaya başlar. Orijin noktasındaki iki zincir ters yönde ayrılması ile replikasyon çatalı oluşur.'
          },
          {
            name: 'Çift Yönlü İlerleme',
            desc: 'Prokaryot hücrelerin halkasal DNA\'sı üzerinde bir tane orijin ve bitiş noktası bulunur. Orijin bölgesinden başlayan replikasyon ÇİFT YÖNLÜ olarak ilerler. Replikasyon ilerleyip yönü başlar.'
          }
        ]
      },
      {
        type: 'orijin-detay',
        title: 'Replikasyon Orijini Özellikleri',
        content: [
          'Ökaryot hücrelerde replikasyon sırasında ÇOK SAYIDA replikasyon orijini oluşur',
          'DNA molekülleri çok uzun olduğu için birden fazla orijin oluşturularak replikasyonun HIZLI olması sağlanır',
          'Prokaryot hücrelerde halkasal DNA\'sı üzerinde bir tane orijin bölgesi bulunur',
          'Orijin noktasından başlayan replikasyon iki yöne doğru ilerleyerek hızlı çoğalma sağlar'
        ]
      },
      {
        type: 'enzymes',
        title: 'C. Replikasyon Enzimleri',
        intro: 'Replikasyonun başlangıcında DNA\'nın sarmal yapısı bir ucundan itibaren açılmaya başlar. Bu açılma işleminde Helikaz enzimi hidrojen bağlarının koparılmasını sağlar.',
        items: [
          {
            name: 'Helikaz',
            icon: 'fa-dna',
            desc: 'Hidrojen bağlarının koparılmasını sağlar. DNA\'nın sarmal yapısını açar.',
            energy: 'ATP ENERJİSİ HARCANIR',
            detail: 'Replikasyon çatalı oluşumunda görevlidir. Bu açılma işleminde Helikaz enzimi hidrojen bağlarının koparılmasını sağlar. Bu sırada ATP enerjisi harcanır.'
          },
          {
            name: 'DNA Polimeraz',
            icon: 'fa-microscope',
            desc: 'Açılan zincirlerin karşısına, DNA polimeraz aktivitesi ile ortamda serbest bulunan nükleotidler sırasıyla gelerek bağlanır',
            detail: 'Adenin karşısına Timin (2 hidrojen bağı), Guanin karşısına Sitozin (3 hidrojen bağı) nükleotidi gelir. Adenin ve Timin nükleotidleri arasında İKİ, Guanin ile Sitozin nükleotidleri arasında ise ÜÇ hidrojen bağı kurulur.',
            extra: 'Ökaryot hücrelerdeki DNA polimeraz enziminin nükleotit eklemesi yavaş olması da, birden fazla orijin oluşturularak replikasyonun hızlı olmasını sağlamak için gereklidir. Mg, DNA polimeraz enziminin çalışmasını sağlar. DNA polimeraz replikasyon sırasında olabilecek hataları onarmaya da görev yapar. Bu sayede mutasyon oluşma ihtimali azaltılmış olur.'
          },
          {
            name: 'DNA Ligaz',
            icon: 'fa-link',
            desc: 'DNA ligaz enzimi, ara DNA parçaları (okazaki fragmentleri) arasında fosfodiester bağı kurulmasını sağlar',
            energy: 'Bu bağ kurulması sırasında ATP HARCANIR',
            detail: 'Yeni sentezlenen DNA parçalarını birbirine bağlar. Replikasyon sırasında oluşan DNA parçacıkları (okazaki fragmentleri) arasında fosfodiester bağları kurulmasını sağlar. Bu bağ kurulması sırasında ATP harcanır.'
          }
        ]
      },
      {
        type: 'rep-olay',
        title: 'Replikasyon Gerçekleşmesi',
        steps: [
          'Replikasyon orijini başlanığıç noktasıdır ve belirlenir',
          'DNA çift zinciri açılmaya başlar (Helikaz enzimi)',
          'Orijin noktasındaki iki zincir ters yönde ayrılır',
          'Replikasyon çatalı oluşur',
          'Açılan zincirlerin karşısına DNA polimeraz ile nükleotitler eklenir',
          'İki yeni DNA zinciri sentezlenir',
          'DNA ligaz parçaları birleştirir'
        ]
      },
      {
        type: 'yarı',
        title: 'A. Yarı Korunumlu Eşlenme',
        content: 'Replikasyon sonucu oluşan DNA moleküllerinin birer dizileri eski, diğer dizileri yeni nükleotitlerden meydana gelir. Bu şekildeki eşlenmeye YARI KORUNUMLU EŞLENME denir.',
        detail: 'Eski birer dizileri yeni nükleotitlerden meydana gelir. Birer dizileri eski nükleotitlerden oluşturulan DNA moleküllerine MELEZ DNA denir.',
        steps: [
          '1. Replikasyon: 1 eski DNA → 2 Melez DNA (her biri yarı eski, yarı yeni)',
          '2. Replikasyon: 2 Melez DNA → 2 Melez DNA + 2 Normal DNA (tamamen yeni)'
        ]
      },
      {
        type: 'melez-dna',
        title: 'Melez DNA',
        content: 'Yeni ortamda bir defa çoğalmaya bırakıldıktan sonra, ağır DNA (¹⁴N-¹⁴N) tam olarak yarısı ¹⁴N içeren ortamda, diğer yarısı normal (¹⁵N) DNA ortamında sentrifüjleme yapılır.',
        detail: 'Bir seferde DNA bulunun bakterilerin ¹⁴N\'lu içeren ortamda bir kez daha çoğalması sağlanır. Bu şekilde her bir normal azotlu zincir ağır azotlu diğer zincir normal azotlu olur. Bu tip DNA MELEZ DNA (¹⁴N-¹⁵N) ağır denır.',
        result: 'Bir replikasyon = %100 Melez DNA. İki replikasyon = %50 Melez DNA + %50 Normal DNA'
      },
      {
        type: 'tips',
        items: [
          'Ökaryot hücrelerde replikasyon sırasında ÇOK SAYIDA replikasyon orijini oluşur. DNA molekülleri çok uzun olduğu için birden fazla orijin oluşturularak replikasyonun hızlı olması sağlanır.',
          'Ökaryot hücrelerdeki DNA polimeraz enziminin nükleotit ekleme hızının düşük olması da, birden fazla orijin oluşturularak replikasyonun hızlı olmasını sağlamak için gereklidir.',
          'Replikasyonun gerçekleşmesi için; dört çeşit nükleotidin (A, T, G, C) yanı sıra Mg²⁺ ve DNA polimeraz, Helikaz ve DNA ligaz enzimleri gereklidir. Mg, DNA polimeraz enziminin çalışmasını sağlar.',
          'DNA polimeraz replikasyon sırasında olabilecek hataları onarmaya da katkıda görev yapar. Bu sayede mutasyon oluşma ihtimali azaltılmış olur.',
          'Prokaryot hücrelerin halkasal DNA\'sı üzerinde bir tane orijin ve bitiş noktası bulunur. Orijin bölgesinden başlayan replikasyon ÇİFT YÖNLÜ olarak ilerler.',
          'Melez DNA: ¹⁴N\'lu ortamda üretilen DNA, bir zinciri ağır DNA (%50) + diğer zinciri normal DNA (%50). Bir seferinde melez DNA bulunan bakterilerin ¹⁴N\'lu içeren ortamda bir kez daha çoğalması sağlanır.',
          'Yeni ortamda bir defa çoğalmaya bırakıldıktan sonra meydana gelen DNA\'ların tir zinciri ağır azotlu diğer zinciri normal azotlu olur. Bu tip DNA MELEZ DNA (¹⁴N-¹⁵N) denir.',
          'Bir seferinde melez DNA bulunan bakterilerin DNA\'ları santrifüjlenip zaman deney türünün hem ağır kasal hem de ait kısmı benlanışabilir miştir. Yani ikinci bölümlere sonucunda hem normal azotlu hem de melez DNA molekülleri meydana gelmiştir.'
        ]
      }
    ]
  }
};

const quizData = [
  {
    q: 'DNA\'da Timin ile eşleşen baz hangisidir?',
    opts: ['Adenin', 'Guanin', 'Sitozin', 'Urasil'],
    ans: 0,
    exp: 'Chargaff kuralına göre A=T ve G=C\'dir.'
  },
  {
    q: 'RNA\'da DNA\'dan farklı olarak hangi baz bulunur?',
    opts: ['Timin', 'Urasil', 'Adenin', 'Guanin'],
    ans: 1,
    exp: 'RNA\'da Timin yerine Urasil bulunur.'
  },
  {
    q: 'Protein sentezinde genetik bilgiyi taşıyan RNA?',
    opts: ['tRNA', 'rRNA', 'mRNA', 'Hepsi'],
    ans: 2,
    exp: 'mRNA (mesajcı RNA) genetik bilgiyi DNA\'dan ribozoma taşır.'
  },
  {
    q: 'Hücrede en çok bulunan RNA çeşidi?',
    opts: ['mRNA', 'tRNA', 'rRNA', 'Eşit'],
    ans: 2,
    exp: 'rRNA (ribosomal RNA) hücrede en çok bulunan RNA türüdür.'
  },
  {
    q: 'DNA sarmalını açan enzim?',
    opts: ['Ligaz', 'Polimeraz', 'Helikaz', 'Peptidaz'],
    ans: 2,
    exp: 'Helikaz enzimi hidrojen bağlarını kopararak DNA sarmalını açar.'
  },
  {
    q: 'Replikasyonda yeni nükleotit ekleyen enzim?',
    opts: ['Helikaz', 'Ligaz', 'DNA Polimeraz', 'RNA Polimeraz'],
    ans: 2,
    exp: 'DNA Polimeraz, kalıp zincire uygun nükleotitleri ekler.'
  },
  {
    q: 'DNA\'da Adenin-Timin arasında kaç hidrojen bağı?',
    opts: ['1', '2', '3', '4'],
    ans: 1,
    exp: 'A-T arasında 2, G-C arasında 3 hidrojen bağı vardır.'
  },
  {
    q: 'Ökaryot hücrede DNA en çok nerede bulunur?',
    opts: ['Sitoplazma', 'Mitokondri', 'Çekirdek', 'Ribozom'],
    ans: 2,
    exp: 'DNA en fazla çekirdekte bulunur.'
  },
  {
    q: 'tRNA\'nın görevi nedir?',
    opts: ['Bilgi taşır', 'Amino asit taşır', 'Enzim', 'Enerji'],
    ans: 1,
    exp: 'tRNA amino asitleri ribozoma taşır.'
  },
  {
    q: 'Replikasyon hangi evrede gerçekleşir?',
    opts: ['Profaz', 'Metafaz', 'İnterfaz', 'Anafaz'],
    ans: 2,
    exp: 'Replikasyon bölünme öncesi interfaz evresinde olur.'
  }
];

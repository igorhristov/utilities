import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../../../components/layouts/layout"

const data = [
  " A still more glorious dawn awaits Flatland galaxies prime number star stuff harvesting star light tingling of the spine. Apollonius of Perga realm of the galaxies inconspicuous motes of rock and gas Hypatia made in the interiors of collapsing stars the sky calls to us. Vastness is bearable only through love the sky calls to us tendrils of gossamer clouds emerged into consciousness descended from astronomers Orion's sword.",
  "Birth another world cosmos vastness is bearable only through love astonishment courage of our questions. Star stuff harvesting star light vanquish the impossible from which we spring rich in mystery a very small stage in a vast cosmic arena Tunguska event. Great turbulent clouds hydrogen atoms a mote of dust suspended in a sunbeam preserve and cherish that pale blue dot a still more glorious dawn awaits hydrogen atoms.",
  " Tendrils of gossamer clouds explorations are creatures of the cosmos rings of Uranus dream of the mind's eye finite but unbounded. Invent the universe Apollonius of Perga from which we spring the ash of stellar alchemy made in the interiors of collapsing stars hundreds of thousands? A very small stage in a vast cosmic arena a mote of dust suspended in a sunbeam something incredible is waiting to be known Apollonius of Perga vastness is bearable only through love extraordinary claims require extraordinary evidence?",
  "Gathered by gravity emerged into consciousness Euclid the carbon in our apple pies bits of moving fluff finite but unbounded? Apollonius of Perga across the centuries prime number vanquish the impossible astonishment made in the interiors of collapsing stars. The only home we've ever known citizens of distant epochs invent the universe network of wormholes citizens of distant epochs citizens of distant epochs. Two ghostly white figures in coveralls and helmets are softly dancing descended from astronomers invent the universe the ash of stellar alchemy not a sunrise but a galaxyrise the only home we've ever known.",
  "Hundreds of thousands stirred by starlight dream of the mind's eye Orion's sword paroxysm of global death two ghostly white figures in coveralls and helmets are softly dancing. White dwarf with pretty stories for which there's little good evidence across the centuries emerged into consciousness the only home we've ever known across the centuries? Are creatures of the cosmos something incredible is waiting to be known vanquish the impossible with pretty stories for which there's little good evidence with pretty stories for which there's little good evidence take root and flourish.",
  "Worldlets galaxies cosmic fugue great turbulent clouds tesseract tingling of the spine. Across the centuries Euclid a still more glorious dawn awaits rich in mystery the only home we've ever known the carbon in our apple pies? From which we spring made in the interiors of collapsing stars hearts of the stars the ash of stellar alchemy bits of moving fluff the ash of stellar alchemy. Stirred by starlight permanence of the stars something incredible is waiting to be known two ghostly white figures in coveralls and helmets are softly dancing made in the interiors of collapsing stars hundreds of thousands?",
  "Rig Veda the sky calls to us vastness is bearable only through love a billion trillion brain is the seed of intelligence with pretty stories for which there's little good evidence. Are creatures of the cosmos dispassionate extraterrestrial observer star stuff harvesting star light bits of moving fluff the carbon in our apple pies bits of moving fluff. Citizens of distant epochs of brilliant syntheses of brilliant syntheses network of wormholes extraordinary claims require extraordinary evidence hundreds of thousands.",
  "Radio telescope science realm of the galaxies Drake Equation two ghostly white figures in coveralls and helmets are softly dancing star stuff harvesting star light. Intelligent beings intelligent beings a still more glorious dawn awaits rich in mystery stirred by starlight take root and flourish? Dispassionate extraterrestrial observer finite but unbounded dream of the mind's eye bits of moving fluff vanquish the impossible citizens of distant epochs. Not a sunrise but a galaxyrise courage of our questions gathered by gravity invent the universe descended from astronomers emerged into consciousness.",
  "Rogue radio telescope hydrogen atoms from which we spring quasar consciousness. Invent the universe at the edge of forever vanquish the impossible at the edge of forever colonies star stuff harvesting star light. Descended from astronomers finite but unbounded take root and flourish rich in mystery the sky calls to us rich in mystery. Citizens of distant epochs dispassionate extraterrestrial observer bits of moving fluff two ghostly white figures in coveralls and helmets are softly dancing Apollonius of Perga extraordinary claims require extraordinary evidence.",
  "Intelligent beings quasar Euclid vastness is bearable only through love Tunguska event a very small stage in a vast cosmic arena. The only home we've ever known extraordinary claims require extraordinary evidence shores of the cosmic ocean inconspicuous motes of rock and gas with pretty stories for which there's little good evidence bits of moving fluff. Muse about the sky calls to us kindling the energy hidden in matter the carbon in our apple pies descended from astronomers stirred by starlight.",
  "Stirred by starlight muse about at the edge of forever emerged into consciousness consciousness shores of the cosmic ocean. Concept of the number one the ash of stellar alchemy rogue bits of moving fluff courage of our questions two ghostly white figures in coveralls and helmets are softly dancing. Two ghostly white figures in coveralls and helmets are softly dancing dream of the mind's eye a very small stage in a vast cosmic arena the carbon in our apple pies a mote of dust suspended in a sunbeam ship of the imagination.",
  "Paroxysm of global death dream of the mind's eye hydrogen atoms Flatland cosmos rich in heavy atoms. Brain is the seed of intelligence concept of the number one ship of the imagination vastness is bearable only through love citizens of distant epochs are creatures of the cosmos. Concept of the number one network of wormholes the carbon in our apple pies vastness is bearable only through love hundreds of thousands courage of our questions.",
  "Venture rich in mystery cosmic ocean a billion trillion bits of moving fluff trillion? Star stuff harvesting star light paroxysm of global death Jean-François Champollion invent the universe preserve and cherish that pale blue dot vastness is bearable only through love. Vanquish the impossible a mote of dust suspended in a sunbeam not a sunrise but a galaxyrise descended from astronomers a mote of dust suspended in a sunbeam extraordinary claims require extraordinary evidence.",
  "Billions upon billions consciousness birth realm of the galaxies intelligent beings descended from astronomers. Sea of Tranquility the only home we've ever known concept of the number one the only home we've ever known finite but unbounded encyclopaedia galactica? Encyclopaedia galactica brain is the seed of intelligence citizens of distant epochs citizens of distant epochs brain is the seed of intelligence a very small stage in a vast cosmic arena.",
  "Apollonius of Perga another world extraplanetary descended from astronomers a mote of dust suspended in a sunbeam Cambrian explosion. Star stuff harvesting star light encyclopaedia galactica Drake Equation the only home we've ever known preserve and cherish that pale blue dot vanquish the impossible. Are creatures of the cosmos a still more glorious dawn awaits rich in heavy atoms permanence of the stars courage of our questions the carbon in our apple pies.",
  "Extraplanetary Orion's sword extraordinary claims require extraordinary evidence prime number paroxysm of global death Vangelis. Two ghostly white figures in coveralls and helmets are softly dancing emerged into consciousness Sea of Tranquility from which we spring with pretty stories for which there's little good evidence from which we spring. Invent the universe vanquish the impossible the sky calls to us permanence of the stars are creatures of the cosmos invent the universe?",
  "Drake Equation consciousness billions upon billions Orion's sword emerged into consciousness laws of physics? Gathered by gravity extraordinary claims require extraordinary evidence corpus callosum tingling of the spine courage of our questions vastness is bearable only through love? The only home we've ever known corpus callosum with pretty stories for which there's little good evidence as a patch of light shores of the cosmic ocean brain is the seed of intelligence.",
  "Birth as a patch of light trillion the sky calls to us billions upon billions ship of the imagination. Hundreds of thousands the only home we've ever known preserve and cherish that pale blue dot science concept of the number one the ash of stellar alchemy. Rings of Uranus finite but unbounded courage of our questions concept of the number one white dwarf white dwarf. Take root and flourish courage of our questions invent the universe from which we spring invent the universe concept of the number one.",
  "Extraplanetary how far away shores of the cosmic ocean science quasar invent the universe. Sea of Tranquility encyclopaedia galactica hundreds of thousands made in the interiors of collapsing stars network of wormholes dispassionate extraterrestrial observer. Star stuff harvesting star light a still more glorious dawn awaits rich in mystery citizens of distant epochs descended from astronomers rich in mystery. Bits of moving fluff tingling of the spine from which we spring emerged into consciousness encyclopaedia galactica stirred by starlight?",
  "A still more glorious dawn awaits culture hydrogen atoms globular star cluster preserve and cherish that pale blue dot the ash of stellar alchemy? Permanence of the stars another world permanence of the stars rich in mystery dream of the mind's eye rich in mystery? The sky calls to us inconspicuous motes of rock and gas extraordinary claims require extraordinary evidence bits of moving fluff the sky calls to us extraordinary claims require extraordinary evidence.",
  "Invent the universe astonishment Apollonius of Perga birth extraordinary claims require extraordinary evidence citizens of distant epochs. Prime number muse about gathered by gravity two ghostly white figures in coveralls and helmets are softly dancing with pretty stories for which there's little good evidence the carbon in our apple pies. Dream of the mind's eye kindling the energy hidden in matter vastness is bearable only through love two ghostly white figures in coveralls and helmets are softly dancing two ghostly white figures in coveralls and helmets are softly dancing two ghostly white figures in coveralls and helmets are softly dancing.",
  "Cosmos white dwarf cosmic fugue not a sunrise but a galaxyrise star stuff harvesting star light radio telescope. Hundreds of thousands hundreds of thousands concept of the number one courage of our questions inconspicuous motes of rock and gas rich in heavy atoms. Another world made in the interiors of collapsing stars as a patch of light how far away hundreds of thousands concept of the number one.",
  "Descended from astronomers take root and flourish cosmos worldlets Orion's sword circumnavigated? Not a sunrise but a galaxyrise preserve and cherish that pale blue dot from which we spring cosmic fugue kindling the energy hidden in matter a mote of dust suspended in a sunbeam. Permanence of the stars network of wormholes dispassionate extraterrestrial observer Rig Veda paroxysm of global death something incredible is waiting to be known.",
  "Billions upon billions a billion trillion inconspicuous motes of rock and gas consciousness vanquish the impossible two ghostly white figures in coveralls and helmets are softly dancing? Muse about birth across the centuries hearts of the stars descended from astronomers preserve and cherish that pale blue dot. Shores of the cosmic ocean dispassionate extraterrestrial observer star stuff harvesting star light kindling the energy hidden in matter venture shores of the cosmic ocean.",
  "Decipherment billions upon billions prime number not a sunrise but a galaxyrise invent the universe Rig Veda. Muse about Orion's sword the only home we've ever known emerged into consciousness dream of the mind's eye vanquish the impossible. Realm of the galaxies the ash of stellar alchemy vanquish the impossible made in the interiors of collapsing stars hearts of the stars hearts of the stars. A very small stage in a vast cosmic arena made in the interiors of collapsing stars corpus callosum vanquish the impossible a mote of dust suspended in a sunbeam vanquish the impossible.",
  "Hearts of the stars finite but unbounded quasar culture Rig Veda prime number. Vanquish the impossible inconspicuous motes of rock and gas bits of moving fluff inconspicuous motes of rock and gas muse about paroxysm of global death? Sea of Tranquility invent the universe the ash of stellar alchemy are creatures of the cosmos Jean-François Champollion muse about. Descended from astronomers two ghostly white figures in coveralls and helmets are softly dancing with pretty stories for which there's little good evidence the sky calls to us with pretty stories for which there's little good evidence Drake Equation?",
  "Tendrils of gossamer clouds kindling the energy hidden in matter radio telescope laws of physics from which we spring at the edge of forever. Finite but unbounded a still more glorious dawn awaits hearts of the stars vastness is bearable only through love a still more glorious dawn awaits network of wormholes. Emerged into consciousness courage of our questions dream of the mind's eye rich in mystery a still more glorious dawn awaits extraordinary claims require extraordinary evidence.",
]

const mkdata = [
  "Човековиот разум е основното средство на човековата егзистенција, тој е главната разлика која човекот го одвојува од останатиот жив свет. Човекот нема канџи, ниту големи заби за да лови плен, ниту има рогови за да се брани, ниту крзно кое ќе го штити од надворешни влијанија. Човекот се раѓа гол, и единствениот инструмент кој му стои на располагање е здравиот разум. Целокупното човеково постоење е строго зависно од неговото рационално и разумно однесување. Се што човекот работи во корист на сопствената егзистенција најнапред мора да биде испланирано од неговиот разум, па дури потоа создадено од неговиот труд.",
  "Кога превзема одредени дејствија, согласно сопствениот разум и знаење, и согласно егзистенцијата како главна цел, човекот мора да направи одредена селекција на таквите дејствијата. Таквата селекција го одредува моралниот код кој го следи секоја индивидуа. Се што човекот прави мора истовремено да има и некакво морално оправдување. Во принцип постојат два типа на морал: алтруистички, и морал на личниот интерес. Согласно ваквите морални принципи луѓето создаваат и општествени системи каде соодветниот морал е поддржан со адекватни закони.",
  "Моралот на личниот интерес е карактеристичен единствено за капиталистичкиот општествен систем. Личниот интерес е морал кој ја следи човековата природа, според која разумот со своето знаење е основниот креатор на човековата егзистенција. Ваквиот морал луѓето ги третира како слободни поединци, кои доброволно соработуваат низ меѓусебната размена. Таквата размена е иницирана од личниот интерес, но во корист на останатите кои тоа се спремни да го платат. Само доколку човекот успешно им служи на останатите луѓе, може да очекува егзистенција и квалитетен животен стандард. Да се биде богат, значи да се поседува знаење кое успешно им служи на што повеќе луѓе со што се задоволува и сопствениот, личниот интерес.",
  "Алтруистичкиот морал е карактеристичен за сите останати општества, освен за капитализмот. Алтруизмот е морал според кој секој поединец е во сопственост на колективот, и сите негови дејствија треба да бидат во согласност со потребите на колективот, а не согласно неговиот личен интерес. Овде егзистенција НЕ е зависна од служењето на другите поединци, туку од наградите на Лидерот кој го води колективот. Лидерот кој го распределува богатството одземено од сите, ги наградува поединците врз основа на нивната лојалност кон колективот, односно кон неговата политика. Да се биде богат и успешен во алтруистичко општество, значи да се биде близок, понизен и послушен кон лидерот… но и да се елеминираат сите потенцијални конкуренти кои имаат слични амбиции. Знаењето во алтруистичките општества е одредено на арбитрарен начин од страна на државните (политичките) институции.",
  "Знаењето кое е стекнато и вреднувано според алтруистички принципи, човековата егзистенција ја обезбедува (со чесни исклучоци) на паразитски начин, користејки ги колективните фондови кои ги полнат политичките лидери. Во такви услови, знаењето служи како алатка во корист на политичките елити и нивните институции. Постојаното зголемување на државниот буџет, како и се поголемиот број на државни институции, е директна последица на алтруистичкиот морал кој овде неприкосновено доминира.",
  "Уништувањето на личните амбиции на младите луѓе, одсуството на критичкото размислување, се поголемите казни и блокади на приватниот сектор, субвенциите, социјалната помош, државната потрошувачка во се повеќе општествени сфери, државното регулирање на бизнисот и капиталните текови, етничкиот колективизам… се е тоа триумф на алтруистичкиот морал кој овде е негуван со векови наназад. Знаењето денес е во служба на ваквите канибалистички принципи, врз кои почиваат нашите закони, регулативи, па и обичаи.",
  "Зарем можел просечниот македонски човек да се жали дека нема право на слободен говор кога она малку што смеел да го каже во комунизмот можел барем на својот јазик да го изговори, за разлика од претходните децении кога не само што не смеел да ја критикува власта, туку и кога ја фалел под присила, морал тоа да го прави на српски, па и на турски (аферим, мерак, машала)?",
  "Психологијата вели дека колку некоја диктатура е построга, толку е таа всушност поисплашена за својата стабилност, што значи дека колку е послаба владата, толку пототалитарно таа ќе се однесува кон својот народ. Владата која е популарна, која ја има подршката и легитимитетот од народот со чија земја управува нема зошто да биде строга кон своите политички неистомисленици. Како што тоа го прават демократски избраните влади во слободните општества, каде што секој граѓанин има право да ја критикува власта и да излезе на избори со своја понуда за гласачите.",
  " Бирократијата мрази оригиналност и креативност: за многу нешта во животот имаме потреба да најдеме оригинални и нови пристапи за решавање на проблемите поврзани со тие нешта. Токму затоа, залудно е да се бара решението за одреден општествен проблем во помош од државата, оти државата преку својата бирократија е системски неспособна да најде нов начин за решавање на новите проблеми.",
  "бирократијата сака што повеќе нови закони, регулативи, агенции, формулари: бидејќи работењето со формулари и регулативи е она што целото работно време на бирократите им го исполнува, секој би си помислил дека токму бирократите би сакале да има што е можно помалку бирократска работа за нив. Што значи, токму оние кои најмногу време губат со занимавање со „папирологија“ би требало да сакаат најмалку папирологија да има. Ама не е така!",
  "Затоа што бирократијата не постои за да помага на граѓаните, туку за да одмага: баш така, основната цел на секоја бирократска структура не е да овозможи сите работи во државата да одат мазно и брзо, туку да одат полека, бавно, со многу напори, со многу фрустрации, со големи загуби на ресурси (главно време, а со тоа и пари).",
  "Целта на секоја апашка власт е да има што е можно повеќе бирократија:  конечно, во оваа последна подточка, може да се објасни и зошто ниту една власт не прави ништо да ги обесхрабри младите луѓе да се запишуваат толку масовно на факултетите кои ќе ги подготват главно за да бидат идни бирократи.",
  "Праведно е се она што е заработено на слободниот пазар, без разлика дали е за тоа вложен труд или не. Доколку вреднувањето го вршат обичните луѓе, чии потреби се задоволени со нечие дејствие на пазарот, во тој случај креаторот на таквото дејствие заслужено може да ужива во сопствените благодети постигнати преку пазарниот успех. Но, и обратно… пазарниот неуспех, може да подразбира сиромаштија. Ваквите појави, богатството и сиромаштијата, се сосема природни појави доколку се резултат на слободниот пазар. И само таквиот социјален статус, постигнат преку пазарното делување, може вистински да се нарече ПРАВЕДЕН.",
]

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const [button, setButton] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 7) {
      amount = 7
    }
    if (button === 2) {
      setText(shuffle(data).slice(0, amount))
    }
    if (button === 1) {
      setText(shuffle(mkdata).slice(0, amount))
    }
  }
  return (
    <Layout>
      <AppWrapper>
        <section style={{ minHeight: "75.2vh" }} className="section-center">
          <h3>Choose macedonian or Carl Sagan</h3>
          <form className="lorem-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="amount"> paragraphs:</label>
              <span className="number-wrapper">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={count}
                  onChange={e => setCount(e.target.value)}
                />
              </span>
            </div>

            <div>
              <button
                onClick={() => setButton(1)}
                name="btnmk"
                className="btn"
                style={{ margin: "1rem" }}
              >
                Генерирај Mакедонски
              </button>
              <button
                onClick={() => setButton(2)}
                name="btnsagan"
                className="btn"
                style={{ margin: "1rem" }}
              >
                generate Sagan
              </button>
            </div>
          </form>
          <article className="lorem-text">
            {text.map((item, index) => {
              return <p key={index}>{item}</p>
            })}
          </article>
        </section>
      </AppWrapper>
    </Layout>
  )
}

const AppWrapper = styled.div`
  /*
=============== 
Global Styles
===============
*/

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    /* background: var(--clr-grey-10);
  color: var(--clr-grey-1); */
    line-height: 1.5;
    font-size: 0.875rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0.1rem;
    /* letter-spacing: var(--spacing); */
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: hsl(210, 22%, 49%);
    /* color: var(--clr-grey-5); */
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
  /*  global classes */

  .btn {
    text-transform: uppercase;
    background: hsl(205, 78%, 60%);
    color: hsl(205, 86%, 17%);
    /* background: var(--clr-primary-5);
  color: var(--clr-primary-1); */
    padding: 0.375rem 0.75rem;
    letter-spacing: 1px;
    display: inline-block;
    transition: all 0.3s linear;
    /* transition: var(--transition); */
    font-size: 0.875rem;
    border: 2px solid hsl(205, 78%, 60%);
    /* border: 2px solid var(--clr-primary-5); */
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    /* border-radius: var(--radius); */
  }
  .btn:hover {
    color: hsl(205, 78%, 60%);
    background: hsl(205, 86%, 81%);
    border-color: hsl(205, 86%, 81%);
    /* color: var(--clr-primary-5);
  background: var(--clr-primary-8);
  border-color: var(--clr-primary-8); */
  }
  /* section */
  .section {
    padding: 5rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 40rem;
    margin-top: 5rem;
    text-align: center;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
  main {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  /*
=============== 
Lorem Ipsum
===============
*/
  h3 {
    text-transform: uppercase;
    color: hsl(205, 86%, 17%);
    /* color: var(--clr-primary-1); */
  }
  .lorem-form {
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    /* letter-spacing: var(--spacing); */
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
  label {
    font-size: 1.25rem;
    color: hsl(205, 86%, 17%);
    /* color: var(--clr-primary-1); */
  }
  input {
    padding: 0.25rem 0.5rem;
    width: 4rem;
    border-radius: 0.25rem;
    /* border-radius: var(--radius); */
    border: none;
    margin: 0 0.5rem;
    font-size: 1.25rem;
  }
  button {
    background: hsl(210, 36%, 96%);
    /* background: var(--clr-primary-10); */
  }
  .result {
    margin-bottom: 2rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* -webkit-appearance: none; */
    margin: 0;
    color: red;
    background: #5db0ec;
    font-size: 1.4rem;
  }

  /* Firefox */
  input[type="number"] {
    /* -moz-appearance: textfield; */
    color: red;
    background: #5db0ec;
    font-size: 1.4rem;
  }
`

export default App

"use client";
import { useIsLoggedIn } from "@/app/loginService";
import { useRef, useState } from "react";
import { SubmitButton, TextInput } from "@/components/textInput";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn();
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormData) => {
    if (e.get("name")?.toString().toLowerCase() === "hunter") {
      setIsLoggedIn(true);
    } else {
      setError("Incorrect");
    }
  };
  return (
    <main>
      {!isLoggedIn && (
        <div className="flex w-full min-h-screen place-items-center place-content-center">
          <form action={onSubmit} className="grid space-y-4 place-items-center">
            <p>To enter, what is Louie&apos;s full first name?</p>
            <div>
              <span>
                Louis-
                <TextInput label="" name="name" ref={inputRef} />
              </span>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <SubmitButton onClick={() => {}} />
          </form>
        </div>
      )}
      {isLoggedIn && (
        <div className="grid space-y-5">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            asperiores, enim illo minus odit placeat veritatis. Ab accusantium
            aperiam consequuntur cupiditate est et ipsa maxime numquam provident
            repudiandae, ullam voluptates.
          </div>
          <div>
            Assumenda autem dolores error esse est eveniet fugiat harum id illo
            ipsum nostrum quas, quasi velit! Aliquam, est fugiat laborum non
            pariatur perferendis perspiciatis qui quos velit voluptates. Quis,
            reiciendis!
          </div>
          <div>
            Accusamus asperiores assumenda consequatur corporis cum debitis
            distinctio eos eveniet hic impedit inventore ipsum labore
            laboriosam, minus molestiae officia pariatur quia, suscipit
            temporibus, vitae. Asperiores debitis ea maxime temporibus vel?
          </div>
          <div>
            Alias assumenda autem commodi, consequatur delectus distinctio
            dolore eum eveniet ex fuga harum ipsa iste modi molestias
            necessitatibus nesciunt non odio perspiciatis possimus quibusdam
            ratione reprehenderit tenetur veniam vitae voluptatibus.
          </div>
          <div>
            Corporis dicta ducimus eos exercitationem explicabo facilis, fuga
            ipsam nulla officiis possimus quos recusandae suscipit? Aperiam
            aspernatur corporis deserunt, distinctio dolores ipsa nam nulla
            officiis provident quia recusandae, veniam voluptatem.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur culpa dolor eos error fugiat magnam maxime modi
            perspiciatis porro provident quod ratione reprehenderit repudiandae,
            saepe sunt suscipit vero vitae, voluptatum?
          </div>
          <div>
            Cupiditate, illo iure quia reiciendis saepe vel voluptatem? Amet
            dignissimos eligendi esse quo sit! Dolor ea harum illum quaerat!
            Aliquam delectus, doloremque ducimus ex incidunt molestias
            praesentium quo veniam voluptate.
          </div>
          <div>
            Architecto asperiores assumenda beatae corporis distinctio incidunt,
            qui repellendus sunt voluptates voluptatibus! Accusamus accusantium
            atque cumque delectus explicabo illo iste laborum libero magni nemo,
            non officiis quibusdam sint sit tempora?
          </div>
          <div>
            Ab aliquid, atque doloremque et exercitationem facilis id illum
            incidunt labore magnam, molestias non numquam ratione reprehenderit,
            soluta voluptates voluptatibus! A doloremque dolorum excepturi
            impedit nam officia, perspiciatis quas. Hic.
          </div>
          <div>
            Ad dignissimos dolor, doloremque ducimus eveniet fugit labore minima
            repellendus ut veniam. Consectetur cum distinctio dolorum earum
            fugiat minus, natus odio praesentium provident quaerat quia quisquam
            repudiandae sit voluptate voluptatibus.
          </div>
          <div>
            Aut blanditiis corporis ea enim eos exercitationem impedit ipsa iste
            iure laudantium nisi nobis, possimus rerum sit soluta ullam,
            voluptate. Aspernatur commodi cumque deleniti distinctio explicabo
            id nam veniam. Cumque.
          </div>
          <div>
            Animi, explicabo perferendis? Amet dolore doloribus eum incidunt
            mollitia non, odit officia officiis, placeat quaerat repellendus sit
            suscipit tempora totam velit veritatis vero voluptate? Ad iusto
            nulla sit suscipit vitae?
          </div>
          <div>
            Accusamus deleniti id iste molestias placeat praesentium sequi.
            Accusantium assumenda autem iste nemo numquam porro quam qui quod.
            Blanditiis cupiditate deserunt distinctio doloribus eveniet fugiat,
            necessitatibus suscipit! Molestiae nostrum, sed?
          </div>
          <div>
            Hic inventore libero placeat! Dolore ea iste quam quas repellendus.
            Ab adipisci aperiam asperiores autem distinctio enim eos illum
            ipsam, itaque natus praesentium quibusdam recusandae sed ut veniam
            veritatis vero.
          </div>
          <div>
            Animi blanditiis commodi corporis culpa dolores dolorum eius est,
            illum iure maxime minus modi optio quaerat rem sequi soluta velit
            veritatis voluptates. Aliquam amet ipsam necessitatibus numquam
            quidem unde, voluptate?
          </div>
          <div>
            A adipisci assumenda aut consectetur consequatur culpa cupiditate
            delectus, deleniti distinctio eius et, ex fuga harum illum iste
            maxime molestias natus nihil non qui rem repellat saepe totam ullam
            voluptatem.
          </div>
          <div>
            A aliquid atque commodi, consequuntur corporis dolore earum ex illo
            ipsa iure magni, minus nam necessitatibus nostrum nulla obcaecati
            odio, porro quibusdam reprehenderit repudiandae rerum tempora totam
            velit vitae voluptatem?
          </div>
          <div>
            Alias deserunt dolorem hic iusto mollitia nihil optio quaerat quas?
            A, commodi cupiditate esse laudantium provident rerum sint. At
            laborum nesciunt nostrum unde! Aperiam consequatur dolores id illo
            saepe sequi.
          </div>
          <div>
            Accusamus alias aperiam beatae, culpa deserunt eum facere in ipsa
            itaque iusto magnam, magni perferendis quae quas, quis reprehenderit
            sed sit tempore ullam vitae! Aperiam deserunt quaerat quo
            repellendus soluta?
          </div>
          <div>
            Labore perferendis provident ratione, repellendus similique tenetur
            vitae voluptas? Assumenda aut deserunt distinctio et in ipsum maxime
            quod recusandae temporibus tenetur? Delectus distinctio fugit modi
            nesciunt optio saepe ut. Consequatur?
          </div>
          <div>
            Alias, dolor ea eligendi eveniet, excepturi facere fugiat ipsum
            itaque laboriosam libero optio quasi rerum soluta temporibus ullam
            vero vitae. Amet asperiores cumque dignissimos eum fuga hic optio
            quisquam! Quo?
          </div>
          <div>
            Blanditiis ipsum minima mollitia neque? Ad deserunt eius harum illo
            necessitatibus, nostrum sint. A accusantium blanditiis consequuntur
            eligendi fugiat id laudantium nihil nostrum numquam officiis
            possimus sunt temporibus, vero voluptatibus.
          </div>
          <div>
            Aperiam at consectetur deleniti dignissimos ducimus error est et
            eum, facere fugit ipsum, laboriosam magnam magni molestiae nam
            nesciunt nostrum numquam pariatur quis quisquam, similique sit
            tempore ullam. Delectus, distinctio!
          </div>
          <div>
            Ab, assumenda consequatur dicta doloribus dolorum eaque eum ex
            excepturi exercitationem explicabo incidunt inventore laudantium
            modi molestiae nobis, non, officia placeat possimus quae quidem
            quisquam sed sint soluta vel veritatis!
          </div>
          <div>
            Deleniti, doloribus, nostrum! A, consequuntur culpa deleniti
            distinctio, eaque et fugit hic impedit itaque labore magni modi
            obcaecati porro praesentium provident quaerat quidem reiciendis
            repellat rerum similique sunt tenetur voluptate!
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            debitis deserunt eligendi, et ex hic id in minus necessitatibus
            perferendis placeat similique, voluptas voluptates. Dicta est harum
            labore quo voluptatum.
          </div>
          <div>
            Aut earum expedita ipsum optio porro provident, quidem. Animi iste
            molestiae nobis sunt vero. Consectetur laborum natus necessitatibus
            nulla placeat? Aliquam atque, commodi consectetur doloribus error
            iusto quos ratione velit?
          </div>
          <div>
            A corporis cumque dicta dolor dolore dolorum earum eum expedita
            explicabo in laudantium libero minima nam neque nisi, odit officiis
            perspiciatis quae quaerat, quas reiciendis repudiandae veritatis
            vitae. Iste, omnis.
          </div>
          <div>
            Animi at consequatur cum deleniti dicta doloremque ducimus enim est
            exercitationem hic illum labore necessitatibus officiis perferendis,
            perspiciatis praesentium quod, rem, sunt. Deleniti dolores error
            ipsam pariatur perferendis, quam quos.
          </div>
          <div>
            Adipisci aliquam amet aspernatur cumque deserunt dicta dolor dolore
            dolorem dolores eos est, ex, excepturi illo impedit in ipsam iure
            iusto magni nisi placeat quaerat ratione reiciendis similique sunt
            unde!
          </div>
          <div>
            Aut dolorum error fugiat iste nesciunt. Asperiores at aut beatae,
            enim explicabo rerum sed unde veritatis. Deleniti eaque, eius et
            impedit molestiae numquam recusandae repudiandae, rerum sed sint
            voluptas voluptatem!
          </div>
          <div>
            Ad amet aperiam asperiores aut blanditiis delectus doloribus enim
            excepturi fugit harum iure laboriosam libero maiores minima odit
            officiis placeat possimus provident quia, repellendus tempora totam
            ullam vero. Nobis, velit?
          </div>
          <div>
            Aperiam consectetur cupiditate distinctio dolor ea eligendi,
            exercitationem fugiat in, itaque libero magnam minus optio placeat
            quo ullam, veritatis vitae. Culpa cumque, fugit magni numquam
            obcaecati odio soluta tenetur voluptas.
          </div>
          <div>
            Est facere iste nulla officia quibusdam quo soluta suscipit ullam.
            Consectetur, expedita, nulla! Accusamus corporis iste molestias,
            perferendis ratione veniam? Aperiam consequatur ducimus expedita
            iusto minima sapiente ut voluptas voluptatum?
          </div>
          <div>
            At atque eligendi eos exercitationem fugit, illum iste labore odio,
            odit quidem quis quod ratione rerum? Ducimus libero maxime,
            molestiae molestias odio quod tempora velit vitae! Amet ex nihil
            tempore!
          </div>
          <div>
            Animi deserunt dolore quos sunt. Accusantium aperiam aut porro quasi
            quisquam ratione veniam! A corporis cupiditate nam nesciunt quae qui
            sunt ut? Consequuntur deleniti dolorem dolorum mollitia nostrum
            obcaecati, reiciendis.
          </div>
          <div>
            Ad ea, illo labore libero quos repudiandae sit vero? Accusantium at
            consequatur debitis, deserunt dolorem facere facilis fugiat impedit
            reprehenderit sapiente soluta totam? Aperiam cum impedit iste
            officia praesentium tempora.
          </div>
          <div>
            Asperiores assumenda atque debitis dolorem doloribus ea eos esse et
            explicabo fugit, ipsa itaque iure labore libero maxime, molestiae
            nam neque non officia porro quis recusandae repudiandae rerum
            similique voluptatem!
          </div>
          <div>
            Accusamus consectetur dolore enim error facere fuga impedit
            molestiae non, pariatur velit. Accusamus blanditiis, eum itaque
            iusto maxime pariatur quibusdam reiciendis sint suscipit vel!
            Aliquid corporis deserunt dicta natus quidem.
          </div>
          <div>
            Ab adipisci aperiam assumenda at culpa deserunt dignissimos
            distinctio dolore, hic magni maiores mollitia, numquam pariatur
            possimus provident, quisquam sint sunt veniam! Esse fuga sed
            voluptates. Ad aliquam magni vero?
          </div>
          <div>
            Alias, aperiam aspernatur aut blanditiis consequatur dicta dolorem
            doloribus dolorum eius laudantium magnam nam nostrum quas voluptatem
            voluptatibus? Asperiores atque, consequuntur debitis ea enim nam
            officia qui quidem quisquam veritatis?
          </div>
          <div>
            Et in ipsa quia recusandae totam. A adipisci aspernatur culpa
            dignissimos doloremque dolores eligendi eos fugiat illum incidunt
            iste laboriosam laborum odit perferendis porro, quaerat rerum
            tenetur ullam velit veniam!
          </div>
          <div>
            Aliquam aperiam aspernatur distinctio dolorem doloribus eius et
            exercitationem facere illum incidunt inventore ipsum itaque iure,
            laborum, libero minima mollitia nisi nulla odio quaerat quas quidem
            saepe similique sit tenetur!
          </div>
          <div>
            Amet consequuntur maiores placeat qui repellat? A accusantium
            aperiam cupiditate dolorem ducimus, est explicabo iusto laudantium
            nemo nulla obcaecati omnis praesentium quas repellat repudiandae
            sint sunt tempora totam veritatis vitae.
          </div>
          <div>
            Accusamus adipisci aliquid esse iusto ratione recusandae suscipit
            temporibus ullam! Assumenda fuga in laboriosam nulla quis quisquam
            sit vel voluptas voluptatem. A debitis ex incidunt, mollitia nisi
            obcaecati sit voluptatem!
          </div>
          <div>
            Accusantium atque aut autem blanditiis consectetur corporis dolore
            dolores, earum esse explicabo incidunt inventore itaque molestiae
            nisi non nostrum officiis porro quae qui, saepe sed sint sunt,
            tempora veniam voluptate!
          </div>
          <div>
            Adipisci animi aspernatur assumenda cum distinctio dolores error
            eveniet id illo nam natus nihil, obcaecati rem sint, voluptatibus?
            Architecto beatae, dolores fugit illo ipsa ipsum maiores molestiae
            quia sit sunt.
          </div>
          <div>
            Animi commodi consectetur culpa cupiditate enim exercitationem fuga
            hic ipsum laboriosam laudantium modi nemo nobis non, pariatur,
            praesentium quidem reprehenderit sequi temporibus tenetur totam
            ullam unde vero voluptate voluptatem, voluptatum!
          </div>
          <div>
            Aperiam aut blanditiis doloremque eligendi explicabo quasi.
            Cupiditate eaque nesciunt numquam reiciendis repellat repudiandae
            tempora tempore ut voluptate voluptatum? Ad aliquid ex facilis fuga
            fugit obcaecati quo reiciendis? Cumque, impedit.
          </div>
          <div>
            Eaque earum enim illo ipsam maiores nesciunt odit officiis porro
            quam quos recusandae tempora, totam velit, vero vitae? Cupiditate,
            eligendi, necessitatibus! Commodi ducimus expedita incidunt ipsam
            numquam rem saepe sapiente!
          </div>
          <div>
            Aut, corporis doloribus ea minima minus molestias mollitia neque
            nesciunt numquam officia omnis perferendis provident quam quas
            quibusdam soluta vitae. Amet, expedita id ipsum odio odit quod sint
            sit vitae.
          </div>
          <div>
            Aperiam atque iste quasi quod unde? Corporis delectus doloremque
            iste, laborum optio perspiciatis quia quidem. Alias consequatur enim
            eveniet ex, exercitationem ipsa molestiae officia pariatur quibusdam
            repellat sint sit veniam.
          </div>
          <div>
            Asperiores impedit ipsam laboriosam mollitia possimus provident,
            repellat repellendus sapiente, sequi sint sit, tenetur. Autem eum
            neque odit quidem reprehenderit sapiente similique. Accusantium
            blanditiis dolore iste modi placeat similique suscipit.
          </div>
          <div>
            Accusamus consequatur, cum, delectus deserunt dignissimos dolores
            eaque, enim fuga fugiat harum incidunt libero maxime nobis odit
            officia perspiciatis qui quibusdam quidem rem repellendus saepe
            sapiente sequi ullam unde veritatis!
          </div>
          <div>
            Aut deleniti dolore ex, exercitationem officiis perspiciatis porro
            repellendus veritatis voluptatibus? Amet, ipsam laborum. Aspernatur
            beatae dolore et iusto maiores, nisi nostrum, omnis perspiciatis
            quas recusandae, sit tempora vitae voluptatibus.
          </div>
          <div>
            Adipisci aliquid blanditiis corporis culpa dicta dolor dolore eaque
            enim eum excepturi explicabo itaque laudantium neque numquam omnis
            placeat, possimus quam quasi quisquam quos, ratione similique totam
            unde ut voluptas.
          </div>
          <div>
            Ab aperiam aut autem beatae commodi culpa cum deleniti excepturi
            facere fugiat harum id modi molestiae neque nulla provident quaerat
            quod reiciendis rem reprehenderit sed sint unde vero vitae,
            voluptatum.
          </div>
          <div>
            Assumenda consectetur culpa deleniti deserunt dolorem eligendi eos
            et fugit id ipsam molestias nam nihil nobis officiis optio porro
            quaerat, quia quibusdam rerum similique temporibus vel veritatis
            voluptas voluptatem voluptatibus.
          </div>
          <div>
            Deserunt dolor laudantium, maxime molestias obcaecati ut? Amet
            eaque, vero! Dicta, ratione, vitae. Ad at consequuntur ea, ex labore
            magnam, minima modi nobis odio officia reiciendis rem rerum
            similique suscipit?
          </div>
          <div>
            A amet architecto expedita laudantium necessitatibus nisi quod
            sapiente sunt. Atque delectus expedita fugit illo incidunt iure
            laudantium maiores maxime, numquam optio, placeat provident quaerat
            quis recusandae rem, unde voluptates?
          </div>
          <div>
            Dolorem eius excepturi exercitationem illo laudantium nam non
            repudiandae sed. Aliquam ea nihil, qui quo veritatis voluptates? Ex,
            minima, unde! Alias, amet explicabo ipsam minus numquam optio
            recusandae repudiandae sequi.
          </div>
          <div>
            Adipisci delectus eum illum neque odio quas quo similique velit
            vitae voluptate. Consequuntur dolore dolores ipsam officiis porro
            quisquam rem totam. Consequuntur culpa exercitationem fugiat illum
            iste laudantium nihil provident!
          </div>
          <div>
            Aperiam architecto beatae commodi corporis dicta dignissimos ducimus
            enim fugit harum illo, itaque iusto maxime nulla numquam, odio
            pariatur, quibusdam quis recusandae reiciendis sequi soluta sunt
            tempora totam velit vero.
          </div>
          <div>
            Accusantium aspernatur, dicta, et illum nihil obcaecati porro
            quaerat ratione recusandae rem, reprehenderit temporibus vitae
            voluptatem? Accusantium dolore doloribus ex explicabo facere ipsa
            nemo nulla, praesentium reiciendis reprehenderit, sapiente vel?
          </div>
          <div>
            Accusamus ad aperiam consectetur cumque deserunt dignissimos error
            est id ipsam iusto modi, nam necessitatibus nemo odio officiis
            pariatur perferendis quasi, quidem quisquam similique suscipit
            tempore vero? Ad, itaque maxime.
          </div>
          <div>
            Aliquid cum deleniti dolor enim illo, nesciunt numquam quisquam rem
            veniam. Aliquam cupiditate debitis deleniti, dolores ex fugiat fugit
            illum libero nisi, nobis odio pariatur quibusdam quo repellendus
            unde voluptatem.
          </div>
          <div>
            Aliquam consequatur, culpa dolore dolores iste, laborum minus
            molestias natus necessitatibus nulla quas sit. Aperiam at cupiditate
            dignissimos, distinctio doloremque enim in laudantium magni neque
            pariatur, quaerat recusandae, voluptas voluptatem.
          </div>
          <div>
            Cupiditate dolores eos illum iure libero nobis obcaecati possimus
            praesentium repudiandae tempora! Culpa eius eveniet facilis magni
            modi mollitia obcaecati, quisquam veniam? Aliquid, asperiores
            delectus excepturi harum illum molestias recusandae.
          </div>
          <div>
            Accusantium at atque aut consectetur consequatur cupiditate dolor,
            ea enim illo incidunt inventore, ipsum maxime modi nostrum
            recusandae reiciendis repellat saepe sint temporibus ullam?
            Cupiditate debitis non porro reprehenderit voluptas.
          </div>
          <div>
            A dolorum eaque eligendi esse est et, maiores natus nemo, ratione
            repellendus repudiandae rerum sequi voluptatibus. Consequuntur
            dignissimos, dolorem dolorum enim iste laborum, natus numquam
            possimus saepe, sapiente vitae voluptatibus!
          </div>
          <div>
            Adipisci amet explicabo ipsam, nulla quae sit suscipit! Delectus
            dolores error et eum exercitationem facere magnam, necessitatibus
            vero. Ab alias commodi dignissimos dolores eaque eius expedita optio
            quae recusandae, vitae.
          </div>
          <div>
            Aliquid culpa dicta dolor expedita facere iste officia totam.
            Accusantium asperiores dolore eveniet ipsam laborum placeat sed sit?
            At magni minus nihil quae tenetur? Expedita illum impedit ipsa odit
            vel.
          </div>
          <div>
            Aliquid animi consequuntur fuga odit officia optio quia rem unde ut
            vel. Ad deserunt doloremque error ipsam magnam, molestias nemo
            numquam pariatur quos similique sunt suscipit tempora ut voluptas
            voluptates.
          </div>
          <div>
            Eius facilis harum inventore itaque minus non quas repellendus vel
            vitae. Cum fuga id nesciunt sed? Consectetur, pariatur, quibusdam?
            Dolorum ipsa iste, perferendis quas qui recusandae rem vel vero
            voluptatibus!
          </div>
          <div>
            Alias asperiores atque blanditiis debitis dicta esse explicabo
            facere fugiat incidunt, ipsa maxime molestias mollitia natus neque
            nesciunt nisi officia placeat possimus praesentium qui quia quos
            repellendus, suscipit veritatis voluptatem?
          </div>
        </div>
      )}
    </main>
  );
}

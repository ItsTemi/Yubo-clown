import React from "react";
import { useState } from "react";

const Modal = () => {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <aside
                style={{
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    display: modal ? "block" : "none",
                    backgroundColor: "gray",
                    opacity: .8,
                    height: "100vh"
                }}
            >
                <nav>
                    <button style={{background: "blue"}} onClick={() => setModal(!modal)}>Sidebar</button>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </aside>
            <main style={{zIndex: -10}}>
                <button style={{background: "blue"}} onClick={() => setModal(!modal)}>Sidebar</button>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                eos optio ipsa porro laudantium, provident vel saepe officiis
                doloribus asperiores dolore illum ratione voluptatibus voluptate
                vero. Iure porro numquam magnam nostrum voluptate accusamus
                incidunt quo mollitia, asperiores suscipit ut laborum facilis
                blanditiis atque natus est quidem assumenda illo quod, quia
                dignissimos vel ea! Recusandae ea quidem reiciendis, nostrum
                deleniti omnis illo quod ipsum. Pariatur illum autem maiores
                libero magnam eum voluptatem laborum error, veritatis fugiat
                nihil quasi omnis eius cum blanditiis repellat illo quo earum,
                amet reprehenderit? Mollitia cum recusandae illo quam tenetur
                maiores pariatur facere similique qui molestias, consequatur
                veniam quidem rem fuga quis voluptatem distinctio! Esse, dolorem
                adipisci, magnam explicabo praesentium ducimus ad repellendus
                saepe culpa deserunt veniam eligendi. Dolor nemo soluta
                voluptate molestias nesciunt tempora ea odio doloribus, cum
                voluptas sint nobis reiciendis, a quae pariatur expedita magnam
                tempore. Facilis ipsam, reiciendis impedit fugiat esse dolorem
                voluptatibus voluptatem atque ratione eaque aut blanditiis
                nulla, dignissimos unde perspiciatis deserunt aliquid corporis
                libero quae autem recusandae animi placeat! Molestias, rem quasi
                earum deleniti magnam ducimus optio debitis voluptates labore
                corrupti ab fuga iste quis totam animi corporis cupiditate
                voluptatum ratione sunt necessitatibus accusantium impedit quos
                nulla? Deleniti quas, cumque deserunt fugit quis consequatur
                veritatis ratione illum beatae culpa fugiat consequuntur
                assumenda, molestias tempore vel exercitationem expedita.
                Perferendis sint nihil nulla ullam accusantium enim. Doloribus
                doloremque mollitia culpa natus at? Architecto, dolore.
                Laudantium numquam saepe consequuntur nihil voluptatum obcaecati
                repudiandae quaerat error velit. In vel dicta non rerum placeat,
                nemo enim perferendis pariatur natus atque fugit et aspernatur
                inventore. Repellendus, provident facere. Corporis consectetur
                aliquam porro ducimus, quo error similique asperiores maxime
                doloremque illum laboriosam doloribus nulla, voluptatem
                blanditiis possimus qui veniam itaque. Maxime aperiam quisquam
                qui corporis asperiores quod temporibus, nihil illum ipsam enim
                amet sint quibusdam? Officiis cum incidunt maiores eum repellat
                earum facilis reprehenderit nesciunt dolorem aut commodi,
                dolores, ipsa ex ab odit! Similique aliquid soluta asperiores
                fuga natus praesentium consequuntur odio fugit nihil provident
                voluptatem nulla deleniti porro impedit inventore officiis, ab
                odit quo voluptatibus! Beatae vel doloremque hic nihil rem
                laborum quos fuga, quaerat tempora! Cum ullam quis asperiores
                doloribus tempore reiciendis labore quae deleniti, natus omnis
                maiores vero praesentium, minus reprehenderit expedita pariatur
                commodi animi ex. Officia quod quasi omnis reiciendis! Officiis
                facilis libero provident nesciunt ullam corporis, totam ad
                voluptatibus numquam iure dolor dicta tempora consequatur, quasi
                dolorem odio neque reprehenderit, laudantium tenetur quisquam
                laboriosam? Voluptate sint, quos rem iste ad temporibus dolore
                accusamus neque tempore aspernatur, aliquid necessitatibus sequi
                deleniti! Repellat, ut quaerat aperiam in veniam repudiandae
                harum voluptatem debitis nesciunt dignissimos quidem ea
                voluptas, quod iste quisquam maiores corrupti, veritatis dolores
                eaque officiis quia. Commodi eveniet, obcaecati a aliquid
                consectetur dolor, natus nisi doloremque voluptas perferendis
                soluta mollitia delectus iste ipsam illum, voluptate qui illo
                unde aut. Eaque perferendis ex assumenda. Laudantium nisi saepe
                in, ipsam laborum a dicta at perspiciatis sapiente quo
                repudiandae fugit molestias vitae officia eveniet reprehenderit,
                eaque quasi debitis voluptates assumenda. Voluptatem blanditiis
                fuga dolores rem debitis qui. Assumenda nihil quod earum placeat
                sequi enim provident modi fuga recusandae ipsam accusantium
                omnis delectus voluptatum ea cupiditate praesentium ducimus
                quibusdam, ipsa alias. Officiis culpa exercitationem accusantium
                cupiditate iusto tempora aperiam doloribus corporis doloremque
                pariatur unde voluptas totam quia, libero atque modi, eligendi
                nobis sequi iste ex molestias fugiat! Facilis atque neque rerum,
                eaque alias voluptatum nesciunt vitae reiciendis pariatur omnis
                repellendus minima non, cum a officia unde? Praesentium suscipit
                laboriosam in impedit dolore, veniam incidunt commodi deserunt
                recusandae quidem possimus eius quia modi delectus repellat,
                fuga consequuntur veritatis assumenda architecto? Illo quibusdam
                voluptates cupiditate earum ullam, ea a dolorum aperiam alias,
                numquam ducimus officiis quae soluta quidem repudiandae
                similique possimus aspernatur eligendi asperiores itaque
                expedita unde rerum harum! Accusamus repellendus tenetur minus
                nihil dolore modi in vitae autem libero corrupti. Animi minima
                sed autem ipsum, ut quis totam blanditiis repellat. Earum
                accusantium fugit qui quasi, provident iste praesentium ipsum
                tempora aliquid reiciendis laboriosam ullam explicabo unde
                eligendi omnis! Aliquam ut ab reprehenderit dicta nesciunt
                obcaecati iure, consequatur similique temporibus veniam
                consequuntur accusantium debitis et, cupiditate veritatis
                numquam. Laboriosam labore delectus architecto est odio iste
                tenetur eum dignissimos sed! Dolorum, deleniti doloremque,
                voluptate quibusdam eos magni, tenetur recusandae odit officia
                dolor quidem cupiditate natus ipsa quaerat ratione sit corrupti
                facere. Nostrum eos adipisci perferendis deleniti sed,
                exercitationem et qui animi iste, repudiandae voluptate eius ab
                dolorem dolor modi! Earum nostrum, odio quibusdam corporis
                reiciendis modi, ducimus voluptatum sequi totam non doloremque
                labore rerum maxime repudiandae pariatur quas dolore? Quibusdam
                voluptatum magni soluta, voluptatibus quod, neque doloribus at,
                praesentium suscipit dolor fugit eligendi ut nihil obcaecati
                blanditiis? Quaerat libero reiciendis officiis consequuntur
                aspernatur perspiciatis corrupti nisi. Sapiente omnis delectus
                consectetur ut fugit sequi enim illum vitae odio laudantium
                nostrum tempore illo explicabo itaque deserunt atque alias eaque
                in reprehenderit, pariatur natus totam nobis. Ratione illo
                aperiam exercitationem eveniet aut perspiciatis, minus
                accusantium eum nesciunt, iure harum! Odio, cumque non
                voluptatibus vitae ea quibusdam eum ratione molestiae sunt vel
                error aspernatur distinctio quas repellendus, in dolorem.
                Dignissimos explicabo architecto voluptatibus porro!
                Voluptatibus, ea. Itaque inventore repellat possimus ipsa
                repellendus vitae necessitatibus, eveniet, voluptatum
                consequatur dicta animi soluta reprehenderit atque quod quam.
                Dolores provident necessitatibus doloremque beatae vero ducimus,
                excepturi voluptatum voluptatem nostrum veritatis corporis
                laudantium id aspernatur possimus totam libero sit nesciunt? Id
                distinctio sed iusto illum obcaecati, rerum neque officia ea ad
                explicabo excepturi aliquam aspernatur magnam inventore ipsum
                iure exercitationem provident aut reprehenderit voluptas ab
                autem nihil. Nesciunt libero aut, necessitatibus temporibus
                provident nemo tenetur nulla minima officia explicabo itaque
                aspernatur molestias, molestiae voluptatibus cum quos quod
                suscipit adipisci vel iste! Repellat laborum blanditiis quia
                temporibus atque eos fugit in est deleniti id inventore,
                repellendus consequuntur esse consectetur labore dignissimos
                magnam exercitationem illo et. Doloribus impedit, architecto,
                necessitatibus aspernatur facilis obcaecati, eos officiis
                consequuntur sequi adipisci natus facere. Voluptate nostrum
                labore sunt delectus porro adipisci obcaecati aspernatur
                deleniti cupiditate tempora ipsa expedita, minus accusantium
                laborum nulla commodi quasi iure tempore dolor sapiente illum!
                Ad, velit, animi ex repellendus eos ea dolorum enim quaerat vero
                labore, similique explicabo quisquam. Ullam possimus officia,
                similique nisi excepturi recusandae ipsa laudantium asperiores
                quod. Dignissimos minus iste accusamus! Repellat eaque explicabo
                et quibusdam dolor veritatis rerum magni delectus incidunt
                dolorem facilis ea quidem molestiae accusamus expedita odit cum
                quasi laboriosam deleniti eveniet, inventore odio. Qui, earum
                fuga sint quos optio perspiciatis consequatur. Quas vero atque
                nesciunt totam debitis, assumenda adipisci incidunt veniam eum?
                Provident distinctio cum totam aut eos commodi, nobis aliquam
                maiores libero beatae enim quas sapiente cupiditate odit
                voluptatum a rerum quos at ipsum hic! Eligendi, voluptas fugit
                omnis, ad maiores, praesentium esse deserunt labore aliquid aut
                minus. Dolores, aut, dolorum mollitia, eligendi suscipit illo
                eveniet temporibus sunt iste magnam eum aspernatur pariatur
                porro ab labore ea. Distinctio ipsam possimus sequi dolor quia
                molestiae tempora eveniet ipsa non, sunt cum vitae commodi magni
                perferendis dicta voluptas veniam ab explicabo at? Soluta amet
                earum qui laudantium laboriosam, suscipit nam ipsum non vitae
                illo sed ducimus in optio expedita facilis, fuga esse nobis
                voluptates cumque vel dolorem eum. Eveniet cum assumenda
                voluptatum laudantium provident a consectetur eligendi corporis
                neque maiores, aperiam odit veritatis tempora fugiat alias
                explicabo, dolore accusantium molestiae quisquam modi! Similique
                minus voluptatum numquam debitis mollitia officiis assumenda
                quam. Quod molestiae, ipsa corrupti nostrum eius, ullam minus
                expedita aperiam voluptatem fugit hic? Et quasi quam saepe quas
                repellat excepturi molestiae autem voluptatem quibusdam, culpa
                rem libero dolore iste, voluptatum optio incidunt unde cum omnis
                porro, corrupti error dolorum explicabo necessitatibus
                reiciendis. Sequi fugiat sapiente fuga saepe porro vitae quod,
                praesentium maxime et. Explicabo mollitia, cupiditate nostrum,
                beatae officiis quae harum itaque ab voluptate tempore
                voluptatum exercitationem ducimus porro vel ad ipsa accusamus
                et, illo ipsam? Beatae nostrum porro corrupti maiores optio non
                reiciendis placeat voluptatem! Minima omnis quae placeat
                doloribus dignissimos explicabo! Officiis repudiandae sit
                laudantium consectetur veniam quisquam, aliquid corporis amet
                ratione magnam totam esse velit at error minus architecto
                recusandae! Possimus eos nihil doloremque officiis, eius aliquid
                voluptatum nulla doloribus, ad amet temporibus, expedita labore
                non pariatur animi ea ipsam quia hic dicta dolorem assumenda
                voluptates voluptatem. Ducimus laborum ut quam unde rem in
                laudantium aliquid, eaque distinctio. Animi excepturi sed
                accusantium, nostrum nisi cupiditate suscipit dolor quo. Fugit
                est culpa, nobis excepturi animi ad beatae odit, nemo, dicta
                reiciendis nostrum molestiae. Facere alias ut numquam iste
                mollitia magni suscipit. Doloribus similique adipisci doloremque
                veniam magnam sed quo iusto vitae odit quasi! Maiores minus modi
                qui molestias quia, repellat provident nihil facere id libero.
                Impedit maiores, aspernatur est enim quia consequatur quae nihil
                sit ipsa labore iusto! Commodi labore, amet optio sunt dolores
                ipsam dolor minus saepe eum laudantium fugiat voluptas sed.
                Distinctio ducimus vitae deleniti sit voluptas quis repellat
                quaerat inventore adipisci non animi neque assumenda blanditiis
                numquam dolore qui magni ad nemo consequatur sunt tempora,
                doloribus sed! Laudantium quis ex dolores nemo illum nihil, rem
                aut eos soluta dolorem, nisi voluptates quibusdam sed quas
                obcaecati ullam beatae itaque fugit iste assumenda qui.
                Recusandae exercitationem magnam quod possimus molestias laborum
                amet nemo, qui asperiores illo reprehenderit id laudantium iste
                quo tenetur culpa facilis tempore. Doloribus quibusdam eius,
                aliquam consequatur quas dolores optio tempora voluptatum
                temporibus praesentium aspernatur aliquid corporis labore illo
                perferendis facilis ad eos officia distinctio! Accusantium,
                accusamus nulla. Delectus atque possimus reiciendis rem earum
                distinctio a, exercitationem recusandae amet ducimus, illum
                molestias animi. Veritatis delectus ducimus sunt id
                necessitatibus ex itaque perferendis ad quod. Cum natus magni
                veniam ipsum unde eum quaerat quas? Dolorum quam error eligendi
                harum praesentium incidunt quis, voluptatum itaque reiciendis
                quasi maxime officiis qui esse minima repudiandae, laudantium
                nesciunt. Eius harum eum quia numquam, error ab corrupti nobis,
                assumenda eos architecto eligendi magnam officiis nisi nemo
                optio nesciunt voluptatibus autem libero ullam nulla tenetur
                deserunt iste omnis! Alias, iusto laboriosam eos beatae
                voluptate temporibus iure adipisci. Incidunt obcaecati non
                perspiciatis nemo sint laudantium dolore quisquam itaque cum
                possimus assumenda, aspernatur libero suscipit tenetur facere
                eius ut dicta! Exercitationem nobis iste ullam repellat,
                consequuntur quibusdam! Atque amet repudiandae libero sint ut
                cupiditate eius perspiciatis! Labore nihil, voluptatibus aperiam
                sint reiciendis asperiores debitis exercitationem architecto
                animi obcaecati quos aut modi suscipit? Nostrum saepe laboriosam
                inventore alias perferendis maiores perspiciatis soluta ex
                veniam ratione, molestias, tenetur libero. Eveniet aspernatur,
                veniam, totam commodi, similique placeat sunt deserunt tenetur
                adipisci asperiores reprehenderit vel voluptatem! Quo in fugiat
                veniam, a quasi consequatur soluta quod sint. Temporibus
                deleniti enim ad quo incidunt autem suscipit maxime? Eius ab,
                magnam perspiciatis iure eos corrupti autem. Ad, qui provident!
                Ipsam odit, odio reprehenderit, optio incidunt, aspernatur quo
                necessitatibus ratione autem dolorem rerum officiis quibusdam
                consequuntur quae? Omnis repellendus voluptas eveniet maxime
                consequatur eaque temporibus hic voluptatum nobis quam
                perferendis, vero ullam libero ex. Amet porro fugit, laborum
                harum tempore soluta nulla explicabo deleniti dicta et nemo eum
                adipisci illum doloribus, autem inventore praesentium magni, nam
                delectus magnam velit nesciunt. Ipsam fugit sequi assumenda
                necessitatibus eius voluptate doloremque nulla quis! Ab impedit
                ad voluptatum vitae aliquam, quae dolorum debitis deserunt
                architecto vero dignissimos molestiae veritatis temporibus quis
                fugiat optio officiis rerum. Possimus, nulla? Fuga molestias
                ratione voluptate veritatis earum dignissimos eligendi,
                reprehenderit sint vitae ullam saepe reiciendis, voluptas
                eveniet nostrum numquam consequuntur illum at quam soluta
                maxime. Impedit saepe, at temporibus quibusdam odio atque
                mollitia, cumque rerum dolor unde perferendis sapiente
                voluptatem consequuntur optio quae debitis explicabo incidunt!
                Sapiente dicta facilis ipsum cumque esse earum iusto dignissimos
                deserunt accusamus voluptatum quae consequatur impedit, ipsam
                eligendi culpa distinctio tempore exercitationem ut, consectetur
                dolorum recusandae! Incidunt quis quas omnis assumenda
                repudiandae cumque aliquid sunt at numquam debitis ullam impedit
                eveniet doloremque laudantium dolorum iusto, modi perspiciatis
                quae. Sunt itaque quisquam odit. Ut repudiandae, numquam commodi
                adipisci ipsa eveniet quos! Pariatur expedita cumque earum magni
                ex, recusandae rem ipsa dolorem sit enim ratione dicta deleniti
                totam tempore possimus hic quo itaque impedit esse voluptate
                veniam neque? Dolore recusandae ex corrupti ab. Iure delectus
                repellat quas dolor maxime id adipisci minima incidunt itaque
                perferendis quidem soluta deserunt eos laborum asperiores ipsam
                cum facere doloribus ab expedita placeat et, ipsa velit. Eum
                doloremque soluta commodi debitis a error reiciendis dolores
                consectetur dolor tempore rem hic optio odit voluptates in sunt,
                nemo voluptatibus mollitia enim delectus atque accusantium
                repellat aut omnis. Explicabo aut accusamus inventore autem
                reprehenderit iste in, atque ab nostrum, ipsum eos dolorem
                tenetur! Aspernatur ut aut sint qui! Dolores ea doloribus
                repellat recusandae nesciunt impedit, temporibus quas reiciendis
                ducimus accusantium aliquam voluptatem debitis ad voluptas
                voluptatibus quo rerum, ipsa nemo assumenda! Iure quia inventore
                culpa itaque totam voluptate quaerat necessitatibus repudiandae,
                quae assumenda repellendus voluptates laboriosam odit
                consequatur hic veniam saepe dolorem magnam? Laborum nulla
                molestias est delectus facilis, nostrum explicabo quaerat,
                doloremque quibusdam nihil aut quae beatae dolorum autem
                impedit, et harum. Atque ipsa dignissimos dolorem aliquam illum
                perspiciatis culpa harum possimus quidem quos amet recusandae,
                distinctio nihil veniam quae praesentium at iusto laboriosam in!
                Illo quas laborum minima praesentium minus obcaecati maxime
                dolorum ut ducimus doloremque aliquam velit quae hic,
                reprehenderit assumenda similique soluta suscipit animi ullam
                iusto ab quod libero ex quasi! Nobis itaque praesentium ullam
                reiciendis. Laboriosam, ratione nihil? Alias dolorem ad soluta
                optio sunt, quisquam dicta non rem unde consectetur, labore eos
                aliquid porro illo? Voluptatum nisi maxime reiciendis deserunt
                expedita quis dicta ullam nulla! Consequuntur corporis molestiae
                sequi cum incidunt voluptatibus tempora saepe voluptates facere!
                Accusantium dolores ab repudiandae repellat ipsum, inventore
                dolor asperiores aperiam perferendis nesciunt dicta maiores a,
                necessitatibus earum optio minima nemo deleniti culpa similique!
                Provident tempore voluptates eius. Exercitationem amet nam
                ducimus expedita dignissimos, voluptas eius neque laborum
                voluptatem illo repudiandae nesciunt aliquid voluptatibus cumque
                quaerat aliquam? Alias quas officia tempora nam voluptatibus
                veniam ducimus deleniti fugiat, ipsam quidem libero repellendus
                eius voluptate, neque nesciunt blanditiis praesentium totam
                sapiente ullam accusantium ab nihil laborum! Nulla cumque,
                provident quisquam distinctio illo asperiores ea, facilis quidem
                illum odit a culpa? Autem quasi asperiores suscipit, impedit,
                itaque officia ad ipsum corporis in cupiditate ullam vitae
                voluptate porro culpa ea quod ut magnam pariatur consectetur
                adipisci? Libero, ipsam iste magnam, ducimus quidem nisi
                reprehenderit asperiores, in quibusdam nulla quaerat eaque ad
                vitae possimus esse veritatis incidunt cupiditate eum? Magnam
                repudiandae tempora dolorum assumenda tenetur ab quisquam!
                Libero ipsum aspernatur adipisci voluptates consequuntur. Atque
                quisquam sunt dolor itaque rerum dolores, exercitationem facilis
                veritatis. Natus quas consequuntur sequi. Dolorum ipsam
                distinctio molestias rerum praesentium libero aliquid explicabo.
                Velit quam illum, possimus odio necessitatibus, at nisi sapiente
                inventore sed deleniti asperiores placeat fuga. Officia minus
                saepe culpa ut modi veniam expedita eligendi, nihil cum
                provident amet quis libero laborum iste similique neque. Facere
                sint enim tempora aliquam similique deserunt eius fugit dolorum
                quasi tempore, eum nesciunt molestias sequi quis nulla
                laudantium, doloremque quo itaque! Esse adipisci reprehenderit
                consequuntur quia provident omnis debitis quis soluta facere!
                Eum praesentium enim laudantium. Sequi vel nulla doloremque
                earum in nisi amet beatae, non quibusdam dolorum laborum
                explicabo, ut, veritatis perferendis voluptates officiis
                laudantium! Itaque ipsum deleniti porro sapiente. Asperiores id
                et recusandae. Dolor animi sapiente in minima unde nemo
                necessitatibus, quis nostrum praesentium? Illo eligendi quos
                beatae optio culpa repellendus perspiciatis eaque dicta numquam
                veniam, repellat itaque, adipisci tempora, nesciunt fuga?
                Similique doloribus veritatis quasi, aut eveniet fuga corrupti.
                Nobis architecto dolore fuga adipisci, neque natus dolorem nisi
                officia dolor provident veritatis asperiores delectus nostrum
                molestias, minima a quos labore enim laboriosam amet esse
                commodi. Doloribus est ab ad cum quaerat id perferendis
                cupiditate ducimus, accusantium doloremque recusandae ipsa
                cumque, iure voluptas soluta. Perferendis ut cupiditate quas
                incidunt magnam nisi ratione, in assumenda architecto culpa?
                Optio molestiae minima cupiditate dicta, veritatis explicabo eum
                nisi culpa aut quas? Error odio a voluptates, vero autem eius
                deleniti blanditiis nam inventore necessitatibus id incidunt in
                unde ducimus dolorem minus exercitationem veritatis non
                voluptatibus commodi, alias facilis magni quam quasi. Quam iusto
                dolorem blanditiis laudantium facere veritatis? Ad excepturi
                iusto quas id sunt recusandae aliquid eos corrupti distinctio
                culpa ipsa similique nihil eligendi sed dolores accusamus
                numquam vel, voluptatibus ipsam at veritatis! Unde quasi ipsa
                odio aspernatur ratione aliquam iure, in soluta, quibusdam
                magnam ipsum, id repellendus! Eum soluta delectus ducimus sunt
                numquam hic, quos quasi pariatur, qui velit, doloribus
                laboriosam cum! Consequuntur dolorem sapiente odio et aperiam
                repellat alias dicta, eos consequatur nihil voluptatum minima?
                Est facilis quam minus eligendi eveniet ab harum inventore? Quod
                unde voluptate consectetur consequatur maiores odio, tenetur
                quas at optio quam amet eveniet sunt explicabo nobis labore ad
                sit esse facere ullam, veniam ipsa? Nulla, eos nam. Distinctio
                expedita quod voluptatum consectetur laborum eum qui iusto
                reiciendis eligendi blanditiis atque cumque laudantium,
                assumenda ratione voluptas? Totam obcaecati, libero tempore
                doloremque, debitis a, quod temporibus consequuntur
                exercitationem consectetur itaque optio quaerat nam laudantium!
                Dolorem, iure aperiam consectetur doloribus odio libero, eveniet
                ratione dolore reprehenderit harum accusantium dignissimos quos
                corrupti eum suscipit esse quidem officia, alias asperiores
                deleniti! Laudantium doloremque nesciunt sint iste id dolorum
                nulla, quasi accusamus? Placeat libero ut non iste corporis.
                Impedit expedita id maxime sed odio atque iusto ducimus
                reprehenderit eos fuga, ullam molestias non sequi. Cum quia
                ullam, necessitatibus maiores ex explicabo reiciendis tempora,
                eaque est doloribus esse praesentium voluptate minus dolorem
                assumenda modi itaque molestiae! Dolor saepe soluta ipsum est!
                Provident nostrum quo ad, impedit eius accusamus odio
                consectetur commodi doloremque vero saepe repellendus magni
                beatae id! Quod tempora quisquam voluptatum ea velit consequatur
                deserunt optio nesciunt error explicabo quidem vitae quia, vel
                eum nemo exercitationem obcaecati iure ullam, totam adipisci,
                tenetur sint? Vel nobis laudantium cumque, iusto ea eligendi
                voluptatum fugiat blanditiis, tempore dolorum similique
                voluptatibus delectus aperiam optio voluptates corporis, eum
                repellendus a at veniam beatae. Iusto animi dolore sed placeat
                dignissimos fuga earum ea alias tempore hic corporis, sit
                mollitia optio a exercitationem modi eligendi officiis
                doloremque. Quibusdam, eum magni quaerat atque dolorum dicta.
                Itaque animi dignissimos ratione rerum dicta nemo, culpa
                veritatis ut fugiat hic iusto iure repudiandae rem repellat
                corporis labore eveniet necessitatibus expedita dolorum. Debitis
                quos soluta illo. Doloremque quaerat esse illo, possimus quidem
                aspernatur magnam itaque. Quod magni fugiat nulla incidunt!
                Excepturi magnam voluptatem quidem suscipit! Fuga fugiat illum
                harum magnam delectus enim quasi officiis.
            </main>
        </div>
    );
};

export default Modal;

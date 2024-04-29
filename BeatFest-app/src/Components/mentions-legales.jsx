import React from 'react';

const MentionsLegales = () => {
    return (
        <div className="bg-gray-100 text-gray-800 p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Mentions Légales</h1>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Identification de l'éditeur et de l’hébergeur du site</h2>
                    <p>Le site Beat Fest est édité par Epitech Digital School, SAS au capital de 22 euros, dont le siège social est situé à l'Avenue Parmentier, inscrite au Registre du Commerce et des Sociétés sous le numéro 589614866 Paris.</p>
                    <p>Numéro de TVA intracommunautaire : 12345678910.</p>
                    <p>Directeur de la publication : Adrien, joignable au 0612345678 ou à adrien.leguen.p@gmail.com.</p>
                    <p>Le site est hébergé par Hostinger, Paris. Téléphone : 0612345678.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Conditions d’utilisation</h2>
                    <p>L’utilisation du site Beat Fest est régie par les termes et conditions générales d’utilisation. Tout utilisateur reconnaît en avoir pris connaissance et les accepter. Ces conditions peuvent être modifiées à tout moment et sans préavis par Epitech Digital School.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
                    <p>L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu’il soit, est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Gestion des données personnelles</h2>
                    <p>Sur le site Beat Fest, le responsable du traitement des données personnelles est Adrien. Pour toute information ou exercice de vos droits Informatique et Libertés sur les traitements de données personnelles gérés par Epitech Digital School, vous pouvez contacter son délégué à la protection des données (DPO) via eds@gmail.com ou par courrier signé accompagné de la copie d’un titre d’identité à l’adresse suivante : 2 Rue de la paix Paris 75011.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Liens hypertextes et cookies</h2>
                    <p>Le site Beat Fest contient un certain nombre de liens hypertextes vers d’autres sites. Cependant, Epitech Digital School n’a pas la possibilité de vérifier le contenu des sites ainsi visités et n’assumera en conséquence aucune responsabilité de ce fait.</p>
                    <p>La navigation sur le site Beat Fest est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Droit applicable et attribution de juridiction</h2>
                    <p>Tout litige en relation avec l’utilisation du site Beat Fest est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
                </section>
            </div>
        </div>
    );
};

export default MentionsLegales;

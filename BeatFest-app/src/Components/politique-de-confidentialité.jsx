import React from 'react';

const PolitiqueConfidentialite = () => {
    return (
        <div className="bg-gray-100 text-gray-800 p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Politique de Confidentialité</h1>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <p>Dans le cadre de son activité, Beat Fest, dont le siège social est situé à Avenue Parmentier, est amené à collecter et à traiter des informations dont certaines sont qualifiées de "données personnelles". Beat Fest s'engage à respecter votre vie privée et à protéger les données personnelles de ses utilisateurs.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Collecte des données personnelles</h2>
                    <p>Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l’éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes. Les données collectées sont notamment : noms, prénoms, adresses e-mail, numéros de téléphone, données de paiement, historique d’achat, préférences et intérêts, etc.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Utilisation des données</h2>
                    <p>Les informations collectées sur nos utilisateurs sont destinées à offrir et à améliorer nos services et à maintenir un environnement sécurisé. Plus précisément, les usages sont les suivants :</p>
                    <ul className="list-disc pl-5">
                        <li>Accès et utilisation du site</li>
                        <li>Gestion du fonctionnement et optimisation du site</li>
                        <li>Organisation des conditions d’utilisation des Services de paiement</li>
                        <li>Vérification, identification et authentification des données transmises par l’utilisateur</li>
                        <li>Proposition à l’utilisateur de la possibilité de communiquer avec d’autres utilisateurs du site</li>
                        <li>Mise en œuvre d'une assistance utilisateurs</li>
                        <li>Personnalisation des services en affichant des publicités en fonction de l’historique de navigation de l’utilisateur, selon ses préférences</li>
                        <li>Prévention et détection des fraudes, malwares (malicious software ou logiciels malveillants) et gestion des incidents de sécurité</li>
                        <li>Gestion des éventuels litiges avec les utilisateurs</li>
                        <li>Envoi d’informations commerciales et publicitaires, en fonction des préférences de l’utilisateur</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Droit d’accès, de rectification et de déréférencement de vos données</h2>
                    <p>Conformément à la réglementation applicable aux données personnelles, les utilisateurs de Beat Fest ont les droits suivants :</p>
                    <ul className="list-disc pl-5">
                        <li>Le droit d’accès : ils peuvent exercer leur droit d’accès, pour connaître les données personnelles les concernant. Dans ce cas, avant la mise en œuvre de ce droit, la Plateforme peut demander une preuve de l'identité de l’utilisateur afin d’en vérifier l’exactitude.</li>
                        <li>Le droit de rectification : si les données personnelles détenues par Beat Fest sont inexactes, ils peuvent demander la mise à jour des informations.</li>
                        <li>Le droit de suppression des données : les utilisateurs peuvent demander la suppression de leurs données personnelles, conformément aux lois applicables en matière de protection des données.</li>
                        <li>Le droit à la limitation du traitement : les utilisateurs peuvent de demander à Beat Fest de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD.</li>
                        <li>Le droit de s’opposer au traitement des données : les utilisateurs peuvent s’opposer à ce que leurs données soient traitées conformément aux hypothèses prévues par le RGPD.</li>
                        <li>Le droit à la portabilité : ils peuvent réclamer que Beat Fest leur remette les données personnelles qu'ils ont fournies pour les transmettre à un nouveau site.</li>
                    </ul>
                    <p>Vous pouvez exercer ce droit en contactant notre DPO à eds@gmail.com.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Utilisation des cookies</h2>
                    <p>Lors de la consultation du site, des cookies sont placés sur votre ordinateur, votre mobile ou votre tablette. Un cookie est un fichier de petite taille qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
                    <p>Le paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement, de refuser de la manière décrite à l’adresse suivante : [lien vers la page de paramétrage].</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Conditions de modification de la politique de confidentialité</h2>
                    <p>Cette politique de confidentialité peut être consultée à tout moment à l'adresse ci-après indiquée : [URL de la politique de confidentialité]. Beat Fest se réserve le droit de la modifier afin de garantir sa conformité avec le droit en vigueur. Par conséquent, l’utilisateur est invité à venir consulter régulièrement cette politique afin de se tenir informé des derniers changements.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Acceptation par l’utilisateur de la politique de confidentialité</h2>
                    <p>En naviguant sur le site, l’utilisateur atteste avoir lu et compris la présente politique de confidentialité et accepte ses conditions, plus particulièrement en ce qui concerne la collecte et le traitement de ses données personnelles, ainsi que l’utilisation de cookies.</p>
                </section>
            </div>
        </div>
    );
};

export default PolitiqueConfidentialite;

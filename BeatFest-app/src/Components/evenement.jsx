import React from 'react';

const Evenement = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Back 2 Fest - Un Festival de Musique Engagé et Innovant</h1>
            <p className="text-lg text-center mb-4">Découvrez un festival de musique rap classique avec des artistes mainstream, engagé dans des pratiques durables et des innovations technologiques pour une expérience unique.</p>
            
            <section className="my-4">
                <h2 className="text-2xl font-bold mb-3">Application Mobile</h2>
                <p>Accédez à toutes les fonctionnalités du festival via notre application mobile développée spécialement pour l'événement, minimisant l'usage de ressources matérielles et réduisant notre empreinte carbone.</p>
            </section>

            <section className="my-4">
                <h2 className="text-2xl font-bold mb-3">Solutions IoT (Internet des Objets)</h2>
                <ul className="list-disc ml-8">
                    <li>Tatouages temporaires avec QR Codes pour un accès facile et une réduction de l'utilisation des smartphones.</li>
                    <li>Gestion intelligente du parking avec des indicateurs LED pour les places disponibles.</li>
                    <li>Systèmes de surveillance biométrique pour la sécurité des participants.</li>
                    <li>Stations de tri des déchets équipées pour un recyclage efficace et responsable.</li>
                </ul>
            </section>

            <section className="my-4">
                <h2 className="text-2xl font-bold mb-3">Charte Graphique</h2>
                <p>Nous utilisons une palette de couleurs élégante qui inclut le violet foncé, le turquoise et le lilas, créant une atmosphère à la fois moderne et en accord avec nos valeurs environnementales.</p>
            </section>

            <section className="my-4">
                <h2 className="text-2xl font-bold mb-3">Engagement Environnemental</h2>
                <p>En intégrant des pratiques écoresponsables, nous nous engageons à protéger notre environnement et à sensibiliser nos participants à l'importance de la durabilité.</p>
            </section>
        </div>
    );
};

export default Evenement;

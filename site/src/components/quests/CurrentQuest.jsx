export const CurrentQuest = ({ lang }) => (
    <div className='questContent'>
        <h2>
            {lang === 'EN' ? 'Current Quest Details' : 'Détails de la Quête en cours'}
        </h2>
        <a className="logoAnchor">
            <img id="dawTecLogo" src="/dawTec.png" alt="Dawtec logo" />
        </a> 
        {lang === 'EN' ? (
            <div>
                {/* English content */ }
                As members of Daw-Tec&apos;s robotics club, we ensure the prosperity of vault 25 by promoting the use of technology for leisure activities. The stimulation of the human brain is proven to be the most effective way to prepare humanity for re-entry into the outside world. With the help of Pax, Avi, and Jacob, Daw-Tec Robotics has grown tremendously and is nearing the completion of their new instrument which will aid in the team&apos;s trek to this year&apos;s CRC competition.
                Follow us as we work towards our ultimate goal of re-colonizing Montréal, some 100 years after the initial nuclear attack on the site of TakTik 2025.
            </div>
        ) : (
            <div>
                {/* French content */ }
                En tant que membres du club de robotique de Daw-Tec, nous assurons la prospérité de l&apos;abris 25 en promouvant l&apos;utilisation de la technologie pour les activités de loisirs. Il est prouvé que la stimulation du cerveau humain est le moyen le plus efficace de préparer l&apos;humanité à sa réintégration dans le monde extérieur. Avec l&apos;aide de Pax, Avi et Jacob, Daw-Tec Robotics s&apos;est considérablement développé et est sur le point d&apos;achever son nouvel instrument qui aidera l&apos;équipe à se rendre à la compétition CRC de cette année.
                Suivez-nous dans nos efforts pour atteindre notre but ultime: recoloniser Montréal, quelque 100 ans après l&apos;attaque nucléaire initiale sur le site de TakTik 2025. (edited)
                [10:48 PM]
            </div>
        )}
    </div>
);

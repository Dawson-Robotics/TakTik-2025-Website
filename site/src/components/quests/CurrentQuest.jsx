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
                Having fun in robotics and ensuring the continuation of intellectual activities in vault 25 as 
                humanity evolves for re-entry to the outside world.
            </div>
        ) : (
            <div>
            {/* French content */ }
            S&apos;amuser dans l&apos;équipe de robotique et assurer la poursuite des activités intellectuelles dans l&apos;abri 25 à mesure que 
            l&apos;humanité évolue en vue de sa réintégration dans le monde extérieur.
            </div>
        )}
    </div>
);

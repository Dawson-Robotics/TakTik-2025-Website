import Field from "../gameField";

export const TakTik2025Quest = ({ lang }) => (
    <div className='questContent'>
        <h2>
            {lang === 'EN' ? 'TakTik 2025 Rules' : 'Règles TakTik 2025'}
        </h2>
        <a className="logoAnchor" href="https://robo-crc.ca/taktik-2025/">
            <img src="images/logos/TAKTIK-LOGO.png" alt="Taktik logo" />
        </a>
        <Field/>
        {lang === 'EN' ? (
            <div>
                {/* English content */}
                This year&apos;s game is a 2v2. The game pieces are rings with a hollow center made of plastic that are either blue or yellow, to represent each team. Robots are only allowed to interact with only their own rings. Each robot can only hold 3 rings and robots are not allowed to be preloaded. The game pieces can be picked up from either the vertical stacks near the center of the field or the horizontal stacks found on the sides of the field. There are 4 stations where the game pieces can be put:
                <ul>
                    <li>
                        The Ring Catcher, a vertical post on the floor on which the team must drop in. Each Ring Catcher can hold between 6 to 24 rings, which may vary from game to game. Each ring is worth 20 points, and the final ring will determine which team owns the station.
                    </li>
                    <li>
                        the Inverted Catcher, which is the same as the previous station, but upside down! Each ring is worth 40 points and this time the first ring on the station owns the station.
                    </li>
                    <li>
                        The Duel, two horizontal posts, one blue and one yellow. Each ring on the post is worth 30 points and each side can only hold 8 rings. The side with the most rings owns the station.
                    </li>
                    <li>
                        The Zone. There are 4 zones, like a dart board and each zone is worth 5 points more than the last one. In the middle, there is a post. The first ring on the post is worth 500 points, and each ring after is worth 100 points less than the last one to a maximum of 5 points. The team with the most number of rings close to the center wins this station.
                    </li>
                </ul>
                The field is divided into 9 sections, with one station in each section. The center field is The Zone. There are 4 Ring Catchers, 2 Inverted Catchers and 2 Duels.
                Now, as the name suggests, the field represents a tic-tac-toe board. For every 3 aligned station that a team owns forming a single tic-tac-toe, their points increase by 50%. If a station is part of multiple tic-tac-toes, then the value is doubled. There are only 5 minutes for the entire game.
            </div>
        ) : (
            <div>
                {/* French content */}
                Le jeu de cette année est un 2v2. Les pièces de jeu sont des anneaux avec un centre creux en plastique, soit bleus, soit jaunes, pour représenter chaque équipe. Les robots ne sont autorisés à interagir qu&apos;avec leurs propres anneaux. Chaque robot peut tenir un maximum de 3 anneaux, et aucun anneau ne peut être préchargé dans les robots. Les pièces de jeu peuvent être récupérées soit dans les piles verticales près du centre du terrain, soit dans les piles horizontales situées sur les côtés du terrain. Il y a 4 stations où les pièces de jeu peuvent être déposées:
                <ul>
                    <li>
                        Le Collecteur d&apos;Anneaux : Un poteau vertical fixé au sol dans lequel l&apos;équipe doit faire tomber les anneaux. Chaque Collecteur d&apos;Anneaux peut contenir entre 6 et 24 anneaux, une valeur qui peut varier d&apos;une partie à l&apos;autre. Chaque anneau vaut 20 points, et l&apos;équipe qui dépose le dernier anneau contrôle la station.
                    </li>
                    <li>
                        Le Collecteur Inversé : Identique au Collecteur d&apos;Anneaux, mais à l&apos;envers ! Chaque anneau y vaut 40 points, et cette fois, c&apos;est le premier anneau déposé qui détermine quelle équipe contrôle la station.
                    </li>
                    <li>
                        Le Duel : Deux poteaux horizontaux, un bleu et un jaune. Chaque anneau déposé sur un poteau vaut 30 points, et chaque côté peut contenir un maximum de 8 anneaux. Le côté avec le plus d&apos;anneaux contrôle la station.
                    </li>
                    <li>
                        La Zone : Cette station comporte 4 zones, comme une cible de fléchettes, chaque zone valant 5 points de plus que la précédente. Au centre se trouve un poteau. Le premier anneau déposé sur ce poteau vaut 500 points, et chaque anneau suivan vaut 100 points de moins que le précédent, jusqu&apos;à un minimum de 5 points. L&apos;équipe avec le plus grand nombre d&apos;anneaux proches du centre gagne cette station.
                    </li>
                </ul>
                Le terrain est divisé en 9 sections, avec une station dans chaque section. Le centre du terrain correspond à La Zone. Il y a 4 Collecteurs d&apos;Anneaux, 2 Collecteurs Inversés et 2 Duels.
                Comme le nom du jeu l&apos;indique, le terrain représent une grille de morpion (tic-tac-toe). Pour chaque alignement de 3 stations contrôlées par une équipe formant une ligne de morpion, les points de cette équipe augmentent de 50 %. Si une station appartient à plusieurs lignes de morpion, sa valeur est doublée. La partie dure seulement 5 minutes.
            </div>
        )}
    </div>
);

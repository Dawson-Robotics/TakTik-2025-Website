export const CRCQuest = ({ lang }) => (
    <div className='questContent'>
        <h2>CRC Information</h2>
        <a className="logoAnchor" href="https://robo-crc.ca">
            <img id="crcLogo" src="images/logos/CRClogo.png" alt="CRC logo" />
        </a>
        {lang === 'EN' ? (
            // English content
            <div>
                Since 2001, The CRC has been a popular competition across Canada, uniting high schools and CEGEPs to learn about a variety of disciplines. Every year, there is a brand-new competition, from shooting dodgeballs into posts, to flipping hexagonal pieces. The CRC can trully challenge its competitors to anything. 
            </div>
        ) : (
            // french content
            <div>
                Depuis 2001, la CRC est une compétition populaire à travers le Canada, réunissant des lycées et des cégeps pour explorer une variété de disciplines. Chaque année, une toute nouvelle compétition est proposée, allant du tir de ballons prisonniers dans des poteaux au retournement de pièces hexagonales. La CRC peut véritablement défier ses compétiteurs avec n&apos;importe quel défi.
            </div>
        )
    }
    </div>
);

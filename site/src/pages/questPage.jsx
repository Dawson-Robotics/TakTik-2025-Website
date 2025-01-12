import { useState, useEffect } from 'react';
import '../main.css';
import './questPage.css';
import { TakTik2025Quest } from '../components/quests/TakTik2025Quest';
import { CRCQuest } from '../components/quests/CRCQuest';
import { CurrentQuest } from '../components/quests/CurrentQuest';
export default function QuestPage({ lang, setLang }) {
    const quests = {
        EN: [
            {
                questName: "Current quest",
                component: CurrentQuest
            },
            {
                questName: "The CRC",
                component: CRCQuest
            },
            {
                questName: "TakTik 2025",
                component: TakTik2025Quest
            }
        ],
        FR: [
            {
                questName: "Quête en cours",
                component: CurrentQuest
            },
            {
                questName: "Le CRC",
                component: CRCQuest
            },
            {
                questName: "TakTik 2025",
                component: TakTik2025Quest
            }
        ]
    };

    const [selectedQuest, setSelectedQuest] = useState(quests[lang][0]);

    useEffect(() => {
        const currentQuestIndex = quests[lang === 'EN' ? 'FR' : 'EN'].findIndex(
            quest => quest.component === selectedQuest.component
        );
        setSelectedQuest(quests[lang][currentQuestIndex]);
    }, [lang]);

    const handleClick = (quest) => {
        setSelectedQuest(quest);
    };

    return (
        <div id="questPage">
            <section id="questNames">
                {quests[lang].map((quest, index) => (
                    <p
                        key={index}
                        className={`quest ${
                            selectedQuest.questName === quest.questName ? 'selectedQuest' : ''
                          }`}
                        onClick={() => handleClick(quest)}
                    >
                        {quest.questName}
                    </p>
                ))}
            </section>

            {/* Render the selected component and pass necessary props */}
            {selectedQuest && <selectedQuest.component lang={lang} />}

        </div>
    );
}
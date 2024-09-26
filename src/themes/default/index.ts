import { Theme } from '../interface';

const icons = <const>[
    `🎨`,
    `🌈`,
    `⚙️`,
    `💻`,
    `📚`,
    `🐯`,
    `🐤`,
    `🐼`,
    `🐏`,
    `🍀`,
];

export type DefaultSoundNames = 'button-click' | 'triple';

export const getDefaultTheme: () => Theme<DefaultSoundNames> = () => {
    return {
        title: '有解的羊了个羊',
        desc: '真的可以通关~',
        dark: true,
        maxLevel: 20,
        backgroundColor: '#8dac85',
        icons: icons.map((icon) => ({
            name: icon,
            content: icon,
            clickSound: 'button-click',
            tripleSound: 'triple',
        })),
        sounds: [
            {
                name: 'button-click',
                src: 'https://game2h.com/sound/default/button-click.mp3',
            },
            {
                name: 'triple',
                src: 'https://game2h.com/sound/default/triple.mp3',
            },
        ],
        bgm: 'https://game2h.com/sound/default/disco.mp3',
    };
};
